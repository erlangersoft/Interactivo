/* ============================================================
   main.js — Arranque: renderiza y activa todo
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // 1) Pintar contenido desde data.js
  renderFases();
  renderInstrumentos();
  renderCategorias();
  renderJourney();
  renderCostos();
  renderEvaluador();
  renderFeedback();
  renderChecklist();
  renderEjemplo();

  // 2) Activar interacciones
  initNav();
  initAcordeon();
  initCategorias();
  initCanvas();
  initCostos();
  initPersona();
  initJourney();
  initPov();
  initIdeasTable();
  initEvaluador();
  initFeedback();
  initChecklist();
  initScrollToTop();

  // 3) Año dinámico en el footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

function initScrollToTop() {
  const button = document.getElementById("scrollToTop");
  if (!button) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let showAfter = window.innerHeight;
  let ticking = false;

  const updateVisibility = () => {
    const shouldShow = window.scrollY > showAfter;
    button.classList.toggle("is-visible", shouldShow);
    ticking = false;
  };

  const requestVisibilityUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateVisibility);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", requestVisibilityUpdate, { passive: true });
  window.addEventListener("resize", () => {
    showAfter = window.innerHeight;
    requestVisibilityUpdate();
  }, { passive: true });

  updateVisibility();
}
