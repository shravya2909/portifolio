(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Hero load-in orchestration ----------
  window.addEventListener("load", function () {
    document.body.classList.add("is-loaded");
  });

  // ---------- Per-project icon marks (small abstract line-art, tied to palette) ----------
  var iconSvg = {
    "sprint-health":
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M6 25V18M13 25V11M20 25V15M27 25V8"/>' +
      '<path d="M6 13l7-4 7 3 7-8" stroke-opacity="0.55"/>' +
      "</svg>",
    crispr:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
      '<path d="M10 4c0 6 12 6 12 12s-12 6-12 12"/>' +
      '<path d="M22 4c0 6-12 6-12 12s12 6 12 12" stroke-opacity="0.55"/>' +
      '<path d="M10.5 9h11M9.7 15.5h12.6M10.5 23h11"/>' +
      "</svg>",
    jarvis:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
      '<path d="M6 16v4M11 11v10M16 6v20M21 11v10M26 16v4"/>' +
      "</svg>",
    scoliosis:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
      '<path d="M16 3c-5 3-5 6 0 9s5 6 0 9-5 6 0 8"/>' +
      '<circle cx="16" cy="3" r="1.3" fill="currentColor" stroke="none"/>' +
      '<circle cx="19.3" cy="9" r="1.3" fill="currentColor" stroke="none"/>' +
      '<circle cx="12.7" cy="15" r="1.3" fill="currentColor" stroke="none"/>' +
      '<circle cx="19.3" cy="21" r="1.3" fill="currentColor" stroke="none"/>' +
      '<circle cx="15" cy="28" r="1.3" fill="currentColor" stroke="none"/>' +
      "</svg>",
    medico:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="5" y="5" width="22" height="22" rx="2"/>' +
      '<path d="M16 11v10M11 16h10"/>' +
      "</svg>",
    numberplate:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="4" y="10" width="24" height="12" rx="1.5"/>' +
      '<path d="M8 16h4M16 16h8" stroke-opacity="0.6"/>' +
      '<circle cx="6.3" cy="12.3" r="0.6" fill="currentColor" stroke="none"/>' +
      '<circle cx="25.7" cy="19.7" r="0.6" fill="currentColor" stroke="none"/>' +
      "</svg>",
    heart:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 18h5l2.5-7 4 14 3-11 2 4h7.5"/>' +
      "</svg>"
  };

  document.querySelectorAll(".project-icon[data-icon]").forEach(function (el) {
    var key = el.getAttribute("data-icon");
    if (iconSvg[key]) el.innerHTML = iconSvg[key];
  });

  // ---------- Section marks (small line-art motifs beside section headings) ----------
  var sectionIconSvg = {
    about:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
      '<path d="M4 24c4 0 4-6 8-6s4 6 8 6 4-10 8-10"/>' +
      '<circle cx="4" cy="24" r="1.3" fill="currentColor" stroke="none"/>' +
      '<circle cx="28" cy="14" r="1.3" fill="currentColor" stroke="none"/>' +
      "</svg>",
    experience:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 26h6v-6h6v-6h6v-6h6"/>' +
      "</svg>",
    education:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 8c4-2 8-2 12 1v15c-4-3-8-3-12-1z"/>' +
      '<path d="M28 8c-4-2-8-2-12 1v15c4-3 8-3 12-1z" stroke-opacity="0.6"/>' +
      "</svg>",
    volunteering:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
      '<path d="M16 28V14"/>' +
      '<path d="M16 18c-5 0-8-3-8-8 5 0 8 3 8 8z"/>' +
      '<path d="M16 14c5 0 8-3 8-8-5 0-8 3-8 8z" stroke-opacity="0.6"/>' +
      "</svg>",
    beyond:
      '<svg viewBox="0 0 32 32" fill="currentColor" stroke="none">' +
      '<path d="M16 4c0 6 2 8 8 8-6 0-8 2-8 8 0-6-2-8-8-8 6 0 8-2 8-8z"/>' +
      "</svg>"
  };

  document.querySelectorAll(".section-mark[data-icon]").forEach(function (el) {
    var key = el.getAttribute("data-icon");
    if (sectionIconSvg[key]) el.innerHTML = sectionIconSvg[key];
  });

  // ---------- Mobile nav toggle ----------
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Scroll-triggered reveals (varied per element via CSS classes) ----------
  var revealEls = document.querySelectorAll('[class*="reveal-"]');
  if (prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---------- Scroll-linked parallax ----------
  var parallaxEls = document.querySelectorAll("[data-parallax]");
  if (parallaxEls.length && !prefersReducedMotion) {
    var ticking = false;
    function updateParallax() {
      var scrollY = window.scrollY || window.pageYOffset;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        el.style.transform = "translateY(" + (scrollY * speed * -1) + "px)";
      });
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  // ---------- Project data (full descriptions for modal) ----------
  var projects = {
    "sprint-health": {
      tag: "Featured",
      title: "Sprint Health Dashboard",
      desc: "A sprint analytics dashboard built to surface team velocity, risk signals, and delivery health at a glance — designed so stakeholders can see project status without having to ask for it."
    },
    "crispr": {
      tag: "Featured",
      title: "Deep Learning-Based Prediction of CRISPR gRNA Efficiency and Off-Target Risk",
      desc: "A CNN-based approach to predicting CRISPR guide RNA efficiency and off-target risk, applying deep learning to a genuinely high-stakes bioinformatics problem."
    },
    "jarvis": {
      tag: "Jan 2025 – Mar 2025",
      title: "JARVIS — Voice-Activated Personal AI Assistant",
      desc: "Desktop-based AI assistant inspired by Marvel's J.A.R.V.I.S. Integrated speech recognition, NLP, and APIs to perform tasks like web search, email, and reminders."
    },
    "scoliosis": {
      tag: "Mar 2025 – Jun 2025",
      title: "Scoliosis Detection using Machine Learning",
      desc: "Implemented a CNN model to detect scoliosis from spine X-ray images with high accuracy, aimed at supporting earlier diagnosis and reducing manual interpretation errors."
    },
    "medico": {
      tag: "Aug 2025 – Present",
      title: "Medico — AI-Integrated Hospital Management System",
      desc: "Designed a hospital management platform with AI-driven modules for appointments, records, and analytics. Enhanced workflow automation and improved overall patient care efficiency."
    },
    "numberplate": {
      tag: "Aug 2025",
      title: "Number Plate Detection using YOLOv8 and EasyOCR",
      desc: "Built a complete pipeline to detect vehicle number plates using a custom-trained YOLOv8 model, integrated with EasyOCR for text extraction, achieving high accuracy in detection and recognition."
    },
    "heart": {
      tag: "Machine Learning",
      title: "Heart Disease Prediction using Machine Learning",
      desc: "Developed a predictive model using the UCI Cleveland dataset to identify heart disease risk. Achieved up to 90% accuracy with SVM, benchmarked against other algorithms. Showcases potential in healthcare analytics."
    },
    "tictactoe": {
      tag: "Jun 2024",
      title: "Interactive Tic-Tac-Toe Game (Java + Swing)",
      desc: "Two-player GUI-based game with win/tie detection and real-time status updates, built with a pastel-themed interface."
    },
    "2048fruit": {
      tag: "Game",
      title: "2048 — Fruit Edition",
      desc: "A fruit-themed spin on the classic 2048 tile-merging puzzle game."
    },
    "mirrorbeam": {
      tag: "Game",
      title: "Mirror Beam",
      desc: "A puzzle game built around redirecting a beam of light through mirrors to reach a target."
    },
    "pixeldream": {
      tag: "Game",
      title: "Pixel Dream",
      desc: "A small pixel-art style game project exploring level design and lightweight game mechanics."
    }
  };

  // ---------- Modal ----------
  var overlay = document.getElementById("modal-overlay");
  var modalTag = document.getElementById("modal-tag");
  var modalTitle = document.getElementById("modal-title");
  var modalDesc = document.getElementById("modal-desc");
  var closeBtn = document.getElementById("modal-close");
  var lastFocused = null;

  function openModal(key) {
    var data = projects[key];
    if (!data) return;
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    lastFocused = document.activeElement;
    overlay.classList.add("is-open");
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-project]").forEach(function (el) {
    el.addEventListener("click", function () {
      openModal(el.getAttribute("data-project"));
    });
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
  });
})();
