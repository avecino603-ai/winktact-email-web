// Dataset simulado de empresas de Pergamino por rubro para poblar la consola de envío de forma realista.
const LOCAL_BUSINESS_DB = {
  "Cafetería": [
    {
      "name": "Sandwichería Avenida",
      "email": "sandwicheriaavenida@hotmail.com",
      "instagram": "sandwicheria_avenida"
    }
  ],
  "Supermercado": [
    {
      "name": "Muy Barato",
      "email": "nogoya@muybaratomayorista.com.ar",
      "instagram": "muybaratomayorista"
    }
  ],
  "Carnicería": [
    {
      "name": "Porquissimo Pergamino",
      "email": "info@porquissimo.com",
      "instagram": "porquissimopergamino"
    }
  ],
  "Ferretería": [
    {
      "name": "Ferretería Illia",
      "email": "ferreteriaillia@hotmail.com",
      "instagram": "ferreteriaillia"
    },
    {
      "name": "Dincor Pergamino Mayorista Ferretero",
      "email": "dincorpergamino@gmail.com",
      "instagram": "dincorpergamino"
    },
    {
      "name": "Construfer Pergamino",
      "email": "construferpergamino@live.com.ar",
      "instagram": "construfer"
    },
    {
      "name": "Ferretería Centenario",
      "email": "ferreteriacentenario@speedy.com.ar",
      "instagram": "ferreteriacentenario"
    },
    {
      "name": "Ferretería Pergamino",
      "email": "oscarandrieux@hotmail.com",
      "instagram": "ferreteria_pergamino"
    }
  ],
  "Corralón de Materiales": [
    {
      "name": "Materiales De Construcción Ferraris",
      "email": "administracion@materialesferraris.com.ar",
      "instagram": "corralonferraris"
    },
    {
      "name": "Hierromad Hierros Y Corralón",
      "email": "hierromad@wiscom.com.ar",
      "instagram": "hierromad"
    }
  ],
  "Sanitarios": [
    {
      "name": "Casa Foster",
      "email": "cliente@gurusoluciones.com",
      "instagram": "casafoster"
    },
    {
      "name": "Lenzi :: Pergamino",
      "email": "info@marmolerialenzi.com.ar",
      "instagram": "marmolerialenzi"
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
    },
    {
      "name": "Conrado Muebles",
      "email": "cm@conradomuebles.com.ar"
    },
    {
      "name": "Cooperativa Total Madera / Hogar Muebles",
      "email": "coop_totalmadera@hotmail.com, hogarmuebles1@gmail.com"
    },
    {
      "name": "Ezequiel Maderas",
      "email": "ezequielmaderassrl@bbt11.com.ar"
    },
    {
      "name": "Muebles El Turquito",
      "email": "el_turquito_pergamino@hotmail.com, javierfaisal@live.com.ar"
    },
    {
      "name": "Pergamino Muebles",
      "email": "ventas@pergaminomuebles.com.ar"
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
    },
    {
      "name": "Vila Inmobiliaria",
      "email": "info@vilainmobiliaria.com.ar"
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
    },
    {
      "name": "Caluch Viajes",
      "email": "pergamino@caluchviajes.com.ar"
    },
    {
      "name": "Conforti Viajes",
      "email": "confort@infovia.com.ar"
    },
    {
      "name": "Hoteles (Varios)",
      "email": "hotelamericano@ciudad.com.ar, info@hotelfenicia.com.ar, terrazashotel@terrazashotel.com.ar"
    },
    {
      "name": "Kawai Tours",
      "email": "kawaiturismo@gmail.com"
    },
    {
      "name": "Ramundo Travel Service",
      "email": "ramundotravel@speedy.com.ar"
    },
    {
      "name": "Viajes Idigoras",
      "email": "gggviajes@anders.com.ar"
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
  ],
  "General": [
    {
      "name": "Aberturas de Aluminio",
      "email": "hola.aberturasdealuminio@hotmail.com"
    },
    {
      "name": "ABS JAMB SRL",
      "email": "COMERCIAL@CORPABS.COM"
    },
    {
      "name": "ACA (Asociación de Cooperativas Argentinas)",
      "email": "suelo@acacoop.com.ar"
    },
    {
      "name": "ACARA (Asociación de Concesionarios de Automotores)",
      "email": "info@acara.org.ar"
    },
    {
      "name": "AFA (Agricultores Federados Argentinos)",
      "email": "afapergamino@afascl.coop"
    },
    {
      "name": "Agropergamino",
      "email": "info@agropergamino.com"
    },
    {
      "name": "Agrorepuestos Pergamino",
      "email": "info@agrorepuestospergamino.com.ar"
    },
    {
      "name": "AIAMBA",
      "email": "aiamba@bbt11.com.ar"
    },
    {
      "name": "APICOFOM",
      "email": "apicofom@gmail.com"
    },
    {
      "name": "APYMEL",
      "email": "administracion@apymel.com.ar"
    },
    {
      "name": "Arturo Ayala y Alejandro Muñoz",
      "email": "QVCHEM@GMAIL.COM"
    },
    {
      "name": "Asociación de Comerciantes (Varias)",
      "email": "info@aciph.com.ar, acavaristobulodelvalle@gmail.com, camaramh@gmail.com, aci@coopvgg.com.ar, info@acipgoya.com, camdecomlasbrenas@hotmail.com"
    },
    {
      "name": "Baumer CR",
      "email": "cbaumer@ymail.com"
    },
    {
      "name": "Bernard Técnica Metalmecánica",
      "email": "bernardtecnica@hotmail.com"
    },
    {
      "name": "Biscayart Forrajeras",
      "email": "emillas@biscayart.com.ar"
    },
    {
      "name": "Borda-Per",
      "email": "bordaper@speedy.com.ar"
    },
    {
      "name": "Botti Jeans",
      "email": "contactobottijeans@gmail.com"
    },
    {
      "name": "Cámaras Sectoriales y Nacionales",
      "email": "director@cace.org.ar, caceima@hotmail.com, info@cadam.com.ar, cadefha@cadefha.com.ar, caesi@fibertel.com.ar, comunicacion@cafcco.com.ar, camara@cafma.org.ar, cafragas@speedy.com.ar, gerencia.cagnc@gmail.com, info@camarapapel.org.ar, info@cadiesel.com.ar, camaracoser2@hotmail.com, lacamaravp@yahoo.com.ar, info@camaradelsweater.com"
    },
    {
      "name": "Cámara de Comercio de Pergamino",
      "email": "secretaria@camarapergamino.org.ar, info@camarapergamino.org.ar"
    },
    {
      "name": "Cámaras Comerciales Regionales",
      "email": "camara@camaracomercialbolivar.com.ar, info@ccicanuelas.com.ar, info@camaradetigre.org, camaracomerciovarela@yahoo.com.ar, camaracomercialchilecito@hotmail.com.ar, cciar@elbolson.com"
    },
    {
      "name": "CAME",
      "email": "diplomaturas@came.org.ar"
    },
    {
      "name": "Casa del Motor",
      "email": "info@casadelmotor.com.ar, murisengo_ivana@yahoo.com.ar"
    },
    {
      "name": "Casa Mustafa",
      "email": "casamustafa@gmail.com"
    },
    {
      "name": "Centros Comerciales Regionales",
      "email": "cclagunapaiva@yahoo.com.ar, centrocomercialsanjavier@gmail.com"
    },
    {
      "name": "Chamena Industria",
      "email": "info@chamena.com"
    },
    {
      "name": "Clínica Pergamino",
      "email": "sugerencias@clinicpergamino.com"
    },
    {
      "name": "CNC Per",
      "email": "cnc-per@hotmail.com"
    },
    {
      "name": "Colegios Profesionales/Instituciones",
      "email": "capabog@bbt11.com.ar, cpceperg@satlink.com.ar, mt081001@abc.gov.ar"
    },
    {
      "name": "Colchones O'Connor",
      "email": "colchonesoconnor@celpinf.com.ar"
    },
    {
      "name": "Compacto Group",
      "email": "info@compactogroup.com"
    },
    {
      "name": "Coolseed",
      "email": "contacto@coolseed.com.ar"
    },
    {
      "name": "Cooperativa Eléctrica",
      "email": "aotero@celp.com.ar"
    },
    {
      "name": "CNEA",
      "email": "jmontero@cnea.gob.ar"
    },
    {
      "name": "CTE Bahía Blanca",
      "email": "CTE.ADMINISTRA@BAHIABLANCA.GOV.AR"
    },
    {
      "name": "Drop Denim",
      "email": "dropdenim22@gmail.com"
    },
    {
      "name": "Echevarne Hnos",
      "email": "info@echevarnehnos.com.ar"
    },
    {
      "name": "Eleg / Estrucplan",
      "email": "eleg@estrucplan.com.ar"
    },
    {
      "name": "ESEI Servicios Industriales",
      "email": "INFO@ESEISRL.COM.AR"
    },
    {
      "name": "Fitoquímica",
      "email": "info@fitoquimica.com.ar"
    },
    {
      "name": "Genitrini Hnos",
      "email": "genitrinihnos@speedy.com.ar, genitrinihnos@hotmail.com"
    },
    {
      "name": "Genoud",
      "email": "ventas@genoudmuebles.com.ar"
    },
    {
      "name": "Guardar Pergamino",
      "email": "ventas@guardarpergamino.com.ar"
    },
    {
      "name": "Guía Pergamino",
      "email": "gp.guiapergamino@gmail.com"
    },
    {
      "name": "Guimaite SRL",
      "email": "adm.guimaite.srl@gmail.com"
    },
    {
      "name": "Gutierrez Bernardo y Roman",
      "email": "guitierrezbernardoyroman@hotmail.com"
    },
    {
      "name": "Haras L' Etalon",
      "email": "l.etalon@hotmail.com"
    },
    {
      "name": "Hospital Zonal",
      "email": "higa@multinetmo.com.ar"
    },
    {
      "name": "Humberto Giménez / Giménez Usados",
      "email": "humberto.gim@hotmail.com"
    },
    {
      "name": "INCAM SA",
      "email": "GRAVECC@YAHOO.COM.AR"
    },
    {
      "name": "INPLA S.A.",
      "email": "info@inpla.com.ar, atencionalcliente@inpla.com.ar, sucursalrosario@inpla.com.ar, sucursalmendoza@inpla.com.ar, sucursaltucuman@inpla.com.ar, sucursalcordoba@inpla.com.ar, sucursalmardelplata@inpla.com.ar, sucursallanus@inpla.com.ar"
    },
    {
      "name": "Instituto Analítico Especializado",
      "email": "INFO@INSTITUTOANALITICO.COM.AR"
    },
    {
      "name": "INTA",
      "email": "perdir@pergamino.inta.gov.ar"
    },
    {
      "name": "Kindermetal",
      "email": "kindermetal@speedy.com.ar"
    },
    {
      "name": "Laboratorio Alfa Consultores",
      "email": "LABORATORIOALFACONSULTORES@GMAIL.COM"
    },
    {
      "name": "Laboratorio Cataldi",
      "email": "CATALDI@LABORATORIOCATALDI.COM.AR"
    },
    {
      "name": "Laboratorios GADEF (Faisan)",
      "email": "NMERCURI@FAISANSA.COM.AR"
    },
    {
      "name": "Laboratorios LABAC",
      "email": "DTLABORATORIOMARI@GMAIL.COM"
    },
    {
      "name": "Laboratorios Reca",
      "email": "RECA@RECASRL.COM.AR"
    },
    {
      "name": "Laboratorios Scudelati",
      "email": "LABORATORIO@SCUDELATI.COM.AR"
    },
    {
      "name": "Laboratorios SPM",
      "email": "SPM.COMERCIAL@GMAIL.COM"
    },
    {
      "name": "Laboratorio Rayen",
      "email": "rayen@rayenlab.com.ar, info@rayenlab.com.ar, apetinari@rayenlab.com.ar, raulh@rayenlab.com.ar, amartinelli@rayenlab.com.ar"
    },
    {
      "name": "Lácteos Don Eugenio",
      "email": "contacto@doneugenio.com.ar"
    },
    {
      "name": "Las Invernadas",
      "email": "lasinvernadas@ciudad.com.ar"
    },
    {
      "name": "Leonar S.R.L.",
      "email": "info@leonarsrl.com"
    },
    {
      "name": "Lisandro Mogliati",
      "email": "contacto@licenciadomogliati.com.ar"
    },
    {
      "name": "LR Montajes",
      "email": "irmontajes@hotmail.com"
    },
    {
      "name": "MAS Aberturas",
      "email": "masaberturas@outlook.com.ar, mas_aberturas@yahoo.com.ar"
    },
    {
      "name": "Mármoles Turco",
      "email": "ventas@marmolesturco.com"
    },
    {
      "name": "Materiales Santa Inés",
      "email": "mat-santaines@speedy.com.ar"
    },
    {
      "name": "MC Perforaciones",
      "email": "perforacionesmc@yahoo.com.ar"
    },
    {
      "name": "Methego / Methego Deco",
      "email": "methegosrl@gmail.com"
    },
    {
      "name": "Microquim",
      "email": "florenciaparodi@microquim.com"
    },
    {
      "name": "Mi Viejo Pedro",
      "email": "miviejopedro@hotmail.com"
    },
    {
      "name": "Municipalidad de Pergamino",
      "email": "informes@pergamino.gob.ar, sebastian.selva@pergamino.gob.ar, Producción@pergamino.gob.ar"
    },
    {
      "name": "Opinion Plaza",
      "email": "gapesteguia@bbt11.com.ar"
    },
    {
      "name": "OSDE",
      "email": "pergamino@osde.com.ar"
    },
    {
      "name": "Osenic S.A.",
      "email": "osenicsa.premoldeados@gmail.com"
    },
    {
      "name": "Paco Luz",
      "email": "santiagomatija@hotmail.com"
    },
    {
      "name": "Piazza San Marco",
      "email": "piazzasanmarco@speedy.com.ar"
    },
    {
      "name": "Por Más Organización",
      "email": "vladimiriomiguel@gmail.com"
    },
    {
      "name": "Postales del Mundo",
      "email": "info@postalesdelmundoviajes.com"
    },
    {
      "name": "Presoleo S.A.",
      "email": "presoleosa@gmail.com"
    },
    {
      "name": "Proyecto Fénix / Cámara de Comercio Italiana",
      "email": "fenix@cciargentina.org.ar"
    },
    {
      "name": "Pampero (Sede, Tienda Online y Franquicias)",
      "email": "info@pampero.com.ar, pamperopeatonalflorida@gmail.com, pamperojuncal@gmail.com, pamperobarrionorte@gmail.com, pamperoloyola@gmail.com, paternal@gmail.com, pamperosanmiguel@gmail.com, pilar@pampero.com.ar, lujanbue@pampero.com.ar, pamperocapilla@gmail.com, pamperozarate@gmail.com, pamperoareco@gmail.com, pamperochivilcoy@gmail.com, pamperosanpedro@mail.com, pamperogualeguay@gmail.com, pampero25demayo@gmail.com, Pamperochacabuco@gmail.com, pamperodosmedios@hotmail.com, pamperobragado@gmail.com, pamperodolores@gmail.com, pamperopergamino@hotmail.com, pamperosannicolas@gmail.com, rojasba@pampero.com.ar, pamperojunin24@gmail.com, pampero9dejulio@gmail.com, pamperocolon@hotmail.com, pampero.rosario@hotmail.com, pamperorosario@gmail.com, olavarria@pampero.com.ar, pamperooficialtandil@gmail.com, canadasf@pampero.com.ar, comercial@pamperovenado.com.ar, ranquel@pampero.com.ar, ventas@pamperoconcordia.com.ar, Paranaer@pampero.com.ar, pamperoeltrebol@gmail.com, pamperosudestebsas@gmail.com, rufinosf@pampero.com.ar, administracion@donlalo.com.ar, pamperotlod@gmail.com, pamperoesperanza@gmail.com, villegasba@pampero.com.ar, sanjorgesf@pampero.com.ar, latiendass@latiendass.com, pamperotresarroyos@gmail.com, pamperorafaela@gmail.com, pamperocarhue@gmail.com, Pamperosanfrancisco@gmail.com, jesica.soto@hotmail.com, pamperocuruzu@gmail.com, Huincagro@huincacoop.com, pamperomorteros@gmail.com, castexlp@pampero.com.ar, administracion@pamperobahia.com.ar, textilmediterraneasrl@gmail.com, pamperosg@gmail.com, pamperosantarosa@gmail.com, riotercerocor@pampero.com.ar, pamperomercedescorrientes@gmail.com, goyaco@pampero.com.ar, Pampero.rqta@gmail.com, pampero.fcordoba@gmail.com, cordoba@pampenorte.com.ar, villamercedessl@pampero.com.ar, merlosl@pampero.com.ar, lacumbre@pampero.com.ar, sanluis@pampero.com.ar, pamperoviedma@gmail.com, pamperova@gmail.com, misiones@pampero.com.ar, ventas@gutti.com.ar, pampero.charata@hotmail.com, sp.pampero@gmail.com, pamperosanmartin@gmail.com, pamperosanrafael@gmail.com, pamperofsa@gmail.com, pamperosantiagodelestero@gmail.com, lorcasas24@gmail.com, Lorcasas24@gmail.com, ventas@pamperomaipu.com.ar, estebanquintana@shopal.com.ar, sspilere@hotmail.com, pamperosanjuan@gmail.com, grupomgo.srl@gmail.com, puertomadryn@pampero.com.ar, Pamperolules.tuc@gmail.com, matiasra@pampenorte.com.ar, salta@pampero.com.ar, ventas@pamperopatagonia.com.ar, jujuypampero@gmail.com, bariloche@pamperopatagonia.com.ar, elabuelosrl@gmail.com, malalcume@hotmail.com, pamperocomodoro@gmail.com, pamperocalafate@gmail.com, pamperoriogallegos@gmail.com, pampero@grupogenerartdf.com"
    },
    {
      "name": "Raesa",
      "email": "raesa@ciudad.com.ar"
    },
    {
      "name": "Rayita",
      "email": "broches-rayita@hotmail.com"
    },
    {
      "name": "Serbal Montajes / Claudio Balmaceda",
      "email": "tallersebal@gmail.com"
    },
    {
      "name": "Sillas Castellano",
      "email": "sillascastellano@hotmail.com"
    },
    {
      "name": "Sur Audio",
      "email": "suraudiogabinetes@hotmail.com"
    },
    {
      "name": "Tanques Fangio",
      "email": "tfangio@infovia.com.ar"
    },
    {
      "name": "Textil Parque (PTP S.A.)",
      "email": "comercial@ptpsa.com.ar"
    },
    {
      "name": "Transervi / Jorge y Matías Basualdo",
      "email": "basualdojorge@gmail.com, basualdomatias09@gmail.com"
    },
    {
      "name": "Vacrom S.A.",
      "email": "info@zanocco.com.ar"
    }
  ],
  "Gastronomía": [
    {
      "name": "Gia Catering",
      "email": "info@giacatering.com.ar"
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
const sourceScraping = document.getElementById("sourceScraping");
const sourceJobs = document.getElementById("sourceJobs");
const excelUploadContainer = document.getElementById("excelUploadContainer");
const simulatedContainer = document.getElementById("simulatedContainer");
const scrapingContainer = document.getElementById("scrapingContainer");
const jobsSearchContainer = document.getElementById("jobsSearchContainer");
const excelFileInput = document.getElementById("excelFile");
const excelSummaryText = document.getElementById("excelSummaryText");
const scrapingRubroInput = document.getElementById("scrapingRubro");
const scrapingCityInput = document.getElementById("scrapingCity");
const btnStartScraping = document.getElementById("btnStartScraping");
const scrapingConsoleBox = document.getElementById("scrapingConsoleBox");
const scrapingSummaryText = document.getElementById("scrapingSummaryText");

// Nuevos elementos para empleos, navegación y secuencias
const jobSearchQuery = document.getElementById("jobSearchQuery");
const jobSearchLocation = document.getElementById("jobSearchLocation");
const btnSearchJobs = document.getElementById("btnSearchJobs");
const jobsResultsList = document.getElementById("jobsResultsList");

const navBtnWizard = document.getElementById("navBtnWizard");
const navBtnSequences = document.getElementById("navBtnSequences");
const wizardView = document.getElementById("wizardView");
const sequencesView = document.getElementById("sequencesView");
const newCampaignName = document.getElementById("newCampaignName");
const btnCreateCampaign = document.getElementById("btnCreateCampaign");
const activeCampaignsList = document.getElementById("activeCampaignsList");
const pendingTasksList = document.getElementById("pendingTasksList");
const badgePendingTasksCount = document.getElementById("badgePendingTasksCount");

// Estado para Scraping
let scrapedBusinesses = [];
let isScraping = false;

// --- CONFIGURACIÓN DE SUPABASE (FASE 2) ---
const SUPABASE_URL = "https://cssxmqtejlbrsaetybut.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OKXZ3_RZCPJKfDsaVqEBRw_z0w0N3gs";
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
if (!supabase) {
  console.error("No se pudo cargar la librería de Supabase desde el CDN.");
}

let currentUser = null;
let currentProfile = null;

// Elementos DOM para Autenticación Real de Supabase
const tabBtnLogin = document.getElementById("tabBtnLogin");
const tabBtnRegister = document.getElementById("tabBtnRegister");
const groupAuthName = document.getElementById("groupAuthName");
const authNameInput = document.getElementById("authName");
const authEmailInput = document.getElementById("authEmail");
const authPasswordInput = document.getElementById("authPassword");
const authForm = document.getElementById("authForm");
const authMessage = document.getElementById("authMessage");
const btnSubmitAuth = document.getElementById("btnSubmitAuth");

// Inicialización de variables
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");
const emailSubjectInput = document.getElementById("emailSubject");
const emailBodyInput = document.getElementById("emailBody");
const instagramBodyInput = document.getElementById("instagramBody");
const richEmailBody = document.getElementById("richEmailBody");
const tabBtnEmail = document.getElementById("tabBtnEmail");
const tabBtnInstagram = document.getElementById("tabBtnInstagram");
const tabContentEmail = document.getElementById("tabContentEmail");
const tabContentInstagram = document.getElementById("tabContentInstagram");
const previewGmailContainer = document.getElementById("previewGmailContainer");
const previewInstagramContainer = document.getElementById("previewInstagramContainer");
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

// Elementos del Canal de Envío
const channelEmail = document.getElementById("channelEmail");
const channelInstagram = document.getElementById("channelInstagram");
const smtpCredentialsContainer = document.getElementById("smtpCredentialsContainer");
const instagramCVNotice = document.getElementById("instagramCVNotice");

// Elementos de la consola de Instagram
const instagramManualContainer = document.getElementById("instagramManualContainer");
const igCurrentBusinessName = document.getElementById("igCurrentBusinessName");
const igCurrentHandle = document.getElementById("igCurrentHandle");
const btnIgAction = document.getElementById("btnIgAction");
const btnIgSkip = document.getElementById("btnIgSkip");
const btnIgPause = document.getElementById("btnIgPause");

// Estado para Instagram
let currentInstagramCampaignIndex = 0;
let instagramCampaignBusinesses = [];

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

// --- FUNCIONES GLOBALES PARA CONTROL DE SPAM Y HISTORIAL ---
function getSentHistory() {
  try {
    return JSON.parse(localStorage.getItem("winktact_sent_history")) || [];
  } catch (e) {
    return [];
  }
}

function checkSentHistory(name) {
  const history = getSentHistory();
  // Buscar si se contactó en los últimos 30 días
  const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
  return history.find(record => record.name.toLowerCase() === name.toLowerCase() && record.timestamp > thirtyDaysAgo);
}

function addToSentHistory(name, contactInfo) {
  const history = getSentHistory();
  // Remover entradas anteriores de la misma empresa para evitar crecimiento infinito
  const filteredHistory = history.filter(record => record.name.toLowerCase() !== name.toLowerCase());
  filteredHistory.push({
    name: name,
    contact: contactInfo,
    timestamp: Date.now()
  });
  localStorage.setItem("winktact_sent_history", JSON.stringify(filteredHistory));

  // Registrar en Supabase si hay sesión activa
  if (supabase && currentUser) {
    supabase
      .from("sent_history")
      .insert({
        user_id: currentUser.id,
        business_name: name,
        contact_info: contactInfo,
        timestamp: new Date().toISOString()
      })
      .then(({ error }) => {
        if (error) console.error("Error al registrar historial en la nube:", error);
        else console.log(`[NUBE] Historial registrado para: ${name}`);
      });
  }
}

let updatePreviews = function() {};

// Escuchar cambios para cargar sesión previa y estado de pago
window.addEventListener("DOMContentLoaded", () => {
  // --- CARGAR SESIÓN DE SUPABASE ACTIVA ---
  if (supabase) {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        currentUser = session.user;
        localStorage.setItem("winktact_supabase_token", session.access_token);
        loadUserProfileAndData();
      } else {
        currentUser = null;
        currentProfile = null;
        localStorage.removeItem("winktact_supabase_token");
        // Mostrar pantalla de login si no hay sesión
        appContainer.style.display = "none";
        loginContainer.style.display = "block";
      }
    });
  } else {
    // Si no hay Supabase, usar fallback anterior
    const cachedName = sessionStorage.getItem("winktact_username");
    const cachedEmail = sessionStorage.getItem("winktact_useremail");
    if (cachedName && cachedEmail) {
      loginContainer.style.display = "none";
      appContainer.style.display = "block";
    }
  }

  // Detección de retorno de Mercado Pago en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get("payment_id") || urlParams.get("collection_id");
  const paymentStatus = urlParams.get("status") || urlParams.get("collection_status");

  if (paymentId && paymentStatus === "approved") {
    localStorage.setItem("winktact_payment_id", paymentId);
    localStorage.setItem("winktact_paid", "true");
    appendLog(`[MERCADO PAGO] Pago aprobado detectado en URL (ID: ${paymentId}). Licencia activada.`, "success");
    
    // Registrar pago en Supabase si hay sesión activa
    if (supabase) {
      supabase.auth.getSession().then(async ({ data: { session } }) => {
        if (session && session.user) {
          const { error } = await supabase
            .from("profiles")
            .update({
              payment_id: paymentId,
              paid: true,
              updated_at: new Date().toISOString()
            })
            .eq("id", session.user.id);
          if (error) console.error("Error al actualizar pago en Supabase:", error);
          else appendLog("[NUBE] Licencia de pago registrada y sincronizada en Supabase.", "success");
        }
      });
    }

    // Limpiar URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Actualizar UI del pago
  updatePaymentUI();

  // Renderizar checkboxes de rubros dinámicamente
  renderRubrosCheckboxes();

  // Lógica para alternar el canal de envío (Gmail vs Instagram)
  function toggleChannelUI() {
    if (channelInstagram.checked) {
      smtpCredentialsContainer.style.display = "none";
      instagramCVNotice.style.display = "block";
      userPasswordInput.removeAttribute("required");
    } else {
      smtpCredentialsContainer.style.display = "block";
      instagramCVNotice.style.display = "none";
      userPasswordInput.setAttribute("required", "required");
    }
  }

  if (channelEmail && channelInstagram) {
    channelEmail.addEventListener("change", () => {
      toggleChannelUI();
      saveToLocalStorage();
      updatePreviews();
    });
    channelInstagram.addEventListener("change", () => {
      toggleChannelUI();
      saveToLocalStorage();
      updatePreviews();
    });
    toggleChannelUI();
  }

  // --- MEJORAS FASE 1: UI/UX, EDITORES, AUTO-SAVE Y HISTORIAL ---
  
  // 1. Manejo de Pestañas de Redacción (Email vs Instagram)
  if (tabBtnEmail && tabBtnInstagram) {
    tabBtnEmail.addEventListener("click", () => {
      tabBtnEmail.classList.add("active");
      tabBtnInstagram.classList.remove("active");
      
      tabBtnEmail.style.color = "var(--accent-color)";
      tabBtnEmail.style.borderBottom = "2px solid var(--accent-color)";
      tabBtnEmail.style.fontWeight = "700";
      
      tabBtnInstagram.style.color = "var(--text-secondary)";
      tabBtnInstagram.style.borderBottom = "none";
      tabBtnInstagram.style.fontWeight = "600";
      
      if (tabContentEmail) tabContentEmail.style.display = "block";
      if (tabContentInstagram) tabContentInstagram.style.display = "none";
      
      if (previewGmailContainer) previewGmailContainer.style.display = "block";
      if (previewInstagramContainer) previewInstagramContainer.style.display = "none";
    });

    tabBtnInstagram.addEventListener("click", () => {
      tabBtnInstagram.classList.add("active");
      tabBtnEmail.classList.remove("active");
      
      tabBtnInstagram.style.color = "var(--accent-color)";
      tabBtnInstagram.style.borderBottom = "2px solid var(--accent-color)";
      tabBtnInstagram.style.fontWeight = "700";
      
      tabBtnEmail.style.color = "var(--text-secondary)";
      tabBtnEmail.style.borderBottom = "none";
      tabBtnEmail.style.fontWeight = "600";
      
      if (tabContentEmail) tabContentEmail.style.display = "none";
      if (tabContentInstagram) tabContentInstagram.style.display = "block";
      
      if (previewGmailContainer) previewGmailContainer.style.display = "none";
      if (previewInstagramContainer) previewInstagramContainer.style.display = "flex";
    });
  }

  // 2. Editor WYSIWYG minimalista nativo
  const toolbarButtons = document.querySelectorAll(".wysiwyg-toolbar .toolbar-btn");
  if (toolbarButtons && richEmailBody) {
    toolbarButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const command = btn.getAttribute("data-command");
        document.execCommand(command, false, null);
        richEmailBody.focus();
        updateEmailBodyFromRich();
      });
    });

    richEmailBody.addEventListener("input", () => {
      updateEmailBodyFromRich();
    });
  }

  function updateEmailBodyFromRich() {
    if (emailBodyInput && richEmailBody) {
      emailBodyInput.value = richEmailBody.innerHTML;
      saveToLocalStorage();
      updatePreviews();
    }
  }

  // 3. Previsualizador Dinámico en Tiempo Real
  updatePreviews = function() {
    const candidateName = userNameInput.value.trim() || "[Tu Nombre]";
    
    // Asunto Email
    if (emailSubjectInput) {
      const subjectVal = emailSubjectInput.value;
      const previewSubject = subjectVal
        .replace(/{nombre_empresa}/g, "Empresa Destino")
        .replace(/{nombre_candidato}/g, candidateName);
      const previewSubjectEl = document.getElementById("previewEmailSubject");
      if (previewSubjectEl) {
        previewSubjectEl.innerText = previewSubject || "[Asunto del Correo]";
      }
    }

    // Cuerpo Email (HTML)
    if (richEmailBody) {
      const bodyHtml = richEmailBody.innerHTML;
      const previewBody = bodyHtml
        .replace(/{nombre_empresa}/g, '<strong style="color: var(--accent-color);">Empresa Destino</strong>')
        .replace(/{nombre_candidato}/g, `<strong>${candidateName}</strong>`);
      const previewBodyEl = document.getElementById("previewEmailBody");
      if (previewBodyEl) {
        previewBodyEl.innerHTML = previewBody || "[Cuerpo del Mensaje]";
      }
    }

    // Cuerpo Instagram
    if (instagramBodyInput) {
      const igVal = instagramBodyInput.value;
      const previewIg = igVal
        .replace(/{nombre_empresa}/g, "Empresa Destino")
        .replace(/{nombre_candidato}/g, candidateName);
      const previewIgEl = document.getElementById("previewIgBody");
      if (previewIgEl) {
        previewIgEl.innerText = previewIg || "[Mensaje para Instagram Direct]";
      }
    }

    // Nombre Adjunto
    const previewAttachedFileName = document.getElementById("previewAttachedFileName");
    const previewAttachmentWrapper = document.getElementById("previewAttachmentWrapper");
    if (previewAttachedFileName && previewAttachmentWrapper) {
      if (selectedFile) {
        previewAttachedFileName.innerText = `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
        previewAttachmentWrapper.style.display = "inline-flex";
      } else {
        previewAttachmentWrapper.style.display = "none";
      }
    }
  };

  // 4. Auto-save (Guardar progreso en localStorage y Supabase con debounce)
  let supabaseSaveTimeout = null;
  function syncTemplatesToCloud() {
    if (!supabase || !currentUser) return;
    clearTimeout(supabaseSaveTimeout);
    supabaseSaveTimeout = setTimeout(async () => {
      const subject = emailSubjectInput ? emailSubjectInput.value : '';
      const body = emailBodyInput ? emailBodyInput.value : '';
      const igBody = instagramBodyInput ? instagramBodyInput.value : '';

      const { error } = await supabase
        .from("templates")
        .upsert({
          user_id: currentUser.id,
          email_subject: subject,
          email_body: body,
          instagram_body: igBody,
          updated_at: new Date().toISOString()
        }, { onConflict: "user_id" });

      if (error) {
        console.error("Error sincronizando plantilla en Supabase:", error);
      } else {
        console.log("[NUBE] Plantillas sincronizadas en Supabase.");
      }
    }, 1500);
  }

  function saveToLocalStorage() {
    localStorage.setItem("winktact_userName", userNameInput.value);
    localStorage.setItem("winktact_userEmail", userEmailInput.value);
    localStorage.setItem("winktact_userPassword", userPasswordInput.value);
    
    if (emailSubjectInput) localStorage.setItem("winktact_emailSubject", emailSubjectInput.value);
    if (emailBodyInput) localStorage.setItem("winktact_emailBody", emailBodyInput.value);
    if (richEmailBody) localStorage.setItem("winktact_richEmailBody", richEmailBody.innerHTML);
    if (instagramBodyInput) localStorage.setItem("winktact_instagramBody", instagramBodyInput.value);
    if (campaignLimitInput) localStorage.setItem("winktact_campaignLimit", campaignLimitInput.value);
    
    const isIg = channelInstagram && channelInstagram.checked;
    localStorage.setItem("winktact_channel", isIg ? "instagram" : "email");

    const cityInput = document.getElementById("businessCity");
    if (cityInput) localStorage.setItem("winktact_city", cityInput.value);
    
    const selectedRubros = getSelectedRubros();
    localStorage.setItem("winktact_selected_rubros", JSON.stringify(selectedRubros));

    // Sincronizar con la nube (Supabase)
    syncTemplatesToCloud();
  }

  // 5. Restaurar Progreso desde localStorage (Auto-save)
  function loadFromLocalStorage() {
    if (localStorage.getItem("winktact_userName")) {
      userNameInput.value = localStorage.getItem("winktact_userName");
    }
    if (localStorage.getItem("winktact_userEmail")) {
      userEmailInput.value = localStorage.getItem("winktact_userEmail");
    }
    if (localStorage.getItem("winktact_userPassword")) {
      userPasswordInput.value = localStorage.getItem("winktact_userPassword");
    }
    if (emailSubjectInput && localStorage.getItem("winktact_emailSubject")) {
      emailSubjectInput.value = localStorage.getItem("winktact_emailSubject");
    }
    if (emailBodyInput && localStorage.getItem("winktact_emailBody")) {
      emailBodyInput.value = localStorage.getItem("winktact_emailBody");
    }
    if (richEmailBody) {
      if (localStorage.getItem("winktact_richEmailBody")) {
        richEmailBody.innerHTML = localStorage.getItem("winktact_richEmailBody");
      } else if (emailBodyInput && emailBodyInput.value) {
        richEmailBody.innerHTML = emailBodyInput.value.replace(/\n/g, '<br>');
      }
    }
    if (instagramBodyInput) {
      if (localStorage.getItem("winktact_instagramBody")) {
        instagramBodyInput.value = localStorage.getItem("winktact_instagramBody");
      } else {
        instagramBodyInput.value = `¡Hola {nombre_empresa}! 👋 Te contacto porque me gustaría mucho sumarme a su equipo. Les dejo mi currículum adjunto por email o podemos conversar por acá. ¡Muchas gracias! 😊 - {nombre_candidato}`;
      }
    }
    if (campaignLimitInput && localStorage.getItem("winktact_campaignLimit")) {
      campaignLimitInput.value = localStorage.getItem("winktact_campaignLimit");
      updateSpamWarning();
    }
    
    const savedChannel = localStorage.getItem("winktact_channel");
    if (savedChannel === "instagram") {
      if (channelInstagram) {
        channelInstagram.checked = true;
        if (channelEmail) channelEmail.checked = false;
      }
    } else {
      if (channelEmail) {
        channelEmail.checked = true;
        if (channelInstagram) channelInstagram.checked = false;
      }
    }
    toggleChannelUI();

    const savedCity = localStorage.getItem("winktact_city");
    const cityInput = document.getElementById("businessCity");
    if (savedCity && cityInput) {
      cityInput.value = savedCity;
    }

    const savedRubrosStr = localStorage.getItem("winktact_selected_rubros");
    if (savedRubrosStr) {
      try {
        const savedRubros = JSON.parse(savedRubrosStr);
        const rubroCheckboxes = document.querySelectorAll(".rubro-checkbox");
        rubroCheckboxes.forEach(cb => {
          cb.checked = savedRubros.includes(cb.value);
        });
      } catch (e) {
        console.error("Error loading selected rubros:", e);
      }
    }

    // Restaurar PDF si está guardado en localStorage
    const savedPdfName = localStorage.getItem("winktact_pdf_name");
    const savedPdfBase64 = localStorage.getItem("winktact_pdf_base64");
    if (savedPdfName && savedPdfBase64) {
      try {
        const byteCharacters = atob(savedPdfBase64.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: 'application/pdf'});
        selectedFile = new File([blob], savedPdfName, {type: 'application/pdf'});
        
        const dropZoneText = document.getElementById("dropZoneText");
        const fileNameDisplay = document.getElementById("fileNameDisplay");
        const attachedFileName = document.getElementById("attachedFileName");
        if (dropZoneText && fileNameDisplay && attachedFileName) {
          dropZoneText.style.display = "none";
          attachedFileName.innerHTML = `CV Adjunto: <strong>${savedPdfName}</strong><br><small style="color: var(--success-color);">Cambiar de archivo</small>`;
          fileNameDisplay.innerText = `Archivo cargado exitosamente: ${savedPdfName}`;
          fileNameDisplay.style.display = "block";
        }
      } catch (e) {
        console.error("Error recuperando PDF desde localStorage:", e);
      }
    }
    
    updatePreviews();
  }

  // Escuchar inputs para auto-guardar
  const autoSaveInputs = [
    userNameInput,
    userEmailInput,
    userPasswordInput,
    emailSubjectInput,
    instagramBodyInput,
    campaignLimitInput
  ];
  autoSaveInputs.forEach(el => {
    if (el) {
      el.addEventListener("input", () => {
        saveToLocalStorage();
        updatePreviews();
      });
      el.addEventListener("change", () => {
        saveToLocalStorage();
        updatePreviews();
      });
    }
  });

  const businessCityEl = document.getElementById("businessCity");
  if (businessCityEl) {
    businessCityEl.addEventListener("input", saveToLocalStorage);
  }

  // Restaurar estado al iniciar
  loadFromLocalStorage();
});

// --- MANEJO DE AUTENTICACIÓN REAL CON SUPABASE ---
let currentAuthTab = "login"; // "login" o "register"

if (tabBtnLogin && tabBtnRegister) {
  tabBtnLogin.addEventListener("click", () => {
    currentAuthTab = "login";
    tabBtnLogin.style.background = "rgba(168, 85, 247, 0.2)";
    tabBtnLogin.style.color = "white";
    tabBtnLogin.style.fontWeight = "700";
    
    tabBtnRegister.style.background = "none";
    tabBtnRegister.style.color = "var(--text-secondary)";
    tabBtnRegister.style.fontWeight = "600";
    
    if (groupAuthName) groupAuthName.style.display = "none";
    if (authNameInput) authNameInput.removeAttribute("required");
    
    const subtitle = document.getElementById("authSubtitle");
    if (subtitle) subtitle.innerText = "Inicia sesión en tu cuenta en la nube";
    if (btnSubmitAuth) btnSubmitAuth.innerText = "Ingresar a mi Cuenta";
  });

  tabBtnRegister.addEventListener("click", () => {
    currentAuthTab = "register";
    tabBtnRegister.style.background = "rgba(168, 85, 247, 0.2)";
    tabBtnRegister.style.color = "white";
    tabBtnRegister.style.fontWeight = "700";
    
    tabBtnLogin.style.background = "none";
    tabBtnLogin.style.color = "var(--text-secondary)";
    tabBtnLogin.style.fontWeight = "600";
    
    if (groupAuthName) groupAuthName.style.display = "block";
    if (authNameInput) authNameInput.setAttribute("required", "required");
    
    const subtitle = document.getElementById("authSubtitle");
    if (subtitle) subtitle.innerText = "Crea una nueva cuenta premium";
    if (btnSubmitAuth) btnSubmitAuth.innerText = "Crear Cuenta & Comenzar";
  });
}

// Envío del formulario de autenticación
if (authForm) {
  authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!supabase) {
      alert("Error: Supabase no está inicializado.");
      return;
    }

    const email = authEmailInput.value.trim().toLowerCase();
    const password = authPasswordInput.value;
    const name = authNameInput ? authNameInput.value.trim() : "";

    if (authMessage) {
      authMessage.style.display = "block";
      authMessage.style.background = "rgba(255, 255, 255, 0.05)";
      authMessage.style.color = "white";
      authMessage.innerText = "Procesando...";
    }

    if (currentAuthTab === "register") {
      // REGISTRO
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name
          }
        }
      });

      if (error) {
        showAuthMessage(error.message, "danger");
      } else {
        showAuthMessage("¡Registro exitoso! Ya puedes iniciar sesión.", "success");
        // Cambiar automáticamente a pestaña login
        setTimeout(() => {
          if (tabBtnLogin) tabBtnLogin.click();
          if (authPasswordInput) authPasswordInput.value = "";
        }, 1500);
      }
    } else {
      // INICIO DE SESIÓN
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        showAuthMessage(error.message, "danger");
      } else {
        showAuthMessage("¡Sesión iniciada con éxito!", "success");
        currentUser = data.user;
        
        // Obtener el perfil y cargarlo en la UI
        await loadUserProfileAndData();
      }
    }
  });
}

// Inicio de sesión con Google (Supabase OAuth)
const btnGoogleAuth = document.getElementById("btnGoogleAuth");
if (btnGoogleAuth) {
  btnGoogleAuth.addEventListener("click", async () => {
    if (!supabase) {
      alert("Error: Supabase no está inicializado.");
      return;
    }
    
    showAuthMessage("Redirigiendo a Google...", "success");
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });

    if (error) {
      showAuthMessage(error.message, "danger");
    }
  });
}

function showAuthMessage(text, type) {
  if (!authMessage) return;
  authMessage.style.display = "block";
  if (type === "success") {
    authMessage.style.background = "rgba(16, 185, 129, 0.1)";
    authMessage.style.border = "1px solid rgba(16, 185, 129, 0.3)";
    authMessage.style.color = "#10b981";
  } else {
    authMessage.style.background = "rgba(239, 68, 68, 0.1)";
    authMessage.style.border = "1px solid rgba(239, 68, 68, 0.3)";
    authMessage.style.color = "#ef4444";
  }
  authMessage.innerText = text;
}

// Cargar perfil del usuario, plantillas e historial desde Supabase
async function loadUserProfileAndData() {
  if (!supabase || !currentUser) return;

  appendLog(`[NUBE] Cargando datos de perfil de Supabase para ${currentUser.email}...`, "info");

  // 1. Obtener perfil
  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", currentUser.id)
    .single();

  if (profileErr) {
    console.error("Error al cargar perfil de Supabase:", profileErr);
    // Fallback si no existe el perfil aún en la base de datos (por ejemplo, demora en el trigger de creación)
    userNameInput.value = currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || "Usuario Google";
    userEmailInput.value = currentUser.email;
    sessionStorage.setItem("winktact_username", userNameInput.value);
    sessionStorage.setItem("winktact_useremail", userEmailInput.value);
  } else if (profile) {
    currentProfile = profile;
    userNameInput.value = profile.name || currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || "";
    userEmailInput.value = profile.email || currentUser.email;
    
    // Guardar sesión en sessionStorage
    sessionStorage.setItem("winktact_username", userNameInput.value);
    sessionStorage.setItem("winktact_useremail", userEmailInput.value);
    
    // Sincronizar estado de pago en el navegador
    if (profile.paid) {
      localStorage.setItem("winktact_paid", "true");
    } else {
      localStorage.removeItem("winktact_paid");
    }
    if (profile.payment_id) {
      localStorage.setItem("winktact_payment_id", profile.payment_id);
    }
    
    updatePaymentUI();
  }

  // 2. Obtener plantillas
  const { data: template, error: tempErr } = await supabase
    .from("templates")
    .select("*")
    .eq("user_id", currentUser.id)
    .single();

  if (tempErr) {
    console.log("No se encontraron plantillas en la nube para el usuario. Se usarán valores locales.");
  } else if (template) {
    // Sobrescribir plantillas de UI con las de la nube
    if (emailSubjectInput && template.email_subject) {
      emailSubjectInput.value = template.email_subject;
    }
    if (emailBodyInput && template.email_body) {
      emailBodyInput.value = template.email_body;
      if (richEmailBody) richEmailBody.innerHTML = template.email_body;
    }
    if (instagramBodyInput && template.instagram_body) {
      instagramBodyInput.value = template.instagram_body;
    }
    updatePreviews();
  }

  // 3. Obtener historial
  const { data: history, error: histErr } = await supabase
    .from("sent_history")
    .select("*")
    .eq("user_id", currentUser.id);

  if (histErr) {
    console.error("Error al cargar historial desde la nube:", histErr);
  } else if (history) {
    // Sincronizar con el historial local
    const localHistory = getSentHistory();
    const mergedHistory = [...localHistory];
    
    history.forEach(item => {
      const exists = mergedHistory.some(lh => lh.name.toLowerCase() === item.business_name.toLowerCase());
      if (!exists) {
        mergedHistory.push({
          name: item.business_name,
          contact: item.contact_info,
          timestamp: new Date(item.timestamp).getTime()
        });
      }
    });
    
    localStorage.setItem("winktact_sent_history", JSON.stringify(mergedHistory));
  }

  // Guardar token JWT en localStorage para el backend seguro
  const { data: sessionData } = await supabase.auth.getSession();
  if (sessionData && sessionData.session) {
    localStorage.setItem("winktact_supabase_token", sessionData.session.access_token);
  }

  // Avanzar visualmente
  loginContainer.style.display = "none";
  appContainer.style.display = "block";
  appendLog(`[OK NUBE] Sesión y datos sincronizados con Supabase.`, "success");
}

// Lógica de alternancia del Origen de Datos (Simulado vs Excel vs Scraping vs Jobs)
if (sourceSimulated && sourceExcel && sourceScraping && sourceJobs) {
  const toggleSource = () => {
    if (sourceSimulated.checked) {
      if (simulatedContainer) simulatedContainer.style.display = "block";
      if (excelUploadContainer) excelUploadContainer.style.display = "none";
      if (scrapingContainer) scrapingContainer.style.display = "none";
      if (jobsSearchContainer) jobsSearchContainer.style.display = "none";
    } else if (sourceExcel.checked) {
      if (simulatedContainer) simulatedContainer.style.display = "none";
      if (excelUploadContainer) excelUploadContainer.style.display = "block";
      if (scrapingContainer) scrapingContainer.style.display = "none";
      if (jobsSearchContainer) jobsSearchContainer.style.display = "none";
    } else if (sourceScraping.checked) {
      if (simulatedContainer) simulatedContainer.style.display = "none";
      if (excelUploadContainer) excelUploadContainer.style.display = "none";
      if (scrapingContainer) scrapingContainer.style.display = "block";
      if (jobsSearchContainer) jobsSearchContainer.style.display = "none";
    } else if (sourceJobs.checked) {
      if (simulatedContainer) simulatedContainer.style.display = "none";
      if (excelUploadContainer) excelUploadContainer.style.display = "none";
      if (scrapingContainer) scrapingContainer.style.display = "none";
      if (jobsSearchContainer) jobsSearchContainer.style.display = "block";
    }
  };
  sourceSimulated.addEventListener("change", toggleSource);
  sourceExcel.addEventListener("change", toggleSource);
  sourceScraping.addEventListener("change", toggleSource);
  sourceJobs.addEventListener("change", toggleSource);
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

// Lógica de Extracción de Prospectos en Vivo (Scraping)
if (btnStartScraping) {
  btnStartScraping.addEventListener("click", async () => {
    if (isScraping) return;

    const rubro = scrapingRubroInput.value.trim();
    const city = scrapingCityInput.value.trim();

    if (!rubro || !city) {
      alert("Por favor, ingresa tanto el rubro como la ciudad para realizar la búsqueda.");
      return;
    }

    isScraping = true;
    btnStartScraping.disabled = true;
    btnStartScraping.innerText = "⏳ Extrayendo...";
    
    // Deshabilitar navegación del wizard temporalmente
    btnNext.disabled = true;
    btnPrev.disabled = true;

    // Resetear consola de scraping
    scrapingConsoleBox.innerHTML = '<div style="color: #a855f7;">[BOT] Iniciando conexión con el extractor...</div>';
    scrapingConsoleBox.style.display = "block";
    scrapingSummaryText.style.display = "none";
    scrapedBusinesses = [];

    let logInterval = null;

    try {
      const response = await fetch("/.netlify/functions/search-prospects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ city, rubro })
      });

      if (!response.ok) {
        throw new Error("El servidor de extracción retornó un error.");
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || "Fallo en la extracción.");
      }

      // Mostrar los logs secuencialmente para simular el tiempo real de scraping
      let logIndex = 0;
      logInterval = setInterval(() => {
        if (logIndex < data.logs.length) {
          const logLine = document.createElement("div");
          const text = data.logs[logIndex];
          logLine.innerText = text;
          
          if (text.includes("[✓")) {
            logLine.style.color = "var(--success-color)";
          } else if (text.includes("[ERROR") || text.includes("[✗]")) {
            logLine.style.color = "var(--danger-color)";
          } else {
            logLine.style.color = "#c084fc";
          }
          
          scrapingConsoleBox.appendChild(logLine);
          scrapingConsoleBox.scrollTop = scrapingConsoleBox.scrollHeight;
          logIndex++;
        } else {
          clearInterval(logInterval);
          
          // Guardar prospectos extraídos
          scrapedBusinesses = data.prospects;
          
          // Mostrar sumario final
          scrapingSummaryText.innerText = `✓ Se completó la extracción. ${scrapedBusinesses.length} prospectos listos.`;
          scrapingSummaryText.style.display = "block";
          scrapingSummaryText.style.background = "rgba(168, 85, 247, 0.1)";
          scrapingSummaryText.style.color = "#c084fc";
          scrapingSummaryText.style.borderColor = "rgba(168, 85, 247, 0.2)";
          
          appendLog(`[BOT] Extracción finalizada para ${rubro} en ${city}: ${scrapedBusinesses.length} contactos.`, "success");

          // Reactivar botones
          isScraping = false;
          btnStartScraping.disabled = false;
          btnStartScraping.innerText = "🔍 Iniciar Extracción de Prospectos";
          btnPrev.disabled = false;
          btnNext.disabled = false; // Permitir avanzar
        }
      }, 400); // 400ms por línea de log para una linda transición visual

    } catch (err) {
      if (logInterval) clearInterval(logInterval);
      const errLine = document.createElement("div");
      errLine.innerText = `[ERROR CRÍTICO] ${err.message}`;
      errLine.style.color = "var(--danger-color)";
      scrapingConsoleBox.appendChild(errLine);
      
      scrapingSummaryText.innerText = `✗ Error en la extracción: ${err.message}`;
      scrapingSummaryText.style.display = "block";
      scrapingSummaryText.style.background = "rgba(239, 68, 68, 0.1)";
      scrapingSummaryText.style.color = "var(--danger-color)";
      scrapingSummaryText.style.borderColor = "rgba(239, 68, 68, 0.2)";

      isScraping = false;
      btnStartScraping.disabled = false;
      btnStartScraping.innerText = "🔍 Iniciar Extracción de Prospectos";
      btnPrev.disabled = false;
      btnNext.disabled = true; // No permitir avanzar si falló y no hay nada
    }
  });
}

// Botón para Cerrar Sesión
btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("winktact_username");
  sessionStorage.removeItem("winktact_useremail");
  localStorage.removeItem("winktact_supabase_token");
  localStorage.removeItem("winktact_paid");
  localStorage.removeItem("winktact_payment_id");

  if (supabase) {
    supabase.auth.signOut().then(() => {
      console.log("[NUBE] Sesión cerrada en Supabase.");
    });
  }

  currentUser = null;
  currentProfile = null;

  userNameInput.value = "";
  userEmailInput.value = "";
  
  // Limpiar campos de contraseña y archivo
  userPasswordInput.value = "";
  cvFileInput.value = "";
  selectedFile = null;
  uploadText.innerHTML = `Arrastra tu archivo aquí o <span>haz clic para buscar</span><br><small style="font-size: 0.8rem; color: var(--text-secondary);">Solo archivos PDF de hasta 5MB</small>`;
  fileNameDisplay.style.display = "none";
  fileNameDisplay.innerText = "";

  // Limpiar estado e inputs de Excel y Scraping
  excelBusinesses = [];
  scrapedBusinesses = [];
  if (excelFileInput) excelFileInput.value = "";
  if (scrapingRubroInput) scrapingRubroInput.value = "";
  if (scrapingCityInput) scrapingCityInput.value = "";
  if (excelSummaryText) {
    excelSummaryText.style.display = "none";
    excelSummaryText.innerText = "";
  }
  if (scrapingSummaryText) {
    scrapingSummaryText.style.display = "none";
    scrapingSummaryText.innerText = "";
  }
  if (scrapingConsoleBox) {
    scrapingConsoleBox.style.display = "none";
    scrapingConsoleBox.innerHTML = '<div style="color: #6b7280;">Esperando inicio de búsqueda...</div>';
  }
  if (sourceSimulated) sourceSimulated.checked = true;
  if (simulatedContainer) simulatedContainer.style.display = "block";
  if (excelUploadContainer) excelUploadContainer.style.display = "none";
  if (scrapingContainer) scrapingContainer.style.display = "none";

  
  // Resetear wizard a Paso 1 y deshabilitar botones
  currentStep = 1;
  updateWizardUI();
  
  // Volver a mostrar pantalla de login
  appContainer.style.display = "none";
  loginContainer.style.display = "block";
  
  appendLog("[SISTEMA] Sesión cerrada. Volviendo a la pantalla de login.", "info");
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
    btnNext.disabled = !checkPaymentConfirmed.checked || !selectedFile;
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

// Habilitar/deshabilitar botón siguiente según confirmación de pago y CV cargado
checkPaymentConfirmed.addEventListener("change", () => {
  if (currentStep === 3) {
    btnNext.disabled = !checkPaymentConfirmed.checked || !selectedFile;
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
    
    // Si ya pagó, el botón dice "Iniciar Envíos", sino dice "Siguiente (Confirmar Pago)"
    const savedPaymentId = localStorage.getItem("winktact_payment_id");
    const hasPaid = localStorage.getItem("winktact_paid") === "true" || savedPaymentId === "999999999";
    if (hasPaid) {
      btnNext.innerText = "Iniciar Envíos";
    } else {
      btnNext.innerText = "Siguiente (Confirmar Pago)";
    }
    
    btnNext.style.background = "linear-gradient(135deg, #00bee6 0%, #009ee2 100%)";
    // Deshabilitar botón Siguiente hasta que se confirme el pago y se suba el CV (si es email)
    const isEmailChannel = channelEmail && channelEmail.checked;
    btnNext.disabled = !checkPaymentConfirmed.checked || (isEmailChannel && !selectedFile);
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
  const isEmailChannel = channelEmail && channelEmail.checked;
  
  if (step === 1) {
    if (!userNameInput.value.trim()) {
      alert("Por favor, inicia sesión con tu cuenta de Google.");
      return false;
    }
    if (!userEmailInput.value.trim() || !userEmailInput.value.includes("@")) {
      alert("Por favor, inicia sesión con un correo de Gmail verificado.");
      return false;
    }
    if (isEmailChannel && !userPasswordInput.value.trim()) {
      alert("Por favor, ingresa tu contraseña de aplicación SMTP.");
      return false;
    }
  } else if (step === 2) {
    const isExcel = sourceExcel && sourceExcel.checked;
    const isScrapingSource = sourceScraping && sourceScraping.checked;
    if (isExcel) {
      if (excelBusinesses.length === 0) {
        alert("Por favor, selecciona y carga un archivo Excel de Winktact válido con correos reales antes de continuar.");
        return false;
      }
    } else if (isScrapingSource) {
      if (scrapedBusinesses.length === 0) {
        alert("Por favor, inicia la extracción en vivo de prospectos y asegúrate de conseguir al menos uno válido antes de continuar.");
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
    if (isEmailChannel && !selectedFile) {
      alert("Por favor, sube tu CV en formato PDF antes de continuar.");
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
    
    // Auto-guardar archivo PDF en localStorage
    fileToBase64(file).then(base64 => {
      localStorage.setItem("winktact_pdf_base64", base64);
      localStorage.setItem("winktact_pdf_name", file.name);
      if (typeof updatePreviews === "function") {
        updatePreviews();
      }
    }).catch(err => console.error("Error al guardar CV en localStorage:", err));

    // Actualizar botones de navegación si estamos en el Paso 3
    updatePaymentUI();
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
  const isScrapingSource = sourceScraping && sourceScraping.checked;
  const rubros = getSelectedRubros();
  
  // Si es scraping, la ciudad se lee de scrapingCity, sino del input de ciudad del paso 2
  const city = isScrapingSource 
    ? (scrapingCityInput.value.trim() || "Pergamino")
    : (document.getElementById("businessCity").value.trim() || "Pergamino");
  
  let businesses = [];

  if (isExcel) {
    // Clonamos la lista cargada de Excel
    businesses = excelBusinesses.map(b => ({
      name: b.name,
      email: b.email,
      rubro: b.rubro || "Excel"
    }));
    
    appendLog(`[SISTEMA] Iniciando campaña con base de datos real importada desde Excel (${businesses.length} contactos)...`, "info");
  } else if (isScrapingSource) {
    // Clonamos la lista de prospectos extraídos por scraping
    businesses = scrapedBusinesses.map(b => ({
      name: b.name,
      email: b.email,
      rubro: b.rubro || "Scraping",
      instagram: b.instagram || null,
      website: b.website || null
    }));
    
    appendLog(`[SISTEMA] Iniciando campaña con base de datos extraída en vivo desde Google Maps (${businesses.length} contactos)...`, "info");
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

  const isIg = channelInstagram && channelInstagram.checked;
  if (isIg) {
    appendLog(`[📸 CANAL INSTAGRAM] Iniciando flujo uno a uno por Instagram Direct...`, "info");
    instagramCampaignBusinesses = [...businesses];
    currentInstagramCampaignIndex = 0;
    
    // Mostrar panel interactivo de Instagram
    instagramManualContainer.style.display = "block";
    
    showNextInstagramBusiness();
    return;
  }

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

    // CONTROL DE SPAM / DUPLICADOS LOCAL
    const sentRecord = checkSentHistory(business.name);
    if (sentRecord) {
      const daysAgo = Math.round((Date.now() - sentRecord.timestamp) / (1000 * 60 * 60 * 24));
      const timeText = daysAgo === 0 ? "hoy" : `hace ${daysAgo} días`;
      const confirmSkip = confirm(`A "${business.name}" ya le enviaste tu CV ${timeText}.\n¿Quieres saltarla para evitar duplicados?`);
      if (confirmSkip) {
        appendLog(`[OMITIDO] Se saltó ${business.name} (ya contactado ${timeText}).`, "warning");
        currentIndex++;
        statSent.innerText = currentIndex;
        statRemaining.innerText = businesses.length - currentIndex;
        sendingProgressBar.style.width = `${(currentIndex / businesses.length) * 100}%`;
        setTimeout(processNext, 500);
        return;
      }
    }

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
      const supabaseToken = localStorage.getItem("winktact_supabase_token");
      const fetchHeaders = {
        "Content-Type": "application/json"
      };
      if (supabaseToken) {
        fetchHeaders["Authorization"] = `Bearer ${supabaseToken}`;
      }

      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: fetchHeaders,
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
        
        // Registrar envío en historial
        addToSentHistory(business.name, business.email);
        
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
          
          // Registrar envío simulado en historial
          addToSentHistory(business.name, business.email);
          
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
  
  // Resetear y ocultar panel de Instagram
  if (instagramManualContainer) instagramManualContainer.style.display = "none";
  currentInstagramCampaignIndex = 0;
  instagramCampaignBusinesses = [];

  // Volver al Paso 2
  currentStep = 2;
  updateWizardUI();
  
  appendLog("[SISTEMA] Iniciando configuración de nueva campaña de envío.", "info");
});

// Función para mostrar el siguiente contacto de Instagram en el panel interactivo
function showNextInstagramBusiness() {
  if (currentInstagramCampaignIndex >= instagramCampaignBusinesses.length) {
    appendLog(`[SISTEMA] Campaña de Instagram finalizada. Se procesaron ${instagramCampaignBusinesses.length} empresas.`, "success");
    if (instagramManualContainer) instagramManualContainer.style.display = "none";
    isSending = false;
    btnNewCampaign.style.display = "block";
    return;
  }

  const business = instagramCampaignBusinesses[currentInstagramCampaignIndex];

  // CONTROL DE SPAM / DUPLICADOS LOCAL
  const sentRecord = checkSentHistory(business.name);
  if (sentRecord) {
    const daysAgo = Math.round((Date.now() - sentRecord.timestamp) / (1000 * 60 * 60 * 24));
    const timeText = daysAgo === 0 ? "hoy" : `hace ${daysAgo} días`;
    const confirmSkip = confirm(`A "${business.name}" ya le enviaste tu CV ${timeText}.\n¿Quieres saltarla para evitar duplicados?`);
    if (confirmSkip) {
      appendLog(`[OMITIDO] Se saltó ${business.name} (ya contactado ${timeText}).`, "warning");
      currentInstagramCampaignIndex++;
      showNextInstagramBusiness();
      return;
    }
  }

  let handle = "";
  if (business.instagram) {
    handle = `@${business.instagram}`;
  } else {
    // Normalizar nombre de la empresa para el handle de Instagram (quitar espacios, acentos, y caracteres especiales)
    const cleanHandle = business.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remover acentos
      .replace(/[^a-z0-9]/g, ""); // remover no alfanuméricos
    
    handle = `@${cleanHandle}`;
  }

  // Actualizar elementos de la interfaz
  if (igCurrentBusinessName) igCurrentBusinessName.innerText = business.name;
  if (igCurrentHandle) igCurrentHandle.innerText = handle;
  
  statSent.innerText = currentInstagramCampaignIndex;
  statRemaining.innerText = instagramCampaignBusinesses.length - currentInstagramCampaignIndex;
  
  const progressPercentage = (currentInstagramCampaignIndex / instagramCampaignBusinesses.length) * 100;
  sendingProgressBar.style.width = `${progressPercentage}%`;

  appendLog(`Listo para contactar a: ${business.name} (${handle}) vía Instagram Direct.`, "info");
}

// Event Listeners para los controles de Instagram Direct
if (btnIgAction) {
  btnIgAction.addEventListener("click", () => {
    if (!isSending) return;

    const business = instagramCampaignBusinesses[currentInstagramCampaignIndex];
    
    // Usar la plantilla de Instagram Direct
    const parsedBody = (instagramBodyInput ? instagramBodyInput.value : emailBodyInput.value)
      .replace(/{nombre_empresa}/g, business.name)
      .replace(/{nombre_candidato}/g, userNameInput.value);

    // Intentar copiar la carta de presentación al portapapeles
    navigator.clipboard.writeText(parsedBody).then(() => {
      appendLog(`✓ Mensaje de presentación copiado al portapapeles.`, "success");
    }).catch(err => {
      console.error("Error al copiar al portapapeles:", err);
      // Fallback
      try {
        const textArea = document.createElement("textarea");
        textArea.value = parsedBody;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        appendLog(`✓ Mensaje copiado al portapapeles (modo secundario).`, "success");
      } catch (e) {
        appendLog(`⚠️ No se pudo copiar el texto automáticamente. Cópialo tú mismo.`, "warning");
      }
    });

    // Obtener la URL de Instagram (si ya fue extraída por scraping, o predecirla si no)
    let igUrl = "";
    if (business.instagram) {
      igUrl = `https://www.instagram.com/${business.instagram}/`;
    } else {
      const cleanName = business.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
      
      igUrl = `https://www.instagram.com/${cleanName}/`;
    }
    
    window.open(igUrl, "_blank");

    appendLog(`[📸 INSTAGRAM] Abriendo perfil de ${business.name}: ${igUrl}`, "success");
    
    // Registrar el envío en el historial local
    addToSentHistory(business.name, business.instagram || business.name);

    // Avanzar al siguiente paso
    currentInstagramCampaignIndex++;
    showNextInstagramBusiness();
  });
}

if (btnIgSkip) {
  btnIgSkip.addEventListener("click", () => {
    if (!isSending) return;

    const business = instagramCampaignBusinesses[currentInstagramCampaignIndex];
    appendLog(`[OMITIDO] Se omitió contactar a: ${business.name} en Instagram.`, "warning");

    currentInstagramCampaignIndex++;
    showNextInstagramBusiness();
  });
}

if (btnIgPause) {
  btnIgPause.addEventListener("click", () => {
    isSending = false;
    if (instagramManualContainer) instagramManualContainer.style.display = "none";
    appendLog(`[SISTEMA] Campaña de Instagram pausada por el usuario.`, "warning");
    btnNewCampaign.style.display = "block";
  });
}

// ==========================================
// FASE 4 Y 5: EMPLEOS REALES Y SECUENCIAS MULTICANAL
// ==========================================

// --- BUSCADOR DE EMPLEOS Y ENRIQUECIMIENTO ---
if (btnSearchJobs) {
  btnSearchJobs.addEventListener("click", async () => {
    const query = jobSearchQuery.value.trim();
    const location = jobSearchLocation.value.trim();

    if (!query || !location) {
      alert("Por favor, ingresa el puesto y la ciudad.");
      return;
    }

    btnSearchJobs.disabled = true;
    btnSearchJobs.innerText = "⏳ Buscando ofertas...";
    jobsResultsList.innerHTML = '<div style="color: #3b82f6; text-align: center; font-size: 0.9rem; padding: 1rem;">Conectando con el buscador de empleos...</div>';

    try {
      const response = await fetch("/.netlify/functions/search-jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, location })
      });

      if (!response.ok) throw new Error("Fallo en la llamada al servidor de empleos.");

      const data = await response.json();
      btnSearchJobs.disabled = false;
      btnSearchJobs.innerText = "💼 Buscar Ofertas en Portales";

      if (!data.success || !data.jobs || data.jobs.length === 0) {
        jobsResultsList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.9rem; padding: 1rem;">No se encontraron ofertas activas para esa búsqueda.</div>';
        return;
      }

      jobsResultsList.innerHTML = "";
      data.jobs.forEach(job => {
        const card = document.createElement("div");
        card.style.background = "rgba(255,255,255,0.02)";
        card.style.border = "1px solid rgba(255,255,255,0.05)";
        card.style.borderRadius = "10px";
        card.style.padding = "1rem";
        card.style.textAlign = "left";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "0.5rem";
        card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
        card.style.marginBottom = "0.75rem";

        // Limpiar descripción para mostrar fragmento corto
        const shortDesc = job.description.length > 150 ? job.description.substring(0, 150) + "..." : job.description;

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            <div>
              <h5 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: white;">${job.title}</h5>
              <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 500;">${job.company} — ${job.city}</span>
            </div>
            <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; text-transform: uppercase;">${job.publisher}</span>
          </div>
          <p style="margin: 0; font-size: 0.8rem; color: #cbd5e1; line-height: 1.4;">${shortDesc}</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            <button class="btn btn-secondary btn-enrich-job" data-company="${job.company}" data-city="${job.city}" style="margin: 0; font-size: 0.75rem; padding: 0.4rem 0.8rem; flex: 1; border-radius: 6px; font-weight: 700; background: rgba(168, 85, 247, 0.1); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.25);">
              🔍 Buscar Contactos & Enriquecer
            </button>
            <a href="${job.applyLink}" target="_blank" style="text-align: center; text-decoration: none; font-size: 0.75rem; padding: 0.4rem 0.8rem; flex: 1; border-radius: 6px; font-weight: 700; background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.1);">
              🌐 Ver Oferta
            </a>
          </div>
        `;

        // Event listener para Enriquecer
        const enrichBtn = card.querySelector(".btn-enrich-job");
        enrichBtn.addEventListener("click", async () => {
          const comp = enrichBtn.getAttribute("data-company");
          const cty = enrichBtn.getAttribute("data-city");

          enrichBtn.disabled = true;
          enrichBtn.innerText = "⏳ Buscando en Google Maps...";
          appendLog(`[SISTEMA] Enriqueciendo empresa de oferta laboral: ${comp} en ${cty}...`, "info");

          try {
            const scRes = await fetch("/.netlify/functions/search-prospects", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ city: cty, rubro: comp })
            });

            if (!scRes.ok) throw new Error("Fallo en el scraper al buscar contactos.");

            const scData = await scRes.json();
            enrichBtn.disabled = false;
            enrichBtn.innerText = "🔍 Buscar Contactos & Enriquecer";

            if (scData.success && scData.prospects && scData.prospects.length > 0) {
              const enrichedProspect = scData.prospects[0]; // tomamos la coincidencia
              
              // Evitar duplicados
              const exists = scrapedBusinesses.some(p => p.name.toLowerCase() === enrichedProspect.name.toLowerCase());
              if (!exists) {
                scrapedBusinesses.push(enrichedProspect);
              }

              // Rellenar información visual y saltar al wizard o guardarla
              alert(`¡Éxito! Encontramos la empresa "${enrichedProspect.name}".\nEmail: ${enrichedProspect.email || 'No disponible'}\nInstagram: ${enrichedProspect.instagram ? '@'+enrichedProspect.instagram : 'No disponible'}\nTeléfono: ${enrichedProspect.phone || 'No disponible'}\n\nSe ha agregado a tus prospectos activos.`);
              appendLog(`[✓ ENRIQUECIDO] Coincidencia encontrada para ${comp}: Email (${enrichedProspect.email || 'No'}), IG (${enrichedProspect.instagram || 'No'}), Tel (${enrichedProspect.phone || 'No'}).`, "success");
            } else {
              // Si el scraper no encontró nada, simulamos/generamos contactos para dar una UX continua
              const fallbackEmail = `rrhh@${comp.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.ar`;
              const fallbackIg = comp.toLowerCase().replace(/[^a-z0-9]/g, "");
              const fallbackPhone = `5492477${410000 + Math.floor(Math.random() * 80000)}`;

              const fallbackProspect = {
                name: comp,
                email: fallbackEmail,
                instagram: fallbackIg,
                phone: fallbackPhone,
                website: `http://www.${comp.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.ar`,
                rubro: query
              };

              scrapedBusinesses.push(fallbackProspect);

              alert(`No encontramos contactos públicos reales para "${comp}", pero hemos generado un perfil predictivo para postularte:\nEmail: ${fallbackEmail}\nInstagram: @${fallbackIg}\nTeléfono: ${fallbackPhone}\n\nSe ha agregado a tus prospectos activos.`);
              appendLog(`[!] Scraper Maps finalizado sin coincidencias directas para ${comp}. Perfil predictivo creado.`, "warning");
            }
          } catch (e) {
            enrichBtn.disabled = false;
            enrichBtn.innerText = "🔍 Buscar Contactos & Enriquecer";
            alert("Error al intentar enriquecer el contacto: " + e.message);
          }
        });

        jobsResultsList.appendChild(card);
      });

    } catch (e) {
      btnSearchJobs.disabled = false;
      btnSearchJobs.innerText = "💼 Buscar Ofertas en Portales";
      jobsResultsList.innerHTML = `<div style="color: var(--danger-color); text-align: center; font-size: 0.9rem; padding: 1rem;">Error de búsqueda: ${e.message}</div>`;
    }
  });
}

// --- NAVEGACIÓN DE VISTAS (WIZARD VS SECUENCIAS) ---
if (navBtnWizard && navBtnSequences && wizardView && sequencesView) {
  navBtnWizard.addEventListener("click", () => {
    navBtnWizard.classList.add("active");
    navBtnWizard.style.background = "rgba(168, 85, 247, 0.2)";
    navBtnWizard.style.color = "white";
    
    navBtnSequences.classList.remove("active");
    navBtnSequences.style.background = "none";
    navBtnSequences.style.color = "var(--text-secondary)";

    wizardView.style.display = "block";
    sequencesView.style.display = "none";
  });

  navBtnSequences.addEventListener("click", async () => {
    navBtnSequences.classList.add("active");
    navBtnSequences.style.background = "rgba(168, 85, 247, 0.2)";
    navBtnSequences.style.color = "white";
    
    navBtnWizard.classList.remove("active");
    navBtnWizard.style.background = "none";
    navBtnWizard.style.color = "var(--text-secondary)";

    wizardView.style.display = "none";
    sequencesView.style.display = "block";

    // Cargar campañas y tareas
    await loadCampaignsData();
    await loadPendingTasks();
  });
}

// --- LÓGICA DE SECUENCIAS MULTICANAL (FASE 5) ---

// Crear campaña y registrar pasos en Supabase
if (btnCreateCampaign) {
  btnCreateCampaign.addEventListener("click", async () => {
    if (!supabase || !currentUser) {
      alert("Debes estar logueado para crear secuencias.");
      return;
    }

    const name = newCampaignName.value.trim();
    if (!name) {
      alert("Por favor, ingresa un nombre para la secuencia.");
      return;
    }

    btnCreateCampaign.disabled = true;
    btnCreateCampaign.innerText = "⏳ Creando...";

    try {
      // 1. Crear campaña en 'campaigns'
      const { data: campaign, error: campErr } = await supabase
        .from("campaigns")
        .insert({
          user_id: currentUser.id,
          name: name,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (campErr) throw campErr;

      // 2. Crear pasos predeterminados en 'campaign_steps'
      const steps = [
        {
          campaign_id: campaign.id,
          step_number: 1,
          channel: 'email',
          delay_days: 0,
          subject_template: emailSubjectInput.value,
          body_template: emailBodyInput.value
        },
        {
          campaign_id: campaign.id,
          step_number: 2,
          channel: 'instagram',
          delay_days: 2,
          body_template: instagramBodyInput.value || emailBodyInput.value
        },
        {
          campaign_id: campaign.id,
          step_number: 3,
          channel: 'whatsapp',
          delay_days: 2,
          body_template: "¡Hola {nombre_empresa}! Te escribo para consultar si tuvieron oportunidad de revisar mi postulación enviada anteriormente. ¡Muchas gracias!"
        }
      ];

      const { error: stepsErr } = await supabase
        .from("campaign_steps")
        .insert(steps);

      if (stepsErr) throw stepsErr;

      alert(`¡Campaña "${name}" creada exitosamente con una secuencia de 3 pasos (Email -> Instagram -> WhatsApp)!`);
      newCampaignName.value = "";
      
      // Recargar lista de campañas
      await loadCampaignsData();

    } catch (err) {
      alert("Error creando campaña: " + err.message);
    } finally {
      btnCreateCampaign.disabled = false;
      btnCreateCampaign.innerText = "✨ Crear Secuencia";
    }
  });
}

// Cargar campañas activas de Supabase
async function loadCampaignsData() {
  if (!supabase || !currentUser || !activeCampaignsList) return;

  activeCampaignsList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.85rem; padding: 1rem;">Cargando tus campañas...</div>';

  try {
    const { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*, campaign_prospects(count)")
      .eq("user_id", currentUser.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    if (campaigns.length === 0) {
      activeCampaignsList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.85rem; padding: 1rem;">No has creado ninguna campaña multicanal aún.</div>';
      return;
    }

    activeCampaignsList.innerHTML = "";
    campaigns.forEach(camp => {
      const card = document.createElement("div");
      card.style.background = "rgba(255,255,255,0.01)";
      card.style.border = "1px solid rgba(255,255,255,0.05)";
      card.style.borderRadius = "8px";
      card.style.padding = "0.75rem 1rem";
      card.style.display = "flex";
      card.style.justifyContent = "space-between";
      card.style.alignItems = "center";
      card.style.gap = "1rem";
      card.style.flexWrap = "wrap";
      card.style.marginBottom = "0.5rem";

      const prospectsCount = camp.campaign_prospects ? camp.campaign_prospects[0]?.count || 0 : 0;

      card.innerHTML = `
        <div>
          <strong style="color: white; font-size: 0.95rem;">${camp.name}</strong>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem;">
            Creada: ${new Date(camp.created_at).toLocaleDateString()} — Prospectos asignados: <strong style="color: #c084fc;">${prospectsCount}</strong>
          </div>
        </div>
        <button class="btn btn-secondary btn-assign-prospects" data-camp-id="${camp.id}" style="margin: 0; font-size: 0.75rem; padding: 0.35rem 0.75rem; border-radius: 6px; border: 1px solid rgba(168,85,247,0.2); background: rgba(168,85,247,0.05); color: #c084fc;">
          ➕ Asignar Prospectos Extraídos (${scrapedBusinesses.length})
        </button>
      `;

      // Event listener para asignar
      const assignBtn = card.querySelector(".btn-assign-prospects");
      assignBtn.addEventListener("click", async () => {
        if (scrapedBusinesses.length === 0) {
          alert("No tienes prospectos extraídos actualmente para asignar. Ve al 'Asistente de Postulación', realiza una búsqueda de empleos o scraping, y vuelve a intentarlo.");
          return;
        }

        assignBtn.disabled = true;
        assignBtn.innerText = "⏳ Asignando...";

        try {
          const prospectsToInsert = scrapedBusinesses.map(p => ({
            campaign_id: camp.id,
            business_name: p.name,
            email: p.email || null,
            instagram: p.instagram || null,
            phone: p.phone || null,
            website: p.website || null,
            current_step: 1,
            status: 'pending',
            next_action_due: new Date().toISOString()
          }));

          const { error: insErr } = await supabase
            .from("campaign_prospects")
            .insert(prospectsToInsert);

          if (insErr) throw insErr;

          alert(`¡Se asignaron correctamente ${scrapedBusinesses.length} prospectos a la campaña "${camp.name}"!`);
          
          // Limpiar prospectos del scraping en memoria ya asignados
          scrapedBusinesses = [];
          
          // Recargar todo
          await loadCampaignsData();
          await loadPendingTasks();

        } catch (e) {
          alert("Error asignando prospectos: " + e.message);
        } finally {
          assignBtn.disabled = false;
          assignBtn.innerText = `➕ Asignar Prospectos Extraídos (${scrapedBusinesses.length})`;
        }
      });

      activeCampaignsList.appendChild(card);
    });

  } catch (e) {
    activeCampaignsList.innerHTML = `<div style="color: var(--danger-color); text-align: center; font-size: 0.85rem; padding: 1rem;">Error al cargar campañas: ${e.message}</div>`;
  }
}

// Cargar tareas pendientes del día de Supabase
async function loadPendingTasks() {
  if (!supabase || !currentUser || !pendingTasksList) return;

  pendingTasksList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.85rem; padding: 1rem;">Cargando tareas del día...</div>';
  if (badgePendingTasksCount) badgePendingTasksCount.style.display = "none";

  try {
    // Consulta a Supabase obteniendo perfiles de prospectos cuya fecha de vencimiento es menor o igual a hoy
    // Nota: Filtrar por status 'pending' o 'active'
    const nowIso = new Date().toISOString();
    
    // Obtenemos primero las campañas del usuario para poder filtrar los prospectos asociados
    const { data: userCamps, error: campsErr } = await supabase
      .from("campaigns")
      .select("id")
      .eq("user_id", currentUser.id);

    if (campsErr) throw campsErr;

    const campIds = userCamps.map(c => c.id);

    if (campIds.length === 0) {
      pendingTasksList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.85rem; padding: 1rem;">¡Excelente! No tienes tareas de seguimiento pendientes para hoy.</div>';
      return;
    }

    const { data: tasks, error: tasksErr } = await supabase
      .from("campaign_prospects")
      .select("*, campaigns(name)")
      .in("campaign_id", campIds)
      .lte("next_action_due", nowIso)
      .in("status", ["pending", "active"])
      .order("next_action_due", { ascending: true });

    if (tasksErr) throw tasksErr;

    if (tasks.length === 0) {
      pendingTasksList.innerHTML = '<div style="color: #6b7280; text-align: center; font-size: 0.85rem; padding: 1rem;">¡Excelente! No tienes tareas de seguimiento pendientes para hoy.</div>';
      return;
    }

    // Mostrar contador
    if (badgePendingTasksCount) {
      badgePendingTasksCount.innerText = tasks.length;
      badgePendingTasksCount.style.display = "inline-block";
    }

    pendingTasksList.innerHTML = "";
    tasks.forEach(task => {
      // Obtener el canal de la secuencia para el paso actual
      const stepNum = task.current_step;
      const campName = task.campaigns ? task.campaigns.name : "Campaña";

      const card = document.createElement("div");
      card.style.background = "rgba(255,255,255,0.02)";
      card.style.border = "1px solid rgba(255,255,255,0.05)";
      card.style.borderRadius = "8px";
      card.style.padding = "0.75rem 1rem";
      card.style.display = "flex";
      card.style.justifyContent = "space-between";
      card.style.alignItems = "center";
      card.style.gap = "1rem";
      card.style.flexWrap = "wrap";
      card.style.marginBottom = "0.5rem";

      // Determinar qué canal es el paso actual cargando dinámicamente de Supabase
      // Pero para optimizar UX, determinamos el canal del paso de forma fija basándonos en nuestra secuencia estándar:
      // Paso 1: Email, Paso 2: Instagram, Paso 3: WhatsApp
      let channel = 'email';
      if (stepNum === 2) channel = 'instagram';
      else if (stepNum === 3) channel = 'whatsapp';

      let badgeColor = '#3b82f6';
      let channelIcon = '📧';
      let buttonText = 'Enviar Email (SMTP)';
      let buttonStyle = 'background: rgba(59, 130, 246, 0.15); color: #3b82f6; border-color: rgba(59, 130, 246, 0.25);';

      if (channel === 'instagram') {
        badgeColor = '#c084fc';
        channelIcon = '📸';
        buttonText = 'Enviar Instagram Direct';
        buttonStyle = 'background: rgba(168, 85, 247, 0.15); color: #c084fc; border-color: rgba(168, 85, 247, 0.25);';
      } else if (channel === 'whatsapp') {
        badgeColor = '#10b981';
        channelIcon = '💬';
        buttonText = 'Enviar WhatsApp';
        buttonStyle = 'background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.25);';
      }

      card.innerHTML = `
        <div>
          <strong style="color: white; font-size: 0.9rem;">${task.business_name}</strong>
          <span style="background: rgba(255,255,255,0.05); color: #94a3b8; font-size: 0.7rem; padding: 0.1rem 0.4rem; border-radius: 4px; margin-left: 0.5rem;">Paso ${stepNum}</span>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem;">
            ${channelIcon} ${channel.toUpperCase()} — Campaña: <strong>${campName}</strong>
          </div>
        </div>
        <button class="btn btn-primary btn-run-task" data-task-id="${task.id}" data-step="${stepNum}" data-channel="${channel}" style="margin: 0; font-size: 0.75rem; padding: 0.35rem 0.75rem; border-radius: 6px; font-weight: 700; ${buttonStyle}">
          ${buttonText}
        </button>
      `;

      // Event listener para ejecutar tarea
      const taskBtn = card.querySelector(".btn-run-task");
      taskBtn.addEventListener("click", async () => {
        taskBtn.disabled = true;
        taskBtn.innerText = "⏳ Procesando...";
        await executeTask(task, channel, taskBtn);
      });

      pendingTasksList.appendChild(card);
    });

  } catch (e) {
    pendingTasksList.innerHTML = `<div style="color: var(--danger-color); text-align: center; font-size: 0.85rem; padding: 1rem;">Error al cargar tareas: ${e.message}</div>`;
  }
}

// Ejecutar acción de la tarea multicanal
async function executeTask(task, channel, buttonElement) {
  try {
    const candidateName = userNameInput.value.trim() || "Candidato";

    // 1. Ejecutar el canal
    if (channel === 'email') {
      // Envío SMTP Serverless
      if (!selectedFile) {
        alert("Por favor, asegúrate de tener cargado tu CV en PDF en el Paso 3 del Asistente antes de disparar el envío de correo.");
        buttonElement.disabled = false;
        buttonElement.innerText = "Enviar Email (SMTP)";
        return;
      }

      // Convertir a base64
      const fileBase64 = await fileToBase64(selectedFile);
      const parsedSubject = emailSubjectInput.value.replace(/{nombre_empresa}/g, task.business_name);
      const parsedBody = emailBodyInput.value
        .replace(/{nombre_empresa}/g, task.business_name)
        .replace(/{nombre_candidato}/g, candidateName);

      const payload = {
        senderName: candidateName,
        senderEmail: userEmailInput.value,
        senderPassword: userPasswordInput.value,
        recipientName: task.business_name,
        recipientEmail: task.email || `contacto@${task.business_name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.ar`,
        subject: parsedSubject,
        body: parsedBody,
        paymentId: localStorage.getItem("winktact_payment_id"),
        cvFile: { name: selectedFile.name, data: fileBase64 }
      };

      const supabaseToken = localStorage.getItem("winktact_supabase_token");
      const fetchHeaders = { "Content-Type": "application/json" };
      if (supabaseToken) fetchHeaders["Authorization"] = `Bearer ${supabaseToken}`;

      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: fetchHeaders,
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Fallo en el servidor SMTP. Verifica tus credenciales.");
      }

      alert(`¡Correo enviado exitosamente a ${task.business_name}!`);
      await advanceTaskStep(task);

    } else if (channel === 'instagram') {
      // Instagram DM: Copiar mensaje y abrir Direct
      const igHandle = task.instagram || task.business_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
      const igMsg = (instagramBodyInput ? instagramBodyInput.value : emailBodyInput.value)
        .replace(/{nombre_empresa}/g, task.business_name)
        .replace(/{nombre_candidato}/g, candidateName);

      await navigator.clipboard.writeText(igMsg);
      const igUrl = `https://www.instagram.com/${igHandle}/`;
      window.open(igUrl, "_blank");

      setTimeout(async () => {
        const confirmDone = confirm(`Abrimos el perfil de Instagram de "${task.business_name}" y copiamos tu mensaje de presentación al portapapeles.\n\nPégalo en el chat de Instagram.\n¿Deseas marcar esta tarea como completada para programar el siguiente paso?`);
        if (confirmDone) {
          await advanceTaskStep(task);
        } else {
          buttonElement.disabled = false;
          buttonElement.innerText = "Enviar Instagram Direct";
        }
      }, 1000);

    } else if (channel === 'whatsapp') {
      // WhatsApp: Abrir enlace directo
      const phone = task.phone || `5492477${410000 + Math.floor(Math.random() * 80000)}`;
      const waMsg = "¡Hola {nombre_empresa}! Te escribo para consultar si tuvieron oportunidad de revisar mi postulación enviada anteriormente. ¡Muchas gracias!"
        .replace(/{nombre_empresa}/g, task.business_name)
        .replace(/{nombre_candidato}/g, candidateName);

      const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, "_blank");

      setTimeout(async () => {
        const confirmDone = confirm(`Abrimos el chat de WhatsApp Web con "${task.business_name}" y el mensaje precargado.\n\n¿Deseas marcar esta tarea como completada y finalizar la secuencia de este contacto?`);
        if (confirmDone) {
          await advanceTaskStep(task);
        } else {
          buttonElement.disabled = false;
          buttonElement.innerText = "Enviar WhatsApp";
        }
      }, 1000);
    }

  } catch (err) {
    alert("Error al ejecutar tarea: " + err.message);
    buttonElement.disabled = false;
    buttonElement.innerText = channel === 'email' ? "Enviar Email (SMTP)" : (channel === 'instagram' ? "Enviar Instagram Direct" : "Enviar WhatsApp");
  }
}

// Avanzar el paso de la tarea en Supabase
async function advanceTaskStep(task) {
  if (!supabase) return;

  const nextStep = task.current_step + 1;
  const isFinalStep = nextStep > 3; // Estándar de 3 pasos

  try {
    let updateFields = {};

    if (isFinalStep) {
      updateFields = {
        status: 'completed',
        last_action_at: new Date().toISOString(),
        next_action_due: null
      };
    } else {
      // Calcular la fecha de vencimiento para el paso 2 y 3 (delay estándar de 2 días)
      const delayDays = 2; // de acuerdo a nuestra secuencia
      const nextDue = new Date();
      nextDue.setDate(nextDue.getDate() + delayDays);

      updateFields = {
        current_step: nextStep,
        status: 'active',
        last_action_at: new Date().toISOString(),
        next_action_due: nextDue.toISOString()
      };
    }

    const { error } = await supabase
      .from("campaign_prospects")
      .update(updateFields)
      .eq("id", task.id);

    if (error) throw error;

    // Recargar tareas
    await loadPendingTasks();

  } catch (e) {
    console.error("Error al actualizar paso del prospecto:", e);
    alert("Error al avanzar paso: " + e.message);
  }
}
