/* ============================================================
   data.js — Contenido de la guía (fácil de editar)
   ============================================================ */

const FASES = [
  {
    n: 1, nombre: "Empatizar", color: "var(--cat-sostenibilidad)",
    sub: "Entender a las personas antes de proponer nada",
    que: "Comprender a fondo las necesidades, emociones y el contexto real de las personas para quienes diseñas. No supongas: escucha y observa.",
    hacer: "Salgan a hablar con 4–6 personas reales del valle que vivan el problema del reto. Anoten frases textuales, no solo resúmenes.",
    instrumentos: ["Entrevista semiestructurada", "Observación (mosca en la pared)"],
    tip: "En 3 días no hay tiempo para encuestas masivas. 5 buenas conversaciones valen más que 100 formularios sin contexto."
  },
  {
    n: 2, nombre: "Definir", color: "var(--cat-turismo)",
    sub: "Convertir lo que escuchaste en un problema claro",
    que: "Filtrar y ordenar todo lo recolectado para nombrar el problema real, no el síntoma. Aquí nace el foco del proyecto.",
    hacer: "Redacten UNA frase de reto: «[Usuario] necesita [necesidad] porque [hallazgo sorprendente]». Si no cabe en una frase, todavía está difuso.",
    instrumentos: ["User Persona", "Journey Map (mapa de recorrido)"],
    tip: "Un buen problema bien definido ya es media solución. Eviten saltar a la app o al producto antes de tener esta frase."
  },
  {
    n: 3, nombre: "Idear", color: "var(--cat-agricultura)",
    sub: "Generar muchas ideas sin juzgarlas todavía",
    que: "Fomentar el pensamiento divergente: cantidad antes que calidad. Las ideas locas abren caminos a las viables.",
    hacer: "10 minutos de lluvia de ideas en silencio (cada quien escribe en post-its), luego agrupen y voten. Elijan 1 idea para prototipar.",
    instrumentos: ["Brainstorming (lluvia de ideas)", "SCAMPER"],
    tip: "Equipo multidisciplinario = ventaja. Que opinen todos: la persona de semestres iniciales suele ver lo que los avanzados ya dan por obvio."
  },
  {
    n: 4, nombre: "Prototipar", color: "var(--cat-negocios)",
    sub: "Hacer la idea tangible, rápido y barato",
    que: "Materializar la mejor idea en algo que se pueda ver y tocar: un boceto, una maqueta de cartón, una pantalla dibujada a mano.",
    hacer: "Construyan la versión más simple que comunique la idea. Cartón, papel, una presentación o un wireframe en papel bastan. No pulan de más.",
    instrumentos: ["Wireframes y Mockups", "Prototipo de baja fidelidad"],
    tip: "Si en el prototipo invierten más de medio día, probablemente lo están haciendo demasiado perfecto para el día 2."
  },
  {
    n: 5, nombre: "Testear", color: "var(--cat-gastronomia)",
    sub: "Mostrarlo a personas reales y aprender",
    que: "Poner el prototipo frente a usuarios reales para recoger retroalimentación honesta y mejorar antes de la presentación final.",
    hacer: "Muestren el prototipo a 3 personas distintas. Cállense y observen: anoten qué les confunde, qué les gusta y qué piden.",
    instrumentos: ["Matriz de Feedback", "Test de usuarios (usabilidad)"],
    tip: "El testeo no es para confirmar que tienen razón, es para descubrir dónde se equivocaron mientras todavía hay tiempo de corregir."
  }
];

const INSTRUMENTOS = [
  { fase: "Empatizar", color: "var(--cat-sostenibilidad)", nombre: "Entrevista semiestructurada",
    desc: "Conversación guiada por una pauta flexible para descubrir motivaciones, frustraciones y necesidades.",
    ej: "Reto turismo: preguntar a un visitante «contame tu último paseo por el valle, ¿qué fue lo más difícil de organizar?»" },
  { fase: "Empatizar", color: "var(--cat-sostenibilidad)", nombre: "Observación (mosca en la pared)",
    desc: "Estudio etnográfico: observar a la persona en su entorno natural sin intervenir ni preguntar.",
    ej: "Reto gastronomía: pasar una hora viendo cómo se atiende en una pensión de La Cancha y anotar cuellos de botella." },
  { fase: "Definir", color: "var(--cat-turismo)", nombre: "User Persona",
    desc: "Plantilla que resume al usuario tipo: edad, ocupación, objetivos, motivaciones, frustraciones y productos que usa.",
    ej: "«Marisol, 34, comerciante de Quillacollo, quiere vender más sin perder tiempo en redes que no entiende.»" },
  { fase: "Definir", color: "var(--cat-turismo)", nombre: "Journey Map",
    desc: "Mapa del recorrido del usuario por etapas (conciencia, consideración, decisión, retención) con sus metas y emociones.",
    ej: "Reto educación: mapear cómo un estudiante de colegio busca, elige y abandona un curso de reforzamiento." },
  { fase: "Idear", color: "var(--cat-agricultura)", nombre: "Brainstorming",
    desc: "Sesión grupal para proponer la mayor cantidad de soluciones posibles sin juzgar ninguna durante la generación.",
    ej: "Reto agricultura: 30 ideas en 10 min para reducir pérdidas poscosecha de frutilla en los valles." },
  { fase: "Idear", color: "var(--cat-agricultura)", nombre: "SCAMPER",
    desc: "Preguntas para innovar algo que ya existe: Sustituir, Combinar, Adaptar, Modificar, Proponer otro uso, Eliminar, Revertir.",
    ej: "Tomar la chicha tradicional y «Modificar»: versión sin alcohol, en lata, para nuevos públicos." },
  { fase: "Prototipar", color: "var(--cat-negocios)", nombre: "Wireframes y Mockups",
    desc: "Diseños esquemáticos (wireframe) y visuales (mockup) en 2D de una interfaz web o app.",
    ej: "Dibujar a mano las 3 pantallas clave de una app antes de abrir cualquier herramienta digital." },
  { fase: "Prototipar", color: "var(--cat-negocios)", nombre: "Prototipo de baja fidelidad",
    desc: "Representación rápida con materiales básicos (cartón, post-its) para validar la forma básica de la solución.",
    ej: "Maqueta de cartón de un puesto rediseñado de comida rápida saludable." },
  { fase: "Testear", color: "var(--cat-gastronomia)", nombre: "Matriz de Feedback",
    desc: "Cuadrante de 4 zonas: lo que funciona, preguntas, nuevas ideas y críticas constructivas.",
    ej: "Tras mostrar el prototipo, ordenar cada comentario del usuario en una de las 4 zonas." },
  { fase: "Testear", color: "var(--cat-gastronomia)", nombre: "Test de usuarios",
    desc: "Observar directamente al usuario interactuando con el prototipo para detectar problemas en tiempo real.",
    ej: "Pedir a alguien que «use» el prototipo sin ayuda y anotar dónde se traba." }
];

const CATEGORIAS = [
  { id: "sostenibilidad", nombre: "Sostenibilidad", color: "var(--cat-sostenibilidad)",
    reto: "Reducir el impacto ambiental en la vida cotidiana del valle.",
    contexto: "Cochabamba enfrenta escasez de agua, contaminación del río Rocha y manejo de residuos en mercados.",
    ejemplo: "Sistema vecinal de separación y compostaje de residuos orgánicos para los mercados de la zona sur." },
  { id: "agricultura", nombre: "Agricultura", color: "var(--cat-agricultura)",
    reto: "Mejorar la producción o comercialización de los productores del valle.",
    contexto: "El valle es granero de Bolivia, pero el pequeño productor pierde margen con los intermediarios.",
    ejemplo: "Plataforma que conecta productores de Punata y Cliza directo con restaurantes de la ciudad." },
  { id: "turismo", nombre: "Turismo", color: "var(--cat-turismo)",
    reto: "Atraer y mejorar la experiencia de quienes visitan Cochabamba.",
    contexto: "El Cristo, el Tunari y los valles atraen turismo, pero falta información y servicios articulados.",
    ejemplo: "Ruta autoguiada de chicherías y miradores con códigos QR e historias locales." },
  { id: "educacion", nombre: "Educación", color: "var(--cat-educacion)",
    reto: "Facilitar el aprendizaje de estudiantes o de la comunidad.",
    contexto: "Brechas de acceso y reforzamiento desigual entre colegios del centro y la periferia.",
    ejemplo: "Red de tutorías entre pares universitarios y estudiantes de colegio de zonas alejadas." },
  { id: "negocios", nombre: "Negocios y emprendimiento", color: "var(--cat-negocios)",
    reto: "Crear valor económico resolviendo una necesidad de mercado.",
    contexto: "Muchos micronegocios cochabambinos sobreviven sin herramientas de gestión ni presencia digital.",
    ejemplo: "Servicio simple de catálogo y pedidos por WhatsApp para tiendas de barrio." },
  { id: "gastronomia", nombre: "Gastronomía", color: "var(--cat-gastronomia)",
    reto: "Poner en valor o modernizar la cocina cochabambina.",
    contexto: "Capital gastronómica de Bolivia (silpancho, pique, chicha), con enorme potencial poco aprovechado.",
    ejemplo: "Marca de salsas tradicionales (llajwa, ají) envasadas, listas para exportar el sabor del valle." }
];

const CRITERIOS = {
  Persona: { color: "var(--cat-sostenibilidad)", items: [
    "Vibro con la idea, me gusta mucho",
    "Poseo talento para sacar adelante la idea",
    "Tengo conocimiento en este campo",
    "Poseo experiencia práctica",
    "Tengo red de contactos"
  ]},
  Mercado: { color: "var(--cat-turismo)", items: [
    "Le veo potencial en el mercado",
    "La idea atiende necesidades insatisfechas",
    "Conozco la competencia",
    "Sé cómo llegar con éxito al mercado objetivo",
    "La idea tiene elementos innovadores / diferenciadores"
  ]},
  Recursos: { color: "var(--cat-negocios)", items: [
    "Puedo conseguir gente con el perfil requerido",
    "Tengo acceso a la tecnología necesaria",
    "Puedo conseguir insumos y materias primas",
    "Cuento con los recursos económicos",
    "Este negocio puede ser rentable"
  ]}
};

const CHECKLIST = [
  { d: "Día 1", items: [
    "Conocer al equipo y repartir roles según fortalezas",
    "Elegir y entender la categoría del reto",
    "Entrevistar a 4–6 personas reales (Empatizar)",
    "Redactar la frase del problema (Definir)",
    "Hacer la lluvia de ideas y elegir UNA (Idear)"
  ]},
  { d: "Día 2", items: [
    "Construir el prototipo de baja fidelidad",
    "Llenar el Business Model Canvas",
    "Testear con 3 personas y recoger feedback",
    "Ajustar la idea según lo aprendido",
    "Evaluar la idea con la matriz de criterios"
  ]},
  { d: "Día 3", items: [
    "Pulir el prototipo final",
    "Preparar el pitch (problema → solución → valor)",
    "Ensayar la presentación cronometrada",
    "Definir quién presenta cada parte",
    "Presentar ante el jurado"
  ]}
];

const JOURNEY = {
  cols: ["Conciencia", "Consideración", "Decisión", "Retención"],
  filas: [
    { nombre: "Metas",        hint: "¿Qué quiere lograr en esta etapa?" },
    { nombre: "Sentimientos", hint: "¿Cómo se siente? (puedes usar emojis)" },
    { nombre: "Desafíos",     hint: "¿Qué obstáculos enfrenta?" },
    { nombre: "Motivaciones", hint: "¿Qué lo impulsa a avanzar?" }
  ]
};

const FEEDBACK = [
  { id: "funciona", titulo: "Lo que funciona", icono: "✓", color: "var(--cat-sostenibilidad)",
    hint: "Lo que gustó o resultó claro para el usuario." },
  { id: "preguntas", titulo: "Preguntas", icono: "?", color: "var(--cat-turismo)",
    hint: "Dudas que surgieron al usar el prototipo." },
  { id: "ideas", titulo: "Ideas nuevas", icono: "💡", color: "var(--cat-agricultura)",
    hint: "Sugerencias y oportunidades que aparecieron." },
  { id: "criticas", titulo: "Críticas constructivas", icono: "✗", color: "var(--cat-negocios)",
    hint: "Lo que confundió, falló o no convenció." }
];

const EJEMPLO = {
  cat: "Categoría: Turismo + Gastronomía",
  titulo: "QHATU — Ruta de sabores del valle",
  resumen: "Un equipo mixto (turismo, sistemas, administración y diseño) resuelve un reto de turismo en 3 días.",
  pasos: [
    { ph: "1 · Empatizar", txt: ["Entrevistan a 5 turistas en la plaza principal. Hallazgo textual: «quería probar comida típica de verdad, pero no sabía a dónde ir sin que me vean cara de turista».", "Observan que la gente confía más en la recomendación de un local que en una guía impresa."] },
    { ph: "2 · Definir", txt: ["Frase del problema: «El visitante quiere vivir la gastronomía auténtica del valle, pero no encuentra lugares confiables ni la historia detrás de cada plato.»"] },
    { ph: "3 · Idear", txt: ["Lluvia de 28 ideas. Ganadora por votación: una ruta autoguiada de comedores y chicherías tradicionales, con QR que cuentan la historia de cada lugar y un sello que se colecciona."] },
    { ph: "4 · Prototipar", txt: ["Dibujan a mano 3 pantallas (mapa de la ruta, ficha de un comedor, sello coleccionable) y arman un folleto de cartón con los 4 primeros puntos de la ruta."] },
    { ph: "5 · Testear", txt: ["Muestran el folleto a 3 visitantes. Dos no entienden el sello; uno pide precios. Ajustan: agregan rango de precio por plato y simplifican el sello a un mapa con check."] },
    { ph: "Canvas", txt: ["Propuesta de valor: experiencia gastronómica auténtica y guiada. Segmento: turista nacional 25–45 años. Ingresos: comisión de comedores aliados + venta del pasaporte físico. Socios clave: chicherías, comedores y la alcaldía."] }
  ]
};
