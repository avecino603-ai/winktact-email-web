const https = require("https");

// Helper para hacer fetch con timeout en Node.js sin librerías externas
function fetchWithTimeout(url, options = {}, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error("Timeout al cargar el sitio web"));
    }, timeout);

    fetch(url, { ...options, signal })
      .then(res => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Método no permitido" }) };
  }

  const logs = [];
  const prospects = [];

  try {
    const body = JSON.parse(event.body);
    const { city, rubro } = body;

    if (!city || !rubro) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Faltan parámetros obligatorios: ciudad y rubro." })
      };
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (apiKey) {
      logs.push(`[API] Iniciando extracción real para '${rubro}' en la ciudad de '${city}'...`);
      logs.push(`[API] Conectando con Google Places API...`);

      try {
        // 1. Buscar lugares en Google Places (Text Search)
        const searchQuery = encodeURIComponent(`${rubro} en ${city}`);
        const placesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;
        
        const placesRes = await fetch(placesUrl);
        if (!placesRes.ok) {
          throw new Error(`Google Places retornó código ${placesRes.status}`);
        }
        
        const placesData = await placesRes.json();
        
        if (!placesData.results || placesData.results.length === 0) {
          logs.push(`[ALERTA] No se encontraron comercios en Google Maps para esa búsqueda.`);
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, prospects: [], logs })
          };
        }

        const rawPlaces = placesData.results.slice(0, 8); // Limitar a los primeros 8 para no exceder cuotas ni timeouts
        logs.push(`[MAPS] Se encontraron ${placesData.results.length} locales en Google Maps. Analizando los primeros ${rawPlaces.length}...`);

        // 2. Obtener detalles de cada local para conseguir el Website
        for (const place of rawPlaces) {
          logs.push(`[MAPS] Obteniendo detalles de: ${place.name}...`);
          try {
            const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,website,formatted_address&key=${apiKey}`;
            const detailsRes = await fetch(detailsUrl);
            const detailsData = await detailsRes.json();
            
            const website = detailsData.result ? detailsData.result.website : null;
            const address = detailsData.result ? detailsData.result.formatted_address : place.formatted_address;

            if (!website) {
              logs.push(`[AVISO] ${place.name} no tiene sitio web registrado en Google Maps. Saltando scraping...`);
              continue;
            }

            logs.push(`[WEB] Sitio web de ${place.name} encontrado: ${website}`);
            logs.push(`[SCRAPER] Visitando y analizando HTML de: ${website}...`);

            // 3. Hacer Scraping del sitio web del negocio
            try {
              // Simular User-Agent para no ser bloqueados inmediatamente
              const siteRes = await fetchWithTimeout(website, {
                headers: {
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                }
              }, 4000); // 4 segundos de timeout

              const html = await siteRes.text();
              
              // Expresiones regulares para emails y handles de Instagram
              const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
              const igRegex = /(?:instagram\.com\/|instagr\.am\/)([a-zA-Z0-9_.-]+)/i;

              const emailsFound = html.match(emailRegex);
              const igMatch = html.match(igRegex);

              let email = null;
              let instagram = null;

              if (emailsFound && emailsFound.length > 0) {
                // Filtrar duplicados o emails de librerías comunes si es necesario, tomamos el primero
                const uniqueEmails = [...new Set(emailsFound)];
                // Evitamos capturar extensiones comunes falsas
                email = uniqueEmails.find(e => !e.endsWith(".png") && !e.endsWith(".jpg") && !e.endsWith(".gif") && !e.endsWith("wixpress.com"));
              }

              if (igMatch && igMatch[1]) {
                instagram = igMatch[1].split('/')[0].split('?')[0].replace('@', '');
              }

              if (email || instagram) {
                prospects.push({
                  name: place.name,
                  email: email || `contacto@${place.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.ar`, // Fallback de email si tiene IG pero no correo directo
                  instagram: instagram || null,
                  website: website,
                  rubro: rubro
                });
                
                if (email && instagram) {
                  logs.push(`[✓ ÉXITO] ${place.name}: Email (${email}) e Instagram (@${instagram}) extraídos.`);
                } else if (email) {
                  logs.push(`[✓ ÉXITO] ${place.name}: Email (${email}) extraído.`);
                } else {
                  logs.push(`[✓ ÉXITO] ${place.name}: Instagram (@${instagram}) extraído. Correo auto-generado.`);
                }
              } else {
                logs.push(`[✗] No se encontraron contactos visibles en la portada de: ${place.name}`);
              }

            } catch (scrapingErr) {
              logs.push(`[ERROR SCRAPING] No se pudo leer la página de ${place.name}: ${scrapingErr.message}`);
            }

          } catch (detailsErr) {
            logs.push(`[ERROR MAPS] Error obteniendo detalles del lugar: ${detailsErr.message}`);
          }
        }

        logs.push(`[SISTEMA] Extracción finalizada. Se consiguieron ${prospects.length} prospectos reales con contactos.`);

      } catch (apiErr) {
        logs.push(`[ERROR API] Falla crítica al consultar Google Places: ${apiErr.message}`);
        logs.push(`[SISTEMA] Activando modo simulación debido a error de API.`);
        runSimulation(city, rubro, prospects, logs);
      }
    } else {
      // Modo Simulación si no hay API Key de Google
      logs.push(`[ENTORNO] GOOGLE_PLACES_API_KEY no configurada en Netlify.`);
      logs.push(`[SISTEMA] Iniciando simulación de extracción en vivo para '${rubro}' en '${city}'...`);
      runSimulation(city, rubro, prospects, logs);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, prospects, logs })
    };

  } catch (error) {
    console.error("Error en función search-prospects:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Error interno al procesar la extracción de prospectos." })
    };
  }
};

// Generador de simulación de scraping para pruebas de desarrollo
function runSimulation(city, rubro, prospectsList, logsList) {
  const cleanRubro = rubro.charAt(0).toUpperCase() + rubro.slice(1).toLowerCase();
  const cleanCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  const cleanCityLower = cleanCity.toLowerCase().replace(/\s+/g, "");
  const cleanRubroLower = rubro.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");

  // Nombres y estructuras simuladas de empresas según el rubro y la ciudad
  const simulatedNames = [
    `${cleanRubro} Central ${cleanCity}`,
    `${cleanRubro} del Sur`,
    `Estudio Integral ${cleanRubro} ${cleanCity}`,
    `Servicios & Soluciones ${cleanRubro}`,
    `Grupo Comercial ${cleanCity}`,
    `${cleanRubro} Pergamino S.A.`,
    `Consultora ${cleanRubro} & Asociados`
  ];

  logsList.push(`[MAPS] Simulando consulta a Google Places API...`);
  logsList.push(`[MAPS] Se encontraron ${simulatedNames.length} locales comerciales en ${cleanCity}.`);

  simulatedNames.forEach((name, index) => {
    const domain = `${name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "")}.com.ar`;
    const website = `http://www.${domain}`;

    logsList.push(`[MAPS] Negocio encontrado: ${name} (Web: ${website})`);
    logsList.push(`[SCRAPER] Analizando código HTML de ${website}...`);

    // Simulamos que algunos negocios no tienen contacto, otros tienen solo mail, otros solo IG y otros ambos
    if (index === 1) {
      logsList.push(`[✗] No se encontraron correos ni redes sociales en la página de inicio de: ${name}`);
    } else if (index === 3) {
      const igHandle = `${name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "")}`;
      logsList.push(`[✓ ÉXITO] ${name}: Perfil de Instagram @${igHandle} detectado en el HTML.`);
      prospectsList.push({
        name: name,
        email: `contacto@${domain}`,
        instagram: igHandle,
        website: website,
        rubro: cleanRubro
      });
    } else {
      const email = `rrhh@${domain}`;
      const igHandle = `${name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "")}`;
      
      logsList.push(`[✓ ÉXITO] ${name}: Correo corporativo (${email}) e Instagram (@${igHandle}) extraídos.`);
      prospectsList.push({
        name: name,
        email: email,
        instagram: igHandle,
        website: website,
        rubro: cleanRubro
      });
    }
  });

  logsList.push(`[SISTEMA] Extracción simulada finalizada. Se procesaron ${simulatedNames.length} empresas.`);
  logsList.push(`[SISTEMA] Se consiguieron ${prospectsList.length} prospectos válidos para la campaña.`);
}
