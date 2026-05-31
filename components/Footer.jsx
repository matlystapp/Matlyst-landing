// Footer.jsx — cream-deep, dark text, persimmon top accent. Wordmark + tagline.
// Layout per briefing: clean. Single horizontal link row. No multi-column overkill.

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__lockup">
          <img className="wm" src="assets/matlyst-wordmark.png" alt="Matlyst" />
          <span className="footer__tagline">Los restaurantes que recomienda <em>tu gente</em></span>
        </div>

        <div className="footer__row">
          <nav className="footer__nav" aria-label="Navegación pie">
            <a href="#top">Inicio</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#lista-espera">Únete</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:matlyst.app@gmail.com">Contacto</a>
          </nav>
          <nav className="footer__social" aria-label="Redes sociales">
            <a href="https://instagram.com/matlyst.app" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com/@matlyst" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://x.com/matlyst" target="_blank" rel="noreferrer">Twitter/X</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2025 Matlyst</span>
          <span className="footer__legal">
            <a href="aviso-legal.html">Aviso Legal</a><span>·</span>
            <a href="politica-de-privacidad.html">Política de Privacidad</a><span>·</span>
            <a href="politica-de-cookies.html">Política de Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
