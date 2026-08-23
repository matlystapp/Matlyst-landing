// Download.jsx — cierre de página con una sola acción: descargar en App Store.
// Reutiliza el shell persimmon de .waitlist; los botones de tienda son .dl__*.

const APP_STORE_URL = 'https://apps.apple.com/es/app/matlyst/id6781277252';

function DownloadSection() {
  return (
    <section className="waitlist" id="descargar">
      <div className="container waitlist__inner">
        <div className="waitlist__card">
          <span className="eyebrow">Ya disponible</span>
          <h2>Descárgala y descubre dónde come tu gente</h2>

          <div className="dl__actions">
            <a className="dl__store" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              <AppleGlyph size={26} />
              <span className="dl__store-copy">
                <small>Descárgala en la</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
          <p className="dl__note">Google Play, más adelante.</p>
        </div>
      </div>
    </section>
  );
}

window.APP_STORE_URL = APP_STORE_URL;
window.DownloadSection = DownloadSection;
