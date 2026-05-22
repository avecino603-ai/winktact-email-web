# Guía: Configuración del Inicio de Sesión Real con Google

Para habilitar el inicio de sesión real con Google en **Winktact Email**, debes obtener un **Client ID** de tu consola de desarrolladores de Google Cloud. A continuación, se detallan los pasos sencillos para obtenerlo y configurarlo en tu aplicación.

---

## Paso 1: Crear un proyecto en Google Cloud Console

1. Ingresa a la consola oficial de Google Cloud: **[Google Cloud Console](https://console.cloud.google.com/)**.
2. Inicia sesión con tu cuenta de Google/Gmail.
3. Si no tienes un proyecto creado, haz clic en el selector de proyectos en la parte superior izquierda (junto al logo de Google Cloud) y selecciona **"Proyecto Nuevo"** (New Project).
4. Dale un nombre identificativo a tu proyecto (por ejemplo: `Winktact-Email`) y haz clic en **"Crear"**.

---

## Paso 2: Configurar la Pantalla de Consentimiento OAuth (OAuth Consent Screen)

Google requiere que definas la información básica que verán los usuarios al iniciar sesión.

1. En el menú de navegación de la izquierda, ve a **APIs y servicios** (APIs & Services) > **Pantalla de consentimiento de OAuth** (OAuth consent screen).
2. Selecciona el tipo de usuario **Externo** (External) y haz clic en **"Crear"**.
3. Rellena la información básica requerida:
   * **Nombre de la aplicación**: `Winktact Email`
   * **Correo electrónico de asistencia al usuario**: Tu dirección de Gmail.
   * **Información de contacto del desarrollador**: Tu dirección de Gmail.
4. Haz clic en **"Guardar y continuar"** a través de las siguientes pantallas (no necesitas agregar alcances/scopes especiales ni usuarios de prueba si estás en modo desarrollo, aunque para probar con otros correos puedes añadir sus emails en "Test Users").

---

## Paso 3: Crear Credenciales (Client ID de OAuth)

Aquí generamos la clave necesaria para habilitar la conexión entre tu aplicación local y Google.

1. En el menú de la izquierda, ve a **APIs y servicios** > **Credenciales** (Credentials).
2. En la parte superior, haz clic en **"+ Crear credenciales"** (+ Create credentials) y selecciona **"ID de cliente de OAuth"** (OAuth client ID).
3. En **Tipo de aplicación** (Application type), elige **Aplicación web** (Web application).
4. En **Nombre**, puedes dejar el predeterminado o poner `Winktact Web Local`.
5. En la sección **Orígenes autorizados de JavaScript** (Authorized JavaScript origins):
   * Haz clic en **"+ Agregar URI"** (+ Add URI).
   * Escribe exactamente la dirección local donde corre tu servidor:
     ```http
     http://localhost:8000
     ```
6. En la sección **URI de redireccionamiento autorizados** (Authorized redirect URIs):
   * *Nota: Google Identity Services (el nuevo SDK que usamos) solo requiere orígenes de JavaScript autorizados, pero es una buena práctica añadir también:*
     ```http
     http://localhost:8000
     ```
7. Haz clic en **"Crear"** (Create).
8. Se abrirá una ventana emergente que muestra tu **ID de cliente** (Client ID) (una cadena larga que termina en `.apps.googleusercontent.com`).
9. Copia ese ID de cliente.

---

## Paso 4: Configurar el Client ID en la Aplicación

1. Abre **Winktact Email** en tu navegador (`http://localhost:8000`).
2. En la pantalla de login, haz clic en **⚙️ Configurar Google Client ID real**.
3. Pega tu ID de cliente en el campo de texto.
4. Haz clic en **"Aplicar y Cargar Botón Real"**.
5. ¡Listo! Verás que aparece el botón oficial nativo de inicio de sesión de Google. Ahora ya puedes hacer clic en él e iniciar sesión de manera real. La configuración quedará guardada en tu navegador (`localStorage`) para que no tengas que ingresarlo de nuevo.
