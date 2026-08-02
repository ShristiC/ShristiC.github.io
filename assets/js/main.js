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
