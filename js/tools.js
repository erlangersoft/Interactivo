/* ============================================================
   tools.js — Lienzo interactivo, evaluador y checklist
   Persistencia local con localStorage (funciona al abrir el
   archivo en tu navegador).
   ============================================================ */

const STORE = "guia-dt-cbba";
const load = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } };
const save = d => { try { localStorage.setItem(STORE, JSON.stringify(d)); } catch {} };

/* ---------- Business Model Canvas ---------- */
function initCanvas() {
  const data = load();
  const status = $("#bmcStatus");
  const setStatus = t => { if (status) status.textContent = t; };

  $$("#bmc textarea").forEach(ta => {
    const k = ta.dataset.field;
    if (data["bmc_" + k]) ta.value = data["bmc_" + k];
    ta.addEventListener("input", () => {
      const d = load(); d["bmc_" + k] = ta.value; save(d);
      setStatus("Guardado ✓");
    });
  });

  $("#bmcReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar todo el lienzo? Esta acción no se puede deshacer.")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("bmc_")).forEach(k => delete d[k]);
    save(d);
    $$("#bmc textarea").forEach(ta => ta.value = "");
    setStatus("Lienzo vaciado");
  });

  $("#bmcPrint")?.addEventListener("click", () => {
    const ps = document.createElement("style");
    ps.id = "__bmc-page";
    ps.textContent = "@page{size:A4 landscape;margin:1.2cm}";
    document.head.appendChild(ps);
    document.body.classList.add("print-bmc");
    window.print();
    window.addEventListener("afterprint", () => {
      document.body.classList.remove("print-bmc");
      document.getElementById("__bmc-page")?.remove();
    }, { once: true });
  });
  setStatus("Tus cambios se guardan solos en este navegador");
}

/* ---------- User Persona ---------- */
function initPersona() {
  const data = load();
  const status = $("#personaStatus");
  const setStatus = t => { if (status) status.textContent = t; };

  $$("#persona-canvas [data-field]").forEach(el => {
    const k = "persona_" + el.dataset.field;
    if (data[k]) el.value = data[k];
    el.addEventListener("input", () => {
      const d = load(); d[k] = el.value; save(d);
      setStatus("Guardado ✓");
    });
  });

  $("#personaReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar el User Persona? Esta acción no se puede deshacer.")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("persona_")).forEach(k => delete d[k]);
    save(d);
    $$("#persona-canvas [data-field]").forEach(el => el.value = "");
    setStatus("Lienzo vaciado");
  });

  $("#personaPrint")?.addEventListener("click", () => {
    const ps = document.createElement("style");
    ps.id = "__persona-page";
    ps.textContent = "@page{size:A4 landscape;margin:1.2cm}";
    document.head.appendChild(ps);
    document.body.classList.add("print-persona");
    window.print();
    window.addEventListener("afterprint", () => {
      document.body.classList.remove("print-persona");
      document.getElementById("__persona-page")?.remove();
    }, { once: true });
  });

  setStatus("Tus cambios se guardan solos en este navegador");
}

/* ---------- Evaluador de ideas ---------- */
function initEvaluador() {
  const inputs = $$(".crit-input");
  const numEl  = $("#scoreNum");
  const fillEl = $("#scoreFill");
  const msgEl  = $("#scoreMsg");

  const mensaje = avg => {
    if (avg >= 4.2) return "Idea muy sólida en las tres perspectivas. ¡Adelante con el prototipo!";
    if (avg >= 3.3) return "Buena idea con potencial. Refuercen los criterios con menor puntaje.";
    if (avg >= 2.4) return "Idea aceptable, pero con riesgos. Revisen mercado y recursos antes de seguir.";
    return "Idea débil para un proyecto exprés. Consideren elegir otra de la lluvia de ideas.";
  };

  const calc = () => {
    const vals = inputs.map(i => +i.value);
    const total = vals.reduce((a, b) => a + b, 0);
    const avg = total / vals.length;        // promedio sobre 15 criterios
    numEl.textContent = avg.toFixed(1);
    fillEl.style.width = (avg / 5 * 100) + "%";
    msgEl.textContent = mensaje(avg);
  };

  inputs.forEach(i => i.addEventListener("change", calc));
  calc();
}

/* ---------- Checklist 3 días ---------- */
function initChecklist() {
  const data = load();
  $$("[data-ck]").forEach(box => {
    const k = "ck_" + box.dataset.ck;
    box.checked = !!data[k];
    box.addEventListener("change", () => {
      const d = load(); d[k] = box.checked; save(d);
    });
  });
}
