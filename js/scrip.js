/* ============================================================
   scrip.js  —  Aconquija Turismo
   JS unificado: index + plantilla de lugares
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── BARRA DE PROGRESO DE LECTURA ── */
  const progress = document.getElementById('readProgress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      progress.style.width = pct + '%';
    }, { passive: true });
  }

  /* ── NAV: SCROLL (fondo al scrollear) ── */
  const nav = document.getElementById('siteNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── NAV MOBILE: inyectar botón cerrar, overlay e iconos sociales ── */
  const navLinks = document.getElementById('navLinks');
  const menuBtn  = document.getElementById('menuBtn');

  if (navLinks && menuBtn) {

    /* Botón × dentro del panel */
    const closeBtn = document.createElement('button');
    closeBtn.className   = 'nav-close';
    closeBtn.setAttribute('aria-label', 'Cerrar menú');
    closeBtn.innerHTML   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`;
    navLinks.appendChild(closeBtn);

    /* Iconos sociales al pie del panel (sólo mobile) */
    const mobileSocial = document.createElement('div');
    mobileSocial.className = 'nav-mobile-social';
    mobileSocial.innerHTML = `
      <a href="https://www.instagram.com/turismo_aconquijacat?igsh=MTJxOGR2NWd3aWZqOA==" target="_blank" class="icon-circle" title="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/share/1M1xpsvGS9/?mibextid=wwXIfr" target="_blank" class="icon-circle" title="Facebook">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8a1 1 0 0 1 1-1h2V4z"/>
        </svg>
      </a>
      <a href="https://wa.me/5493834966977" target="_blank" class="icon-circle" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .03 5.37.03 12c0 2.12.56 4.19 1.62 6.02L0 24l6.16-1.61A11.95 11.95 0 0 0 12.03 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.03 21.8a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.65.95.98-3.56-.24-.37A9.78 9.78 0 1 1 12.03 21.8Zm5.39-7.33c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.56.15-.19.19-.33.29-.55.1-.22.05-.41-.02-.56-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.33-.26.26-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z"/>
        </svg>
      </a>`;
    navLinks.appendChild(mobileSocial);

    /* Overlay de fondo */
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    /* Funciones abrir / cerrar */
    function openNav() {
      navLinks.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      navLinks.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click',  openNav);
    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click',  closeNav);

    /* Cerrar al hacer clic en cualquier link del menú */
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', closeNav)
    );

    /* Cerrar con tecla Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav();
    });
  }

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  /* ── ESTACIONES: tabs (index) ── */
  const tabs   = document.querySelectorAll('.est-tab');
  const panels = document.querySelectorAll('.est-panel');
  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t  => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  /* ── LIGHTBOX (lugar) ── */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox     = document.getElementById('lightbox');

  if (lightbox && galleryItems.length) {
    const lbImg     = document.getElementById('lbImg');
    const lbCaption = document.getElementById('lbCaption');
    const lbCounter = document.getElementById('lbCounter');
    const lbClose   = document.getElementById('lbClose');
    const lbPrev    = document.getElementById('lbPrev');
    const lbNext    = document.getElementById('lbNext');

    const images = [];
    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      if (img) images.push({ src: img.dataset.full || img.src, caption: img.getAttribute('alt') || '' });
    });

    let current = 0;

    function renderLb() {
      const { src, caption } = images[current];
      lbImg.src = src;
      lbCaption.textContent = caption;
      lbCounter.textContent = `${current + 1} / ${images.length}`;
    }
    function openLightbox(idx) {
      current = idx; renderLb();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    galleryItems.forEach((item, idx) => item.addEventListener('click', () => openLightbox(idx)));
    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    lbPrev.addEventListener('click', () => { current = (current - 1 + images.length) % images.length; renderLb(); });
    lbNext.addEventListener('click', () => { current = (current + 1) % images.length; renderLb(); });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'ArrowLeft')  { current = (current - 1 + images.length) % images.length; renderLb(); }
      if (e.key === 'ArrowRight') { current = (current + 1) % images.length; renderLb(); }
      if (e.key === 'Escape')     closeLightbox();
    });
  }

  /* ── COMPARTIR (lugar) ── */
  const shareUrl   = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(document.title);
  const btnFb   = document.getElementById('shareFb');
  const btnWa   = document.getElementById('shareWa');
  const btnCopy = document.getElementById('shareCopy');

  if (btnFb) btnFb.addEventListener('click', () =>
    window.open(`https://www.facebook.com/sharer.php?u=${shareUrl}`, '_blank', 'width=600,height=400')
  );
  if (btnWa) btnWa.addEventListener('click', () =>
    window.open(`https://wa.me/?text=${shareTitle}%20${shareUrl}`, '_blank')
  );
  if (btnCopy) btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      btnCopy.textContent = '¡Copiado!';
      setTimeout(() => (btnCopy.textContent = 'Copiar link'), 2000);
    });
  });

});
