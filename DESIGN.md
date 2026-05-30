<!-- Tokens de color = identidad real de UNPilar (azul extraído del logo oficial). Tipografía y componentes son la dirección propuesta; re-correr /impeccable document una vez que haya código para capturar los valores reales. -->
---
name: Hub Web Full Stack — UNPilar
description: Hub de la materia Desarrollo Web Full Stack de la Universidad Nacional de Pilar (FAQ, links y equipo).
colors:
  primary: "#15589F"
  primary-bright: "#2572C6"
  primary-deep: "#00468C"
  accent: "#1EBDE3"
  accent-deep: "#0091B5"
  bg: "#F8FAFD"
  surface: "#FFFFFF"
  ink: "#1A2737"
  muted: "#5F6A77"
  border: "#DADEE3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  faq-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
  link-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Hub Web Full Stack — UNPilar

## 1. Overview

**Creative North Star: "El campus que sí entendés"**

Una intranet universitaria vieja te hace sentir que el trámite es tu problema. Este hub hace lo contrario: el azul institucional de la Universidad Nacional de Pilar te dice "esto es oficial y confiable", y un cian eléctrico te dice "pero relajá, está hecho por gente que cursó lo mismo que vos". El sistema vive en esa tensión productiva entre **la seriedad de la marca y la calidez de un compañero que ya pasó por acá**. Densidad media-baja, mucho aire, jerarquía clarísima: el alumno entra con una duda y la resuelve en tres segundos, no leyendo un manual.

La estética toma la pulcritud y las microinteracciones de productos como Linear y Vercel (transiciones suaves, foco en la tipografía, gradientes sutiles azul→cian usados con cuentagotas) pero las baja a un registro humano y juvenil. El azul nunca está solo el tiempo suficiente como para enfriarse: el cian, los radios generosos y la tipografía display con carácter lo mantienen cálido.

Este sistema **rechaza explícitamente** tres cosas, en orden de prioridad: el look de intranet universitaria de los 2000 (grilla gris, menús infinitos, tablas apretadas); lo corporativo y frío (azul-marino genérico, copy impersonal, software sin alma); y la pinta de template (plantilla de Bootstrap/Wix reconocible a la legua). Si una pantalla se pudiera confundir con cualquiera de las tres, se rehace.

**Key Characteristics:**
- Azul UNPilar institucional como ancla de confianza, cian eléctrico como chispa juvenil.
- Mucho aire y radios generosos (pill en botones, 22px en tarjetas): nada apretado.
- Jerarquía agresiva: el alumno escanea, no lee.
- Tono de compañero, no de oficina de alumnos. Tutea.
- Movimiento sutil y con propósito, siempre con alternativa `prefers-reduced-motion`.

## 2. Colors

Una paleta monocromática azul-cian extraída de la marca real de UNPilar, sobre un casi-blanco con mínimo tinte azul (jamás cream ni beige).

### Primary
- **Azul UNPilar** (`#15589F` / `oklch(0.46 0.132 254)`): el azul exacto del isologotipo de la Universidad Nacional de Pilar. Es el color de confianza: navbar, botones primarios (con texto blanco, 7.18:1), links, títulos de acento, el edificio del logo. Es la firma institucional en cada pantalla.
- **Azul brillante** (`#2572C6` / `oklch(0.55 0.15 254)`): variante luminosa para estados hover de links y resaltados sutiles. No para texto chico sobre fondo claro.
- **Azul profundo** (`#00468C` / `oklch(0.40 0.132 254)`): hover de botones primarios y bordes de foco fuertes.

### Secondary
- **Cian eléctrico** (`#1EBDE3` / `oklch(0.74 0.13 220)`): la chispa juvenil. CTAs destacados, badges de categoría en el FAQ, subrayados, el extremo cálido de los gradientes azul→cian, indicadores de "activo". **Siempre con texto oscuro encima** (6.77:1), nunca blanco.
- **Cian profundo** (`#0091B5` / `oklch(0.58 0.13 220)`): cuando el cian necesita ser texto o ícono sobre fondo claro y mantener contraste AA.

### Neutral
- **Tinta** (`#1A2737` / `oklch(0.27 0.035 254)`): texto principal y titulares. Es un azul-carbón, no negro puro: hereda el calor de la marca. 14.42:1 sobre el fondo.
- **Apagado** (`#5F6A77` / `oklch(0.52 0.025 254)`): texto secundario, metadatos, descripciones. 5.27:1 sobre el fondo, AA cumplido. Nunca bajar de esta luminosidad para texto.
- **Fondo** (`#F8FAFD` / `oklch(0.985 0.004 254)`): el lienzo. Casi blanco con un tinte azul imperceptible hacia el hue de la marca.
- **Superficie** (`#FFFFFF`): tarjetas, ítems de FAQ, lo que se eleva sobre el fondo.
- **Borde** (`#DADEE3` / `oklch(0.90 0.008 254)`): divisores y contornos de tarjeta de 1px.

### Named Rules
**La Regla del Cian Raro.** El cian eléctrico aparece en ≤15% de cualquier pantalla. Es un acento, no un fondo. Su rareza es lo que lo hace sentir eléctrico; si llena media pantalla, deja de ser una chispa y se vuelve ruido.

**La Regla Blanco-sobre-Cian Prohibido.** Texto blanco sobre cian da 2.22:1: ilegible. Sobre cian siempre va tinta (`#1A2737`). Sin excepciones.

**La Regla del Azul-No-Frío.** El azul institucional nunca ocupa una pantalla entera sin que el cian, un radio generoso o la tipografía display lo acompañen. Azul puro y solo = la intranet vieja que estamos evitando.

## 3. Typography

**Display Font:** Bricolage Grotesque (fallback: Inter, system-ui)
**Body Font:** Inter (fallback: system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (fallback: ui-monospace, monospace)

**Character:** Bricolage Grotesque tiene contraste y personalidad (un grotesco con alma editorial) que aporta el lado joven y expresivo en los titulares; Inter es la neutra legible que carga todo el cuerpo de texto sin cansar. El par funciona por contraste de eje (display expresiva vs. body neutra), no por similitud. La mono aparece solo en etiquetas técnicas (categorías de FAQ, fechas del cronograma) y guiña al hecho de que esto es una materia de código.

### Hierarchy
- **Display** (Bricolage 700, `clamp(2.5rem, 6vw, 4.5rem)`, lh 1.02, tracking -0.03em): título del hero. Uno por página. Usar `text-wrap: balance`.
- **Headline** (Bricolage 600, `clamp(1.75rem, 3.5vw, 2.5rem)`, lh 1.1, tracking -0.02em): títulos de sección (FAQ, Links, Equipo).
- **Title** (Inter 600, `1.25rem`, lh 1.3): nombre en la tarjeta de persona, pregunta del FAQ, título de link-card.
- **Body** (Inter 400, `1.0625rem`, lh 1.6): respuestas del FAQ, descripciones. Ancho máximo 65–75ch; usar `text-wrap: pretty`.
- **Label** (JetBrains Mono 500, `0.8125rem`, tracking 0.02em): categorías de FAQ, fechas, roles del equipo. Sentence case o minúscula; nunca frases enteras en mayúscula.

### Named Rules
**La Regla de la Línea Cómoda.** El cuerpo de texto nunca pasa de 75 caracteres por línea. Las respuestas del FAQ son para leerse rápido, no para cruzar toda una pantalla ancha.

**La Regla Sin Eyebrow.** Prohibido el rótulo en mayúsculas con tracking ancho sobre cada sección ("PREGUNTAS FRECUENTES", "NUESTRO EQUIPO"). La jerarquía la da el Headline y el aire, no un kicker de relleno.

## 4. Elevation

Sistema **plano por defecto, elevado por estado**. Las superficies descansan planas sobre el fondo, separadas por el contraste de blanco puro contra el casi-blanco del fondo y un borde de 1px. La profundidad no es decorativa: aparece como respuesta a la interacción (hover en una tarjeta, apertura de un ítem de FAQ).

### Shadow Vocabulary
- **Reposo** (`box-shadow: 0 1px 2px rgba(26,39,55,0.04)`): tarjetas y FAQ en estado normal. Apenas un asentamiento.
- **Hover** (`box-shadow: 0 8px 28px rgba(21,88,159,0.12)`): al pasar el mouse sobre una link-card o tarjeta de equipo. Sombra tintada de azul, no gris neutro.
- **Glow de acento** (`box-shadow: 0 0 0 3px rgba(30,189,227,0.35)`): anillo de foco para teclado en elementos interactivos, en cian.

### Named Rules
**La Regla Plano-por-Defecto.** Si una superficie tiene sombra en reposo más fuerte que `0 1px 2px`, está mal. La sombra es un premio al hover/foco, no el estado base. Sombras grises oscuras y desenfoque chico = look de app de 2014.

## 5. Components

### Buttons
- **Shape:** completamente redondeados (pill, `999px`). Refuerza lo amigable; nada de esquinas duras corporativas.
- **Primary:** fondo Azul UNPilar (`#15589F`), texto blanco, padding `14px 28px`. El botón de confianza ("Ver FAQ", "Ir al campus").
- **Accent:** fondo Cian (`#1EBDE3`), **texto tinta** (`#1A2737`), mismo padding. El CTA que llama la atención ("Unite al grupo"). Uno por vista como mucho.
- **Ghost:** fondo superficie, texto y borde de 1px en Azul UNPilar. Acciones secundarias.
- **Hover / Focus:** primary oscurece a Azul profundo (`#00468C`) y sube `translateY(-2px)`; transición `200ms` con ease-out. Foco de teclado: glow de acento cian (anillo de 3px). Respeta `prefers-reduced-motion`.

### Cards / Containers (link-card, tarjeta de equipo)
- **Corner Style:** 22px (`rounded.lg`), generoso y amigable.
- **Background:** superficie blanca sobre el fondo casi-blanco.
- **Shadow Strategy:** reposo plano (`0 1px 2px`), hover con sombra azul tintada (ver Elevation).
- **Border:** 1px en `#DADEE3`.
- **Internal Padding:** 24px (`spacing` md→lg).
- **Hover:** elevación + el ícono o flecha se tiñe de cian.

### FAQ (acordeón) — componente firma
- **Item:** superficie blanca, radio 14px, padding `20px 24px`, separados por `spacing.sm`.
- **Categoría:** badge en cian claro (`rgba(30,189,227,0.15)`) con texto cian profundo (`#0091B5`), tipografía Label mono.
- **Estado abierto:** la pregunta queda en Azul UNPilar, aparece un fino divisor y se despliega la respuesta con una transición de altura suave (crossfade si reduce-motion).
- **Accesibilidad:** `<button>` real con `aria-expanded`, navegable por teclado, foco visible con el glow cian. Es el corazón del sitio: tiene que ser impecable con teclado y lector de pantalla.

### Navigation
- **Style:** navbar fija arriba, fondo superficie con leve blur al hacer scroll, logo UNPilar azul a la izquierda, anclas a la derecha en Inter 500.
- **States:** link activo en Azul UNPilar con un subrayado cian de 2px; hover sube la opacidad. En móvil, menú hamburguesa a panel de pantalla completa.

## 6. Do's and Don'ts

### Do:
- **Do** usar el azul `#15589F` exacto del logo como ancla institucional, y reservar el cian `#1EBDE3` para ≤15% de la pantalla como chispa.
- **Do** poner siempre texto tinta (`#1A2737`) sobre cualquier superficie cian; el blanco sobre cian está prohibido (2.22:1).
- **Do** mantener el texto secundario en `#5F6A77` o más oscuro; nunca un gris más claro "por elegancia".
- **Do** usar radios generosos (pill en botones, 22px en tarjetas) y mucho aire para sostener el tono cercano.
- **Do** dar al acordeón de FAQ semántica real (`<button>`, `aria-expanded`, foco visible): es el componente central.
- **Do** acompañar siempre el azul con cian, radio o tipografía display; azul solo y plano = la intranet vieja.

### Don't:
- **Don't** caer en el look de **intranet universitaria de los 2000**: grilla gris recargada, menús infinitos, tablas apretadas. Es la anti-referencia número uno.
- **Don't** volverlo **corporativo y frío**: nada de azul-marino-y-gris genérico ni copy impersonal de oficina de alumnos.
- **Don't** que parezca **template** de Bootstrap/Wix: si se reconoce la plantilla a la legua, se rehace.
- **Don't** usar texto en gradiente (`background-clip: text`), side-stripe borders (`border-left` de color >1px), ni glassmorphism decorativo.
- **Don't** poner un eyebrow en mayúsculas con tracking ancho sobre cada sección.
- **Don't** usar un fondo cream/sand/beige; el fondo es casi-blanco con tinte azul, nunca cálido-por-defecto.
- **Don't** dejar sombras grises oscuras en reposo: plano por defecto, la sombra es premio al hover.
