// Icons.jsx — Inline SVG icon library (stroke-based, 24px box, 1.75 weight).
// Replaces every emoji that used to live in the marketing surfaces.

const Icon = ({ name, size = 24, color, stroke = 1.75, style }) => {
  const paths = {
    'arrow-right':  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'check':        <polyline points="20 6 9 17 4 12"/>,
    'plus':         <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    'sparkles':     <><path d="M12 3v4"/><path d="M12 17v4"/><path d="M5 12H1"/><path d="M23 12h-4"/><path d="M5.6 5.6 8 8"/><path d="m16 16 2.4 2.4"/><path d="m5.6 18.4 2.4-2.4"/><path d="m16 8 2.4-2.4"/></>,
    'users':        <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    'utensils':     <><path d="M3 2v7c0 1.1.9 2 2 2h2v11"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2z"/></>,
    'map-pin':      <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    'user-circle':  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.66a8 8 0 0 1 10 0"/></>,
    'bookmark':     <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"/>,
    'map':          <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></>,
    'compass':      <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
    'clock':        <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    'bot':          <><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 2v6"/><circle cx="8.5" cy="14" r="1"/><circle cx="15.5" cy="14" r="1"/></>,
    'ghost':        <><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2 2.5-2 2.5 2L17 19l3 3V10a8 8 0 0 0-8-8z"/></>,
    'sliders':      <><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></>,
    'message-quote': <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>,
    'eye':          <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
    'x':            <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'heart':        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  };
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
};
window.Icon = Icon;
