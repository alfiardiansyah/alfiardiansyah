/**
 * Navbar Component for Alfi Ardiansyah Portfolio
 * Dynamically renders header navigation and handles active states & mobile toggle across pages.
 */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const isHomePage = window.location.pathname.endsWith('index.html') || 
                     window.location.pathname === '/' || 
                     !window.location.pathname.includes('.html');

  const getHref = (anchor) => isHomePage ? anchor : `index.html${anchor}`;

  header.innerHTML = `
    <nav class="wrap">
      <div class="logo">
        <a href="${getHref('#home')}" style="display:flex;align-items:center;gap:10px;">
          <span class="mark">AA</span> Alfi Ardiansyah
        </a>
      </div>
      <ul class="nav-links" id="navLinks">
        <li><a href="${getHref('#home')}">Beranda</a></li>
        <li><a href="${getHref('#about')}">Tentang</a></li>
        <li><a href="${getHref('#skills')}">Keahlian</a></li>
        <li><a href="${getHref('#experience')}">Pengalaman</a></li>
        <li><a href="${getHref('#education')}">Pendidikan</a></li>
        <li><a href="${getHref('#projects')}" ${!isHomePage ? 'class="active"' : ''}>Proyek</a></li>
        <li><a href="${getHref('#certificates')}">Sertifikat</a></li>
        <li><a href="${getHref('#contact')}">Kontak</a></li>
      </ul>
      <button class="mobile-toggle" id="mobileToggle" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;

  // Header scroll state
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile nav toggle
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.addEventListener('click', e => {
      if (e.target.tagName === 'A') navLinks.classList.remove('active');
    });
  }
});
