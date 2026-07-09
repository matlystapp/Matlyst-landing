// WaitingList.jsx — persimmon hero with white pill form.
// Submits the email to POST /api/subscribe with body { email }.

function WaitingListSection() {
  const [email, setEmail] = React.useState('');
  // 'idle' | 'invalid' | 'loading' | 'success' | 'error'
  const [status, setStatus] = React.useState('idle');
  const isLoading = status === 'loading';
  const hasError = status === 'error' || status === 'invalid';

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function onChange(e) {
    setEmail(e.target.value);
    // Clear any error message as soon as the user starts correcting it.
    if (hasError) setStatus('idle');
  }

  async function submit(e) {
    e.preventDefault();
    if (isLoading) return;

    // 1) Validate email format before sending.
    if (!isValidEmail(email)) {
      setStatus('invalid');
      return;
    }

    // 2) POST to the subscribe endpoint.
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error('Request failed with status ' + res.status);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
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

          {status === 'success' ? (
            <div className="waitlist__status waitlist__status--ok" role="status" aria-live="polite">
              <span className="waitlist__status-ic"><Icon name="check" size={16} stroke={3} /></span>
              <span>¡Ya estás en la lista! Te avisamos cuando lancemos.</span>
            </div>
          ) : (
            <>
              <form
                className={"waitlist__form" + (hasError ? " is-error" : "")}
                onSubmit={submit}
                noValidate
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={onChange}
                  aria-label="Tu email"
                  autoComplete="email"
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading} aria-busy={isLoading}>
                  {isLoading ? (
                    "Enviando…"
                  ) : (
                    <>Quiero acceso prioritario <Icon name="arrow-right" size={16} stroke={2.2} /></>
                  )}
                </button>
              </form>

              {hasError && (
                <p className="waitlist__status waitlist__status--err" role="alert" aria-live="assertive">
                  {status === 'invalid'
                    ? 'Introduce un email válido.'
                    : 'Algo ha salido mal. Inténtalo de nuevo.'}
                </p>
              )}
            </>
          )}

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
            Al suscribirte aceptas nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

window.WaitingListSection = WaitingListSection;
