# Contexto del proyecto — Hub Web Full Stack UNPilar

> Documento vivo. Vamos registrando acá las respuestas de la sesión de Q&A para que el
> diseño y el contenido del hub se construyan con datos reales, no inventados.
> Última actualización: sesión inicial (2026-05-30).

## 1. La cátedra y la materia
- **Materia:** Desarrollo Web Full Stack — Universidad Nacional de Pilar.
- **Profesor a cargo:** Alejandro Estayno (foto: `public/profile-pictures/Alejandro Estayno.jpeg`).
- **Comisiones:** son 4, identificadas por número:
  - **Comisión 2** — turno mañana.
  - **Comisión 4** — turno tarde.
  - **Comisión 6** — turno noche.
  - **Comisión 8** — turno noche.
- **Otros docentes/ayudantes:** no, un solo profesor para las 4 comisiones, sin ayudantes.

## 2. El equipo de Management (los 4 que arman el hub)
> Son quienes aparecen "abajo del profe" en la sección Equipo.
> Sin roles individuales: **todos hacen todo** (no mostrar cargos por persona).
> Contacto: por ahora **mail con placeholder** para cada uno.
- **Juancho** — foto: `public/profile-pictures/juancho.webp` — mail: _[placeholder]_
- **Berty** — foto: `public/profile-pictures/berty.webp` — mail: _[placeholder]_
- **Ale** — foto: `public/profile-pictures/ale.webp` — mail: _[placeholder]_
- **Fabi** — foto: `public/profile-pictures/fabiola.webp` — mail: _[placeholder]_

## 3. Alcance y rol del hub
- **¿Para quién es?** Público, pero **el foco son los alumnos** de la materia. Va a verlo
  también gente externa (futuros alumnos, la facu), así que el sitio tiene que explicarse
  solo sin asumir demasiado contexto interno.
- **Nombre del equipo de cara al alumno:** **Management Team** (así le dice el profe).
- **Qué hace el Management Team:** son el **enlace entre el profesor y los grupos**. Cada
  comisión tiene **varios grupos** de trabajo. El equipo resuelve dudas de los alumnos y los
  guía a lo largo de la cursada del proyecto final.
- **Estructura:** 4 comisiones → cada comisión tiene varios grupos → el Management Team
  coordina transversalmente las 4 comisiones.
- **Estado actual (importante para el tono):** los grupos **ya están armados** y cada alumno
  **ya sabe en qué grupo está y qué task le toca** (Front / Back / Robot). Por lo tanto el hub
  **NO** es para formar grupos ni asignar tareas: es para **acompañar durante la ejecución**
  (resolver dudas, guiar, centralizar links). El copy debe asumir que el alumno ya está en marcha.

## 4. Links y recursos reales
> Por ahora **no hay archivos para descargar**, pero sí va a haber **enlaces a documentos**
> (docs online). No hay un canal "estrella" para destacar por encima del resto.
- _[Campus virtual / aula — URL pendiente]_
- _[GitHub: ¿organización o repos por grupo/comisión? — pendiente]_
- _[Grupo de mensajería (WhatsApp / Discord / Telegram) — pendiente]_
- _[Enlaces a documentos (cronograma, guías, consignas) — pendiente]_

## 5. FAQ
- **Va a haber 50+ preguntas.** Por eso el FAQ necesita escalar:
  - **Buscador** arriba (filtra por texto al instante).
  - **Categorías** (chips/filtros) para acotar. Las categorías las define el equipo; la web
    arma los filtros a partir del JSON.
  - **Todas las preguntas viven en la home** (no hay página aparte). El buscador + categorías
    hacen que, aunque sean 50+, el alumno encuentre la suya rápido.
- **Origen de los datos: Google Sheets en vivo + fallback local.**
  - El equipo edita un Google Sheet con columnas `categoria | pregunta | respuesta`.
  - El Sheet se publica en la web como CSV (Archivo → Compartir → Publicar en la web).
  - La página hace `fetch` al CSV, lo parsea y arma listado + buscador + categorías.
  - Si el Sheet no carga (offline, sin publicar), usa una **copia local de fallback** para no
    romperse. La URL del Sheet se configura en `data/faq.js` (`FAQ_CONFIG.sheetCsvUrl`).
  - Requiere estar hosteado (GitHub Pages/Netlify) para que el `fetch` funcione. Cache de Google ~5 min.
- **Categorías:** _[pendiente — las define el equipo en el Sheet. Propuestas editables: General,
  Grupos, Entregas, Soporte]_. La web deriva los filtros automáticamente de la columna `categoria`.

## 6. El proyecto final (contexto, NO para explicar en detalle en el sitio)
> Importante: el sitio **no profundiza** en esto. Más adelante habrá documentos del profe
> que lo expliquen. Acá queda solo como contexto para no escribir copy genérico.
- Los grupos construyen un **"Target Analyzer"**.
- Cada grupo tiene asignado **1 subproyecto**, de tres tipos:
  - **Front** (frontend)
  - **Back** (backend)
  - **Robot** (el que hace el scraping)
- **NO** detallar tecnologías ni stack obligatorio en el sitio: eso lo cubren los docs del profe.

## 7. Qué NO va en el sitio (por ahora)
- **Cronograma / fechas de entrega:** no incluir. Servirían ahora pero quedarían obsoletas.
- **Detalle del proyecto y tecnologías:** no incluir; vivirán en docs del profe (enlazados).
- **Roles individuales del equipo:** no mostrar; todos hacen todo.

## 8. Operación del sitio
- **Stack:** **HTML + CSS + JS puro** (sin framework). Es lo que se usó en la cursada; demuestra
  fundamentos, hosting trivial y cero dependencias. (Se descartó React + Vite.)
- **FAQ:** desde Google Sheets en vivo + fallback local (ver sección 5).
- **Dominio/hosting previsto:** estático (GitHub Pages / Netlify). _[dominio pendiente]_
- **¿Quién lo va a mantener/actualizar?** El Management Team: FAQ vía Google Sheet, resto vía
  archivos de datos (`data/*.js`).
- **Idioma/tono:** español rioplatense, tuteo (definido).

## 9. Decisiones de presentación
- **Nombres del equipo:** se usan **apodos** → Juancho, Berty, Ale, Fabi (tono cercano).
- **Nombre del sitio (header/título):** **"Desarrollo Web Full Stack"** (el de la materia).
  El logo de UNPilar acompaña como marca institucional.
- **Target Analyzer:** es **el foco del hub**. El sitio acompaña el **proyecto final
  (Target Analyzer)**, no "toda la materia". El titular del hero es "Todo sobre el Target
  Analyzer". Igual **no se profundiza** en qué es técnicamente: el detalle queda para los docs
  del profe; el hub centraliza FAQ, links y equipo alrededor del proyecto.

## Secciones del sitio (resultado de esta sesión)
1. **Hero** — pitch + CTAs a FAQ y Links.
2. **Equipo** — Alejandro Estayno arriba, los 4 del Management Team abajo.
3. **FAQ** — acordeón plano, 3 preguntas placeholder.
4. **Links** — tarjetas con enlaces a recursos/docs (placeholders por ahora).
5. **Footer** — contacto (mails placeholder), crédito de la materia/UNPilar.
