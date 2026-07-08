document.addEventListener('DOMContentLoaded', () => {

/* ── BARRA DE PROGRESO DE LECTURA ── */
  const progress = document.getElementById('readProgress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      progress.style.width = pct + '%';
    }, { passive: true });
  }

   // Nav scroll state
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });


  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));

    /* ── LIGHTBOX ── */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox     = document.getElementById('lightbox');

  if (!lightbox || !galleryItems.length) return;

  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');

    // Recopilar imágenes de galería
  const images = [];
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) {
      images.push({
        src:     img.dataset.full || img.src,
        caption: img.getAttribute('alt') || ''
      });
    }
  });

  let current = 0;

  function openLightbox(idx) {
    current = idx;
    render();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function render() {
    const { src, caption } = images[current];
    lbImg.src = src;
    lbCaption.textContent = caption;
    lbCounter.textContent = `${current + 1} / ${images.length}`;
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  lbClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lbPrev.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    render();
  });

  lbNext.addEventListener('click', () => {
    current = (current + 1) % images.length;
    render();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  { current = (current - 1 + images.length) % images.length; render(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % images.length; render(); }
    if (e.key === 'Escape')     closeLightbox();
  });

  // Estaciones tabs
  const tabs = document.querySelectorAll('.est-tab');
  const panels = document.querySelectorAll('.est-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
  
   /* ── COMPARTIR ── */
  const url   = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  const btnFb = document.getElementById('shareFb');
  const btnWa = document.getElementById('shareWa');
  const btnCopy = document.getElementById('shareCopy');

  if (btnFb) {
    btnFb.addEventListener('click', () =>
      window.open(`https://www.facebook.com/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
    );
  }
  if (btnWa) {
    btnWa.addEventListener('click', () =>
      window.open(`https://wa.me/?text=${title}%20${url}`, '_blank')
    );
  }
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        btnCopy.textContent = '¡Copiado!';
        setTimeout(() => (btnCopy.textContent = 'Copiar link'), 2000);
      });
    });
  }

});