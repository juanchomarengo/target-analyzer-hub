/* =========================================================================
   Demo — Configuración de la sección del video
   -------------------------------------------------------------------------
   La sección "Mirá el Target Analyzer en acción" muestra una portada hecha
   con CSS (skeleton) y recién al hacer click carga el video de YouTube.

   PARA CAMBIAR EL VIDEO: pegá abajo el ID del video de YouTube.
   El ID es la parte que viene después de "v=" en la URL. Ejemplo:
       https://www.youtube.com/watch?v=X29taF1exuk
                                       └────┬────┘
                                        este es el ID
   ========================================================================= */

const DEMO_CONFIG = {
  // ID del video de YouTube (lo que va después de "v=" en la URL).
  videoId: "oz-2ypK958U",

  // Título y bajada de la sección.
  title: "Mirá el Target Analyzer en acción",
  subtitle: "30 segundos para ver lo que tu grupo va a construir.",

  // Texto que aparece en la barra de direcciones falsa del mockup de navegador.
  fakeUrl: "target-analyzer.app",

  // Duración que se muestra en la esquina de la portada (solo texto, ej: "0:30").
  duration: "0:30",
};

// Disponible globalmente para main.js (no usamos módulos para que funcione sin servidor).
window.DEMO_CONFIG = DEMO_CONFIG;
