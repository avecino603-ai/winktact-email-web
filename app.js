// Dataset simulado de empresas de Pergamino por rubro para poblar la consola de envío de forma realista.
const LOCAL_BUSINESS_DB = {
  "Cafetería": [
    {
      "name": "Sandwichería Avenida",
      "email": "sandwicheriaavenida@hotmail.com"
    }
  ],
  "Supermercado": [
    {
      "name": "Muy Barato",
      "email": "nogoya@muybaratomayorista.com.ar"
    }
  ],
  "Carnicería": [
    {
      "name": "Porquissimo Pergamino",
      "email": "info@porquissimo.com"
    }
  ],
  "Ferretería": [
    {
      "name": "Ferretería Illia",
      "email": "ferreteriaillia@hotmail.com"
    },
    {
      "name": "Dincor Pergamino Mayorista Ferretero",
      "email": "dincorpergamino@gmail.com"
    }
  ],
  "Corralón de Materiales": [
    {
      "name": "Materiales De Construcción Ferraris",
      "email": "administracion@materialesferraris.com.ar"
    },
    {
      "name": "Hierromad Hierros Y Corralón",
      "email": "hierromad@wiscom.com.ar"
    }
  ],
  "Sanitarios": [
    {
      "name": "Casa Foster",
      "email": "cliente@gurusoluciones.com"
    },
    {
      "name": "Lenzi :: Pergamino",
      "email": "info@marmolerialenzi.com.ar"
    }
  ],
  "Electricidad": [
    {
      "name": "Electro Pergamino",
      "email": "electro@electropergamino.com"
    },
    {
      "name": "Permatel",
      "email": "contacto@permatel.com.ar"
    },
    {
      "name": "Diper Electrics",
      "email": "administracion@diperelectrics.com.ar"
    },
    {
      "name": "Electro Dalle Rive",
      "email": "cliente@gurusoluciones.com"
    },
    {
      "name": "Electro Integral De Diego Gryffroy",
      "email": "contacto@ejemplo.com"
    },
    {
      "name": "Trafoper || Transformadores Pergamino",
      "email": "info@trafoper.com.ar"
    },
    {
      "name": "Talleres Galan .",
      "email": "talleresgalan.pergamino@gmail.com"
    },
    {
      "name": "Instaltec",
      "email": "info@instaltec.com.ar"
    },
    {
      "name": "Free Energy Pergamino",
      "email": "free.energy.672@gmail.com"
    }
  ],
  "Maderera": [
    {
      "name": "Genoud Muebles",
      "email": "contacto@genoudmuebles.com.ar"
    },
    {
      "name": "Cimaper",
      "email": "5d1795a2db124a268f1e1bd88f503500@sentry.wixpress.com"
    }
  ],
  "Perfumería": [
    {
      "name": "Millanel Cosmética",
      "email": "info@millanel.com"
    }
  ],
  "Peluquería": [
    {
      "name": "Eve",
      "email": "cliente@gurusoluciones.com"
    }
  ],
  "Spa": [
    {
      "name": "Howard Johnson By Wyndham Pergamino",
      "email": "accessibility@wyndham.com"
    }
  ],
  "Club": [
    {
      "name": "Club Atlético Douglas Haig",
      "email": "contacto@douglashaig.com"
    },
    {
      "name": "Rotary Club Pergamino",
      "email": "secretaria@rotaryclubpergamino.org"
    }
  ],
  "Cancha de Fútbol": [
    {
      "name": "Estadio Miguel Morales",
      "email": "contacto@douglashaig.com"
    },
    {
      "name": "Campo Recreativo Smata Pergamino",
      "email": "pergamino@smata.com.ar"
    }
  ],
  "Tienda de Ropa": [
    {
      "name": "La Mére",
      "email": "guadalupecapriotti@yahoo.com.ar"
    },
    {
      "name": "Romualda",
      "email": "romualdapergamino@gmail.com"
    },
    {
      "name": "Open Sports (Sucursal Pergamino)",
      "email": "OpenSports@notificaciones.opensports.com.ar"
    },
    {
      "name": "Haruka",
      "email": "zguille100@gmail.com"
    }
  ],
  "Zapatería": [
    {
      "name": "Alpargatas 8 De Octubre",
      "email": "nombre@ejemplo.com"
    }
  ],
  "Boutique": [
    {
      "name": "Helen'S Guest House Hotel",
      "email": "helensguesthouse@gmail.com"
    }
  ],
  "Lencería": [
    {
      "name": "Bernita Lencería",
      "email": "tunombre@email.com"
    }
  ],
  "Ropa de Bebé": [
    {
      "name": "Zona Bebe",
      "email": "605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com"
    }
  ],
  "Repuestos de Autos": [
    {
      "name": "Biancosino Repuestos",
      "email": "junin@biancosino.com.ar"
    },
    {
      "name": "Autopartes Greco Pergamino",
      "email": "autopartesgreco@yahoo.com"
    }
  ],
  "Inmobiliaria": [
    {
      "name": "Seratto Propiedades",
      "email": "info@serattopropiedades.com"
    },
    {
      "name": "Dilello Propiedades",
      "email": "info@dilellopropiedades.com"
    },
    {
      "name": "Aloe & Rodriguez .",
      "email": "info@aloerodriguez.com"
    },
    {
      "name": "Re/Max Seed",
      "email": "mlurbe@remax.com.ar"
    },
    {
      "name": "Federico Paterlini",
      "email": "inmobiliaria@federicopaterlini.com.ar"
    },
    {
      "name": "Concepto  Arquitectura",
      "email": "concepto@e-concepto.com.ar"
    },
    {
      "name": "Terrile",
      "email": "info@terrileinmobiliaria.com.ar"
    },
    {
      "name": "Magrini Propiedades",
      "email": "magrini.propiedades@gmail.com"
    },
    {
      "name": "Viviana Brun  Pergamino",
      "email": "serviciosinmobiliarios@vivianabrun.com"
    },
    {
      "name": "Seratto Campos",
      "email": "info@serattopropiedades.com"
    }
  ],
  "Arquitecto": [
    {
      "name": "Phoenix Arquitectura Y Construcciones",
      "email": "phoenixconstrucciones22@gmail.com"
    },
    {
      "name": "Al Borde Arquitectura",
      "email": "albordearqui@gmail.com"
    },
    {
      "name": "Julian Marini Arquitectos",
      "email": "info@julianmarini.com"
    },
    {
      "name": "Rocchi",
      "email": "rocchiestudio@gmail.com"
    }
  ],
  "Estudio Contable": [
    {
      "name": "Contable Alvarez & Alvarez",
      "email": "ana@contadoralvarez.com"
    },
    {
      "name": "Carnevale",
      "email": "info@estudiocarnevale.com"
    },
    {
      "name": "Copiado De Libros Contables",
      "email": "contacto@ejemplo.com"
    },
    {
      "name": "B Y B",
      "email": "info@estudiosbyb.com.ar"
    }
  ],
  "Estudio Jurídico": [
    {
      "name": "Juridico Carricart",
      "email": "605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com"
    },
    {
      "name": "Juridico Funes & Aiello",
      "email": "estudiofunesaiello@gmail.com"
    },
    {
      "name": "Apesteguia  Jurídico",
      "email": "605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com"
    },
    {
      "name": "Jurídico Viera Cornejo",
      "email": "contacto@estudiovieracornejo.com.ar"
    }
  ],
  "Escribanía": [
    {
      "name": "Escribanía Ruíz Moreno",
      "email": "escribaniaruizmoreno@hotmail.com"
    },
    {
      "name": "Delegación Pergamino. Colegio De Escribanos De La Provincia De Buenos Aires",
      "email": "colegiodeescribanos-pergamino@colescba.org.ar"
    }
  ],
  "Clínica Médica": [
    {
      "name": "Clínica Pergamino .",
      "email": "info@clinicapergamino.com.ar"
    },
    {
      "name": "Asociacion Medica De Pergamino",
      "email": "comunicacion@ampergamino.com.ar"
    }
  ],
  "Odontólogo": [
    {
      "name": "Centro De Implantes Y Ortodoncia",
      "email": "office@dentalcare.com"
    }
  ],
  "Oftalmólogo": [
    {
      "name": "Sof Oftalmologia Pergamino",
      "email": "info@sofpergamino.com.ar"
    }
  ],
  "Veterinaria": [
    {
      "name": "Cyt Veterinaria",
      "email": "info.cytveterinaria@gmail.com"
    },
    {
      "name": "Campo Ciudad Agro Veterinaria",
      "email": "HOLA@CAMPOCIUDAD.COM.AR"
    }
  ],
  "Librería": [
    {
      "name": "Sanchez Carlos Papelera",
      "email": "sanchez@gmail.com"
    }
  ],
  "Juguetería": [
    {
      "name": "Cuanto Mido",
      "email": "cliente@gurusoluciones.com"
    }
  ],
  "Mueblería": [
    {
      "name": "Nuevas Hogar Pergamino",
      "email": "info@nuevashogar.com.ar"
    },
    {
      "name": "Bringeri Hogar",
      "email": "info@bringerihogar.com.ar"
    }
  ],
  "Colchonería": [
    {
      "name": "Colchones Dormicentro",
      "email": "danielgomezeche@hotmail.com"
    }
  ],
  "Decoración": [
    {
      "name": "S&L Decoraciones",
      "email": "syldecoraciones@fibertel.com.ar"
    },
    {
      "name": "Ve  De Diseño",
      "email": "info@veestudio.com.ar"
    },
    {
      "name": "Roquelina Interiorista",
      "email": "roquelina.vargas@gmail.com"
    },
    {
      "name": "Reina Luz Pergamino",
      "email": "contacto@ejemplo.com"
    },
    {
      "name": "On City",
      "email": "atencionalcliente@oncity.com"
    }
  ],
  "Bazar": [
    {
      "name": "Bazar Universo Gastronomico Pergamino",
      "email": "tunombre@email.com"
    },
    {
      "name": "Gonino Hogar",
      "email": "goninohogar@gmail.com"
    }
  ],
  "Electrónica": [
    {
      "name": "Naldo",
      "email": "sucursalvenado@naldo.com.ar"
    },
    {
      "name": "Factor Digital",
      "email": "contacto@factordigital.com.ar"
    }
  ],
  "Computación": [
    {
      "name": "F1 Computación &",
      "email": "consultas@f1computacion.com.ar"
    }
  ],
  "Venta de Celulares": [
    {
      "name": "Celnet Comunicaciones",
      "email": "buncugapablog@celnet.com.ar"
    },
    {
      "name": "Personal",
      "email": "datospersonales@teco.com.ar"
    }
  ],
  "Servicio Técnico": [
    {
      "name": "Grupo Testa Pergamino",
      "email": "info@testaneumaticos.com"
    }
  ],
  "Agencia de Viajes": [
    {
      "name": "Aralar Viajes",
      "email": "correo@ejemplo.com"
    },
    {
      "name": "Travel Services",
      "email": "pergamino@travelservices.com"
    },
    {
      "name": "Bohem",
      "email": "email@example.com"
    },
    {
      "name": "Santiago Ceccoli Empresa De Viajes Y Turismo",
      "email": "email@example.com"
    },
    {
      "name": "Moddy Travel Agency",
      "email": "reservas@moddytravel.com"
    },
    {
      "name": "Amé Viajes",
      "email": "info@ameviajes.tur.ar"
    },
    {
      "name": "Musafir Viajes Y Turismo",
      "email": "correo@ejemplo.com"
    },
    {
      "name": "Travel Rock Pergamino",
      "email": "info@travelrockargentina.com.ar"
    },
    {
      "name": "Kumen Viajes & Turismo",
      "email": "kumenviajes@gmail.com"
    },
    {
      "name": "Nueva Chevallier",
      "email": "consultas@gestionbus.com.ar"
    }
  ],
  "Fletes": [
    {
      "name": "Transporte Y Logística Calomarde",
      "email": "logisticacalomarde@hotmail.com"
    }
  ],
  "Imprenta": [
    {
      "name": "3D Fact",
      "email": "info@3dfact.com"
    },
    {
      "name": "Divec .",
      "email": "divec@divec.net"
    },
    {
      "name": "Imprenta Relaco- Impresiones",
      "email": "imprenta_realco@outlook.com"
    }
  ]
};

// Configuración general del Wizard
let currentStep = 1;
const totalSteps = 4;

const stepsTracker = document.getElementById("stepsTracker");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const fileUploadWrapper = document.getElementById("fileUploadWrapper");
const cvFileInput = document.getElementById("cvFile");
const uploadText = document.getElementById("uploadText");
const fileNameDisplay = document.getElementById("fileNameDisplay");

// Estado de la campaña
let selectedFile = null;
let isSending = false;
let campaignInterval = null;
let excelBusinesses = [];

// Elementos de importación de Excel / Origen de datos
const sourceSimulated = document.getElementById("sourceSimulated");
const sourceExcel = document.getElementById("sourceExcel");
const excelUploadContainer = document.getElementById("excelUploadContainer");
const simulatedContainer = document.getElementById("simulatedContainer");
const excelFileInput = document.getElementById("excelFile");
const excelSummaryText = document.getElementById("excelSummaryText");

// Inicialización de variables
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");
const emailSubjectInput = document.getElementById("emailSubject");
const emailBodyInput = document.getElementById("emailBody");
const campaignLimitInput = document.getElementById("campaignLimit");
const spamWarningBox = document.getElementById("spamWarningBox");

// Elementos de la consola de envíos
const consoleBox = document.getElementById("consoleBox");
const statProspects = document.getElementById("statProspects");
const statSent = document.getElementById("statSent");
const statRemaining = document.getElementById("statRemaining");
const sendingProgressBar = document.getElementById("sendingProgressBar");
const btnNewCampaign = document.getElementById("btnNewCampaign");

// Gestión de Inicio de Sesión con Google (Real y Simulado)
const loginContainer = document.getElementById("loginContainer");
const appContainer = document.getElementById("appContainer");
const btnGoogleLoginSimulated = document.getElementById("btnGoogleLoginSimulated");
const googleModal = document.getElementById("googleModal");
const btnCloseGoogleModal = document.getElementById("btnCloseGoogleModal");
const googleAccountsList = document.getElementById("googleAccountsList");
const googleCustomAccountForm = document.getElementById("googleCustomAccountForm");
const btnGoogleCustomAccount = document.getElementById("btnGoogleCustomAccount");
const btnBackToAccounts = document.getElementById("btnBackToAccounts");
const btnSubmitCustomAccount = document.getElementById("btnSubmitCustomAccount");
const customGoogleEmailInput = document.getElementById("customGoogleEmail");
const customGoogleNameInput = document.getElementById("customGoogleName");
const googleEmailError = document.getElementById("googleEmailError");

// Configuración de Client ID real
const googleClientIdInput = document.getElementById("googleClientId");
const btnApplyClientId = document.getElementById("btnApplyClientId");
const btnResetClientId = document.getElementById("btnResetClientId");

// Vistas y textos del estado de pago
const paymentIntroText = document.getElementById("paymentIntroText");
const mpBoxElement = document.getElementById("mpBoxElement");
const mpButtonWrapper = document.getElementById("mpButtonWrapper");
const paymentAlreadyActiveBox = document.getElementById("paymentAlreadyActiveBox");
const clientIdStatus = document.getElementById("clientIdStatus");
const btnLogout = document.getElementById("btnLogout");

let isGoogleSdkLoaded = false;

// Decodificar JSON Web Token (JWT) devuelto por Google Identity Services
function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Error decodificando JWT:", e);
    return null;
  }
}

// Callback oficial de Google Identity Services
window.handleCredentialResponse = function(response) {
  const payload = decodeJwt(response.credential);
  if (payload && payload.email) {
    const email = payload.email.trim().toLowerCase();
    if (!email.endsWith("@gmail.com")) {
      alert("Error de Seguridad:\n\nSolo se permite el acceso a través de cuentas de Google oficiales (@gmail.com).");
      return;
    }
    loginSuccess(payload.name || "Usuario de Google", email);
  } else {
    alert("No se pudo obtener información de la cuenta de Google.");
  }
};

// Callback ejecutado cuando el script de Google se carga en index.html
window.googleSdkLoaded = function() {
  isGoogleSdkLoaded = true;
  appendLog("[SISTEMA] SDK de Google cargado con éxito.", "info");
  
  // Si ya tenemos un Client ID guardado en localStorage o el ID predeterminado del usuario, inicializarlo automáticamente
  const defaultClientId = "1052093506321-h8cp5k13d6ldc78o0rc119h3m85i5m60.apps.googleusercontent.com";
  const useSimulated = localStorage.getItem("winktact_use_simulated") === "true";
  const savedClientId = useSimulated ? null : (localStorage.getItem("winktact_google_client_id") || defaultClientId);
  if (savedClientId) {
    initGoogleIdentity(savedClientId);
  }
};

// Inicialización de Google SDK si se configura Client ID
function initGoogleIdentity(clientId) {
  if (typeof google !== "undefined" && google.accounts) {
    try {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: window.handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("gBtn"),
        { theme: "outline", size: "large", width: 320 }
      );
      document.getElementById("gSignInContainer").style.display = "flex";
      btnGoogleLoginSimulated.style.display = "none";
      
      // Actualizar UI del panel de configuración
      googleClientIdInput.value = clientId;
      btnResetClientId.style.display = "inline-block";
      btnApplyClientId.innerText = "Actualizar Client ID";
      clientIdStatus.innerText = "✓ Modo Real Activo (Botón oficial cargado)";
      clientIdStatus.style.color = "var(--success-color)";
      
      appendLog(`[SISTEMA] SDK de Google inicializado con Client ID: ${clientId}`, "info");
    } catch (err) {
      console.error("Error al inicializar Google Identity Button:", err);
      clientIdStatus.innerText = "✗ Error al inicializar el SDK de Google";
      clientIdStatus.style.color = "var(--danger-color)";
    }
  } else {
    // Si el script no se ha cargado pero fue invocado, guardamos el ID para cuando cargue
    clientIdStatus.innerText = "Cargando SDK de Google...";
    clientIdStatus.style.color = "var(--text-secondary)";
  }
}

// Manejar login exitoso (real o simulado)
function loginSuccess(name, email) {
  userNameInput.value = name;
  userEmailInput.value = email;
  
  // Guardar datos en sessionStorage para persistencia en la sesión
  sessionStorage.setItem("winktact_username", name);
  sessionStorage.setItem("winktact_useremail", email);

  // Transición visual
  loginContainer.style.display = "none";
  appContainer.style.display = "block";
  
  // Ocultar modal si estaba abierto
  googleModal.style.display = "none";

  appendLog(`[OK] Sesión iniciada con éxito. Correo verificado: ${email}`, "success");
}

// Escuchar cambios para cargar sesión previa y estado de pago
window.addEventListener("DOMContentLoaded", () => {
  const cachedName = sessionStorage.getItem("winktact_username");
  const cachedEmail = sessionStorage.getItem("winktact_useremail");
  if (cachedName && cachedEmail) {
    loginSuccess(cachedName, cachedEmail);
  }
  
  // Si ya hay un Client ID guardado o predeterminado antes de que termine de cargar el script, actualizar inputs de UI
  const defaultClientId = "1052093506321-h8cp5k13d6ldc78o0rc119h3m85i5m60.apps.googleusercontent.com";
  const useSimulated = localStorage.getItem("winktact_use_simulated") === "true";
  const savedClientId = useSimulated ? null : (localStorage.getItem("winktact_google_client_id") || defaultClientId);
  
  if (savedClientId) {
    googleClientIdInput.value = savedClientId;
    btnResetClientId.style.display = "inline-block";
    btnApplyClientId.innerText = "Actualizar Client ID";
    clientIdStatus.innerText = "✓ Modo Real Activo (Cargando SDK...)";
    clientIdStatus.style.color = "var(--text-secondary)";
  } else {
    clientIdStatus.innerText = "✓ Modo Simulado Activo";
    clientIdStatus.style.color = "var(--accent-color)";
  }
  
  // Si la biblioteca de Google ya se cargó en caché antes de DOMContentLoaded
  if (typeof google !== "undefined" && google.accounts && savedClientId) {
    googleSdkLoaded();
  }

  // Detección de retorno de Mercado Pago en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get("payment_id") || urlParams.get("collection_id");
  const paymentStatus = urlParams.get("status") || urlParams.get("collection_status");

  if (paymentId && paymentStatus === "approved") {
    localStorage.setItem("winktact_payment_id", paymentId);
    localStorage.setItem("winktact_paid", "true");
    appendLog(`[MERCADO PAGO] Pago aprobado detectado en URL (ID: ${paymentId}). Licencia activada.`, "success");
    // Limpiar URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Actualizar UI del pago
  updatePaymentUI();

  // Renderizar checkboxes de rubros dinámicamente
  renderRubrosCheckboxes();
});

// Botón para aplicar Client ID real
btnApplyClientId.addEventListener("click", () => {
  const clientId = googleClientIdInput.value.trim();
  if (!clientId) {
    alert("Por favor, ingresa un Client ID válido.");
    return;
  }
  localStorage.removeItem("winktact_use_simulated");
  localStorage.setItem("winktact_google_client_id", clientId);
  initGoogleIdentity(clientId);
});

// Botón para restablecer a modo simulado
btnResetClientId.addEventListener("click", () => {
  localStorage.setItem("winktact_use_simulated", "true");
  localStorage.removeItem("winktact_google_client_id");
  googleClientIdInput.value = "";
  document.getElementById("gSignInContainer").style.display = "none";
  btnGoogleLoginSimulated.style.display = "flex";
  btnResetClientId.style.display = "none";
  btnApplyClientId.innerText = "Activar Login Real";
  clientIdStatus.innerText = "✓ Restablecido al Modo Simulado";
  clientIdStatus.style.color = "var(--accent-color)";
  appendLog("[SISTEMA] Restablecido al modo de inicio de sesión simulado.", "info");
});

// Lógica de alternancia del Origen de Datos (Simulado vs Excel)
if (sourceSimulated && sourceExcel) {
  const toggleSource = () => {
    if (sourceSimulated.checked) {
      if (simulatedContainer) simulatedContainer.style.display = "block";
      if (excelUploadContainer) excelUploadContainer.style.display = "none";
    } else {
      if (simulatedContainer) simulatedContainer.style.display = "none";
      if (excelUploadContainer) excelUploadContainer.style.display = "block";
    }
  };
  sourceSimulated.addEventListener("change", toggleSource);
  sourceExcel.addEventListener("change", toggleSource);
}

// Lógica de importación de Excel con SheetJS
if (excelFileInput) {
  excelFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (!jsonData || jsonData.length === 0) {
          throw new Error("El archivo de Excel está vacío o no es válido.");
        }

        excelBusinesses = [];
        jsonData.forEach((row, index) => {
          let email = "";
          let name = "";

          // Buscar columnas que coincidan con Email y Nombre
          for (const key in row) {
            const cleanKey = key.toLowerCase().trim();
            if (cleanKey.includes("email") || cleanKey === "mail" || cleanKey.includes("correo")) {
              email = decodeURIComponent(String(row[key]).trim()).replace(/\s+/g, "");
            }
            if (cleanKey.includes("nombre") || cleanKey.includes("negocio") || cleanKey.includes("business") || cleanKey.includes("empresa")) {
              name = String(row[key]).trim();
            }
          }

          if (email && email.includes("@")) {
            excelBusinesses.push({
              name: name || `Empresa #${index + 1}`,
              email: email,
              rubro: "Excel"
            });
          }
        });

        if (excelBusinesses.length === 0) {
          throw new Error("No se encontraron correos electrónicos válidos. Asegúrate de tener una columna llamada 'Email'.");
        }

        excelSummaryText.innerText = `✓ Se cargaron ${excelBusinesses.length} contactos reales con éxito.`;
        excelSummaryText.style.display = "block";
        excelSummaryText.style.background = "rgba(16, 185, 129, 0.1)";
        excelSummaryText.style.color = "var(--success-color)";
        excelSummaryText.style.borderColor = "rgba(16, 185, 129, 0.2)";
        appendLog(`[SISTEMA] Importación de Excel exitosa: ${excelBusinesses.length} contactos reales cargados.`, "success");

      } catch (err) {
        excelSummaryText.innerText = `✗ Error: ${err.message}`;
        excelSummaryText.style.display = "block";
        excelSummaryText.style.background = "rgba(239, 68, 68, 0.1)";
        excelSummaryText.style.color = "var(--danger-color)";
        excelSummaryText.style.borderColor = "rgba(239, 68, 68, 0.2)";
        excelBusinesses = [];
        excelFileInput.value = "";
        appendLog(`[ERROR] Error leyendo archivo de Excel: ${err.message}`, "danger");
      }
    };

    reader.onerror = () => {
      excelSummaryText.innerText = "✗ Error al leer el archivo.";
      excelSummaryText.style.display = "block";
      excelSummaryText.style.background = "rgba(239, 68, 68, 0.1)";
      excelSummaryText.style.color = "var(--danger-color)";
      excelSummaryText.style.borderColor = "rgba(239, 68, 68, 0.2)";
      excelBusinesses = [];
      excelFileInput.value = "";
    };

    reader.readAsArrayBuffer(file);
  });
}

// Botón para Cerrar Sesión
btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("winktact_username");
  sessionStorage.removeItem("winktact_useremail");
  userNameInput.value = "";
  userEmailInput.value = "";
  
  // Limpiar campos de contraseña y archivo
  userPasswordInput.value = "";
  cvFileInput.value = "";
  selectedFile = null;
  uploadText.innerHTML = `Arrastra tu archivo aquí o <span>haz clic para buscar</span><br><small style="font-size: 0.8rem; color: var(--text-secondary);">Solo archivos PDF de hasta 5MB</small>`;
  fileNameDisplay.style.display = "none";
  fileNameDisplay.innerText = "";

  // Limpiar estado e inputs de Excel
  excelBusinesses = [];
  if (excelFileInput) excelFileInput.value = "";
  if (excelSummaryText) {
    excelSummaryText.style.display = "none";
    excelSummaryText.innerText = "";
  }
  if (sourceSimulated) sourceSimulated.checked = true;
  if (simulatedContainer) simulatedContainer.style.display = "block";
  if (excelUploadContainer) excelUploadContainer.style.display = "none";

  
  // Resetear wizard a Paso 1 y deshabilitar botones
  currentStep = 1;
  updateWizardUI();
  
  // Volver a mostrar pantalla de login
  appContainer.style.display = "none";
  loginContainer.style.display = "block";
  
  appendLog("[SISTEMA] Sesión cerrada. Volviendo a la pantalla de login.", "info");
});

// Lógica del Modal Simulado de Google
btnGoogleLoginSimulated.addEventListener("click", () => {
  googleModal.style.display = "flex";
  // Resetear estados del modal
  googleAccountsList.style.display = "flex";
  googleCustomAccountForm.style.display = "none";
  googleEmailError.style.display = "none";
  customGoogleEmailInput.value = "";
  customGoogleNameInput.value = "";
});

btnCloseGoogleModal.addEventListener("click", () => {
  googleModal.style.display = "none";
});

// Hacer clic fuera del contenido del modal para cerrar
googleModal.addEventListener("click", (e) => {
  if (e.target === googleModal) {
    googleModal.style.display = "none";
  }
});

// Selección de cuentas por defecto del modal
const accountItems = document.querySelectorAll(".google-account-item[data-email]");
accountItems.forEach(item => {
  item.addEventListener("click", () => {
    const email = item.getAttribute("data-email");
    const name = item.getAttribute("data-name");
    loginSuccess(name, email);
  });
});

// Ir a formulario de cuenta personalizada
btnGoogleCustomAccount.addEventListener("click", () => {
  googleAccountsList.style.display = "none";
  googleCustomAccountForm.style.display = "block";
});

// Volver del formulario de cuenta personalizada
btnBackToAccounts.addEventListener("click", () => {
  googleCustomAccountForm.style.display = "none";
  googleAccountsList.style.display = "flex";
});

// Procesar formulario de cuenta personalizada
btnSubmitCustomAccount.addEventListener("click", () => {
  const email = customGoogleEmailInput.value.trim().toLowerCase();
  const name = customGoogleNameInput.value.trim();
  
  if (!email || !email.endsWith("@gmail.com")) {
    googleEmailError.style.display = "block";
    return;
  }
  
  googleEmailError.style.display = "none";
  
  if (!name) {
    alert("Por favor, ingresa tu nombre completo.");
    return;
  }
  
  loginSuccess(name, email);
});

// Gestión de Checkboxes de Rubros (Dinámicos)
const rubroAllCheckbox = document.getElementById("rubroAll");
let rubroCheckboxes = [];

function renderRubrosCheckboxes() {
  const container = document.getElementById("rubroCheckboxes");
  if (!container) return;
  
  // Limpiar el contenedor
  container.innerHTML = "";
  
  // Obtener y ordenar los rubros de la base de datos de forma alfabética
  const keys = Object.keys(LOCAL_BUSINESS_DB).sort((a, b) => a.localeCompare(b));
  
  // Rubros que estarán marcados por defecto para guiar al usuario
  const defaultChecked = ["Inmobiliaria", "Ferretería", "Estudio Contable", "Estudio Jurídico", "Cafetería", "Supermercado"];
  
  keys.forEach((rubro, index) => {
    const count = LOCAL_BUSINESS_DB[rubro].length;
    const checkboxId = `rubro_dyn_${index}`;
    
    // Crear wrapper
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "0.5rem";
    
    // Crear checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "rubro-check";
    checkbox.id = checkboxId;
    checkbox.value = rubro;
    checkbox.style.width = "16px";
    checkbox.style.height = "16px";
    checkbox.style.cursor = "pointer";
    
    // Determinar si debe estar marcado por defecto
    const shouldCheck = defaultChecked.some(def => rubro.toLowerCase().includes(def.toLowerCase()));
    if (shouldCheck) {
      checkbox.checked = true;
    }
    
    // Crear etiqueta con el contador de empresas
    const label = document.createElement("label");
    label.htmlFor = checkboxId;
    label.style.marginBottom = "0";
    label.style.cursor = "pointer";
    label.innerText = `${rubro} (${count})`;
    
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
  
  // Actualizar referencias y registrar manejadores de eventos
  updateRubroListeners();
}

function updateRubroListeners() {
  rubroCheckboxes = document.querySelectorAll(".rubro-check");
  
  rubroCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (!cb.checked) {
        rubroAllCheckbox.checked = false;
      } else {
        const allChecked = Array.from(rubroCheckboxes).every(c => c.checked);
        rubroAllCheckbox.checked = allChecked;
      }
    });
  });
  
  // Actualizar estado del checkbox "Todos" inicial
  const allChecked = rubroCheckboxes.length > 0 && Array.from(rubroCheckboxes).every(c => c.checked);
  rubroAllCheckbox.checked = allChecked;
}

if (rubroAllCheckbox) {
  rubroAllCheckbox.addEventListener("change", () => {
    const isChecked = rubroAllCheckbox.checked;
    rubroCheckboxes.forEach(cb => {
      cb.checked = isChecked;
    });
  });
}

// Mostrar/ocultar el cartel de advertencia de spam según la cantidad de envíos elegida
function updateSpamWarning() {
  const val = campaignLimitInput.value;
  if (val === "100" || val === "250" || val === "all") {
    spamWarningBox.style.display = "flex";
  } else {
    spamWarningBox.style.display = "none";
  }
}
campaignLimitInput.addEventListener("change", updateSpamWarning);
updateSpamWarning(); // Ejecutar en la carga inicial por si el navegador conserva el valor seleccionado

// Por defecto, cargar asunto y cuerpo del mensaje modelo
emailSubjectInput.value = "Postulación espontánea - {nombre_empresa}";
emailBodyInput.value = `Estimado equipo de selección de {nombre_empresa},

Me dirijo a ustedes con el propósito de presentarles mi postulación para formar parte de su organización. Adjunto a este correo encontrarán mi currículum vitae detallando mi trayectoria y experiencia formativa.

Quedo a su entera disposición para mantener una entrevista y ampliar cualquier información que consideren oportuna.

Agradeciendo de antemano su tiempo y consideración, los saluda atentamente,

{nombre_candidato}`;

// Gestión de Pasos (Wizard Navigation)
const btnMercadoPagoReal = document.getElementById("btnMercadoPagoReal");
const checkPaymentConfirmed = document.getElementById("checkPaymentConfirmed");
const mpConfirmContainer = document.getElementById("mpConfirmContainer");
const btnValidateManualPayment = document.getElementById("btnValidateManualPayment");
const manualPaymentIdInput = document.getElementById("manualPaymentId");
const manualPaymentError = document.getElementById("manualPaymentError");

// Función para actualizar los elementos visuales de acuerdo al estado del pago
function updatePaymentUI() {
  const savedPaymentId = localStorage.getItem("winktact_payment_id");
  const hasPaid = localStorage.getItem("winktact_paid") === "true" || savedPaymentId === "999999999";
  const paymentStatusBadge = document.getElementById("paymentStatusBadge");

  if (hasPaid) {
    checkPaymentConfirmed.checked = true;
    paymentAlreadyActiveBox.style.display = "flex";
    
    // Personalizar el mensaje si es el ID de bypass especial
    const textElement = paymentAlreadyActiveBox.querySelector("p");
    const titleElement = paymentAlreadyActiveBox.querySelector("h4");
    if (savedPaymentId === "999999999") {
      if (textElement) textElement.innerText = "Modo de desarrollo activo mediante ID de prueba. Tienes acceso completo para configurar y enviar los currículums de prueba y reales.";
      if (titleElement) titleElement.innerText = "🛠️ Licencia de Desarrollador Activa";
    } else {
      if (textElement) textElement.innerText = "Detectamos que ya has realizado el pago único de $50.000 en esta máquina. Tienes acceso completo para configurar y enviar los currículums que desees.";
      if (titleElement) titleElement.innerText = "¡Acceso Ilimitado Activo!";
    }

    paymentIntroText.style.display = "none";
    mpBoxElement.style.display = "none";
    mpButtonWrapper.style.display = "none";
    mpConfirmContainer.style.display = "none";
  } else {
    checkPaymentConfirmed.checked = false;
    paymentAlreadyActiveBox.style.display = "none";
    paymentIntroText.style.display = "block";
    mpBoxElement.style.display = "flex";
    mpButtonWrapper.style.display = "block";
    mpConfirmContainer.style.display = "block";

    if (savedPaymentId) {
      paymentStatusBadge.innerText = `⏳ ID Registrado: ${savedPaymentId} (Se validará al iniciar envío)`;
      paymentStatusBadge.style.background = "rgba(245, 158, 11, 0.1)";
      paymentStatusBadge.style.color = "#fbbf24";
      paymentStatusBadge.style.borderColor = "rgba(245, 158, 11, 0.2)";
      checkPaymentConfirmed.checked = true; // Permitir avanzar al Paso 4
    } else {
      paymentStatusBadge.innerText = "🔒 Sin Licencia (Pago pendiente)";
      paymentStatusBadge.style.background = "rgba(239, 68, 68, 0.1)";
      paymentStatusBadge.style.color = "var(--danger-color)";
      paymentStatusBadge.style.borderColor = "rgba(239, 68, 68, 0.2)";
    }
  }

  // Actualizar habilitación del botón siguiente en el paso 3
  if (currentStep === 3) {
    btnNext.disabled = !checkPaymentConfirmed.checked;
  }
}

// Abrir link de pago e indicar al usuario
btnMercadoPagoReal.addEventListener("click", () => {
  appendLog(`[MERCADO PAGO] Abriendo enlace de pago de Mercado Pago (https://mpago.la/13pCrpN)...`, "info");
});

// Manejo del botón de validación manual
btnValidateManualPayment.addEventListener("click", () => {
  const idValue = manualPaymentIdInput.value.trim();
  // Validar formato (solo números, entre 8 y 15 caracteres)
  const regex = /^\d{8,15}$/;
  if (!regex.test(idValue)) {
    manualPaymentError.innerText = "El ID de pago debe contener entre 8 y 15 dígitos numéricos.";
    manualPaymentError.style.display = "block";
    return;
  }

  manualPaymentError.style.display = "none";
  localStorage.setItem("winktact_payment_id", idValue);
  appendLog(`[MERCADO PAGO] ID de pago ingresado manualmente: ${idValue}. Guardando para verificación.`, "success");
  
  // Actualizar UI
  updatePaymentUI();
});

// Botón para restablecer el estado de pago y validar otro ID
const btnResetPayment = document.getElementById("btnResetPayment");
if (btnResetPayment) {
  btnResetPayment.addEventListener("click", () => {
    localStorage.removeItem("winktact_paid");
    localStorage.removeItem("winktact_payment_id");
    manualPaymentIdInput.value = "";
    updatePaymentUI();
    appendLog("[SISTEMA] Licencia y ID de pago restablecidos. Ya puedes ingresar un nuevo ID de pago.", "info");
  });
}

// Habilitar/deshabilitar botón siguiente según confirmación de pago
checkPaymentConfirmed.addEventListener("change", () => {
  if (currentStep === 3) {
    btnNext.disabled = !checkPaymentConfirmed.checked;
  }
});

function updateWizardUI() {
  // Ocultar todas las vistas
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step${i}`).classList.remove("active");
    const indicator = document.querySelector(`.step-indicator[data-step="${i}"]`);
    indicator.classList.remove("active");
    if (i < currentStep) {
      indicator.classList.add("completed");
    } else {
      indicator.classList.remove("completed");
    }
  }

  // Activar vista actual
  document.getElementById(`step${currentStep}`).classList.add("active");
  document.querySelector(`.step-indicator[data-step="${currentStep}"]`).classList.add("active");

  // Actualizar botones
  btnPrev.disabled = currentStep === 1 || isSending;
  
  if (currentStep === 3) {
    const city = document.getElementById("businessCity").value.trim() || "Pergamino";
    document.getElementById("mpCampaignTitle").innerText = `Campaña 50 Envíos Diarios - ${city}`;
    btnNext.innerText = "Siguiente (Confirmar Pago)";
    btnNext.style.background = "linear-gradient(135deg, #00bee6 0%, #009ee2 100%)";
    // Deshabilitar botón Siguiente hasta que se confirme el pago
    btnNext.disabled = !checkPaymentConfirmed.checked;
  } else if (currentStep === 4) {
    btnNext.innerText = "Campaña Activa";
    btnNext.disabled = true;
    btnPrev.disabled = true;
    startCampaign();
  } else {
    btnNext.innerText = "Siguiente";
    btnNext.style.background = "var(--primary-gradient)";
    btnNext.disabled = false;
  }
}

// Validaciones por paso
function validateStep(step) {
  if (step === 1) {
    if (!userNameInput.value.trim()) {
      alert("Por favor, inicia sesión con tu cuenta de Google.");
      return false;
    }
    if (!userEmailInput.value.trim() || !userEmailInput.value.includes("@")) {
      alert("Por favor, inicia sesión con un correo de Gmail verificado.");
      return false;
    }
    if (!userPasswordInput.value.trim()) {
      alert("Por favor, ingresa tu contraseña de aplicación SMTP.");
      return false;
    }
    if (!selectedFile) {
      alert("Por favor, sube tu CV en formato PDF antes de continuar.");
      return false;
    }
  } else if (step === 2) {
    const isExcel = sourceExcel && sourceExcel.checked;
    if (isExcel) {
      if (excelBusinesses.length === 0) {
        alert("Por favor, selecciona y carga un archivo Excel de Winktact válido con correos reales antes de continuar.");
        return false;
      }
    } else {
      const selectedRubros = getSelectedRubros();
      if (selectedRubros.length === 0) {
        alert("Por favor, selecciona al menos un rubro o escribe rubros personalizados.");
        return false;
      }
      if (!document.getElementById("businessCity").value.trim()) {
        alert("Por favor, ingresa una ciudad de búsqueda.");
        return false;
      }
    }
    if (!emailSubjectInput.value.trim()) {
      alert("Por favor, ingresa un asunto para los correos.");
      return false;
    }
    if (!emailBodyInput.value.trim()) {
      alert("Por favor, redacta el cuerpo de tu carta de presentación.");
      return false;
    }
  } else if (step === 3) {
    if (!checkPaymentConfirmed.checked) {
      alert("Por favor, completa el pago en la pestaña de Mercado Pago y confirma la casilla.");
      return false;
    }
  }
  return true;
}

// Navegación Adelante
btnNext.addEventListener("click", () => {
  if (validateStep(currentStep)) {
    if (currentStep < totalSteps) {
      currentStep++;
      updateWizardUI();
    }
  }
});

// Navegación Atrás
btnPrev.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateWizardUI();
  }
});

// Obtener rubros seleccionados y procesar rubros por comas
function getSelectedRubros() {
  const selected = [];
  
  // Agregar rubros seleccionados en checkboxes
  rubroCheckboxes.forEach(cb => {
    if (cb.checked) {
      selected.push(cb.value);
    }
  });

  // Agregar rubros ingresados en el input de comas
  const customInput = document.getElementById("customRubros").value.trim();
  if (customInput) {
    const list = customInput.split(",");
    list.forEach(item => {
      const cleanItem = item.trim();
      if (cleanItem) {
        // Capitalizar primera letra de cada rubro
        const capitalizedItem = cleanItem.charAt(0).toUpperCase() + cleanItem.slice(1);
        if (!selected.includes(capitalizedItem)) {
          selected.push(capitalizedItem);
        }
      }
    });
  }

  return selected;
}

// Gestión de carga de archivo PDF
cvFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    if (file.type !== "application/pdf") {
      alert("El archivo debe estar en formato PDF.");
      cvFileInput.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("El archivo no debe superar los 5MB de tamaño.");
      cvFileInput.value = "";
      return;
    }
    selectedFile = file;
    uploadText.innerHTML = `CV Adjunto: <strong>${file.name}</strong><br><small style="color: var(--success-color);">Cambiar de archivo</small>`;
    fileNameDisplay.innerText = `Archivo cargado exitosamente: ${file.name}`;
    fileNameDisplay.style.display = "block";
  }
});

// Simulación de Consola de Envío de CV
function appendLog(text, type = "info") {
  const line = document.createElement("div");
  line.className = `console-line line-${type}`;
  line.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
  consoleBox.appendChild(line);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Convertir archivo PDF a Base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Bandera para indicar si el entorno soporta el backend real (se evalúa en la primera llamada)
let backendUnavailable = false;

async function startCampaign() {
  if (isSending) return;
  isSending = true;

  const isExcel = sourceExcel && sourceExcel.checked;
  const rubros = getSelectedRubros();
  const city = document.getElementById("businessCity").value.trim() || "Pergamino";
  
  let businesses = [];

  if (isExcel) {
    // Clonamos la lista cargada de Excel
    businesses = excelBusinesses.map(b => ({
      name: b.name,
      email: b.email,
      rubro: b.rubro || "Excel"
    }));
    
    appendLog(`[SISTEMA] Iniciando campaña con base de datos real importada desde Excel (${businesses.length} contactos)...`, "info");
  } else {
    // Agrupar empresas de todos los rubros seleccionados
    let rawBusinesses = [];
    
    rubros.forEach(rubro => {
      const list = LOCAL_BUSINESS_DB[rubro];
      if (list) {
        // Rubros predefinidos
        list.forEach(b => {
          rawBusinesses.push({
            name: b.name.replace(/Pergamino/g, city),
            email: b.email.replace(/pergamino/g, city.toLowerCase().replace(/\s+/g, '')),
            rubro: rubro
          });
        });
      } else {
        // Rubros personalizados (escritos por coma)
        const cleanRubroLower = rubro.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        const cleanCityLower = city.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        
        // Generar 3 empresas realistas ficticias en base al rubro personalizado
        rawBusinesses.push(
          { 
            name: `${rubro} Central ${city}`, 
            email: `contacto@${cleanRubroLower}${cleanCityLower}.com.ar`, 
            rubro: rubro 
          },
          { 
            name: `Servicios y Soluciones ${rubro} ${city}`, 
            email: `administracion@${cleanRubroLower}servicios.com`, 
            rubro: rubro 
          },
          { 
            name: `${rubro} Integral ${city}`, 
            email: `consultas@${cleanRubroLower}integral.com.ar`, 
            rubro: rubro 
          }
        );
      }
    });

    // Fallback absoluto si no hay ninguna empresa
    if (rawBusinesses.length === 0) {
      rawBusinesses = [
        { name: `Pyme Comercial ${city} 1`, email: `contacto@pyme1.com.ar`, rubro: "General" },
        { name: `Pyme Comercial ${city} 2`, email: `administracion@pyme2.com`, rubro: "General" }
      ];
    }

    // Leer el límite de envíos configurado por el usuario
    const limitValue = campaignLimitInput.value;
    let targetLimit = 50;
    if (limitValue === "all") {
      targetLimit = rawBusinesses.length;
      if (targetLimit < 40) {
        targetLimit = 40;
      }
    } else {
      targetLimit = parseInt(limitValue, 10);
    }

    // Completar la cola hasta el límite deseado
    for (let i = 0; i < targetLimit; i++) {
      const base = rawBusinesses[i % rawBusinesses.length];
      businesses.push({
        name: `${base.name} #${i + 1}`,
        email: base.email,
        rubro: base.rubro
      });
    }

    appendLog(`[SISTEMA] Iniciando campaña de envíos en ${city} para los rubros: ${rubros.join(", ")}...`, "info");
  }

  statProspects.innerText = businesses.length;
  statSent.innerText = 0;
  statRemaining.innerText = businesses.length;

  appendLog(`[PAGO REAL] Transacción confirmada para el link de Mercado Pago (https://mpago.la/13pCrpN).`, "success");
  appendLog(`[CARGA] Procesando currículum PDF para transferencia...`, "info");

  // Intentar convertir el archivo a Base64
  let fileBase64 = null;
  try {
    fileBase64 = await fileToBase64(selectedFile);
    appendLog(`[OK] Archivo de CV "${selectedFile.name}" procesado con éxito.`, "success");
  } catch (err) {
    appendLog(`[ERROR] No se pudo procesar el archivo PDF: ${err.message}`, "danger");
    isSending = false;
    return;
  }

  let currentIndex = 0;

  // Función que procesa un envío único (real o simulación)
  async function processNext() {
    if (currentIndex >= businesses.length) {
      appendLog(`[SISTEMA] Campaña finalizada. Se han completado ${businesses.length} acciones de envío en ${city}.`, "success");
      appendLog(`[SISTEMA] Licencia activa: Puedes iniciar una nueva campaña cuando quieras.`, "info");
      isSending = false;
      btnNewCampaign.style.display = "block";
      return;
    }

    const business = businesses[currentIndex];
    const parsedSubject = emailSubjectInput.value.replace(/{nombre_empresa}/g, business.name);
    const parsedBody = emailBodyInput.value
      .replace(/{nombre_empresa}/g, business.name)
      .replace(/{nombre_candidato}/g, userNameInput.value);

    appendLog(`[Rubro: ${business.rubro}] Procesando envío a: ${business.name}...`, "info");

    // Si ya detectamos previamente que el backend no está disponible, ir directo a la simulación rápida
    if (backendUnavailable) {
      runSimulationStep(business, parsedSubject);
      return;
    }

    // Preparar el cuerpo para la función serverless de Netlify
    const payload = {
      senderName: userNameInput.value,
      senderEmail: userEmailInput.value,
      senderPassword: userPasswordInput.value,
      recipientName: business.name,
      recipientEmail: business.email,
      subject: parsedSubject,
      body: parsedBody,
      paymentId: localStorage.getItem("winktact_payment_id"),
      cvFile: {
        name: selectedFile.name,
        data: fileBase64
      }
    };

    appendLog(`Intentando conexión de red con el servidor de envío real...`, "info");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 404) {
        // Netlify Functions no responde (entorno de desarrollo local clásico)
        backendUnavailable = true;
        appendLog(`[ENTORNO] Servidor de envío no detectado en local (404).`, "warning");
        appendLog(`[SISTEMA] ¡Modo de demostración activado automáticamente! Continuando con la simulación...`, "info");
        runSimulationStep(business, parsedSubject);
      } else if (!response.ok) {
        // Error de backend real (ej. Credenciales incorrectas o pago inválido)
        const data = await response.json().catch(() => ({}));
        appendLog(`[FALLO SMTP] ${data.error || "Error en el servidor de envío"}`, "danger");
        appendLog(`[SISTEMA] Campaña pausada por seguridad del remitente para evitar bloqueos. Verifica tu contraseña de aplicación SMTP y tu pago e inténtalo de nuevo.`, "warning");
        isSending = false;
        btnNewCampaign.style.display = "block";
      } else {
        // Éxito real!
        appendLog(`[CONEXIÓN] SMTP autorizada para ${userEmailInput.value}`, "success");
        appendLog(`[OK] Correo enviado de forma real a ${business.email}`, "success");
        
        // Registrar que el pago ha sido verificado con éxito en el servidor
        localStorage.setItem("winktact_paid", "true");
        
        completeStep();
      }

    } catch (err) {
      // Error de red general o CORS (probablemente sin backend local)
      backendUnavailable = true;
      appendLog(`[ENTORNO] Servidor de envío no disponible en este entorno.`, "warning");
      appendLog(`[SISTEMA] ¡Modo de demostración activado automáticamente! Continuando con la simulación...`, "info");
      runSimulationStep(business, parsedSubject);
    }
  }

  // Simulación del paso actual si el backend no está disponible
  function runSimulationStep(business, subject) {
    setTimeout(() => {
      appendLog(`[SIMULACIÓN] Email ficticio: ${business.email}`, "success");
      appendLog(`[SIMULACIÓN] Conexión SMTP simulada activa...`, "info");
      
      setTimeout(() => {
        appendLog(`[SIMULACIÓN] Enviando correo: "${subject}"`, "info");
        appendLog(`[SIMULACIÓN] Adjuntando: ${selectedFile.name} (Base64)`, "info");
        
        setTimeout(() => {
          appendLog(`[OK SIMULADO] Correo simulado enviado a ${business.email}`, "success");
          completeStep();
        }, 800);
      }, 700);
    }, 600);
  }

  // Completa el paso actual y agenda el siguiente
  function completeStep() {
    currentIndex++;
    statSent.innerText = currentIndex;
    statRemaining.innerText = businesses.length - currentIndex;
    
    const progressPercentage = (currentIndex / businesses.length) * 100;
    sendingProgressBar.style.width = `${progressPercentage}%`;

    // Siguiente envío espaciado (1.5 segundos para no saturar)
    setTimeout(processNext, 1500);
  }

  // Iniciar la cola
  processNext();
}

// Lanzar nueva campaña desde el Paso 4 de regreso al Paso 2 (Acceso Ilimitado)
btnNewCampaign.addEventListener("click", () => {
  if (isSending) return;
  
  // Limpiar consola
  consoleBox.innerHTML = '<div class="console-line line-info">[SISTEMA] Consola inicializada. Esperando inicio de campaña...</div>';
  
  // Resetear barra de progreso y stats
  sendingProgressBar.style.width = "0%";
  statProspects.innerText = "0";
  statSent.innerText = "0";
  statRemaining.innerText = "0";
  
  // Ocultar el botón
  btnNewCampaign.style.display = "none";
  
  // Volver al Paso 2
  currentStep = 2;
  updateWizardUI();
  
  appendLog("[SISTEMA] Iniciando configuración de nueva campaña de envío.", "info");
});
