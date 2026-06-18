/* ============================================================
   navigation.js — Navegación, acordeón y categorías
   ============================================================ */

function initNav() {
  const toggle = $(".nav__toggle");
  const links  = $(".nav__links");
  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  links?.addEventListener("click", e => {
    if (e.target.tagName === "A") links.classList.remove("is-open");
  });

  // Scroll-spy: resalta el enlace de la sección visible
  const map = new Map($$(".nav__links a").map(a => [a.getAttribute("href").slice(1), a]));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$(".nav__links a").forEach(a => a.classList.remove("is-active"));
        map.get(en.target.id)?.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => obs.observe(s));
}

function initAcordeon() {
  $("#phases")?.addEventListener("click", e => {
    const btn = e.target.closest(".phase__btn");
    if (!btn) return;
    const phase = btn.closest(".phase");
    const open  = phase.getAttribute("aria-expanded") === "true";
    phase.setAttribute("aria-expanded", String(!open));
    btn.setAttribute("aria-expanded", String(!open));
  });
}

function initCategorias() {
  const grid   = $("#cats");
  const detail = $("#catDetail");
  grid?.addEventListener("click", e => {
    const btn = e.target.closest(".cat");
    if (!btn) return;
    const data = CATEGORIAS.find(c => c.id === btn.dataset.cat);
    $$(".cat", grid).forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
    btn.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
    detail.style.setProperty("--c", data.color);
    detail.innerHTML = `
      <span class="lbl">${esc(data.nombre)} · contexto Cochabamba</span>
      <h4>${esc(data.reto)}</h4>
      <p>${esc(data.contexto)}</p>
      <p style="margin-top:.7rem"><b>Ejemplo de idea:</b> ${esc(data.ejemplo)}</p>`;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
