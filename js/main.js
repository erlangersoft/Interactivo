/* ============================================================
   main.js — Arranque: renderiza y activa todo
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // 1) Pintar contenido desde data.js
  renderFases();
  renderInstrumentos();
  renderCategorias();
  renderEvaluador();
  renderChecklist();
  renderEjemplo();

  // 2) Activar interacciones
  initNav();
  initAcordeon();
  initCategorias();
  initCanvas();
  initPersona();
  initEvaluador();
  initChecklist();

  // 3) Año dinámico en el footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
