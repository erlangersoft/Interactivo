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

/* ---------- Impresión aislada de una herramienta ---------- */
function printTool(printClass) {
  const ps = document.createElement("style");
  ps.id = "__tool-page";
  ps.textContent = "@page{size:A4 landscape;margin:1.2cm}";
  document.head.appendChild(ps);
  document.body.classList.add(printClass);
  window.print();
  window.addEventListener("afterprint", () => {
    document.body.classList.remove(printClass);
    document.getElementById("__tool-page")?.remove();
  }, { once: true });
}

/* ---------- Journal Map (mapa de recorrido) ---------- */
function initJourney() {
  const data = load();
  const status = $("#journeyStatus");
  const setStatus = t => { if (status) status.textContent = t; };

  $$("#journey-map textarea").forEach(ta => {
    const k = "jm_" + ta.dataset.field;
    if (data[k]) ta.value = data[k];
    ta.addEventListener("input", () => {
      const d = load(); d[k] = ta.value; save(d);
      setStatus("Guardado ✓");
    });
  });

  $("#journeyReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar todo el mapa de recorrido? Esta acción no se puede deshacer.")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("jm_")).forEach(k => delete d[k]);
    save(d);
    $$("#journey-map textarea").forEach(ta => ta.value = "");
    setStatus("Mapa vaciado");
  });

  $("#journeyPrint")?.addEventListener("click", () => printTool("print-journey"));
  setStatus("Tus cambios se guardan solos en este navegador");
}

/* ---------- Formato: describir ideas antes de evaluar ---------- */
function initIdeasTable() {
  const data = load();
  const status = $("#ideasStatus");
  const setStatus = t => { if (status) status.textContent = t; };

  $$(".idea-input").forEach(ta => {
    const k = "idea_" + ta.dataset.field;
    if (data[k]) ta.value = data[k];
    ta.addEventListener("input", () => {
      const d = load(); d[k] = ta.value; save(d);
      setStatus("Guardado ✓");
    });
  });

  $("#ideasReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar el formato de ideas? Esta acción no se puede deshacer.")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("idea_")).forEach(k => delete d[k]);
    save(d);
    $$(".idea-input").forEach(ta => ta.value = "");
    setStatus("Formato vaciado");
  });

  setStatus("Tus cambios se guardan solos en este navegador");
}

/* ---------- Frase del Reto (Punto de Vista) ---------- */
function initPov() {
  const data = load();
  const status = $("#povStatus");
  const result = $("#povResult");
  const inputs = $$("#pov-builder [data-field]");
  const setStatus = t => { if (status) status.textContent = t; };

  const compose = () => {
    const get = f => (data["pov_" + f] || "").trim();
    const u = get("usuario"), n = get("necesidad"), h = get("hallazgo");
    if (!u && !n && !h) { result.textContent = ""; result.classList.remove("is-ready"); return; }
    result.innerHTML = `«<b>${esc(u || "[Usuario]")}</b> necesita <b>${esc(n || "[necesidad]")}</b> porque <b>${esc(h || "[hallazgo sorprendente]")}</b>.»`;
    result.classList.add("is-ready");
  };

  inputs.forEach(el => {
    const k = "pov_" + el.dataset.field;
    if (data[k]) el.value = data[k];
    el.addEventListener("input", () => {
      data[k] = el.value;
      const d = load(); d[k] = el.value; save(d);
      compose();
      setStatus("Guardado ✓");
    });
  });

  $("#povReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar la frase del reto?")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("pov_")).forEach(k => { delete d[k]; delete data[k]; });
    save(d);
    inputs.forEach(el => el.value = "");
    compose();
    setStatus("Frase vaciada");
  });

  compose();
  setStatus("Tus cambios se guardan solos en este navegador");
}

/* ---------- Matriz de Feedback ---------- */
function initFeedback() {
  const data = load();
  const status = $("#feedbackStatus");
  const setStatus = t => { if (status) status.textContent = t; };

  $$("#feedback-grid textarea").forEach(ta => {
    const k = "fb_" + ta.dataset.field;
    if (data[k]) ta.value = data[k];
    ta.addEventListener("input", () => {
      const d = load(); d[k] = ta.value; save(d);
      setStatus("Guardado ✓");
    });
  });

  $("#feedbackReset")?.addEventListener("click", () => {
    if (!confirm("¿Vaciar la matriz de feedback? Esta acción no se puede deshacer.")) return;
    const d = load();
    Object.keys(d).filter(k => k.startsWith("fb_")).forEach(k => delete d[k]);
    save(d);
    $$("#feedback-grid textarea").forEach(ta => ta.value = "");
    setStatus("Matriz vaciada");
  });

  $("#feedbackPrint")?.addEventListener("click", () => printTool("print-feedback"));
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
