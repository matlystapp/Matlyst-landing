// Footer.jsx — bold, flat, persimmon block. Structured link columns on top,
// a giant Matlyst wordmark spanning the bottom (darkened via multiply for
// depth), and a small legal/back-to-top base line.

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <span className="footer__brandline">Los restaurantes que recomienda <em>tu gente</em></span>

          <div className="footer__links">
            <nav className="footer__col" aria-label="Navegación pie">
              <span className="footer__coltitle">Navegación</span>
              <a href="#problema">El problema</a>
              <a href="#que-es">Qué es</a>
              <a href="#features">Funciones</a>
              <a href="#faq">FAQ</a>
            </nav>

            <div className="footer__col">
              <span className="footer__coltitle">Contacto</span>
              <a href="mailto:matlyst.app@gmail.com">matlyst.app@gmail.com</a>
              <a href="https://instagram.com/matlyst.app" target="_blank" rel="noreferrer">Instagram</a>
            </div>

            <nav className="footer__col" aria-label="Legales">
              <span className="footer__coltitle">Legal</span>
              <a href="/aviso-legal">Aviso Legal</a>
              <a href="/politica-de-privacidad">Privacidad</a>
              <a href="/politica-de-cookies">Cookies</a>
            </nav>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">
          <img className="footer__bigwm" src="assets/matlyst-wordmark-white.png" alt="" />
        </div>

        <div className="footer__base">
          <span>© 2026 Matlyst. Todos los derechos reservados.</span>
          <a href="#top" className="footer__totop">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
