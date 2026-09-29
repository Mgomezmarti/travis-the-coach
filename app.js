// Travis the Coach — v1: ver el entreno del día (sin registrar sesiones)

(function () {
  "use strict";

  const app = document.getElementById("app");
  const rutinas = window.RUTINAS || [];
  const rutina = rutinas[0]; // v1: una sola rutina activa

  // ---------- Tamaño de texto (Aa) ----------
  const SIZES = ["m", "l", "xl"];
  function getSize() {
    try { return localStorage.getItem("travis-size") || "m"; } catch (e) { return "m"; }
  }
  function setSize(s) {
    document.documentElement.dataset.size = s;
    try { localStorage.setItem("travis-size", s); } catch (e) { /* sin almacenamiento: da igual */ }
  }
  setSize(getSize());

  function nextSize() {
    const i = SIZES.indexOf(document.documentElement.dataset.size);
    setSize(SIZES[(i + 1) % SIZES.length]);
  }

  // ---------- Utilidades ----------
  const esc = (s) => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function parseLocalDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function fechaLarga(date) {
    const s = date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function fechaCorta(date) {
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  }

  function semanaDeRutina(inicio, hoy) {
    const a = parseLocalDate(inicio);
    const b = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const dias = Math.round((b - a) / 86400000);
    return dias < 0 ? null : Math.floor(dias / 7) + 1;
  }

  function topbar(backLink) {
    const left = backLink
      ? `<a class="btn-icon btn-back" href="#/" aria-label="Volver" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center">← Volver</a>`
      : `<span class="brand">Travis the Coach</span>`;
    return `
      <div class="topbar">
        ${left}
        <button class="btn-icon" id="btn-size" aria-label="Cambiar tamaño de texto">Aa</button>
      </div>`;
  }

  // ---------- Vistas ----------
  function renderHome() {
    if (!rutina) {
      app.innerHTML = topbar(false) + `<div class="empty">No hay rutinas configuradas en <b>data/rutinas.js</b>.</div>`;
      return;
    }
    const hoy = new Date();
    const semana = semanaDeRutina(rutina.fechaInicio, hoy);
    const semanaTxt = semana
      ? `Semana ${semana} de la rutina · empezaste el ${fechaCorta(parseLocalDate(rutina.fechaInicio))}`
      : `La rutina empieza el ${fechaCorta(parseLocalDate(rutina.fechaInicio))}`;

    const botones = rutina.entrenos.map((e) => `
      <a class="entreno-btn" href="#/entreno/${esc(e.id)}" style="text-decoration:none">
        <span class="name">${esc(e.nombre)}</span>
        ${e.foco ? `<span class="foco">${esc(e.foco)}</span>` : ""}
        <span class="count">${e.ejercicios.length} ejercicios</span>
      </a>`).join("");

    app.innerHTML = `
      ${topbar(false)}
      <section class="meta-rutina">
        <div class="today">${esc(fechaLarga(hoy))}</div>
        <div class="week">${esc(semanaTxt)}</div>
      </section>
      <p class="question">¿Qué toca hoy?</p>
      <nav class="entreno-list">${botones}</nav>`;
  }

  function renderEntreno(id) {
    const e = rutina && rutina.entrenos.find((x) => x.id === id);
    if (!e) { location.hash = "#/"; return; }

    const items = e.ejercicios.map((ej, i) => {
      const stats = [];
      if (ej.series) stats.push(`<div class="stat"><span class="label">Series</span><span class="value">${esc(ej.series)}</span></div>`);
      if (ej.peso)   stats.push(`<div class="stat"><span class="label">Peso ref.</span><span class="value">${esc(ej.peso)}</span></div>`);
      return `
        <li class="ej">
          <div class="ej-head">
            <span class="ej-num" aria-hidden="true">${i + 1}</span>
            <div>
              <h2 class="ej-name">${esc(ej.nombre)}</h2>
              <span class="chip">${esc(ej.grupo)}</span>
            </div>
          </div>
          ${stats.length ? `<div class="stats">${stats.join("")}</div>` : ""}
          ${ej.indicaciones ? `<div class="nota">${esc(ej.indicaciones)}</div>` : ""}
        </li>`;
    }).join("");

    app.innerHTML = `
      ${topbar(true)}
      <h1>${esc(e.nombre)}</h1>
      ${e.foco ? `<p class="subtitle">${esc(e.foco)}</p>` : ""}
      <ol class="ejercicios">${items}</ol>`;
    window.scrollTo(0, 0);
  }

  // ---------- Router ----------
  function route() {
    const m = location.hash.match(/^#\/entreno\/([\w-]+)/);
    if (m) renderEntreno(m[1]); else renderHome();
  }

  app.addEventListener("click", (ev) => {
    if (ev.target.closest("#btn-size")) nextSize();
  });
  window.addEventListener("hashchange", route);
  route();

  // ---------- Offline (PWA) ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
