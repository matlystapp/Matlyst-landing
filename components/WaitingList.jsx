// WaitingList.jsx — persimmon hero with white pill form.
// Clean form: email field + button only. No external API calls.

function WaitingListSection() {
  const [email, setEmail] = React.useState('');

  function submit(e) {
    // Prevent a full page reload; no external submission is wired.
    e.preventDefault();
  }

  return (
    <section className="waitlist" id="lista-espera">
      <div className="container waitlist__inner">
        <div className="waitlist__card">
          <span className="eyebrow">Lista de espera</span>
          <h2>Sé de los primeros en probar Matlyst</h2>
          <p className="waitlist__sub">
            Estamos en fase de lanzamiento. La app no está disponible aún para todo el mundo
            — pero tú puedes reservar tu sitio hoy y conseguir acceso anticipado.
          </p>

          <form className="waitlist__form" onSubmit={submit} noValidate>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Tu email"
              autoComplete="email"
            />
            <button type="submit">
              Quiero acceso prioritario <Icon name="arrow-right" size={16} stroke={2.2} />
            </button>
          </form>

          <div className="waitlist__micro">
            <span>Acceso antes que nadie</span>
            <span>Sin compromiso</span>
            <span>Cero spam</span>
          </div>
          <ul className="waitlist__bullets">
            {[
              'Acceso a la beta privada antes del lanzamiento oficial',
              'Tu perfil verificado como Early Adopter',
              'Influencia real en las funcionalidades que desarrollamos primero',
            ].map((t, i) => (
              <li key={i}>
                <span className="bullet"><Icon name="check" size={12} stroke={3} /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="waitlist__legal">
            Al suscribirte aceptas nuestra <a href="politica-de-privacidad.html">Política de Privacidad</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

window.WaitingListSection = WaitingListSection;
