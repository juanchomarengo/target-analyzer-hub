# Product

## Register

brand

## Users

**Audiencia primaria — alumnos de la materia.** Estudiantes de Desarrollo Web Full Stack de UNPilar, repartidos en 4 comisiones. Llegan al sitio desde el celular o la notebook, normalmente con una duda puntual ("¿cuándo es la entrega?", "¿dónde subo el TP?", "¿quién es mi referente?") y poco tiempo. Quieren resolverlo en segundos, no leer un manual.

**Audiencia secundaria — el equipo de Management.** Cuatro alumnos que coordinan los proyectos de las 4 comisiones. El sitio es su cara visible: el punto al que mandan a la gente cuando preguntan algo repetido y el lugar donde se muestran como referentes junto al profesor.

**El job-to-be-done:** encontrar rápido la respuesta o el link que necesito, y saber a quién recurrir si no está.

## Product Purpose

Un hub público que centraliza todo lo que un alumno de la materia necesita, con tres patas de igual peso:

1. **FAQ** — preguntas frecuentes agrupadas por categoría, para descomprimir las consultas repetidas.
2. **Links y recursos** — campus, repos, entregas, calendario y material, todo accesible desde un solo lugar.
3. **Equipo** — el profesor destacado y los 4 de Management con cara, nombre y rol, como punto de referencia y contacto.

**Éxito se ve como:** un alumno entra, resuelve su duda o encuentra su link sin tener que preguntar en el grupo, y sabe a quién escribir si hace falta. El equipo manda menos respuestas repetidas y proyecta una imagen cuidada de la materia.

**Doble objetivo (el segundo es interno, no se comunica en el sitio):**
1. **Hub útil** para los alumnos (lo de arriba).
2. **Carta de presentación del Management Team.** El sitio tiene que generar dos reacciones:
   - En el alumno: *"quiero llegar a hacer algo así"* (aspiracional).
   - En el profesor (Alejandro Estayno): que le encante y **quiera compartirlo**, dándole al
     equipo **visibilidad académica**.
   Esto sube la vara: no alcanza con que esté prolijo e institucional. Tiene que tener craft
   de portfolio y un **momento memorable** (un detalle de diseño/interacción que se recuerde),
   sin perder la seriedad institucional de UNPilar ni volverse decorativo por capricho.

## Brand Personality

**Juvenil, cercana, hecha por estudiantes para estudiantes** — con un giro técnico que demuestra que el equipo sabe de desarrollo (no es una landing improvisada).

- **3 palabras:** cercana, viva, prolija.
- **Voz:** directa y en confianza, como un compañero que ya cursó y te explica sin vueltas. Tutea. Nada de jerga institucional acartonada.
- **Emoción objetivo:** alivio ("uf, acá está todo") y pertenencia ("este espacio es nuestro").
- **Inspiración de craft:** la pulcritud y las microinteracciones de Linear/Vercel (gradientes sutiles, transiciones suaves, dark-mode-friendly), pero con calidez y color propio, no frío ni corporativo.

## Anti-references

- **Intranet universitaria anticuada:** grilla gris recargada, menús infinitos, tablas apretadas, look de sistema interno de los 2000. El error a evitar número uno.
- **Corporativo y frío:** software empresarial sin alma, azul-marino-y-gris genérico, copy impersonal.
- **Pinta de template:** plantilla genérica tipo Bootstrap/Wix reconocible a la legua. Tiene que notarse hecho a mano.
- Y por las reglas del oficio: nada de gradient text, side-stripe borders, glassmorphism decorativo, ni eyebrows en mayúsculas sobre cada sección.

## Design Principles

1. **Respuesta en tres segundos.** Cada sección existe para que el alumno resuelva algo rápido. Si una pieza no acerca a una respuesta o a un link, sobra.
2. **Hecho a mano, no plantilla.** Decisiones visuales propias y deliberadas. Si se puede confundir con un template, se rehace.
3. **Cálido sin ser ruidoso.** Personalidad y color con intención, no saturación. La calidez vive en tipografía, acento e imágenes, no en amontonar elementos.
4. **El equipo da la cara.** Personas reales, nombres y roles visibles. La materia tiene referentes, no un buzón anónimo.
5. **Practicamos lo que enseñamos.** Es un proyecto de una materia de desarrollo: el código y el craft del propio sitio son parte del mensaje.

## Accessibility & Inclusion

Objetivo **WCAG 2.1 AA**:

- Contraste de texto ≥ 4.5:1 (cuerpo) y ≥ 3:1 (texto grande). Sin gris claro sobre fondos tintados.
- Navegable 100% por teclado, con foco visible y orden lógico.
- Respeta `prefers-reduced-motion`: toda animación tiene alternativa de crossfade o transición instantánea.
- HTML semántico y etiquetas accesibles (el acordeón de FAQ con roles ARIA correctos).
- Pensado mobile-first: la mayoría de los alumnos entra desde el celular.
- Español rioplatense como idioma base (`lang="es"`), con tildes y signos correctos.
