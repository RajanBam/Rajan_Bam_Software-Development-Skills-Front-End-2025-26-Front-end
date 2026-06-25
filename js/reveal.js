/* =====================================================================
   reveal.js — scroll-reveal, animated skill bars and count-up stats.
   Uses IntersectionObserver so work only happens when elements are visible.
   ===================================================================== */
(function () {
  "use strict";
  const { $, $$, reduceMotion } = window.RB;

  /* ---------- scroll reveal ---------- */
  const revealEls = $$(".reveal");
  revealEls.forEach((el, i) => el.style.setProperty("--i", (i % 6)));
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- skill bars fill when in view ---------- */
  const skillBars = $$(".skill-bar span");
  const fillSkills = () => skillBars.forEach((b) => { b.style.width = (b.dataset.fill || 0) + "%"; });
  const skillsSection = $("#skills");
  if (skillsSection && "IntersectionObserver" in window) {
    const so = new IntersectionObserver((e, obs) => {
      if (e[0].isIntersecting) { fillSkills(); obs.disconnect(); }
    }, { threshold: 0.25 });
    so.observe(skillsSection);
  } else { fillSkills(); }

  /* ---------- animated counters ---------- */
  const counters = $$(".counter");
  const runCounter = (el) => {
    const target = +el.dataset.target || 0;
    if (reduceMotion) { el.textContent = target; return; }
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver((e, obs) => {
      e.forEach((en) => { if (en.isIntersecting) { runCounter(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else { counters.forEach(runCounter); }
})();
