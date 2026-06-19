/* ============================================================
   main.js — Arranque: renderiza y activa todo
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // 1) Pintar contenido desde data.js
  renderFases();
  renderInstrumentos();
  renderCategorias();
  renderJourney();
  renderEvaluador();
  renderFeedback();
  renderChecklist();
  renderEjemplo();

  // 2) Activar interacciones
  initNav();
  initAcordeon();
  initCategorias();
  initCanvas();
  initPersona();
  initJourney();
  initPov();
  initIdeasTable();
  initEvaluador();
  initFeedback();
  initChecklist();

  // 3) Año dinámico en el footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
