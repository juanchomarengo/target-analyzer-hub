/* =========================================================================
   FAQ — Configuración y datos
   -------------------------------------------------------------------------
   El listado de preguntas se trae EN VIVO desde un Google Sheet publicado
   como CSV. Si el Sheet no se puede cargar (sin conexión, todavía no está
   publicado, etc.), la web usa la copia de FALLBACK de más abajo, así nunca
   se ve rota.

   COMO CONECTAR EL GOOGLE SHEET (lo hace el Management Team, una sola vez):
   1. Crear un Sheet con 3 columnas en la primera fila (encabezados):
          categoria | pregunta | respuesta
   2. Cargar una pregunta por fila.
   3. Archivo -> Compartir -> Publicar en la web -> elegir la hoja -> formato
      "Valores separados por comas (.csv)" -> Publicar.
   4. Copiar la URL que termina en "output=csv" y pegarla acá abajo, en
      FAQ_CONFIG.sheetCsvUrl.

   Para sumar/editar preguntas: se edita el Sheet. No hace falta tocar código.
   ========================================================================= */

const FAQ_CONFIG = {
  // Pegá acá la URL del Sheet publicado como CSV. Si queda vacía, se usa el fallback.
  sheetCsvUrl: "",
  // Cuántas preguntas mostrar antes de que aparezca el contador "+N más" (informativo).
  // El buscador y las categorías filtran sobre TODAS de todos modos.
};

/* Copia de respaldo. Son de EJEMPLO: el contenido real vive en el Google Sheet. */
const FAQ_FALLBACK = [
  {
    categoria: "General",
    pregunta: "¿Qué es este sitio?",
    respuesta:
      "Es el hub del Management Team para acompañar el proyecto final (Target Analyzer). Acá centralizamos las preguntas frecuentes, los links importantes y el contacto del equipo.",
  },
  {
    categoria: "General",
    pregunta: "¿Para quién es?",
    respuesta:
      "Principalmente para los alumnos de las 4 comisiones de Desarrollo Web Full Stack, aunque cualquiera puede verlo.",
  },
  {
    categoria: "Grupos",
    pregunta: "¿A quién le escribo si mi grupo tiene una duda?",
    respuesta:
      "Al Management Team. Somos el enlace con el profe Estayno y estamos para guiarte durante todo el proyecto. Tenés nuestros contactos en el pie de página.",
  },
  {
    categoria: "Soporte",
    pregunta: "¿Cómo contacto al Management Team?",
    respuesta:
      "Escribinos a cualquiera de los mails que están en la sección de contacto, al final de la página.",
  },
  {
    categoria: "Entregas",
    pregunta: "Pregunta de ejemplo sobre entregas",
    respuesta:
      "Esta es una respuesta de ejemplo. El contenido real lo carga el equipo en el Google Sheet.",
  },
];

// Disponibles globalmente para main.js (no usamos módulos para que funcione sin servidor).
window.FAQ_CONFIG = FAQ_CONFIG;
window.FAQ_FALLBACK = FAQ_FALLBACK;
