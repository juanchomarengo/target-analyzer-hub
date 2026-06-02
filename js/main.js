/* =========================================================================
   Hub Web Full Stack — UNPilar · main.js
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Íconos SVG (inline, sin dependencias) ---------- */
  const ICON = {
    campus: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/>',
    repos: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    grupo: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    docs: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><path d="M8 13h8M8 17h8M8 9h2"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
  };
  const svg = (paths, cls) =>
    '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";

  /* ---------- Utilidades ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const norm = (s) =>
    (s || "").toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const esc = (s) =>
    (s || "").toString().replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ===================== Año del footer ===================== */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===================== Navbar ===================== */
  const nav = $(".nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Enlaces a #inicio → scroll al tope real (el header sticky rompe el ancla nativa) */
  document.querySelectorAll('a[href="#inicio"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
    });
  });

  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  if (toggle && menu) {
    const setMenu = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    };
    toggle.addEventListener("click", () =>
      setMenu(toggle.getAttribute("aria-expanded") !== "true")
    );
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
  }

  /* ===================== Reveal al scrollear ===================== */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ===================== Demo (YouTube facade) ===================== */
  /* La portada es un skeleton hecho con CSS (sin imágenes externas); el
     iframe de YouTube se inyecta recién al hacer click, así la página
     carga liviana y sin rastreadores hasta que el usuario decide verlo.
     Los datos editables (video, URL falsa, duración) viven en data/demo.js. */
  const facade = $(".video-facade");
  const demo = window.DEMO_CONFIG || {};
  if (facade && demo.videoId) {
    // Rellenamos los textos desde la config (el título/bajada también viven
    // en el HTML como respaldo para SEO y por si el JS no corre).
    const setText = (sel, value) => {
      const el = $(sel);
      if (el && value) el.textContent = value;
    };
    setText("#demo-title", demo.title);
    setText("#demo-subtitle", demo.subtitle);
    setText("#demo-url", demo.fakeUrl);
    setText("#demo-duration", demo.duration);

    facade.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" + demo.videoId +
        "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
      iframe.title = "Demo del Target Analyzer";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      // Reemplazamos todo el viewport (skeleton + botón) por el reproductor.
      const skeleton = facade.parentNode.querySelector(".app-skeleton");
      if (skeleton) skeleton.remove();
      facade.replaceWith(iframe);
    });
  }

  /* ===================== Links ===================== */
  const linksGrid = $("#links-grid");
  if (linksGrid && Array.isArray(window.LINKS)) {
    linksGrid.innerHTML = window.LINKS.map((l) => {
      const icon = svg(ICON[l.icon] || ICON.docs, "link-card__icon");
      const head =
        '<div class="link-card__head">' + icon +
        (l.url
          ? svg(ICON.arrow, "link-card__arrow")
          : "") +
        "</div>";
      const body =
        '<div class="link-card__title">' + esc(l.titulo) + "</div>" +
        '<div class="link-card__desc">' + esc(l.descripcion) + "</div>" +
        (l.url ? "" : '<div class="link-card__pending">enlace pendiente</div>');
      if (l.url) {
        return '<a class="link-card" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + head + body + "</a>";
      }
      return '<div class="link-card link-card--pending">' + head + body + "</div>";
    }).join("");
  }

  /* ===================== FAQ ===================== */
  const listEl = $("#faq-list");
  const chipsEl = $("#faq-chips");
  const searchEl = $("#faq-search");
  const countEl = $("#faq-count");

  let allFaqs = [];
  let activeCat = "";
  let term = "";

  /* CSV parser (soporta comillas, comas y saltos de línea dentro de celdas) */
  function parseCSV(text) {
    const rows = [];
    let row = [], field = "", i = 0, inQuotes = false;
    text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    while (i < text.length) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else inQuotes = false;
        } else field += c;
      } else if (c === '"') inQuotes = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
      else field += c;
      i++;
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function rowsToFaqs(rows) {
    if (!rows.length) return [];
    const headers = rows[0].map((h) => norm(h));
    const iCat = headers.indexOf("categoria");
    const iQ = headers.indexOf("pregunta");
    const iA = headers.indexOf("respuesta");
    if (iQ === -1 || iA === -1) return [];
    return rows
      .slice(1)
      .map((r) => ({
        categoria: (r[iCat] || "General").trim() || "General",
        pregunta: (r[iQ] || "").trim(),
        respuesta: (r[iA] || "").trim(),
      }))
      .filter((f) => f.pregunta);
  }

  /* Cache local: la página carga al toque y aguanta si Google falla o no hay red. */
  const CACHE_KEY = "faq_cache_v1";
  function readCache() {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY));
      return Array.isArray(c) && c.length ? c : null;
    } catch (e) {
      return null;
    }
  }
  function writeCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {
      /* localStorage lleno o deshabilitado: no pasa nada */
    }
  }

  async function loadFaqs() {
    const cfg = window.FAQ_CONFIG || {};
    const fallback = Array.isArray(window.FAQ_FALLBACK) ? window.FAQ_FALLBACK : [];
    if (!cfg.sheetCsvUrl) return fallback;
    try {
      // Timeout para que un Google lento no deje la página "Cargando…" para siempre.
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8000);
      const res = await fetch(cfg.sheetCsvUrl, { cache: "no-store", signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = rowsToFaqs(parseCSV(await res.text()));
        if (data.length) {
          writeCache(data); // guardamos la última versión buena
          return data;
        }
      }
    } catch (e) {
      /* sin conexión / no publicado / timeout → cae al cache o al fallback */
    }
    return readCache() || fallback;
  }

  function buildChips() {
    const cats = [];
    allFaqs.forEach((f) => {
      if (cats.indexOf(f.categoria) === -1) cats.push(f.categoria);
    });
    // Sin "Todas": la categoría por defecto es la primera real.
    if (!activeCat || cats.indexOf(activeCat) === -1) activeCat = cats[0] || "";
    chipsEl.innerHTML = cats
      .map(
        (c) =>
          '<button class="chip" type="button" data-cat="' + esc(c) +
          '" aria-pressed="' + (c === activeCat) + '">' + esc(c) + "</button>"
      )
      .join("");
  }

  // Marca la categoría activa, salvo que haya una búsqueda en curso (modo global).
  function syncChips() {
    if (!chipsEl) return;
    const searching = !!norm(term);
    Array.prototype.forEach.call(chipsEl.children, (c) =>
      c.setAttribute("aria-pressed", String(!searching && c.getAttribute("data-cat") === activeCat))
    );
  }

  function getFiltered() {
    const t = norm(term);
    return allFaqs.filter((f) => {
      // Con búsqueda activa, el buscador filtra en TODAS las categorías.
      const okCat = t ? true : f.categoria === activeCat;
      const okText = !t || norm(f.pregunta + " " + f.respuesta).indexOf(t) !== -1;
      return okCat && okText;
    });
  }

  function renderList() {
    const items = getFiltered();
    if (!items.length) {
      listEl.innerHTML = '<p class="faq__empty">No encontramos preguntas con ese filtro. Probá con otras palabras.</p>';
    } else {
      listEl.innerHTML = items
        .map(
          (f, idx) =>
            '<div class="faq__item">' +
            '<button class="faq__q" type="button" aria-expanded="false" aria-controls="faq-a-' + idx + '">' +
            '<span class="faq__q-text">' + esc(f.pregunta) + "</span>" +
            svg(ICON.chevron, "faq__chevron") +
            "</button>" +
            '<div class="faq__a" id="faq-a-' + idx + '"><div class="faq__a-inner"><p>' + esc(f.respuesta) + "</p></div></div>" +
            "</div>"
        )
        .join("");
    }
    // contador
    syncChips();
    const total = allFaqs.length;
    if (!total) countEl.textContent = "";
    else if (items.length === total) countEl.textContent = total + (total === 1 ? " pregunta" : " preguntas");
    else countEl.textContent = "Mostrando " + items.length + " de " + total + " preguntas";
  }

  if (listEl) {
    // Acordeón (delegación de eventos)
    listEl.addEventListener("click", (e) => {
      const q = e.target.closest(".faq__q");
      if (!q) return;
      const item = q.closest(".faq__item");
      const open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", String(open));
    });

    if (searchEl) {
      searchEl.addEventListener("input", (e) => {
        term = e.target.value;
        renderList();
      });
    }
    if (chipsEl) {
      chipsEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        activeCat = btn.getAttribute("data-cat");
        // Elegir una categoría sale del modo búsqueda global.
        if (searchEl) searchEl.value = "";
        term = "";
        renderList();
      });
    }

    // Carga inicial
    countEl.textContent = "Cargando preguntas…";
    loadFaqs().then((data) => {
      allFaqs = data;
      buildChips();
      renderList();
    });
  }
})();
