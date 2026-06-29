/* @ds-bundle: {"format":3,"namespace":"MatlystDesignSystem_97d941","components":[],"sourceHashes":{"ui_kits/landing/components/FaqSection.jsx":"0e397563f06e","ui_kits/landing/components/Footer.jsx":"79b05881392b","ui_kits/landing/components/Hero.jsx":"1cfcedf00421","ui_kits/landing/components/Icons.jsx":"f38e1d690e84","ui_kits/landing/components/Nav.jsx":"87c3973984dc","ui_kits/landing/components/Sections.jsx":"032d2794d513","ui_kits/landing/components/WaitingList.jsx":"f18da13366db"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MatlystDesignSystem_97d941 = window.MatlystDesignSystem_97d941 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/components/FaqSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// FaqSection.jsx — clean accordion with plus/cross icon (no emoji).

function FaqSection() {
  const items = [['¿Qué es Matlyst?', 'Matlyst es una aplicación móvil que funciona como red social gastronómica. Permite a los usuarios descubrir, compartir y guardar recomendaciones de restaurantes basadas en los gustos de personas reales de su comunidad, no en algoritmos publicitarios ni en reseñas anónimas.'], ['¿Cuándo estará disponible Matlyst?', 'Matlyst está actualmente en fase de desarrollo y lanzamiento. Puedes unirte a la lista de espera para recibir acceso prioritario antes de la apertura al público general.'], ['¿Matlyst es gratuita?', 'Sí. Matlyst será gratuita para todos los usuarios en su lanzamiento. Únete a la lista de espera para ser el primero en descargarlo.'], ['¿En qué se diferencia Matlyst de TripAdvisor o Google Maps?', 'La diferencia principal es que en Matlyst las recomendaciones vienen de personas reales de tu comunidad cuyos gustos conoces y valoras. A diferencia de TripAdvisor o Google Maps, donde cualquier persona puede dejar una reseña sin contexto, Matlyst te permite conectar con gente que comparte tus preferencias gastronómicas y filtrar el ruido.'], ['¿Matlyst funciona en toda España?', 'Sí. El lanzamiento inicial tiene cobertura nacional en España, con especial foco en ciudades con alta densidad gastronómica como Madrid, Barcelona, Valencia, Sevilla o San Sebastián.'], ['¿Puedo recomendar cualquier tipo de restaurante en Matlyst?', 'Sí. Matlyst no está limitada a ningún tipo de cocina ni rango de precios. Desde el bar de tapas de toda la vida hasta el restaurante con estrella Michelin, todo tiene cabida si tú lo consideras una buena recomendación.'], ['¿Cómo sabe Matlyst qué restaurantes me van a gustar?', 'Matlyst construye tu perfil gastronómico a partir de tus preferencias, tus recomendaciones y las personas que sigues. Cuanto más la uses, más personalizado se vuelve tu feed de descubrimiento.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", null, "Preguntas frecuentes")), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, items.map(([q, a], i) => /*#__PURE__*/React.createElement("details", _extends({
    className: "faq__item",
    key: i
  }, i === 0 ? {
    open: true
  } : {}), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    className: "faq__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    stroke: 2
  }))), /*#__PURE__*/React.createElement("p", {
    className: "faq__answer"
  }, a))))));
}
window.FaqSection = FaqSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/FaqSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/Footer.jsx
try { (() => {
// Footer.jsx — cream-deep, dark text, persimmon top accent. Wordmark + tagline visible.

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "wm",
    src: "../../assets/matlyst-wordmark.png",
    alt: "Matlyst"
  }), /*#__PURE__*/React.createElement("span", {
    className: "footer__tagline"
  }, "Come bien. ", /*#__PURE__*/React.createElement("em", null, "Siempre.")), /*#__PURE__*/React.createElement("p", null, "La red social gastron\xF3mica donde las recomendaciones vienen de gente real.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Producto"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "Inicio"), /*#__PURE__*/React.createElement("a", {
    href: "#como-funciona"
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Funciones"), /*#__PURE__*/React.createElement("a", {
    href: "#lista-espera"
  }, "\xDAnete")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Recursos"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:matlyst.app@gmail.com"
  }, "Contacto")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "S\xEDguenos"), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com",
    target: "_blank",
    rel: "noreferrer"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "https://tiktok.com",
    target: "_blank",
    rel: "noreferrer"
  }, "TikTok"), /*#__PURE__*/React.createElement("a", {
    href: "https://x.com",
    target: "_blank",
    rel: "noreferrer"
  }, "Twitter / X"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Matlyst \xB7 Christian Mateo Mart\xEDnez S\xE1chica"), /*#__PURE__*/React.createElement("span", {
    className: "footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#aviso-legal"
  }, "Aviso Legal"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#privacidad"
  }, "Pol\xEDtica de Privacidad"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#cookies"
  }, "Pol\xEDtica de Cookies")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/Hero.jsx
try { (() => {
// Hero.jsx — big stacked headline left, layered phone mockup right.
// No emoji, Apple-clean depth: soft radial halo behind the phone.

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "La app de recomendaciones de restaurantes"), /*#__PURE__*/React.createElement("h1", null, "Come bien.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Siempre.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "Matlyst es la red social donde descubres restaurantes recomendados por gente con tu mismo gusto \u2014 no por algoritmos, no por cr\xEDticos an\xF3nimos."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#lista-espera",
    className: "btn btn--primary"
  }, "\xDAnete a la lista de espera", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#como-funciona",
    className: "btn btn--ghost"
  }, "C\xF3mo funciona")), /*#__PURE__*/React.createElement("div", {
    className: "hero__micro"
  }, /*#__PURE__*/React.createElement("span", null, "Gratis"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Sin spam"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Acceso prioritario"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__halo",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(PhoneMockup, null))));
}
function PhoneMockup() {
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone__notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "phone__screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone__status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "phone__statusicons"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 14,
      height: 8,
      borderRadius: 1,
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 9,
      border: '1.4px solid currentColor',
      borderRadius: 2.5,
      position: 'relative',
      marginLeft: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      background: 'currentColor',
      width: '62%',
      borderRadius: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/matlyst-mark.png",
    alt: "",
    style: {
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: 'rgba(38,23,18,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: 'rgba(38,23,18,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-circle",
    size: 16
  })))), /*#__PURE__*/React.createElement(FeedCard, {
    place: "Bar N\xE9stor",
    city: "Donostia",
    tags: "Tortilla \xB7 Carne",
    rating: "4.9",
    name: "I\xF1aki R.",
    avatarColor: "var(--sage)",
    photoGradient: "radial-gradient(70% 90% at 40% 20%, #F2B279 0%, transparent 60%), radial-gradient(70% 90% at 80% 80%, #C2401F 0%, transparent 70%), linear-gradient(140deg, #8E4A2C 0%, #4A2014 100%)"
  }), /*#__PURE__*/React.createElement(FeedCard, {
    place: "Sala de Despiece",
    city: "Madrid",
    tags: "Cena \xB7 Tapas modernas",
    rating: "4.8",
    name: "Alejandra M.",
    avatarColor: "var(--persimmon)",
    active: true,
    photoGradient: "radial-gradient(60% 80% at 30% 30%, #6B8048 0%, transparent 60%), radial-gradient(60% 70% at 80% 70%, #E35336 0%, transparent 70%), linear-gradient(140deg, #3F2918 0%, #1F1208 100%)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '14px 28px 22px',
      borderTop: '1px solid rgba(38,23,18,0.08)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "utensils",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 20,
    style: {
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 20,
    style: {
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "user-circle",
    size: 20,
    style: {
      opacity: 0.4
    }
  }))));
}
function FeedCard({
  place,
  city,
  tags,
  rating,
  name,
  avatarColor,
  active,
  photoGradient
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px 16px 0',
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: active ? '0 12px 28px -12px rgba(38,23,18,0.28)' : '0 2px 6px -2px rgba(38,23,18,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 88,
      background: photoGradient,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(20px 20px at 30% 40%, rgba(255,255,255,0.18), transparent 70%),' + 'radial-gradient(28px 28px at 65% 70%, rgba(255,255,255,0.12), transparent 70%),' + 'radial-gradient(14px 14px at 80% 30%, rgba(255,255,255,0.10), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      right: 10,
      background: '#fff',
      padding: '4px 9px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink)',
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--persimmon)',
      fontSize: 10
    }
  }, "\u2605"), rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink)',
      letterSpacing: '-0.012em'
    }
  }, place), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-quiet)',
      fontWeight: 500
    }
  }, city)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-soft)',
      marginTop: 3
    }
  }, tags), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      background: avatarColor,
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, name, " lo recomend\xF3"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/Icons.jsx
try { (() => {
// Icons.jsx — Inline SVG icon library (stroke-based, 24px box, 1.75 weight).
// Replaces every emoji that used to live in the marketing surfaces.

const Icon = ({
  name,
  size = 24,
  color,
  stroke = 1.75,
  style
}) => {
  const paths = {
    'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    'check': /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }),
    'plus': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    'sparkles': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 17v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12H1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 12h-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.6 5.6 8 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m16 16 2.4 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m5.6 18.4 2.4-2.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m16 8 2.4-2.4"
    })),
    'users': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    'utensils': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 2v7c0 1.1.9 2 2 2h2v11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 2v20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2z"
    })),
    'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    'user-circle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 20.66a8 8 0 0 1 10 0"
    })),
    'bookmark': /*#__PURE__*/React.createElement("path", {
      d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
    }),
    'map': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "6",
      x2: "15",
      y2: "21"
    })),
    'compass': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })),
    'clock': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    'bot': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "8",
      width: "18",
      height: "12",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "14",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15.5",
      cy: "14",
      r: "1"
    })),
    'ghost': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2 2.5-2 2.5 2L17 19l3 3V10a8 8 0 0 0-8-8z"
    })),
    'sliders': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    })),
    'message-quote': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    })),
    'eye': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    'x': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    'heart': /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, paths[name] || null);
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/Nav.jsx
try { (() => {
// Nav.jsx — sticky top nav, Apple-clean, mark + wordmark, single persimmon CTA.
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "wm",
    src: "../../assets/matlyst-wordmark.png",
    alt: "Matlyst"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#problema"
  }, "El problema"), /*#__PURE__*/React.createElement("a", {
    href: "#como-funciona"
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Funciones"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("a", {
    className: "nav__cta",
    href: "#lista-espera"
  }, "\xDAnete")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/Sections.jsx
try { (() => {
// Sections.jsx — Marketing sections: Problem, WhatIs, HowItWorks, Features, SocialProof.
// All emoji removed. Problem section uses asymmetric overlapping bubbles instead of a generic row.

function ProblemSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--problem",
    id: "problema",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "problem-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "El problema"), /*#__PURE__*/React.createElement("h2", null, "\xBFCu\xE1ntas veces has acabado en un sitio mediocre por no saber d\xF3nde ir?"), /*#__PURE__*/React.createElement("p", {
    className: "problem-head__body"
  }, "Google Maps tiene miles de rese\xF1as. TripAdvisor tambi\xE9n. Pero la mayor\xEDa son de gente que no tiene ni idea de lo que le gusta \u2014 o directamente te est\xE1n colocando su primo. Las mejores recomendaciones siempre vienen de alguien de confianza. El problema es que no siempre tienes a esa persona cerca.")), /*#__PURE__*/React.createElement("div", {
    className: "problem-thread"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble bubble--persimmon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bubble__when"
  }, "t\xFA, ahora mismo"), /*#__PURE__*/React.createElement("p", {
    className: "bubble__text"
  }, "\u201CLlevo 20 minutos mirando rese\xF1as y sigo sin decidirme.\u201D"), /*#__PURE__*/React.createElement("span", {
    className: "bubble__time"
  }, "21:14")), /*#__PURE__*/React.createElement("div", {
    className: "bubble bubble--sage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bubble__when"
  }, "la semana pasada"), /*#__PURE__*/React.createElement("p", {
    className: "bubble__text"
  }, "\u201CLas recomendaciones de la app son siempre las mismas.\u201D"), /*#__PURE__*/React.createElement("span", {
    className: "bubble__time"
  }, "jue \xB7 14:08")), /*#__PURE__*/React.createElement("div", {
    className: "bubble bubble--sky"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bubble__when"
  }, "cada vez que viajas"), /*#__PURE__*/React.createElement("p", {
    className: "bubble__text"
  }, "\u201CNo s\xE9 si la persona que escribi\xF3 esto tiene mi mismo gusto.\u201D"), /*#__PURE__*/React.createElement("span", {
    className: "bubble__time"
  }, "en Sevilla")), /*#__PURE__*/React.createElement("div", {
    className: "bubble--matlyst",
    role: "presentation"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/matlyst-mark.png",
    alt: "Matlyst"
  }), /*#__PURE__*/React.createElement("p", null, "Matlyst pone a esa persona justo ah\xED.")))));
}
function WhatIsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Qu\xE9 es Matlyst"), /*#__PURE__*/React.createElement("h2", null, "Tu c\xEDrculo gastron\xF3mico de confianza"), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "Una app m\xF3vil donde t\xFA y gente con tu mismo gusto compart\xEDs los mejores restaurantes que hab\xE9is descubierto. No es una gu\xEDa. No es un buscador. Es una red social pensada para comer bien.")), /*#__PURE__*/React.createElement("div", {
    className: "whatis-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card__visual"
  }, /*#__PURE__*/React.createElement(VisualReco, null)), /*#__PURE__*/React.createElement("h3", null, "Recomendaciones reales"), /*#__PURE__*/React.createElement("p", null, "De personas como t\xFA, no de algoritmos optimizados para el restaurante que m\xE1s paga.")), /*#__PURE__*/React.createElement("div", {
    className: "feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card__visual"
  }, /*#__PURE__*/React.createElement(VisualCommunity, null)), /*#__PURE__*/React.createElement("h3", null, "Comunidad con criterio"), /*#__PURE__*/React.createElement("p", null, "Conecta con gente que comparte tus gustos y descubre qu\xE9 est\xE1n comiendo ahora mismo.")), /*#__PURE__*/React.createElement("div", {
    className: "feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card__visual"
  }, /*#__PURE__*/React.createElement(VisualDiscovery, null)), /*#__PURE__*/React.createElement("h3", null, "Descubrimiento inteligente"), /*#__PURE__*/React.createElement("p", null, "Cuanto m\xE1s usas Matlyst, mejor entiende qu\xE9 tipo de sitios te van a enamorar.")))));
}

/* ------------- Abstract mini-visuals ------------- */

function VisualReco() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(140deg, #FDEAE1 0%, #F9D6CC 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 22,
      right: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChipMock, {
    name: "Alejandra",
    place: "Sala de Despiece",
    color: "#fff"
  }), /*#__PURE__*/React.createElement(ChipMock, {
    name: "I\xF1aki",
    place: "Bar N\xE9stor",
    color: "#fff",
    shift: 16
  }), /*#__PURE__*/React.createElement(ChipMock, {
    name: "Carmen",
    place: "Tickets",
    color: "#fff",
    shift: 32
  })));
}
function VisualCommunity() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(140deg, #EEF1E0 0%, #DEE5C8 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ConstellationOfAvatars, null)));
}
function VisualDiscovery() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(140deg, #E3F1FB 0%, #CFE6F7 100%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 140",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 0 L 0 0 0 20",
    fill: "none",
    stroke: "rgba(74,171,232,0.35)",
    strokeWidth: "0.6"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "240",
    height: "140",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 80 Q 60 60 120 90 T 240 80",
    stroke: "rgba(255,255,255,0.6)",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 60 0 L 80 140",
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 50,
    y: 45,
    color: "#E35336"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 140,
    y: 70,
    color: "#E35336",
    big: true
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 195,
    y: 50,
    color: "#98A869"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 90,
    y: 105,
    color: "#4AABE8"
  })));
}
function Pin({
  x,
  y,
  color,
  big
}) {
  const r = big ? 12 : 8;
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y + 2,
    r: r * 0.5,
    fill: "rgba(38,23,18,0.15)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r * 0.4,
    fill: "#fff"
  }));
}
function ChipMock({
  name,
  place,
  color,
  shift = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      borderRadius: 12,
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transform: `translateX(${shift}px)`,
      boxShadow: '0 4px 14px -6px rgba(38,23,18,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: 'var(--persimmon)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, name[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-quiet)'
    }
  }, name, " recomend\xF3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink)',
      fontFamily: 'var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, place)));
}
function ConstellationOfAvatars() {
  const avs = [{
    x: 80,
    y: 50,
    r: 22,
    color: '#E35336',
    n: 'A'
  }, {
    x: 150,
    y: 30,
    r: 18,
    color: '#4AABE8',
    n: 'I'
  }, {
    x: 175,
    y: 90,
    r: 24,
    color: '#98A869',
    n: 'C'
  }, {
    x: 60,
    y: 100,
    r: 16,
    color: '#261712',
    n: 'M'
  }, {
    x: 120,
    y: 78,
    r: 20,
    color: '#E35336',
    n: 'L'
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 140",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "50",
    x2: "150",
    y2: "30",
    stroke: "rgba(124,140,80,0.4)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "50",
    x2: "120",
    y2: "78",
    stroke: "rgba(124,140,80,0.4)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "120",
    y1: "78",
    x2: "175",
    y2: "90",
    stroke: "rgba(124,140,80,0.4)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "120",
    y1: "78",
    x2: "60",
    y2: "100",
    stroke: "rgba(124,140,80,0.4)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "150",
    y1: "30",
    x2: "175",
    y2: "90",
    stroke: "rgba(124,140,80,0.25)",
    strokeWidth: "1.5"
  }), avs.map((a, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: a.x,
    cy: a.y,
    r: a.r,
    fill: a.color
  }), /*#__PURE__*/React.createElement("text", {
    x: a.x,
    y: a.y + 4,
    textAnchor: "middle",
    fontSize: a.r * 0.7,
    fontWeight: "700",
    fill: "#fff",
    fontFamily: "var(--font-display)"
  }, a.n))));
}
function HowItWorksSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "como-funciona"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("h2", null, "As\xED de f\xE1cil es comer bien"), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "Tres pasos para dejar de perder el tiempo con recomendaciones mediocres.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, [['01', 'Crea tu perfil gastronómico', 'Dinos qué tipo de cocina te gusta, qué ciudades frecuentas y quién sigue tu criterio cuando recomiendas un sitio.'], ['02', 'Descubre y guarda restaurantes', 'Tu feed se llena de recomendaciones de personas con gustos parecidos a los tuyos. Guarda los que te interesen.'], ['03', 'Comparte tus descubrimientos', 'Cuando encuentres un sitio que merece la pena, súbelo. Tu comunidad te lo agradecerá.']].map(([n, t, b], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "step__num"
  }, "PASO ", n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, b))))));
}
function FeaturesSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "features",
    style: {
      background: 'var(--cream-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Funciones"), /*#__PURE__*/React.createElement("h2", null, "Todo lo que necesitas para no volver a comer mal")), /*#__PURE__*/React.createElement("div", {
    className: "bento"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-tile bento-tile--persimmon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-tile__copy"
  }, /*#__PURE__*/React.createElement("h3", null, "Listas por ciudad"), /*#__PURE__*/React.createElement("p", null, "Madrid, Barcelona, Sevilla, San Sebasti\xE1n \u2014 filtradas por gente que las ha visitado de verdad.")), /*#__PURE__*/React.createElement(CityListVisual, null)), /*#__PURE__*/React.createElement("div", {
    className: "bento-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-tile__copy"
  }, /*#__PURE__*/React.createElement("h3", null, "Perfiles de gusto"), /*#__PURE__*/React.createElement("p", null, "Sigue a las personas cuyo criterio respetas. Si te gusta lo que a ellos les gusta, sus recomendaciones son oro.")), /*#__PURE__*/React.createElement(TasteProfileVisual, null)), /*#__PURE__*/React.createElement("div", {
    className: "bento-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-tile__copy"
  }, /*#__PURE__*/React.createElement("h3", null, "Guarda y organiza"), /*#__PURE__*/React.createElement("p", null, "Crea tus propias listas: ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, "Pendientes"), ", ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, "Con clientes"), ", ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, "Cena rom\xE1ntica"), ". Lo que quieras.")), /*#__PURE__*/React.createElement(ListsVisual, null)), /*#__PURE__*/React.createElement("div", {
    className: "bento-tile bento-tile--sage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bento-tile__copy"
  }, /*#__PURE__*/React.createElement("h3", null, "Modo explorar"), /*#__PURE__*/React.createElement("p", null, "Abre el mapa, mira qu\xE9 hay cerca y filtra por cocina, precio o ambiente. ", /*#__PURE__*/React.createElement("strong", null, "Sin publicidad. Sin patrocinados."))), /*#__PURE__*/React.createElement(MapVisual, null)))));
}
function CityListVisual() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'flex-end'
    }
  }, ['Madrid', 'Barcelona', 'Donostia', 'Sevilla'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(8px)',
      color: '#fff',
      padding: '6px 14px',
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      border: '1px solid rgba(255,255,255,0.22)',
      transform: `translateX(${-i * 8}px)`
    }
  }, c)));
}
function TasteProfileVisual() {
  const users = [{
    n: 'Alejandra',
    overlap: '92%',
    color: 'var(--persimmon)'
  }, {
    n: 'Iñaki',
    overlap: '87%',
    color: 'var(--sage)'
  }, {
    n: 'Carmen',
    overlap: '81%',
    color: 'var(--sky)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, users.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 14,
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: '0 8px 20px -10px rgba(38,23,18,0.18)',
      transform: `translateX(${i * 16}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: u.color,
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, u.n[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, u.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-quiet)'
    }
  }, u.overlap, " de coincidencia")))));
}
function ListsVisual() {
  const lists = [{
    n: 'Pendientes',
    c: 'var(--persimmon)',
    count: 24
  }, {
    n: 'Con clientes',
    c: 'var(--ink)',
    count: 8
  }, {
    n: 'Cena romántica',
    c: 'var(--sage)',
    count: 12
  }, {
    n: 'Brunch domingo',
    c: 'var(--sky)',
    count: 6
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      width: 260,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, lists.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 14,
      padding: '14px',
      boxShadow: '0 8px 20px -10px rgba(38,23,18,0.18)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: l.c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, l.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-quiet)'
    }
  }, l.count, " sitios"))));
}
function MapVisual() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      width: 280,
      height: 160,
      borderRadius: 18,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 12px 28px -12px rgba(38,23,18,0.4)',
      border: '1px solid rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 160",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 90 Q 80 70 140 100 T 280 90",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 0 L 100 160",
    stroke: "rgba(255,255,255,0.3)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 0 L 180 160",
    stroke: "rgba(255,255,255,0.3)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "120",
    y: "20",
    width: "40",
    height: "40",
    rx: "3",
    fill: "rgba(255,255,255,0.08)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "210",
    y: "100",
    width: "50",
    height: "40",
    rx: "3",
    fill: "rgba(255,255,255,0.08)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "30",
    width: "50",
    height: "40",
    rx: "3",
    fill: "rgba(255,255,255,0.08)"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 140,
    y: 80,
    color: "#E35336",
    big: true
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 50,
    y: 60,
    color: "#E35336"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 235,
    y: 120,
    color: "#E35336"
  }), /*#__PURE__*/React.createElement(Pin, {
    x: 180,
    y: 40,
    color: "#FBF8F2"
  })));
}
function SocialProofSection() {
  const testimonials = [['Por fin una app que entiende que no todas las reseñas valen lo mismo.', 'Alejandra M.', 'Madrid', 'var(--persimmon)'], ['La idea es exactamente lo que le faltaba a las apps de restaurantes.', 'Iñaki R.', 'San Sebastián', 'var(--sage)'], ['Que las recomendaciones vengan de gente real cambia todo.', 'Carmen V.', 'Barcelona', 'var(--sky)']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Prueba social"), /*#__PURE__*/React.createElement("h2", null, "Los que comen bien ya est\xE1n dentro"), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "Gourmets, foodies, viajeros y gente a la que simplemente le gusta comer bien \u2014 y no quiere seguir perdiendo el tiempo con recomendaciones mediocres.")), /*#__PURE__*/React.createElement("div", {
    className: "proof__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__n"
  }, "2.400+"), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "en la lista de espera")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__n"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "ciudades de lanzamiento")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__n"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "recomendaciones de personas reales"))), /*#__PURE__*/React.createElement("div", {
    className: "testimonials"
  }, testimonials.map(([q, n, c, color], i) => /*#__PURE__*/React.createElement("div", {
    className: "testimonial",
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    className: "testimonial__quote"
  }, "\"", q, "\""), /*#__PURE__*/React.createElement("div", {
    className: "testimonial__attr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      background: color,
      color: '#fff'
    }
  }, n[0]), /*#__PURE__*/React.createElement("div", {
    className: "attr__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "attr__name"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "attr__city"
  }, c))))))));
}
window.ProblemSection = ProblemSection;
window.WhatIsSection = WhatIsSection;
window.HowItWorksSection = HowItWorksSection;
window.FeaturesSection = FeaturesSection;
window.SocialProofSection = SocialProofSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components/WaitingList.jsx
try { (() => {
// WaitingList.jsx — persimmon hero with white pill form + dark CTA button.

function WaitingListSection() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  function submit(e) {
    e.preventDefault();
    setErrorMsg('');
    const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!valid) {
      setStatus('error');
      setErrorMsg('Necesitamos un email que funcione.');
      return;
    }
    setStatus('submitting');
    setTimeout(() => setStatus('done'), 700);
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "waitlist",
    id: "lista-espera"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container waitlist__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waitlist__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Lista de espera"), /*#__PURE__*/React.createElement("h2", null, "S\xE9 de los primeros en probar Matlyst"), /*#__PURE__*/React.createElement("p", {
    className: "waitlist__sub"
  }, "Estamos en fase de lanzamiento. La app no est\xE1 disponible a\xFAn para todo el mundo \u2014 pero t\xFA puedes reservar tu sitio hoy y conseguir acceso anticipado."), status !== 'done' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "waitlist__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Tu email aqu\xED",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (status === 'error') setStatus('idle');
    },
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: status === 'submitting'
  }, status === 'submitting' ? 'Enviando…' : 'Quiero acceso prioritario')), status === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      color: '#fff',
      fontSize: 13,
      fontWeight: 600
    }
  }, errorMsg), /*#__PURE__*/React.createElement("div", {
    className: "waitlist__micro"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10,
    stroke: 3
  })), "Acceso antes que nadie"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10,
    stroke: 3
  })), "Sin compromiso"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10,
    stroke: 3
  })), "Cero spam")), /*#__PURE__*/React.createElement("ul", {
    className: "waitlist__bullets"
  }, ['Acceso a la beta privada antes del lanzamiento oficial', 'Tu perfil verificado como Early Adopter', 'Influencia real en las funcionalidades que desarrollamos primero'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "bullet"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("p", {
    className: "waitlist__legal"
  }, "Al suscribirte aceptas nuestra ", /*#__PURE__*/React.createElement("a", {
    href: "#privacidad"
  }, "Pol\xEDtica de Privacidad"), ".")) : /*#__PURE__*/React.createElement("div", {
    className: "waitlist__success"
  }, /*#__PURE__*/React.createElement("h3", null, "Est\xE1s dentro."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'rgba(255,255,255,0.92)',
      lineHeight: 1.5,
      fontSize: 15
    }
  }, "Te hemos apuntado con ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, email), ". Recibir\xE1s un email cuando abramos la beta privada. Mientras tanto: cu\xE9ntale a alguien con buen gusto.")))));
}
window.WaitingListSection = WaitingListSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components/WaitingList.jsx", error: String((e && e.message) || e) }); }

})();
