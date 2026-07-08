/* ============================================================
   atractivos.js — Filtro de atractivos con animación
   Aconquija Turismo
   Se carga DESPUÉS de scrip.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const filtros    = document.querySelectorAll('.filtro');
  const cards      = document.querySelectorAll('.atr-card');
  const countEl    = document.getElementById('filtroCount');
  const noResults  = document.getElementById('noResults');

  if (!filtros.length || !cards.length) return;

  /* ── Actualiza el contador de resultados visibles ── */
  function updateCount(visible) {
    if (!countEl) return;
    countEl.textContent = visible === cards.length
      ? `${visible} atractivos`
      : `${visible} de ${cards.length}`;
  }

  /* ── Aplica el filtro con animación escalonada ── */
  function applyFilter(cat) {
    let visible = 0;

    cards.forEach((card, i) => {
      const cardCat = card.dataset.cat || '';
      const match   = cat === 'all' || cardCat === cat;

      if (match) {
        card.classList.remove('hidden');
        /* animación escalonada: cada card aparece con un pequeño delay */
        card.style.animationDelay = `${i * 40}ms`;
        card.style.animation = 'none';
        /* forzar reflow para reiniciar la animación */
        void card.offsetWidth;
        card.style.animation = '';
        visible++;
      } else {
        card.classList.add('hidden');
        card.style.animationDelay = '0ms';
      }
    });

    updateCount(visible);
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  /* ── Click en filtro ── */
  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.cat);

      /* Scroll suave al inicio del grid en mobile */
      if (window.innerWidth <= 640) {
        const grid = document.getElementById('atrGrid');
        if (grid) {
          const offset = grid.getBoundingClientRect().top + window.scrollY - 130;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    });
  });

  /* ── Estado inicial ── */
  updateCount(cards.length);

});
