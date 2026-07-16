/* === MONEYLINK — Shared JavaScript === */

document.addEventListener('DOMContentLoaded', () => {
  initScrollHeader();
  initFilterChips();
  initMobileNav();
  initLangSwitcher();
  initContactForm();
  initDynamicYear();
  initTeamCarousel();
  initPillNav();
  initThemeToggle();
  initScrollReveal();
  initHeroMotion();
  initScrollProgress();
  initCounters();
  initParallax();
  initMagneticButtons();
  initCardTilt();
});

/* --- Scroll Header Shrink --- */
function initScrollHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

/* --- Filter Chips (Product Catalog) --- */
function initFilterChips() {
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-categories]');
  if (!chips.length || !cards.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.getAttribute('data-filter');
      chips.forEach(c => c.classList.remove('filter-chip--active'));
      chip.classList.add('filter-chip--active');
      filterWithAnimation(cards, filter);
    });
  });
}

function filterWithAnimation(cards, filter) {
  const toHide = [];
  const toShow = [];

  cards.forEach(card => {
    const cats = (card.getAttribute('data-categories') || '').split(' ');
    const matches = filter === 'todos' || cats.includes(filter);
    if (matches) toShow.push(card);
    else toHide.push(card);
  });

  toHide.forEach(c => {
    c.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    c.style.opacity = '0';
    c.style.transform = 'scale(0.95)';
  });

  setTimeout(() => {
    toHide.forEach(c => {
      c.style.display = 'none';
      c.style.opacity = '';
      c.style.transform = '';
      c.style.transition = '';
    });
    toShow.forEach((c, i) => {
      c.style.display = '';
      c.style.opacity = '0';
      c.style.transform = 'scale(0.96)';
      c.style.transition = '';
      requestAnimationFrame(() => {
        setTimeout(() => {
          c.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          c.style.opacity = '1';
          c.style.transform = '';
        }, i * 40);
      });
    });
  }, 200);
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const close = document.getElementById('nav-close');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', openNav);
  if (close) close.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });
}

/* --- Language Switcher Dropdown --- */
function initLangSwitcher() {
  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('active');
    dropdown.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  });

  dropdown.addEventListener('click', (e) => e.stopPropagation());
}

/* --- Contact Form Demo --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll('[required]');
    let valid = true;

    fields.forEach(field => {
      const error = field.closest('.field-group')?.querySelector('.field-error');
      if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
        field.classList.add('border-error');
        if (error) error.style.display = 'block';
        valid = false;
      } else {
        field.classList.remove('border-error');
        if (error) error.style.display = 'none';
      }
    });

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      const sendingLabel = submitBtn.dataset.label ? submitBtn.dataset.label.replace(/\s+\S+$/, '') : 'Enviando';
      submitBtn.innerHTML = '<span class="material-symbols-outlined" style="animation:spin 0.8s linear infinite;vertical-align:middle;font-size:1.1em">progress_activity</span> ' + sendingLabel + '…';
    }

    setTimeout(() => {
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) success.classList.add('active');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.label || 'Enviar mensaje';
      }
    }, 800);
  });
}

/* --- Team Carousel --- */
function initTeamCarousel() {
  const container = document.getElementById('team-carousel');
  if (!container) return;

  const dataEl = document.getElementById('team-data');
  if (!dataEl) return;

  let members;
  try {
    members = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.warn('Team data inválida', e);
    return;
  }
  const imageBox = container.querySelector('.team-carousel__images');
  const nameEl = container.querySelector('.team-carousel__name');
  const roleEl = container.querySelector('.team-carousel__role');
  const descEl = container.querySelector('.team-carousel__desc');
  const textWrap = container.querySelector('.team-carousel__text');
  const prevBtn = document.getElementById('team-prev');
  const nextBtn = document.getElementById('team-next');

  let active = 0;
  let autoplayTimer = null;
  const total = members.length;

  members.forEach((m, i) => {
    const img = document.createElement('img');
    img.src = m.src;
    img.alt = m.name;
    img.dataset.index = i;
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '400');
    img.setAttribute('height', '400');
    imageBox.appendChild(img);
  });

  function calculateGap() {
    const w = imageBox.offsetWidth;
    const minW = 400, maxW = 700, minG = 40, maxG = 70;
    if (w <= minW) return minG;
    if (w >= maxW) return maxG;
    return minG + (maxG - minG) * ((w - minW) / (maxW - minW));
  }

  function updateImages() {
    const gap = calculateGap();
    const stickUp = gap * 0.75;
    const imgs = imageBox.querySelectorAll('img');

    imgs.forEach((img, i) => {
      const isActive = i === active;
      const isLeft = (active - 1 + total) % total === i;
      const isRight = (active + 1) % total === i;

      if (isActive) {
        Object.assign(img.style, {
          zIndex: 3, opacity: 1, pointerEvents: 'auto',
          transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)'
        });
      } else if (isLeft) {
        Object.assign(img.style, {
          zIndex: 2, opacity: 1, pointerEvents: 'auto',
          transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(15deg)`
        });
      } else if (isRight) {
        Object.assign(img.style, {
          zIndex: 2, opacity: 1, pointerEvents: 'auto',
          transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(-15deg)`
        });
      } else {
        Object.assign(img.style, {
          zIndex: 1, opacity: 0, pointerEvents: 'none',
          transform: 'translateX(0) translateY(0) scale(0.7) rotateY(0deg)'
        });
      }
    });
  }

  function renderWords(text) {
    descEl.innerHTML = '';
    text.split(' ').forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word + ' ';
      span.style.animationDelay = (i * 0.03) + 's';
      descEl.appendChild(span);
    });
  }

  function updateContent() {
    textWrap.classList.add('fading');
    setTimeout(() => {
      const m = members[active];
      nameEl.textContent = m.name;
      roleEl.textContent = m.designation;
      renderWords(m.quote);
      textWrap.classList.remove('fading');
    }, 250);
  }

  function goTo(index) {
    active = ((index % total) + total) % total;
    updateImages();
    updateContent();
  }

  function next() { goTo(active + 1); resetAutoplay(); }
  function prev() { goTo(active - 1); resetAutoplay(); }

  function startAutoplay() {
    autoplayTimer = setInterval(() => goTo(active + 1), 5000);
  }
  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  document.addEventListener('keydown', (e) => {
    if (!isElementInViewport(container)) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  window.addEventListener('resize', updateImages);

  goTo(0);
  startAutoplay();

  window.addEventListener('pagehide', () => clearInterval(autoplayTimer));
}

/* --- Theme Toggle --- */
function initThemeToggle() {
  var btns = document.querySelectorAll('[data-theme-toggle]');
  if (!btns.length) return;

  var saved = localStorage.getItem('moneylink-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('moneylink-theme', isDark ? 'dark' : 'light');
    });
  });
}

/* --- Pill Nav Cursor --- */
function initPillNav() {
  var nav = document.getElementById('pill-nav');
  if (!nav) return;

  var cursor = nav.querySelector('.pill-nav__cursor');
  if (!cursor) return;

  var items = nav.querySelectorAll('li:not(.pill-nav__cursor)');

  items.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      items.forEach(function(i) { i.classList.remove('is-hovered'); });
      item.classList.add('is-hovered');
      cursor.style.width = item.offsetWidth + 'px';
      cursor.style.left = item.offsetLeft + 'px';
      cursor.style.opacity = '1';
    });
  });

  nav.addEventListener('mouseleave', function() {
    items.forEach(function(i) { i.classList.remove('is-hovered'); });
    cursor.style.opacity = '0';
  });
}

/* --- Hero Motion (text stagger + container animations) --- */
function initHeroMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-hero-stagger]').forEach(function(el) {
      el.style.opacity = '1';
    });
    document.querySelectorAll('[data-hero-animate]').forEach(function(el) {
      el.style.opacity = '1';
    });
    return;
  }

  var baseDelay = 0.15;

  document.querySelectorAll('[data-hero-stagger]').forEach(function(el) {
    var mode = el.getAttribute('data-hero-stagger');
    var text = el.textContent.trim();
    var elDelay = parseFloat(el.getAttribute('data-hero-delay') || '0');
    el.innerHTML = '';
    el.style.opacity = '1';

    if (mode === 'char') {
      var words = text.split(' ');
      var charIndex = 0;
      words.forEach(function(word, wIdx) {
        var wordWrap = document.createElement('span');
        wordWrap.className = 'inline-block text-nowrap';
        word.split('').forEach(function(ch) {
          var span = document.createElement('span');
          span.className = 'hero-char';
          span.textContent = ch;
          span.style.animationDelay = (baseDelay + elDelay + charIndex * 0.03) + 's';
          wordWrap.appendChild(span);
          charIndex++;
        });
        el.appendChild(wordWrap);
        if (wIdx < words.length - 1) {
          var space = document.createElement('span');
          space.className = 'hero-word-space';
          el.appendChild(space);
          charIndex++;
        }
      });
    } else {
      var words = text.split(' ');
      words.forEach(function(word, i) {
        var span = document.createElement('span');
        span.className = 'hero-word';
        span.textContent = word;
        span.style.animationDelay = (baseDelay + elDelay + i * 0.06) + 's';
        el.appendChild(span);
        if (i < words.length - 1) {
          var space = document.createElement('span');
          space.className = 'hero-word-space';
          el.appendChild(space);
        }
      });
    }
  });

  document.querySelectorAll('[data-hero-animate]').forEach(function(el) {
    var delay = parseFloat(el.getAttribute('data-hero-delay') || '0');
    el.style.animationDelay = (baseDelay + delay) + 's';
  });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
  var elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(function(el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        el.classList.add('is-visible');
        observer.unobserve(el);
        // Clear stagger delay after reveal so hover/tilt transitions respond instantly
        el.addEventListener('transitionend', function() {
          el.style.transitionDelay = '0ms';
        }, { once: true });
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(function(el) { observer.observe(el); });
}

/* --- Dynamic Year --- */
function initDynamicYear() {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* --- Scroll Progress Bar --- */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

/* --- Animated Number Counters --- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-counter'));
      const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0');
      const suffix = el.getAttribute('data-counter-suffix') || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = (ease * target).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* --- Parallax Hero Backgrounds --- */
function initParallax() {
  const heroes = document.querySelectorAll('[data-parallax]');
  if (!heroes.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function update() {
    const scrollY = window.scrollY;
    heroes.forEach(hero => {
      const rate = parseFloat(hero.getAttribute('data-parallax') || '0.25');
      const bg = hero.querySelector('.parallax-bg');
      if (bg) bg.style.transform = `translateY(${scrollY * rate}px)`;
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* --- Magnetic Buttons (desktop only) --- */
function initMagneticButtons() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 12;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 12;
      btn.style.transform = `translate(${x}px, ${y}px) translateY(-1px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* --- 3D Card Tilt (desktop only) --- */
function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientY - r.top)  / r.height - 0.5) * -6;
      const y = ((e.clientX - r.left) / r.width  - 0.5) *  6;
      card.style.transform = `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
