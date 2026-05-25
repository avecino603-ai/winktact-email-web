const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Configuración de cabeceras CORS para permitir llamadas desde el frontend
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Responder de inmediato a solicitudes OPTIONS (Preflight)
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Solo permitir peticiones POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Método no permitido" }) };
  }

  try {
    const body = JSON.parse(event.body);
    const { 
      senderName, 
      senderEmail, 
      senderPassword, 
      recipientName, 
      recipientEmail, 
      subject, 
      body: emailBody, 
      paymentId,
      cvFile 
    } = body;

    // Validación básica de campos obligatorios
    if (!senderEmail || !senderPassword || !recipientEmail || !subject || !emailBody || !cvFile || !cvFile.data) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Faltan datos obligatorios para el envío (correo emisor, contraseña SMTP, correo destinatario, mensaje o archivo PDF)." })
      };
    }

    // --- VERIFICACIÓN DE PAGO EN SUPABASE (SOCIOS/SAAS) ---
    let userIsPaid = false;
    let authenticatedUser = null;
    let supabaseClient = null;
    const authHeader = event.headers.authorization || event.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      const { createClient } = require("@supabase/supabase-js");

      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseAnonKey) {
        try {
          supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
            auth: { persistSession: false },
            global: {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          });

          // Obtener usuario autenticado
          const { data: { user }, error: userErr } = await supabaseClient.auth.getUser(token);
          if (!userErr && user) {
            authenticatedUser = user;
            // Consultar base de datos
            const { data: profile, error: profileErr } = await supabaseClient
              .from("profiles")
              .select("paid, suspended")
              .eq("id", user.id)
              .single();

            if (profile && profile.suspended) {
              console.log(`[CUENTA SUSPENDIDA] El usuario ${user.email} está suspendido. Bloqueando envío.`);
              return {
                statusCode: 403,
                headers,
                body: JSON.stringify({ error: "Tu cuenta ha sido suspendida por el administrador. No tienes permitido realizar envíos." })
              };
            }

            if (!profileErr && profile && profile.paid) {
              userIsPaid = true;
              console.log(`[CONEXIÓN NUBE OK] Usuario ${user.email} autenticado y verificado como PAGADO.`);
            }
          }
        } catch (dbErr) {
          console.error("Error al validar sesión contra Supabase:", dbErr);
        }
      }
    }

    // Verificar pago con Mercado Pago si el token está configurado y no fue pre-verificado en la nube
    if (!userIsPaid && process.env.MP_ACCESS_TOKEN) {
      if (!paymentId) {
        return {
          statusCode: 402,
          headers,
          body: JSON.stringify({ error: "Verificación de pago requerida. Inicia sesión o ingresa tu ID de pago." })
        };
      }

      // Permitir un ID especial de bypass ("999999999") para realizar pruebas de envío real sin pagar
      if (paymentId === "999999999") {
        console.log(`[PAGO BYPASS PRUEBA] Simulación de pago aprobada para ID de prueba: ${paymentId}`);
      } else {
        try {
          const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            headers: {
              "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`
            }
          });

          if (!mpResponse.ok) {
            const mpErrorData = await mpResponse.json().catch(() => ({}));
            console.error("Error en API de Mercado Pago:", mpErrorData);
            return {
              statusCode: 402,
              headers,
              body: JSON.stringify({ error: "El ID de pago ingresado no es válido o no existe en Mercado Pago." })
            };
          }

          const mpPaymentData = await mpResponse.json();
          if (mpPaymentData.status !== "approved") {
            return {
              statusCode: 402,
              headers,
              body: JSON.stringify({ error: `El pago ingresado no se encuentra aprobado (Estado actual: ${mpPaymentData.status}).` })
            };
          }

          console.log(`[PAGO CONFIRMADO] Transacción Mercado Pago aprobada para ID: ${paymentId}`);

          // Guardar permanentemente en Supabase para no tener que consultar a Mercado Pago en envíos posteriores
          if (authenticatedUser && supabaseClient) {
            const { error: updateErr } = await supabaseClient
              .from("profiles")
              .update({
                paid: true,
                payment_id: paymentId,
                updated_at: new Date().toISOString()
              })
              .eq("id", authenticatedUser.id);

            if (updateErr) {
              console.error("Error al registrar estado de pago manual en Supabase:", updateErr);
            } else {
              console.log(`[BD NUBE OK] Usuario ${authenticatedUser.email} actualizado permanentemente a PAGADO.`);
            }
          }

        } catch (mpErr) {
          console.error("Error al conectar con la API de Mercado Pago:", mpErr);
          return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Error interno al verificar el pago con Mercado Pago. Inténtalo de nuevo más tarde." })
          };
        }
      }
    } else {
      if (!userIsPaid) {
        console.warn(`[PAGO ADVERTENCIA] MP_ACCESS_TOKEN no configurado en Netlify. Omitiendo verificación del ID: ${paymentId}`);
      }
    }

    // Configurar el transportador SMTP para Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword
      }
    });

    // Decodificar el archivo PDF adjunto enviado en Base64
    const base64Data = cvFile.data.split(";base64,").pop();
    const attachmentBuffer = Buffer.from(base64Data, "base64");

    // Configurar el correo electrónico
    const mailOptions = {
      from: `"${senderName}" <${senderEmail}>`,
      to: recipientEmail,
      subject: subject,
      text: emailBody.replace(/<[^>]*>/g, ""), // simple strip tags as fallback
      html: emailBody,
      attachments: [
        {
          filename: cvFile.name || "Curriculum_Vitae.pdf",
          content: attachmentBuffer,
          contentType: "application/pdf"
        }
      ]
    };

    // Enviar el correo electrónico mediante nodemailer
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: `Correo enviado con éxito a ${recipientEmail}` })
    };

  } catch (error) {
    console.error("Error al enviar correo SMTP:", error);
    
    // Devolver mensaje detallado del error SMTP (ej. Credenciales incorrectas)
    let errorMessage = error.message || "Error desconocido al procesar el envío SMTP.";
    
    if (errorMessage.includes("Invalid login") || errorMessage.includes("Username and Password not accepted")) {
      errorMessage = "Credenciales SMTP inválidas. Asegúrate de estar usando tu dirección de Gmail y una 'Contraseña de aplicación' de 16 dígitos válida, no tu clave de Google normal.";
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: errorMessage })
    };
  }
};
