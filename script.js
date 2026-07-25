/* ============================================================
   Ali Naderi — Warm 3D Portfolio
   Vanilla JS, no dependencies, GitHub Pages friendly.
   Every lookup is guarded so a missing node never breaks the page.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Theme (warm light by default) ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var STORAGE_KEY = 'ali-theme';

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null; // private mode / blocked storage
    }
  }

  function storeTheme(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (err) {
      /* non-fatal */
    }
  }

  var saved = readStoredTheme();
  if (saved === 'light' || saved === 'dark') {
    root.dataset.theme = saved;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.dataset.theme = 'dark';
  } else {
    root.dataset.theme = 'light';
  }

  function syncThemeUI() {
    var isDark = root.dataset.theme === 'dark';
    if (themeToggle) {
      themeToggle.textContent = isDark ? '☼' : '☾';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#16121b' : '#fdf6ec');
  }
  syncThemeUI();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      storeTheme(root.dataset.theme);
      syncThemeUI();
    });
  }

  /* ---------- Mobile navigation ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.querySelector('.nav');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('.nav-links a'), function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeNav();
  });

  /* ---------- Scroll reveal ---------- */
  var revealables = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });
  } else {
    // Old browsers: show everything immediately.
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('visible'); });
  }

  /* ---------- Scroll progress bar (rAF-throttled) ---------- */
  var progress = document.getElementById('progress');

  if (progress) {
    var ticking = false;

    var paint = function () {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollable > 0 ? (window.pageYOffset / scrollable) * 100 : 0;
      progress.style.width = Math.min(100, Math.max(0, ratio)) + '%';
      ticking = false;
    };

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(paint);
      }
    }, { passive: true });

    window.addEventListener('resize', paint, { passive: true });
    paint();
  }

  /* ---------- Contact form (static-site friendly) ---------- */
  var form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var note = document.getElementById('formNote');
      if (note) {
        note.textContent = 'Thanks — your message is ready. Reach me directly at alinaderi1@gmail.com.';
      }
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
