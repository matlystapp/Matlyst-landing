/**
 * OPCIONAL — Preview personalizada de los enlaces de perfil.
 *
 * `u.html` por sí solo ya funciona, pero pinta el perfil con JavaScript en el
 * navegador, y los bots de WhatsApp / Telegram / iMessage no ejecutan JS: la
 * tarjeta del enlace sale con los datos genéricos de Matlyst.
 *
 * Esta función serverless resuelve eso sin duplicar la página: sirve el mismo
 * `u.html`, pero sustituyendo el bloque entre los marcadores OG:START / OG:END
 * por unas etiquetas con el nombre y el avatar de la persona. El HTML y los
 * estilos siguen viviendo en un único sitio.
 *
 * Para activarla, en vercel.json:
 *   { "source": "/u/:username", "destination": "/api/u?username=:username" }
 *
 * Runtime: Node.js (por defecto en Vercel). No necesita dependencias.
 */

const USER_API = "https://users-6xk4prfyzq-ew.a.run.app/users/api/v1";
const USERNAME_PATTERN = /^[a-zA-Z0-9._-]{1,40}$/;
const REQUEST_TIMEOUT_MS = 3000;

export default async function handler(request, response) {
  const origin = `https://${request.headers.host}`;

  // La página tal cual la sirve Vercel (con sus marcadores OG:START/OG:END).
  let shell;
  try {
    shell = await fetch(`${origin}/u`).then((res) => res.text());
  } catch (error) {
    console.error("No se pudo leer la plantilla del perfil", error);
    response.redirect(307, "/");
    return;
  }

  const username = String(request.query.username || "");
  const profile = USERNAME_PATTERN.test(username)
    ? await fetchProfile(username)
    : null;

  // Sin perfil (404, backend caído, username raro) se sirve la página sin
  // tocar: el JS del navegador mostrará el estado que corresponda.
  const html = profile ? withOpenGraph(shell, profile, origin, username) : shell;

  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=86400"
  );
  response.status(200).send(html);
}

async function fetchProfile(username) {
  try {
    const res = await fetch(
      `${USER_API}/users/${encodeURIComponent(username)}/public`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("No se pudo consultar el perfil público", error);
    return null;
  }
}

function withOpenGraph(shell, profile, origin, username) {
  const name = (profile.fullName || "").trim() || profile.username;
  const title = `${name} (@${profile.username}) · Matlyst`;
  const description =
    (profile.description || "").trim() ||
    `Mira las experiencias de ${name} en restaurantes, en Matlyst.`;
  const image =
    profile.profileImageUrl || `${origin}/assets/matlyst-wordmark.png`;

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Matlyst" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta property="og:url" content="${origin}/u/${encodeURIComponent(username)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  ].join("\n  ");

  // Se reemplaza el bloque OG por defecto y, de paso, el <title> original:
  // si no, quedarían dos y los bots se quedan con el primero.
  return shell
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<!-- OG:START[\s\S]*?OG:END -->/, tags);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
