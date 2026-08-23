// Nav.jsx — sticky top nav, Apple-clean, wordmark + persimmon CTA.
// Desktop: inline links. Mobile: hamburger toggles a dropdown menu;
// the CTA stays visible at all widths.
function Nav() {
  const [open, setOpen] = React.useState(false);

  const links = [
    ['#problema', 'El problema'],
    ['#que-es', 'Qué es'],
    ['#features', 'Funciones'],
    ['#faq', 'FAQ'],
  ];

  return (
    <nav className={"nav" + (open ? " is-open" : "")}>
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" aria-label="Matlyst — inicio" onClick={() => setOpen(false)}>
          <img className="wm" src="assets/matlyst-wordmark.png" alt="Matlyst" />
        </a>
        <div className="nav__links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="nav__actions">
          <a className="nav__cta" href="https://apps.apple.com/es/app/matlyst/id6781277252" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <AppleGlyph size={16} />
            <span className="nav__cta-full">Descargar</span>
            <span className="nav__cta-short">Descargar</span>
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="nav-mobile-menu"
            onClick={() => setOpen(o => !o)}
          >
            <Icon name={open ? 'x' : 'menu'} size={24} stroke={2} />
          </button>
        </div>
      </div>

      <div className="nav__mobile" id="nav-mobile-menu" hidden={!open}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
window.Nav = Nav;
