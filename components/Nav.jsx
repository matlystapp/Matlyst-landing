// Nav.jsx — sticky top nav, Apple-clean, wordmark + persimmon CTA.
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" aria-label="Matlyst — inicio">
          <img className="wm" src="assets/matlyst-wordmark.png" alt="Matlyst" />
        </a>
        <div className="nav__links">
          <a href="#problema">El problema</a>
          <a href="#que-es">Qué es</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#features">Funciones</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav__cta" href="#lista-espera">Únete a la lista de espera</a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
