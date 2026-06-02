// Sections.jsx — Marketing sections: Problem, WhatIs, HowItWorks, Features, SocialProof.
// All emoji removed. Problem section uses asymmetric overlapping bubbles instead of a generic row.

function ProblemSection() {
  const pains = [
    {
      n: '01',
      title: 'No sabes en quién fiarte',
      body: 'Hay miles de reseñas, pero no sabes si quien las escribe tiene tu mismo gusto.',
    },
    {
      n: '02',
      title: 'Tus restaurantes buenos están por todas partes',
      body: 'En un chat, en notas, en una foto. Nunca en un sitio donde encontrarlos cuando los necesitas.',
    },
    {
      n: '03',
      title: 'El restaurante perfecto que se te olvidó guardar',
      body: 'Fuiste a un restaurante que te encantó y ya no recuerdas cómo se llamaba.',
    },
  ];
  return (
    <section className="section section--problem" id="problema">
      <div className="container">
        <div className="problem-head">
          <span className="eyebrow">El problema</span>
          <h2>
            Encontrar dónde comer es fácil.<br/>
            Encontrar dónde <span className="h2-accent">comer bien</span> es <span className="underline-draw">otra historia</span>.
          </h2>
        </div>

        <div className="problem-prose">
          <p className="problem-prose__lead">
            Porque da igual cuántas opiniones haya si no confías en quien las escribe.
          </p>
          <p>
            Sigue a tus amigos, descubre sus sitios favoritos y guarda los tuyos
            para cuando los necesites. <em>Eso es Matlyst.</em>
          </p>
        </div>

        <ol className="pains" aria-label="Problemas concretos">
          {pains.map((p, i) => (
            <li className={"pain pain--" + p.n} key={i}>
              <span className="pain__n" aria-hidden="true">{p.n}</span>
              <h3 className="pain__title">{p.title}</h3>
              <p className="pain__text">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="section" id="que-es">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Qué es Matlyst</span>
          <h2>La app donde descubres restaurantes con la gente que ya conoces.</h2>
          <p className="section__sub">
            Matlyst es la app donde sigues a tus amigos, descubres los restaurantes que les gustan y guardas los tuyos. Todo en un solo sitio.
          </p>
        </div>
        <div className="whatis-grid">
          <div className="feature-card">
            <div className="feature-card__visual">
              <VisualReco />
            </div>
            <h3>Recomendaciones reales</h3>
            <p>Las mejores recomendaciones siempre vienen de alguien que conoces. En Matlyst son las de tu gente — la que ya sabes que tiene buen gusto.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__visual">
              <VisualCommunity />
            </div>
            <h3>Comunidad con criterio</h3>
            <p>Conecta con gente que comparte tus gustos y descubre qué están comiendo ahora mismo.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__visual">
              <VisualDiscovery />
            </div>
            <h3>Descubrimiento inteligente</h3>
            <p>Cuanto más usas Matlyst, mejor entiende qué tipo de restaurantes te van a enamorar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------- Abstract mini-visuals ------------- */

function VisualReco() {
  const chips = [
    {name:'Alejandra', place:'Sala de Despiece'},
    {name:'Iñaki',     place:'Bar Néstor'},
    {name:'Carmen',    place:'Tickets'},
    {name:'Marc',      place:'Disfrutar'},
  ];
  return (
    <div style={{
      position:'absolute', inset:0, overflow:'hidden',
      background: 'linear-gradient(140deg, #FDEAE1 0%, #F9D6CC 100%)',
    }}>
      <div className="whatis-feed">
        <div className="whatis-feed-track">
          {chips.map((c,i)=><ChipMock key={'a'+i} name={c.name} place={c.place} color="#fff" />)}
          {chips.map((c,i)=><ChipMock key={'b'+i} name={c.name} place={c.place} color="#fff" />)}
        </div>
      </div>
    </div>
  );
}

function VisualCommunity() {
  return (
    <div style={{
      position:'absolute', inset:0,
      background: 'linear-gradient(140deg, #EEF1E0 0%, #DEE5C8 100%)',
    }}>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <ConstellationOfAvatars />
      </div>
    </div>
  );
}

function VisualDiscovery() {
  return (
    <div style={{
      position:'absolute', inset:0,
      background: 'linear-gradient(140deg, #E3F1FB 0%, #CFE6F7 100%)',
    }}>
      <svg viewBox="0 0 240 140" style={{width:'100%', height:'100%', display:'block'}}>
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(74,171,232,0.35)" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="240" height="140" fill="url(#grid)"/>
        <path d="M 0 80 Q 60 60 120 90 T 240 80" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
        <path d="M 60 0 L 80 140" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
        <Pin x={50} y={45} color="#E35336" delay={0}/>
        <Pin x={140} y={70} color="#E35336" big delay={0.7}/>
        <Pin x={195} y={50} color="#98A869" delay={1.4}/>
        <Pin x={90} y={105} color="#4AABE8" delay={2.1}/>
      </svg>
    </div>
  );
}

function Pin({x, y, color, big, delay = 0}) {
  const r = big ? 12 : 8;
  return (
    <g>
      <circle className="whatis-ping" style={{transformOrigin:`${x}px ${y}px`, animationDelay:`${delay}s`}} cx={x} cy={y} r={r} fill={color} />
      <circle cx={x} cy={y+2} r={r*0.5} fill="rgba(38,23,18,0.15)" />
      <circle cx={x} cy={y} r={r} fill={color} />
      <circle cx={x} cy={y} r={r*0.4} fill="#fff" />
    </g>
  );
}

function ChipMock({name, place, color, shift = 0}) {
  return (
    <div style={{
      background: color,
      borderRadius: 12,
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transform: `translateX(${shift}px)`,
      boxShadow: '0 4px 14px -6px rgba(38,23,18,0.18)',
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 999,
        background: 'var(--persimmon)', color:'#fff',
        fontSize: 10, fontWeight: 700,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>{name[0]}</div>
      <div style={{display:'flex', flexDirection:'column', minWidth: 0}}>
        <span style={{fontSize: 10, color:'var(--ink-quiet)'}}>{name} recomendó</span>
        <span style={{fontSize: 12, fontWeight: 700, color:'var(--ink)', fontFamily:'var(--font-display)', letterSpacing:'-0.01em'}}>{place}</span>
      </div>
    </div>
  );
}

function ConstellationOfAvatars() {
  const avs = [
    {x: 80, y: 50, r: 22, color:'#E35336', n:'A'},
    {x: 150, y: 30, r: 18, color:'#4AABE8', n:'I'},
    {x: 175, y: 90, r: 24, color:'#98A869', n:'C'},
    {x: 60, y: 100, r: 16, color:'#261712', n:'M'},
    {x: 120, y: 78, r: 20, color:'#E35336', n:'L'},
  ];
  return (
    <svg viewBox="0 0 240 140" style={{width:'100%', height:'100%', display:'block'}}>
      <line className="whatis-link" style={{animationDelay:'0s'}}   x1="80" y1="50" x2="150" y2="30" stroke="rgba(124,140,80,0.4)" strokeWidth="1.5"/>
      <line className="whatis-link" style={{animationDelay:'0.5s'}} x1="80" y1="50" x2="120" y2="78" stroke="rgba(124,140,80,0.4)" strokeWidth="1.5"/>
      <line className="whatis-link" style={{animationDelay:'1s'}}   x1="120" y1="78" x2="175" y2="90" stroke="rgba(124,140,80,0.4)" strokeWidth="1.5"/>
      <line className="whatis-link" style={{animationDelay:'1.5s'}} x1="120" y1="78" x2="60" y2="100" stroke="rgba(124,140,80,0.4)" strokeWidth="1.5"/>
      <line className="whatis-link" style={{animationDelay:'0.8s'}} x1="150" y1="30" x2="175" y2="90" stroke="rgba(124,140,80,0.25)" strokeWidth="1.5"/>
      {avs.map((a,i)=>(
        <g key={i} className="whatis-node" style={{transformOrigin:`${a.x}px ${a.y}px`, animationDelay:`${i*0.5}s`}}>
          <circle cx={a.x} cy={a.y} r={a.r} fill={a.color}/>
          <text x={a.x} y={a.y+4} textAnchor="middle" fontSize={a.r*0.7} fontWeight="700" fill="#fff" fontFamily="var(--font-display)">{a.n}</text>
        </g>
      ))}
    </svg>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      cls: 'howstep--big howstep--profile',
      title: 'Crea tu perfil y elige tu ciudad',
      body: 'Escoge tu ciudad, personaliza tus gustos y empieza a conectar con tus amigos. Sus restaurantes favoritos estarán ahí desde el primer momento.',
      viz: <HowProfileViz />,
    },
    {
      cls: 'howstep--save',
      title: 'Descubre y guarda restaurantes',
      body: 'Tu feed se llena con los sitios favoritos de tu gente. Guárdalos en listas, filtra por ciudad o tipo de cocina y tenlo todo a mano cuando lo necesites.',
      viz: <HowSaveViz />,
    },
    {
      cls: 'howstep--trust',
      title: 'Sube los sitios en los que confías',
      body: 'Crea listas con los restaurantes que sabes que no fallan. Tus amigos podrán fiarse de ellos — y tú de los suyos.',
      viz: <HowTrustViz />,
    },
  ];
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Tan fácil como seguir a tus amigos</h2>
          <p className="section__sub">
            Crea tu perfil, descubre los restaurantes de tu gente, guarda los tuyos y comparte los que sabes que no fallan.
          </p>
        </div>
        <div className="howbento">
          {steps.map((s,i)=>(
            <div className={"step howstep " + s.cls} key={i}>
              <div className="howstep__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <div className="howstep__viz">{s.viz}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Cómo funciona — mini mockups ---- */

function HowProfileViz() {
  return (
    <div className="howprofile">
      <div className="howprofile__top">
        <div className="howprofile__av">T</div>
        <div className="howprofile__id">
          <span className="howprofile__name">Tu perfil</span>
          <span className="howprofile__meta">Foodie · 24 guardados</span>
        </div>
      </div>
      <span className="howprofile__label">Tu ciudad</span>
      <div className="howchips">
        <span className="howchip howchip--on"><Icon name="map-pin" size={12} stroke={2.2} />A Coruña</span>
        <span className="howchip">Madrid</span>
        <span className="howchip">Barcelona</span>
        <span className="howchip">Sevilla</span>
        <span className="howchip">Donostia</span>
      </div>
      <span className="howprofile__label">Tus gustos</span>
      <div className="howchips">
        <span className="howchip howchip--tag">Tapas</span>
        <span className="howchip howchip--tag">Asador</span>
        <span className="howchip howchip--tag">Cocina de autor</span>
      </div>
    </div>
  );
}

function HowSaveViz() {
  const items = [
    {place:'Sala de Despiece', city:'Madrid', c:'var(--persimmon)', saved:true},
    {place:'Bar Néstor', city:'Donostia', c:'var(--sage)', saved:false},
  ];
  return (
    <div className="howsave">
      {items.map((it,i)=>(
        <div className="howresto" key={i}>
          <span className="howresto__img" style={{background:it.c}}></span>
          <span className="howresto__meta">
            <span className="howresto__place">{it.place}</span>
            <span className="howresto__city">{it.city}</span>
          </span>
          <span className={"howresto__save" + (it.saved ? " is-on" : "")}>
            <Icon name="bookmark" size={15} stroke={2} />
          </span>
        </div>
      ))}
    </div>
  );
}

function HowTrustViz() {
  const rows = ['Casa Pepe', 'Tickets', 'Disfrutar'];
  return (
    <div className="howtrust">
      <div className="howtrust__head">
        <span className="howtrust__title">De fiar</span>
        <span className="howtrust__count">{rows.length}</span>
      </div>
      {rows.map((r,i)=>(
        <div className="howtrust__row" key={i}>
          <span className="howtrust__check"><Icon name="check" size={12} stroke={2.6} /></span>
          <span className="howtrust__name">{r}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="section" id="features" style={{background:'var(--cream-deep)'}}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Funciones</span>
          <h2>Descubre, guarda y comparte restaurantes</h2>
        </div>
        <div className="bento">
          <div className="bento-tile bento-tile--persimmon">
            <div className="bento-tile__copy">
              <h3>Descubre restaurantes por ciudad</h3>
              <p>Madrid, Barcelona, Sevilla, Donostia, A Coruña.</p>
            </div>
            <CityListVisual />
          </div>
          <div className="bento-tile">
            <div className="bento-tile__copy">
              <h3>Sigue a quien tiene buen gusto</h3>
              <p>Conecta con las personas de tu entorno que sabes que aciertan siempre. Si a ellas les gusta, es que vale la pena.</p>
            </div>
            <TasteProfileVisual />
          </div>
          <div className="bento-tile">
            <div className="bento-tile__copy">
              <h3>Guarda y organiza tus favoritos</h3>
              <p>Crea tus propias listas: <em style={{fontStyle:'normal',color:'var(--ink)',fontWeight:600}}>Pendientes</em>, <em style={{fontStyle:'normal',color:'var(--ink)',fontWeight:600}}>Con clientes</em>, <em style={{fontStyle:'normal',color:'var(--ink)',fontWeight:600}}>Cena romántica</em>. Lo que quieras.</p>
            </div>
            <ListsVisual />
          </div>
          <div className="bento-tile bento-tile--sage">
            <div className="bento-tile__copy">
              <h3>Explora lo que hay cerca</h3>
              <p>Abre el mapa, encuentra lo que hay cerca y navega por las etiquetas y listas de tus amigos. Todo organizado, todo a golpe de vista.</p>
            </div>
            <MapVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function TasteProfileVisual() {
  const users = [
    {n:'Alejandra', overlap:'92%', color:'var(--persimmon)'},
    {n:'Iñaki', overlap:'87%', color:'var(--sage)'},
    {n:'Carmen', overlap:'81%', color:'var(--sky)'},
  ];
  return (
    <div className="bento-viz" style={{display:'flex', flexDirection:'column', gap:8, maxWidth:340}}>
      {users.map((u,i)=>(
        <div key={i} className="tastecard" style={{animationDelay:`${i*1.5}s`}}>
          <span className="tastecard__av" style={{background:u.color}}>{u.n[0]}</span>
          <span className="tastecard__meta">
            <span className="tastecard__name">{u.n}</span>
            <span className="tastecard__overlap">{u.overlap} de coincidencia</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function CityListVisual() {
  const cities = [
    ['Madrid', '128'],
    ['Barcelona', '94'],
    ['Sevilla', '47'],
    ['Donostia', '61'],
    ['A Coruña', '38'],
  ];
  const row = ([city, count], key) => (
    <div className="cityrow" key={key}>
      <span className="cityrow__name">
        <span className="cityrow__pin"><Icon name="map-pin" size={13} stroke={2} /></span>
        {city}
      </span>
      <span className="cityrow__count">{count} sitios</span>
    </div>
  );
  return (
    <div className="citylist">
      <div className="citylist__track">
        {cities.map((c,i)=>row(c,'a'+i))}
        {cities.map((c,i)=>row(c,'b'+i))}
      </div>
    </div>
  );
}

function ListsVisual() {
  const lists = [
    {n:'Pendientes', c: 'var(--persimmon)', count: 24},
    {n:'Con clientes', c: 'var(--ink)', count: 8},
    {n:'Cena romántica', c: 'var(--sage)', count: 12},
    {n:'Brunch domingo', c: 'var(--sky)', count: 6},
  ];
  return (
    <div className="bento-viz" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
      {lists.map((l,i)=>(
        <div key={i} className="listtile" style={{
          background:'#fff', borderRadius:14, padding:'14px',
          boxShadow:'0 8px 20px -10px rgba(38,23,18,0.18)',
          display:'flex', flexDirection:'column', gap:8,
          animationDelay:`${i*0.6}s`,
        }}>
          <div style={{width:6, height:6, borderRadius:999, background:l.c}}></div>
          <span style={{fontSize:12, fontWeight:700, color:'var(--ink)', letterSpacing:'-0.01em'}}>{l.n}</span>
          <span style={{fontSize:10, color:'var(--ink-quiet)'}}>{l.count} sitios</span>
        </div>
      ))}
    </div>
  );
}

function MapVisual() {
  return (
    <div className="bento-viz" style={{height:160, borderRadius:18, overflow:'hidden', background:'rgba(255,255,255,0.18)', backdropFilter:'blur(8px)', boxShadow:'0 12px 28px -12px rgba(38,23,18,0.4)', border:'1px solid rgba(255,255,255,0.25)'}}>
      <svg viewBox="0 0 280 160" style={{width:'100%', height:'100%', display:'block'}}>
        <path d="M 0 90 Q 80 70 140 100 T 280 90" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none"/>
        <path d="M 80 0 L 100 160" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
        <path d="M 200 0 L 180 160" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
        <rect x="120" y="20" width="40" height="40" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="210" y="100" width="50" height="40" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="20" y="30" width="50" height="40" rx="3" fill="rgba(255,255,255,0.08)"/>
        <Pin x={140} y={80} color="#E35336" big delay={0}/>
        <Pin x={50} y={60} color="#E35336" delay={0.6}/>
        <Pin x={235} y={120} color="#E35336" delay={1.2}/>
        <Pin x={180} y={40} color="#FBF8F2" delay={1.8}/>
      </svg>
    </div>
  );
}

function SocialProofSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Prueba social</span>
          <h2>Más de 2.400 personas ya están esperando</h2>
          <p className="section__sub">
            Foodies, viajeros, amigos que siempre saben dónde ir — todos construyendo juntos la mejor guía gastronómica.
          </p>
        </div>
        <div className="proof__stats">
          <div className="stat">
            <div className="stat__n">2.400+</div>
            <div className="stat__l">en la lista de espera</div>
          </div>
          <div className="stat">
            <div className="stat__n">5</div>
            <div className="stat__l">ciudades de lanzamiento</div>
          </div>
          <div className="stat">
            <div className="stat__n">100%</div>
            <div className="stat__l">recomendaciones de personas reales</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProblemSection = ProblemSection;
window.WhatIsSection = WhatIsSection;
window.HowItWorksSection = HowItWorksSection;
window.FeaturesSection = FeaturesSection;
window.SocialProofSection = SocialProofSection;
