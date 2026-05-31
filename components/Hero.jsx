// Hero.jsx — big stacked headline left, layered phone mockup right.
// No emoji, Apple-clean depth: soft radial halo behind the phone.
// Animations: (1) cascade entry of eyebrow/headline/sub, (2) infinite
// internal feed scroll inside the mockup, (3) desktop parallax on the
// phone. All gated behind prefers-reduced-motion.

function Hero() {
  const phoneRef = React.useRef(null);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 921px)');
    const el = phoneRef.current;
    if (!el || reduce.matches || !desktop.matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || window.pageYOffset || 0;
        // Phone moves at 0.7x scroll speed → lags by 0.3x (translate down).
        el.style.transform = 'translate3d(0,' + (y * 0.3).toFixed(1) + 'px,0)';
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div>
          <span className="eyebrow hero-rise" style={{animationDelay:'0ms'}}>La app de restaurantes que estabas esperando</span>
          <h1>
            <span className="hero-line hero-rise" style={{animationDelay:'150ms'}}>Los restaurantes que recomienda</span>
            <span className="hero-line accent hero-rise" style={{animationDelay:'300ms'}}>tu gente</span>
          </h1>
          <p className="hero__sub hero-rise" style={{animationDelay:'450ms'}}>
            Matlyst es la red social donde descubres restaurantes recomendados
            por gente con tu mismo gusto — no por algoritmos, no por críticos anónimos.
          </p>
          <div className="hero__cta-row hero-rise" style={{animationDelay:'600ms'}}>
            <a href="#lista-espera" className="btn btn--primary">
              Únete a la lista de espera
              <Icon name="arrow-right" size={18} />
            </a>
            <a href="#como-funciona" className="btn btn--ghost">Cómo funciona</a>
          </div>
          <div className="hero__micro hero-rise" style={{animationDelay:'720ms'}}>
            <span>Gratis</span>
            <span className="dot">·</span>
            <span>Sin spam</span>
            <span className="dot">·</span>
            <span>Acceso prioritario</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__halo" aria-hidden="true"></div>
          <div className="hero__phone-wrap" ref={phoneRef}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// Restaurant cards shown in the infinite feed. Rendered twice for a
// seamless translateY(-50%) loop.
const FEED = [
  {
    place:'Bar Néstor', city:'Donostia', tags:'Tortilla · Carne', rating:'4.9',
    name:'Iñaki R.', avatarColor:'var(--sage)',
    photoGradient:'radial-gradient(70% 90% at 40% 20%, #F2B279 0%, transparent 60%), radial-gradient(70% 90% at 80% 80%, #C2401F 0%, transparent 70%), linear-gradient(140deg, #8E4A2C 0%, #4A2014 100%)',
  },
  {
    place:'Sala de Despiece', city:'Madrid', tags:'Cena · Tapas modernas', rating:'4.8',
    name:'Alejandra M.', avatarColor:'var(--persimmon)', active:true,
    photoGradient:'radial-gradient(60% 80% at 30% 30%, #6B8048 0%, transparent 60%), radial-gradient(60% 70% at 80% 70%, #E35336 0%, transparent 70%), linear-gradient(140deg, #3F2918 0%, #1F1208 100%)',
  },
  {
    place:'Disfrutar', city:'Barcelona', tags:'Degustación · Creativa', rating:'5.0',
    name:'Carmen V.', avatarColor:'var(--sky)',
    photoGradient:'radial-gradient(60% 80% at 35% 25%, #8FC0E0 0%, transparent 60%), radial-gradient(60% 70% at 75% 75%, #4AABE8 0%, transparent 70%), linear-gradient(140deg, #2A4A5C 0%, #142430 100%)',
  },
  {
    place:'Casa Pepe', city:'Sevilla', tags:'Tapas · De toda la vida', rating:'4.7',
    name:'Alejandra M.', avatarColor:'var(--persimmon)',
    photoGradient:'radial-gradient(60% 80% at 30% 30%, #E8B97A 0%, transparent 60%), radial-gradient(60% 70% at 80% 70%, #C2401F 0%, transparent 70%), linear-gradient(140deg, #6B3A1E 0%, #2A1408 100%)',
  },
];

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone__notch"></div>
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__statusicons">
            <span style={{display:'inline-block',width:14,height:8,borderRadius:1,background:'currentColor'}}></span>
            <span style={{display:'inline-block',width:18,height:9,border:'1.4px solid currentColor',borderRadius:2.5,position:'relative',marginLeft:3}}>
              <span style={{position:'absolute',inset:1.5,background:'currentColor',width:'62%',borderRadius:1}}></span>
            </span>
          </span>
        </div>

        {/* Header */}
        <div style={{padding:'10px 22px 14px', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <img src="assets/matlyst-wordmark.png" alt="Matlyst" style={{height:18,width:'auto'}} />
          <div style={{display:'flex',gap:8}}>
            <div style={{width:30,height:30,borderRadius:999,background:'rgba(38,23,18,0.06)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink)'}}>
              <Icon name="compass" size={16} />
            </div>
            <div style={{width:30,height:30,borderRadius:999,background:'rgba(38,23,18,0.06)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink)'}}>
              <Icon name="user-circle" size={16} />
            </div>
          </div>
        </div>

        {/* Infinite scrolling feed */}
        <div className="phone__feed">
          <div className="phone__feed-track">
            {FEED.map((c, i) => <FeedCard key={'a'+i} {...c} />)}
            {FEED.map((c, i) => <FeedCard key={'b'+i} {...c} />)}
          </div>
          <div className="phone__feed-fade" aria-hidden="true"></div>
        </div>

        {/* Tab bar */}
        <div style={{display:'flex', justifyContent:'space-around', padding:'14px 28px 22px', borderTop:'1px solid rgba(38,23,18,0.08)', color:'var(--ink)', background:'var(--paper)', position:'relative', zIndex:2}}>
          <Icon name="utensils"    size={20} />
          <Icon name="compass"     size={20} style={{opacity:0.4}}/>
          <Icon name="bookmark"    size={20} style={{opacity:0.4}}/>
          <Icon name="user-circle" size={20} style={{opacity:0.4}}/>
        </div>
      </div>
    </div>
  );
}

function FeedCard({place, city, tags, rating, name, avatarColor, active, photoGradient}) {
  return (
    <div style={{
      margin: '0 16px 10px',
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: active
        ? '0 12px 28px -12px rgba(38,23,18,0.28)'
        : '0 2px 6px -2px rgba(38,23,18,0.12)',
    }}>
      <div style={{
        height: 88,
        background: photoGradient,
        position:'relative',
      }}>
        {/* warm bokeh overlay to evoke a real food photo */}
        <div style={{
          position:'absolute', inset:0,
          background:
            'radial-gradient(20px 20px at 30% 40%, rgba(255,255,255,0.18), transparent 70%),' +
            'radial-gradient(28px 28px at 65% 70%, rgba(255,255,255,0.12), transparent 70%),' +
            'radial-gradient(14px 14px at 80% 30%, rgba(255,255,255,0.10), transparent 70%)',
        }}/>
        <div style={{
          position:'absolute', top:8, right:10,
          background:'#fff', padding:'4px 9px', borderRadius:999,
          fontSize:11, fontWeight:700, color:'var(--ink)',
          display:'flex', gap:4, alignItems:'center',
          boxShadow:'0 2px 4px rgba(0,0,0,0.08)',
        }}>
          <span style={{color:'var(--persimmon)', fontSize:10}}>★</span>{rating}
        </div>
      </div>
      <div style={{padding: '10px 14px 12px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
          <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--ink)', letterSpacing:'-0.012em'}}>{place}</div>
          <div style={{fontSize:10, color:'var(--ink-quiet)', fontWeight:500}}>{city}</div>
        </div>
        <div style={{fontSize:11, color:'var(--ink-soft)', marginTop:3}}>{tags}</div>
        <div style={{display:'flex', alignItems:'center', gap:8, marginTop:10}}>
          <div style={{
            width:20, height:20, borderRadius:999,
            background: avatarColor, color:'#fff',
            fontSize:10, fontWeight:700,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>{name[0]}</div>
          <span style={{fontSize:11, color:'var(--ink-soft)'}}>{name} lo recomendó</span>
        </div>
      </div>
    </div>
  );
}

window.Hero = Hero;
