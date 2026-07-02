/* =====================================================================
   effects.js — the finishing touches: rotating role text, cursor glow,
   card tilt, hero parallax and contact-form validation.
   All motion respects prefers-reduced-motion.
   ===================================================================== */
(function () {
  "use strict";
  const { $, $$, reduceMotion } = window.RB;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- rotating role text ---------- */
  const rotator = $(".rotator-word");
  if (rotator && !reduceMotion) {
    const words = ["responsive websites", "clean interfaces", "fast web apps",
                   "accessible layouts", "delightful UIs"];
    let i = 0;
    rotator.style.transition = "opacity .3s ease, transform .3s ease";
    setInterval(() => {
      rotator.style.opacity = "0";
      rotator.style.transform = "translateY(8px)";
      setTimeout(() => {
        i = (i + 1) % words.length;
        rotator.textContent = words[i];
        rotator.style.opacity = "1";
        rotator.style.transform = "none";
      }, 320);
    }, 2400);
  }

  /* ---------- cursor glow (pointer devices only) ---------- */
  const glow = $(".cursor-glow");
  if (glow && finePointer && !reduceMotion) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; glow.style.opacity = "1"; });
    (function loop() {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- subtle 3D tilt on project cards ---------- */
  if (finePointer && !reduceMotion) {
    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${py * -5}deg) rotateY(${px * 6}deg)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- hero parallax ---------- */
  const blobs = $$(".blob");
  if (blobs.length && !reduceMotion) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      blobs.forEach((b, i) => { b.style.transform = `translateY(${y * (0.05 + i * 0.03)}px)`; });
    }, { passive: true });
  }

  /* ---------- contact form (front-end validation only) ---------- */
  const form = $("#contactForm");
  if (form) {
    const note = $("#formNote");
    const setError = (name, msg) => {
      const field = form.querySelector(`[name="${name}"]`).closest(".field");
      field.classList.toggle("invalid", !!msg);
      const el = form.querySelector(`.field-error[data-for="${name}"]`);
      if (el) el.textContent = msg || "";
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      let ok = true;
      if (!data.name.trim()) { setError("name", "Please enter your name."); ok = false; } else setError("name", "");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) { setError("email", "Enter a valid email address."); ok = false; } else setError("email", "");
      if (data.message.trim().length < 10) { setError("message", "Message should be at least 10 characters."); ok = false; } else setError("message", "");
      if (!ok) { note.textContent = "Please fix the highlighted fields."; note.className = "form-note err"; return; }
      note.textContent = `Thanks, ${data.name.split(" ")[0]}! This is a demo form — connect it to a service like Formspree to receive messages.`;
      note.className = "form-note ok";
      form.reset();
    });
  }
})();
