// MarqueeGallery.jsx — "Comunidad" free-bouncing face field.
// One flat plane (same depth) of Matlyst smiley faces of varied sizes. They
// drift freely and bounce — off the walls AND off each other (elastic
// collisions) — like loose balloons. No fixed anchors, no stacking depth.
//
// Hover precision: the moment you hover a face it FREEZES in place and locks
// to its one photo. A moving target was causing the cursor to slip onto
// neighbours and flash multiple photos — freezing makes the first hover exact
// and shows exactly one image. The face resumes bouncing when you leave it.
//
// Desktop: hover a face → its photo follows the cursor. One face, one photo.
// Mobile (coarse pointer): tap a face → its photo in a centered lightbox.
//
// Reduced motion → balls are placed statically (no continuous bounce).

function MarqueeGallery() {
  const P = 'assets/community/';
  const IMAGES = [
    'comm-p1.jpg', 'comm-l1.jpg', 'comm-sq1.jpg', 'comm-p2.jpg',
    'comm-l2.jpg', 'comm-p5.jpg', 'comm-p3.jpg', 'comm-l3.jpg',
    'comm-sq2.jpg', 'comm-p4.jpg', 'comm-l4.jpg',
  ];

  // rf = radius as a fraction of the field's short side; img = its one fixed
  // photo; hideSm = drop it on phones so the big balloons keep room to bounce.
  const FACE_DEFS = [
    { rf: 0.150, img: 0 },
    { rf: 0.092, img: 5 },
    { rf: 0.128, img: 2 },
    { rf: 0.068, img: 3, hideSm: true },
    { rf: 0.100, img: 4 },
    { rf: 0.112, img: 6 },
    { rf: 0.078, img: 7 },
    { rf: 0.132, img: 1 },
    { rf: 0.066, img: 9, hideSm: true },
    { rf: 0.088, img: 8, hideSm: true },
    { rf: 0.082, img: 10 },
  ];

  const fieldRef = React.useRef(null);
  const elsRef = React.useRef([]);
  const ballsRef = React.useRef([]);
  const byIdxRef = React.useRef({});   // face index -> ball
  const hoverRef = React.useRef(-1);   // currently frozen/shown face index
  const pendingRef = React.useRef(-1); // face awaiting dwell confirmation
  const dwellRef = React.useRef(0);    // dwell timer id
  const rafRef = React.useRef(0);
  const revealRef = React.useRef(null);
  const [revealSrc, setRevealSrc] = React.useState(IMAGES[0]);
  const [active, setActive] = React.useState(false);
  const [coarse, setCoarse] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    IMAGES.forEach((n) => { const im = new Image(); im.src = P + n; });
    const mq = window.matchMedia && window.matchMedia('(pointer: coarse)');
    if (mq) {
      setCoarse(mq.matches);
      const on = (e) => setCoarse(e.matches);
      mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
      return () => { mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on); };
    }
  }, []);

  // ---- Physics: free bounce + elastic ball-to-ball collisions ----
  React.useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rand = (a, b) => a + Math.random() * (b - a);
    let W = 0, H = 0;

    const build = () => {
      const rect = field.getBoundingClientRect();
      W = rect.width; H = rect.height;
      const small = W <= 640;
      const base = Math.min(W, H);
      const balls = [];
      byIdxRef.current = {};
      FACE_DEFS.forEach((d, i) => {
        const el = elsRef.current[i];
        if (!el) return;
        if (small && d.hideSm) { el.style.display = 'none'; return; }
        el.style.display = 'block';
        const r = d.rf * base;
        const speed = rand(0.045, 0.075) * base; // px/s — gentle
        const ang = rand(0, Math.PI * 2);
        el.style.width = el.style.height = (2 * r) + 'px';
        const b = {
          idx: i, el, r, m: r * r, img: d.img, speed, frozen: false,
          x: rand(r, W - r), y: rand(r, H - r),
          vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
        };
        balls.push(b);
        byIdxRef.current[i] = b;
      });
      // Relax initial overlaps so nothing starts stacked.
      for (let k = 0; k < 240; k++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            const a = balls[i], b = balls[j];
            let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 0.001;
            const min = a.r + b.r;
            if (d < min) {
              const nx = dx / d, ny = dy / d, push = (min - d) / 2;
              a.x -= nx * push; a.y -= ny * push;
              b.x += nx * push; b.y += ny * push;
            }
          }
        }
        for (const b of balls) {
          b.x = Math.max(b.r, Math.min(W - b.r, b.x));
          b.y = Math.max(b.r, Math.min(H - b.r, b.y));
        }
      }
      ballsRef.current = balls;
      // keep the hovered/frozen face frozen across a resize rebuild
      if (hoverRef.current >= 0 && byIdxRef.current[hoverRef.current]) {
        byIdxRef.current[hoverRef.current].frozen = true;
      }
      for (const b of balls) b.el.style.transform = 'translate(' + (b.x - b.r) + 'px,' + (b.y - b.r) + 'px)';
    };

    let last = 0;
    const step = (t) => {
      const balls = ballsRef.current;
      if (!last) last = t;
      let dt = (t - last) / 1000; last = t;
      if (dt > 0.033) dt = 0.033;

      for (const b of balls) { if (!b.frozen) { b.x += b.vx * dt; b.y += b.vy * dt; } }

      // elastic ball-to-ball collisions (frozen balls act as immovable anchors)
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], b = balls[j];
          let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 0.001;
          const min = a.r + b.r;
          if (d >= min) continue;
          const ia = a.frozen ? 0 : 1 / a.m, ib = b.frozen ? 0 : 1 / b.m, isum = ia + ib;
          if (isum === 0) continue;
          const nx = dx / d, ny = dy / d, overlap = min - d;
          a.x -= nx * overlap * (ia / isum); a.y -= ny * overlap * (ia / isum);
          b.x += nx * overlap * (ib / isum); b.y += ny * overlap * (ib / isum);
          const vn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (vn < 0) {
            const jimp = -2 * vn / isum;
            a.vx -= jimp * ia * nx; a.vy -= jimp * ia * ny;
            b.vx += jimp * ib * nx; b.vy += jimp * ib * ny;
          }
        }
      }

      for (const b of balls) {
        if (!b.frozen) {
          if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx); }
          else if (b.x > W - b.r) { b.x = W - b.r; b.vx = -Math.abs(b.vx); }
          if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy); }
          else if (b.y > H - b.r) { b.y = H - b.r; b.vy = -Math.abs(b.vy); }
          const sp = Math.hypot(b.vx, b.vy) || 0.001;
          b.vx = b.vx / sp * b.speed; b.vy = b.vy / sp * b.speed;
        }
        b.el.style.transform = 'translate(' + (b.x - b.r) + 'px,' + (b.y - b.r) + 'px)';
      }
      rafRef.current = requestAnimationFrame(step);
    };

    build();
    if (!reduce) { last = 0; rafRef.current = requestAnimationFrame(step); }

    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { last = 0; build(); }, 160); };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      clearTimeout(rt);
    };
  }, []);

  const moveReveal = (x, y) => {
    const el = revealRef.current;
    if (el) el.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%,-50%)';
  };
  const onFieldMove = (e) => { if (!coarse) moveReveal(e.clientX, e.clientY); };

  // Commit a face: freeze it and show its ONE photo. Only ever called after
  // the cursor has dwelled on a single face, so grazed neighbours never show.
  const commit = (i, src) => {
    const prev = byIdxRef.current[hoverRef.current];
    if (prev) prev.frozen = false;
    const b = byIdxRef.current[i];
    if (b) b.frozen = true;
    hoverRef.current = i;
    setRevealSrc(src);
    setActive(true);
  };

  const onFaceEnter = (e, i, src) => {
    if (coarse) return;
    if (hoverRef.current === i) return;            // already locked to this face
    moveReveal(e.clientX, e.clientY);
    clearTimeout(dwellRef.current);
    pendingRef.current = i;
    // Short dwell: a quick graze on the way to the target never registers.
    dwellRef.current = setTimeout(() => {
      if (pendingRef.current === i) commit(i, src);
    }, 65);
  };

  const onFaceLeave = (i) => {
    if (coarse) return;
    if (pendingRef.current === i) { clearTimeout(dwellRef.current); pendingRef.current = -1; }
    if (hoverRef.current !== i) return;            // ignore stray leaves from other faces
    const b = byIdxRef.current[i];
    if (b) b.frozen = false;                        // let it bounce again
    hoverRef.current = -1;
    setActive(false);
  };

  const onFaceTap = (src) => { if (coarse) setLightbox(src); };

  return (
    <section className="community" onMouseMove={onFieldMove}>
      <div className="face-field" ref={fieldRef}>
        {FACE_DEFS.map((f, i) => {
          const src = IMAGES[f.img];
          return (
            <button
              key={i}
              type="button"
              className="face"
              ref={(el) => { elsRef.current[i] = el; }}
              aria-label="Ver una recomendación"
              onMouseEnter={(e) => onFaceEnter(e, i, src)}
              onMouseLeave={() => onFaceLeave(i)}
              onClick={() => onFaceTap(src)}
            >
              <img className="face__img" src="assets/matlyst-face.png" alt="" />
            </button>
          );
        })}
      </div>

      {/* Desktop cursor-following reveal. key forces a fresh <img> node per
          photo so two images can never blend during a swap. */}
      <div ref={revealRef} className={'reveal' + (active && !coarse ? ' is-active' : '')} aria-hidden="true">
        <img key={revealSrc} src={P + revealSrc} alt="" />
      </div>

      {/* Mobile lightbox */}
      <div
        className={'face-lightbox' + (lightbox ? ' is-open' : '')}
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
      >
        {lightbox && <img src={P + lightbox} alt="" onClick={(e) => e.stopPropagation()} />}
      </div>
    </section>
  );
}

window.MarqueeGallery = MarqueeGallery;
