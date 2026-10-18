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
      "</svg>",
    tictactoe:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
      '<path d="M12 5v22M20 5v22M5 12h22M5 20h22" stroke-opacity="0.55"/>' +
      '<path d="M6.5 6.5l3 3M9.5 6.5l-3 3"/>' +
      '<circle cx="16" cy="16" r="2"/>' +
      '<path d="M22.5 22.5l3 3M25.5 22.5l-3 3"/>' +
      "</svg>",
    "2048fruit":
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round">' +
      '<rect x="5" y="5" width="10" height="10" rx="1.5"/><rect x="17" y="5" width="10" height="10" rx="1.5" stroke-opacity="0.55"/>' +
      '<rect x="5" y="17" width="10" height="10" rx="1.5" stroke-opacity="0.55"/><rect x="17" y="17" width="10" height="10" rx="1.5"/>' +
      "</svg>",
    mirrorbeam:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 8h12l-6 10h18" stroke-opacity="0.6"/>' +
      '<path d="M13 5l6 6M7 15l6 6"/>' +
      '<circle cx="28" cy="18" r="1.5" fill="currentColor" stroke="none"/>' +
      "</svg>",
    pixeldream:
      '<svg viewBox="0 0 32 32" fill="currentColor" stroke="none">' +
      '<rect x="6" y="6" width="5" height="5"/><rect x="13.5" y="6" width="5" height="5" opacity="0.5"/><rect x="21" y="6" width="5" height="5"/>' +
      '<rect x="6" y="13.5" width="5" height="5" opacity="0.5"/><rect x="13.5" y="13.5" width="5" height="5"/><rect x="21" y="13.5" width="5" height="5" opacity="0.5"/>' +
      '<rect x="6" y="21" width="5" height="5"/><rect x="13.5" y="21" width="5" height="5" opacity="0.5"/><rect x="21" y="21" width="5" height="5"/>' +
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

  // ---------- Scroll progress, scroll-spy nav, timeline rail ----------
  var progressBar = document.getElementById("scroll-progress-bar");
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var spyTargets = spyLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  var xpList = document.getElementById("xp-timeline");
  var xpFill = document.getElementById("xp-rail-fill");
  var xpItems = xpList ? Array.prototype.slice.call(xpList.querySelectorAll(".xp-item")) : [];

  function onScrollFrame() {
    var y = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;
    var docH = document.documentElement.scrollHeight - vh;

    if (progressBar) progressBar.style.transform = "scaleX(" + (docH > 0 ? y / docH : 0) + ")";

    var current = null;
    spyTargets.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= vh * 0.35) current = sec.id;
    });
    spyLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
    });

    if (xpList && xpFill) {
      var r = xpList.getBoundingClientRect();
      var marker = vh * 0.6;
      var p = Math.min(Math.max((marker - r.top) / r.height, 0), 1);
      xpFill.style.transform = "scaleY(" + p + ")";
      xpItems.forEach(function (item) {
        var dot = item.querySelector(".xp-dot");
        item.classList.toggle("is-reached", dot.getBoundingClientRect().top <= marker);
      });
    }
  }

  var scrollQueued = false;
  window.addEventListener("scroll", function () {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(function () { onScrollFrame(); scrollQueued = false; });
    }
  }, { passive: true });
  window.addEventListener("resize", onScrollFrame);
  onScrollFrame();

  // ---------- Project case studies ----------
  var GH = "https://github.com/shravya2909/";
  var projects = {
    "sprint-health": {
      tag: "Featured · Full-stack",
      title: "Sprint Health Dashboard",
      image: "img/projects/sprint-health.jpg",
      imageAlt: "Sprint Health Dashboard team view with velocity, completion and carryover cards above a velocity chart",
      summary: "A dashboard for engineering managers to track sprint health across teams: velocity, completion, carryover and goals.",
      built: [
        "CSV import and live Linear / Azure DevOps sync",
        "AI-assisted column mapping with Claude",
        "Trend alerts for rising carryover, bug share and falling velocity"
      ],
      impact: "One honest read on how every team's sprints are going, with risks flagged early.",
      stack: ["React", "Express", "Postgres", "Claude API"],
      repo: GH + "sprint-health-dashboard"
    },
    "crispr": {
      tag: "Featured · Deep learning",
      title: "Deep Learning-Based Prediction of CRISPR gRNA Efficiency and Off-Target Risk",
      summary: "A CNN that predicts how well a CRISPR guide RNA works and how likely it is to cut off-target.",
      impact: "Helps researchers narrow down guide candidates before running costly lab experiments.",
      stack: ["CNN", "Deep learning", "Bioinformatics"]
    },
    "jarvis": {
      tag: "Jan – Mar 2025 · AI assistant",
      title: "JARVIS: Voice-Activated Personal AI Assistant",
      summary: "A desktop assistant inspired by Marvel's J.A.R.V.I.S. that handles web search, email and reminders by voice.",
      impact: "Turns routine desktop tasks into hands-free commands.",
      stack: ["Speech recognition", "NLP", "APIs"]
    },
    "scoliosis": {
      tag: "Mar – Jun 2025 · Medical imaging",
      title: "Scoliosis Detection using Machine Learning",
      summary: "A CNN that detects scoliosis from spine X-ray images with high accuracy.",
      impact: "Supports earlier diagnosis and fewer manual interpretation errors.",
      stack: ["CNN", "Computer vision"]
    },
    "medico": {
      tag: "Aug 2025 – Present · In progress",
      title: "Medico: AI-Integrated Hospital Management System",
      summary: "A hospital platform with AI-driven modules for appointments, records and analytics.",
      impact: "Cuts manual admin so staff can spend more time on patient care.",
      stack: ["AI modules", "Workflow automation"]
    },
    "numberplate": {
      tag: "Aug 2025 · Computer vision",
      title: "Number Plate Detection using YOLOv8 and EasyOCR",
      summary: "A pipeline that finds vehicle number plates with a custom-trained YOLOv8 model and reads them with EasyOCR.",
      impact: "Automates plate reading end to end, the building block for parking, toll and access systems.",
      stack: ["Python", "YOLOv8", "EasyOCR"]
    },
    "heart": {
      tag: "Machine learning",
      title: "Heart Disease Prediction using Machine Learning",
      metric: "Up to 90% accuracy (SVM)",
      summary: "Predicts heart disease risk from the UCI Cleveland dataset, benchmarking four models.",
      impact: "Shows why comparing several models matters before trusting one.",
      stack: ["Python", "SVM", "Random Forest", "XGBoost", "Logistic Regression"],
      repo: GH + "Heart-Disease-Project"
    },
    "tictactoe": {
      tag: "Jun 2024 · Game",
      title: "Interactive Tic-Tac-Toe Game (Java + Swing)",
      summary: "A two-player desktop game with win and tie detection and a pastel-themed interface.",
      stack: ["Java", "Swing"],
      repo: GH + "TicTacToe-Game-Java"
    },
    "2048fruit": {
      tag: "Game",
      title: "2048: Fruit Edition",
      image: "img/projects/2048-fruit.jpg",
      imageAlt: "2048 Fruit Market board with cherry, grape, strawberry and lemon tiles on a wooden crate",
      summary: "A fruit-themed 2048: matching fruit merge up from Cherry to the Golden Mango.",
      stack: ["HTML", "CSS", "JavaScript"],
      repo: GH + "2048-fruit"
    },
    "mirrorbeam": {
      tag: "Game",
      title: "Mirror Beam",
      summary: "A puzzle game about redirecting a beam of light through mirrors to reach a target.",
      stack: ["Game"]
    },
    "pixeldream": {
      tag: "Game",
      title: "Pixel Dream",
      summary: "A small pixel-art game exploring level design and lightweight mechanics.",
      stack: ["Game"]
    }
  };

  // ---------- Modal ----------
  var overlay = document.getElementById("modal-overlay");
  var closeBtn = document.getElementById("modal-close");
  var el = function (id) { return document.getElementById(id); };
  var lastFocused = null;

  function fill(listEl, items) {
    listEl.textContent = "";
    (items || []).forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      listEl.appendChild(li);
    });
  }

  function openModal(key) {
    var d = projects[key];
    if (!d) return;

    var media = el("modal-media");
    media.textContent = "";
    media.className = "modal-media";
    if (d.image) {
      var img = document.createElement("img");
      img.src = d.image;
      img.alt = d.imageAlt || "";
      media.appendChild(img);
    } else {
      media.classList.add("modal-media--art");
      var art = document.createElement("span");
      art.className = "modal-media-icon";
      art.innerHTML = iconSvg[d.icon || key] || "";
      media.appendChild(art);
    }

    el("modal-tag").textContent = d.tag;
    el("modal-title").textContent = d.title;
    el("modal-summary").textContent = d.summary;

    fill(el("modal-built"), d.built);
    el("modal-built-wrap").hidden = !(d.built && d.built.length);

    el("modal-impact").textContent = d.impact || "";
    el("modal-impact-wrap").hidden = !d.impact;

    var stackItems = (d.metric ? [d.metric] : []).concat(d.stack || []);
    fill(el("modal-stack"), stackItems);
    if (d.metric) el("modal-stack").firstChild.className = "is-metric";
    el("modal-stack-wrap").hidden = !stackItems.length;

    var repo = el("modal-repo");
    repo.hidden = !d.repo;
    if (d.repo) repo.href = d.repo;

    lastFocused = document.activeElement;
    overlay.classList.add("is-open");
    overlay.querySelector(".modal").scrollTop = 0;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-project]").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(card.getAttribute("data-project"));
    });
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      var f = overlay.querySelectorAll("button, a[href]:not([hidden])");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
