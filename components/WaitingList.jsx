// WaitingList.jsx — persimmon hero with white pill form + dark CTA.
// Connects to Brevo (Sendinblue). Replace BREVO_FORM_URL with the live endpoint.

const BREVO_FORM_URL = "https://sibforms.com/serve/MUIFAJ-REPLACE-WITH-YOUR-FORM-ID";
// The Brevo form-id is a unique URL given when you create a "subscription form"
// in your Brevo account. Until that's set, submissions fall back to a 700ms
// optimistic success so the design can be reviewed end-to-end.

function WaitingListSection() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  async function submit(e) {
    e.preventDefault();
    setErrorMsg('');
    const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!valid) { setStatus('error'); setErrorMsg('Necesitamos un email que funcione.'); return; }
    setStatus('submitting');

    if (BREVO_FORM_URL.includes('REPLACE-WITH-YOUR-FORM-ID')) {
      // Demo mode — just simulate success
      setTimeout(() => setStatus('done'), 700);
      return;
    }

    try {
      const fd = new FormData();
      fd.append('EMAIL', email);
      fd.append('email_address_check', '');
      fd.append('locale', 'es');
      await fetch(BREVO_FORM_URL, { method: 'POST', body: fd, mode: 'no-cors' });
      // Brevo no-cors returns opaque response — we treat as success.
      setStatus('done');
      if (window.gtag) window.gtag('event', 'waitlist_signup', { method: 'brevo' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Algo ha fallado. Vuelve a intentarlo en un momento.');
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

        {status !== 'done' ? (
          <>
            <form className={"waitlist__form" + (status==='error' ? ' is-error' : '')} onSubmit={submit} noValidate>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e)=>{ setEmail(e.target.value); if (status==='error') setStatus('idle'); }}
                aria-label="Tu email"
                autoComplete="email"
              />
              <button type="submit" disabled={status==='submitting'}>
                {status==='submitting' ? 'Apuntándote…' : (<>Quiero acceso prioritario <Icon name="arrow-right" size={16} stroke={2.2} /></>)}
              </button>
            </form>
            {status==='error' && (
              <div role="alert" style={{marginTop: 12, color: '#fff', fontSize: 13, fontWeight:600}}>{errorMsg}</div>
            )}
            <div className="waitlist__micro">
              <span><span className="check"><Icon name="check" size={10} stroke={3} /></span>Acceso antes que nadie</span>
              <span><span className="check"><Icon name="check" size={10} stroke={3} /></span>Sin compromiso</span>
              <span><span className="check"><Icon name="check" size={10} stroke={3} /></span>Cero spam</span>
            </div>
            <ul className="waitlist__bullets">
              {[
                'Acceso a la beta privada antes del lanzamiento oficial',
                'Tu perfil verificado como Early Adopter',
                'Influencia real en las funcionalidades que desarrollamos primero',
              ].map((t,i)=>(
                <li key={i}>
                  <span className="bullet"><Icon name="check" size={12} stroke={3} /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="waitlist__legal">
              Al suscribirte aceptas nuestra <a href="politica-de-privacidad.html">Política de Privacidad</a>.
            </p>
          </>
        ) : (
          <div className="waitlist__success">
            <h3>Estás dentro.</h3>
            <p style={{margin: 0, color: 'rgba(255,255,255,0.92)', lineHeight: 1.5, fontSize: 15}}>
              Te hemos apuntado con <strong style={{color:'#fff'}}>{email}</strong>.
              Recibirás un email cuando abramos la beta privada. Mientras tanto: cuéntale a alguien con buen gusto.
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

window.WaitingListSection = WaitingListSection;
