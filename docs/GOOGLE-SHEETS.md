# Conectar las FAQ a un Google Sheet

Las preguntas frecuentes se cargan **en vivo** desde un Google Sheet. Ustedes editan el
Sheet y la web se actualiza sola, sin tocar código. Si el Sheet no carga (sin conexión, sin
publicar), la web usa una copia de respaldo y nunca se ve rota.

> Tiempo estimado: 5 minutos, una sola vez.

---

## 1. Crear el Sheet

1. Andá a [sheets.new](https://sheets.new) (crea un Sheet nuevo).
2. En la **primera fila**, poné exactamente estos tres encabezados (en minúscula):

   | categoria | pregunta | respuesta |
   |-----------|----------|-----------|

3. Cargá una pregunta por fila. Ejemplo:

   | categoria | pregunta | respuesta |
   |-----------|----------|-----------|
   | Entregas  | ¿Cuándo entrego? | La fecha está en el campus. |
   | Grupos    | ¿Cómo veo mi grupo? | Te lo asignó la cátedra al inicio. |

   - La columna **categoria** arma sola los filtros (chips) de la web. Usá los nombres que
     quieras; los que repitas se agrupan.
   - Hay una plantilla lista para importar en `data/ejemplo-faq.csv`
     (en el Sheet: *Archivo → Importar → Subir*).

## 2. Publicar el Sheet como CSV

1. En el Sheet: **Archivo → Compartir → Publicar en la web**.
2. En el primer desplegable, elegí **la hoja** que tiene las preguntas (no "Todo el documento").
3. En el segundo desplegable, elegí **Valores separados por comas (.csv)**.
4. Tocá **Publicar** y confirmá.
5. Copiá la URL que te da. Termina en algo como:
   `https://docs.google.com/spreadsheets/d/e/XXXXXXXX/pub?gid=0&single=true&output=csv`

> Publicar en la web hace público **solo el contenido de esa hoja** (las preguntas), que de
> todos modos es información pública. No expone tu cuenta ni otros documentos.

## 3. Conectarlo en la web

1. Abrí el archivo `data/faq.js`.
2. Pegá la URL dentro de las comillas de `sheetCsvUrl`:

   ```js
   const FAQ_CONFIG = {
     sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/XXXX/pub?...output=csv",
   };
   ```

3. Guardá. Listo: la web ahora lee del Sheet.

## 4. Día a día

- **Agregar / editar / borrar** una pregunta: se hace en el Sheet. No hay que tocar código ni
  volver a publicar (ya queda publicado).
- Los cambios aparecen en la web en **hasta ~5 minutos** (Google cachea el CSV publicado).
- La web guarda la última versión que cargó bien; si Google falla justo, muestra esa.

---

## Notas técnicas

- El fetch del CSV es 100% del lado del navegador (no hay backend). Google sirve el CSV
  publicado con los permisos (CORS) que permiten leerlo desde la web.
- Funciona estando **hosteado** (GitHub Pages / Netlify). Abriendo el `index.html` con doble
  clic (`file://`), el navegador puede bloquear el pedido; para probar en local, levantá un
  server simple: `python3 -m http.server` y entrá a `http://localhost:8000`.
- Columnas reconocidas: `categoria`, `pregunta`, `respuesta` (no importan mayúsculas ni
  acentos en el encabezado). Las filas sin `pregunta` se ignoran.
- El parser soporta celdas con comas, comillas y saltos de línea (formato CSV estándar).
