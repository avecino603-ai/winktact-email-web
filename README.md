# Winktact Email Web

Plataforma interactiva para el envío inteligente de Currículums Vitae (CV) a empresas locales segmentadas por rubro.

---

## 🚀 Arquitectura Recomendada para Producción

En un entorno real, la aplicación se divide en dos componentes principales:

### 1. Frontend (Cliente)
* Diseñado en HTML5 semántico, CSS3 moderno (con efectos de glassmorphism y dark mode) y JavaScript Vanilla.
* Permite al usuario configurar sus parámetros, subir su CV y proceder al pago de la tarifa de **$50.000 ARS** utilizando el SDK oficial de **Mercado Pago**.

### 2. Backend (Servidor de Envío)
* Un servicio API desarrollado en **Node.js** con **Express.js**.
* **Nodemailer**: Módulo de Node.js encargado de recibir las credenciales SMTP del remitente (o configurar un servidor de correo corporativo transaccional como SendGrid, Mailgun o AWS SES) y procesar de forma segura el envío de correos adjuntando el CV en PDF.
* **Base de Datos (PostgreSQL o MongoDB)**: Guarda los estados de envío de cada campaña, permitiendo al usuario ver el progreso en tiempo real utilizando conexiones bidireccionales con **WebSockets (Socket.io)**.
* **Cron Jobs / Task Schedulers**: Cola de tareas en segundo plano que regula el ritmo del envío de correos (ej. 1 correo cada 2 minutos) para evitar bloqueos del proveedor SMTP y asegurar que el correo no sea catalogado como Spam.

---

## 💳 Integración con Mercado Pago (Producción)

Para procesar el cobro real de **$50.000 ARS**, se debe integrar el SDK en el backend:

```javascript
const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

app.post('/api/crear-preferencia', async (req, res) => {
  let preference = {
    items: [
      {
        title: 'Campaña 50 Envíos Diarios - Pergamino',
        unit_price: 50000,
        quantity: 1,
        currency_id: 'ARS'
      }
    ],
    back_urls: {
      success: 'https://tusitio.com/exito',
      failure: 'https://tusitio.com/error',
      pending: 'https://tusitio.com/pendiente'
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la preferencia de pago');
  }
});
```
