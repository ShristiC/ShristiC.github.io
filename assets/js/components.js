/* -----------------------------------------------
   Site-wide header + footer components.
   Each page includes a <div id="site-header"> and
   <div id="site-footer"> placeholder; this script
   injects the real markup before main.js runs.
----------------------------------------------- */

(function () {
  const NAV = `
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">Shristi Chitlangia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="Menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="tech.html">My Career</a></li>
          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="recipes.html">Recipes</a></li>
          <li class="nav-item"><a class="nav-link" href="photos.html">Gallery</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

  const FOOTER = `
  <footer>
    <div class="container">
      <span class="footer-brand">Shristi C.</span>
      <div class="footer-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="tech.html">My Career</a>
        <a href="blog.html">Blog</a>
        <a href="recipes.html">Recipes</a>
        <a href="photos.html">Gallery</a>
      </div>
      <div class="footer-social">
        <a href="https://www.linkedin.com/in/shristi-chitlangia/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ShristiC" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:shristichitlangia2001@gmail.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; ${new Date().getFullYear()} Shristi Chitlangia</p>
    </div>
  </footer>`;

  const header = document.getElementById('site-header');
  if (header) header.innerHTML = NAV;

  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER;
})();
