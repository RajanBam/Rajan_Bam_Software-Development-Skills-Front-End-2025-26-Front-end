/* =====================================================================
   slideshow.js — responsive gallery slideshow.
   Auto-play, arrows, generated dots, pause-on-hover and touch-swipe.
   ===================================================================== */
(function () {
  "use strict";
  const { $, $$, reduceMotion } = window.RB;

  const slideshow = $("#slideshow");
  if (!slideshow) return;

  const slides = $$(".slide", slideshow);
  const dotsWrap = $("#slideDots");
  let idx = slides.findIndex((s) => s.classList.contains("is-active"));
  if (idx < 0) idx = 0;
  let timer;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", "Go to slide " + (i + 1));
    if (i === idx) b.classList.add("active");
    b.addEventListener("click", () => { go(i); restart(); });
    dotsWrap.appendChild(b);
  });
  const dots = $$("button", dotsWrap);

  function go(n) {
    slides[idx].classList.remove("is-active");
    dots[idx] && dots[idx].classList.remove("active");
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add("is-active");
    dots[idx] && dots[idx].classList.add("active");
  }
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);
  function start() { if (!reduceMotion) timer = setInterval(next, 4500); }
  function restart() { clearInterval(timer); start(); }

  $("#slideNext").addEventListener("click", () => { next(); restart(); });
  $("#slidePrev").addEventListener("click", () => { prev(); restart(); });
  slideshow.addEventListener("mouseenter", () => clearInterval(timer));
  slideshow.addEventListener("mouseleave", start);

  // touch swipe
  let x0 = null;
  slideshow.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  slideshow.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); restart(); }
    x0 = null;
  });

  start();
})();
