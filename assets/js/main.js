/* Navigation scroll */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* Active nav link */
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

/* Typed text (home page only) */
const typedEl = document.getElementById('typed');
if (typedEl) {
  const phrases = [
    'Full-Stack Software Engineer',
    'Accessibility Advocate',
    'Foodie',
    'Ice Hockey Player',
    'Hiker & Camper',
    'Avid Reader'
  ];
  let pi = 0, ci = 0, del = false;
  (function tick() {
    const phrase = phrases[pi];
    typedEl.textContent = del ? phrase.slice(0, --ci) : phrase.slice(0, ++ci);
    let wait = del ? 55 : 95;
    if (!del && ci === phrase.length) { wait = 2200; del = true; }
    else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; wait = 350; }
    setTimeout(tick, wait);
  })();
}

/* Category filtering */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('[data-cat]').forEach(el => {
      const show = f === 'all' || el.dataset.cat === f;
      el.style.display = show ? '' : 'none';
      if (show) el.style.animation = 'fadeUp .3s ease';
    });
  });
});

const s = document.createElement('style');
s.textContent = '@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}';
document.head.appendChild(s);
