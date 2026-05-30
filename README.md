# Hub · Desarrollo Web Full Stack — UNPilar

Hub del **Management Team** para acompañar el proyecto final (**Target Analyzer**) de la
materia Desarrollo Web Full Stack de la Universidad Nacional de Pilar. Centraliza las
**preguntas frecuentes**, los **links importantes** y el **equipo** que coordina las 4
comisiones.

Hecho con **HTML + CSS + JavaScript puro**, sin frameworks ni build. Las FAQ se cargan en
vivo desde un **Google Sheet**.

## Cómo correrlo en local

Es un sitio estático, pero conviene levantarlo con un servidor para que funcione el `fetch`
del Google Sheet (abriéndolo con doble clic, `file://`, el navegador lo bloquea):

```bash
python3 -m http.server 8000
# luego abrí http://localhost:8000
```

(Cualquier servidor estático sirve: `npx serve`, la extensión Live Server de VS Code, etc.)

## Estructura

```
index.html          La página (una sola)
css/styles.css      Estilos, tokens de marca, animaciones, responsive
js/main.js          Navbar, FAQ (buscador + categorías + acordeón), links, animaciones
data/faq.js         Config del Google Sheet + copia de respaldo de las FAQ
data/links.js       Tarjetas de la sección "Links"
data/ejemplo-faq.csv  Plantilla para importar al Google Sheet
public/             Logos (UNPilar) y fotos del equipo
docs/               Contexto del proyecto y guía de Google Sheets
PRODUCT.md          Estrategia / objetivos (a quién apunta, principios)
DESIGN.md           Sistema de diseño (paleta, tipografía, componentes)
```

## Cómo se actualiza el contenido

> Todo se edita sin tocar el diseño. Solo datos.

### Preguntas frecuentes (FAQ) → Google Sheet

Las FAQ salen de un Google Sheet publicado como CSV. Guía completa: **`docs/GOOGLE-SHEETS.md`**.

- Editás el Sheet (columnas `categoria | pregunta | respuesta`).
- La web se actualiza sola al **refrescar la página**.
- Ojo: Google cachea el CSV publicado **unos minutos**, así que el cambio puede tardar.
- Las **categorías** (los chips de filtro) se generan solas a partir de la columna `categoria`.
- La URL del Sheet se configura en `data/faq.js` (`FAQ_CONFIG.sheetCsvUrl`). Si el Sheet no
  carga, la web usa la copia de respaldo de ese mismo archivo.

### Links → `data/links.js`

Editás el array `LINKS`. Mientras `url` esté vacío (`""`), la tarjeta muestra
"enlace pendiente". Íconos disponibles: `campus`, `repos`, `grupo`, `docs`.

### Equipo y mails → `index.html`

Las fotos están en `public/profile-pictures/`. Los nombres y mails de contacto se editan
directo en el HTML (secciones "Equipo" y "Footer").

## Deploy

Al ser estático, se sube tal cual a **GitHub Pages**, **Netlify** o similar. No requiere
build ni servidor.

## Documentación interna

- `docs/CONTEXTO.md` — decisiones del proyecto (alcance, equipo, qué va y qué no).
- `docs/GOOGLE-SHEETS.md` — paso a paso para conectar/actualizar las FAQ.
- `PRODUCT.md` / `DESIGN.md` — estrategia y sistema de diseño.
