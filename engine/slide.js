/* ============================================
   Engine — slide.js
   Keyboard nav, scaling, PDF, counter
   DO NOT EDIT
   ============================================ */
(function () {
  "use strict";

  const slides = () => document.querySelectorAll(".slide");
  let current = 0;

  function go(index) {
    const s = slides();
    if (index < 0 || index >= s.length) return;
    s[current].classList.remove("active");
    current = index;
    s[current].classList.add("active");
    updateCounter();
    updateProgress();
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function updateCounter() {
    const el = document.querySelector(".slide-counter");
    if (el) el.textContent = `${current + 1} / ${slides().length}`;
  }

  function updateProgress() {
    const bar = document.querySelector(".progress-bar");
    if (!bar) return;
    const pct = ((current + 1) / slides().length) * 100;
    bar.style.width = pct + "%";
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  function printPDF() {
    const scale = new URLSearchParams(location.search).get("print-scale");
    if (scale) document.documentElement.style.fontSize = scale + "%";
    window.print();
  }

  // Keyboard
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight": case "ArrowDown": case " ": e.preventDefault(); next(); break;
      case "ArrowLeft": case "ArrowUp": e.preventDefault(); prev(); break;
      case "f": case "F": toggleFullscreen(); break;
    }
  });

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    const s = slides();
    if (s.length) { s[0].classList.add("active"); updateCounter(); updateProgress(); }

    // Nav buttons
    document.querySelector(".nav-prev")?.addEventListener("click", prev);
    document.querySelector(".nav-next")?.addEventListener("click", next);
    document.querySelector(".nav-fs")?.addEventListener("click", toggleFullscreen);
    document.querySelector(".nav-pdf")?.addEventListener("click", printPDF);
  });
})();
