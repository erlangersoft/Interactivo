/* ============================================================
   render.js — Inyecta el contenido de data.js en el DOM
   ============================================================ */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = (t = "") => t.replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

/* ---- Fases (acordeón) ---- */
function renderFases() {
  $("#phases").innerHTML = FASES.map(f => `
    <article class="phase" aria-expanded="false" style="--c:${f.color}">
      <button class="phase__btn" aria-expanded="false">
        <span class="phase__num">${f.n}</span>
        <span class="phase__title">${f.nombre}<span class="phase__sub">${esc(f.sub)}</span></span>
        <span class="phase__chev" aria-hidden="true">▾</span>
      </button>
      <div class="phase__panel"><div class="phase__inner"><div class="phase__body">
        <div class="phase__row"><span class="k">Qué es</span><p>${esc(f.que)}</p></div>
        <div class="phase__row"><span class="k">En el evento</span><p>${esc(f.hacer)}</p></div>
        <div class="phase__row"><span class="k">Instrumentos</span><p>${f.instrumentos.map(i => `<span class="phase__pill">${esc(i)}</span>`).join("")}</p></div>
        <div class="phase__tip">⚡ <b>Tip exprés:</b> ${esc(f.tip)}</div>
      </div></div></div>
    </article>`).join("");
}

/* ---- Instrumentos ---- */
function renderInstrumentos() {
  $("#tools").innerHTML = INSTRUMENTOS.map(t => `
    <article class="tool" style="--c:${t.color}">
      <span class="tool__tag">${esc(t.fase)}</span>
      <h4>${esc(t.nombre)}</h4>
      <p>${esc(t.desc)}</p>
      <div class="tool__ex"><b>Ejemplo:</b> ${esc(t.ej)}</div>
    </article>`).join("");
}

/* ---- Categorías ---- */
function renderCategorias() {
  $("#cats").innerHTML = CATEGORIAS.map(c => `
    <button class="cat" data-cat="${c.id}" style="--c:${c.color}" aria-pressed="false">
      <span class="cat__name">${esc(c.nombre)}</span>
      <span class="cat__reto">${esc(c.reto)}</span>
    </button>`).join("");
}

/* ---- Evaluador ---- */
function renderEvaluador() {
  const opts = [5, 4, 3, 2, 1].map(v => `<option value="${v}">${v}</option>`).join("");
  let html = "";
  for (const [grupo, data] of Object.entries(CRITERIOS)) {
    html += `<div class="eval__group" style="--c:${data.color}">
      <span class="lbl">Perspectiva</span><h4>${grupo}</h4>
      ${data.items.map(it => `
        <label class="crit"><span>${esc(it)}</span>
          <select class="crit-input">${opts}</select></label>`).join("")}
    </div>`;
  }
  $("#evalCriterios").innerHTML = html;
}

/* ---- Checklist 3 días ---- */
function renderChecklist() {
  $("#checklist").innerHTML = CHECKLIST.map((d, di) => `
    <div class="card">
      <span class="day__tag">${esc(d.d)}</span>
      <div class="check" style="margin-top:.9rem">
        ${d.items.map((it, ii) => `
          <label><input type="checkbox" data-ck="d${di}i${ii}"><span>${esc(it)}</span></label>`).join("")}
      </div>
    </div>`).join("");
}

/* ---- Ejemplo trabajado ---- */
function renderEjemplo() {
  $("#example").innerHTML = `
    <div class="example__head">
      <span class="tag">${esc(EJEMPLO.cat)}</span>
      <h3>${esc(EJEMPLO.titulo)}</h3>
      <p>${esc(EJEMPLO.resumen)}</p>
    </div>
    <div class="example__steps">
      ${EJEMPLO.pasos.map(p => `
        <div class="estep"><div class="ph">${esc(p.ph)}</div>
          <div>${p.txt.map(t => `<p>${esc(t)}</p>`).join("")}</div></div>`).join("")}
    </div>`;
}
