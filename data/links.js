/* =========================================================================
   Links importantes
   -------------------------------------------------------------------------
   Editá este array para cambiar las tarjetas de la sección "Links".
   - icon: nombre de un ícono incluido en js/main.js (campus | repos | grupo | docs).
   - url:  dejalo en "" mientras no tengas el enlace; la tarjeta muestra
           "enlace pendiente" y queda deshabilitada hasta que cargues la URL.
   ========================================================================= */

const LINKS = [
  {
    icon: 'campus',
    titulo: 'Campus Virtual',
    descripcion: 'Material, foros y entregas.',
    url: '',
  },
  {
    icon: 'repos',
    titulo: 'Repositorios',
    descripcion: 'Los repos de los proyectos.',
    url: '',
  },
  {
    icon: 'docs',
    titulo: 'Documentos',
    descripcion: 'Consignas y guías de la cátedra.',
    url: '',
  },
];

window.LINKS = LINKS;
