# Matlyst — Landing page

Landing de captación para **Matlyst**, la red social gastronómica donde las
recomendaciones de restaurantes vienen de personas reales. Sitio estático
(HTML + CSS + React vía Babel en el navegador), sin build step.

---

## 🚀 Puesta en marcha

No necesita compilación. Sirve la carpeta con cualquier servidor estático:

```bash
# Opción rápida
npx serve .

# o con Python
python3 -m http.server 8000
```

Abre `http://localhost:8000`.

## ☁️ Despliegue

Preparado para **Vercel** (ver `vercel.json`). Conecta el repo o usa:

```bash
vercel deploy
```

---

## 📁 Estructura del repositorio

```
.
├── index.html                 # Página principal
├── u.html                     # Perfil compartido /u/<username>
├── api/u.mjs                  # Open Graph por usuario (serverless, Vercel)
├── .well-known/               # ⚠️ CARPETA OCULTA — imprescindible
│   ├── apple-app-site-association   # Universal Links de iOS
│   └── assetlinks.json              # App Links de Android
├── package.json               # Solo declara "type": "module" para api/
├── aviso-legal.html           # Páginas legales
├── politica-de-privacidad.html
├── politica-de-cookies.html
├── vercel.json                # Config de despliegue
├── styles/
│   ├── colors_and_type.css    # Tokens: color, tipografía, escala
│   └── landing.css            # Estilos de la landing
├── components/                # Componentes React (JSX vía Babel)
│   ├── Icons.jsx
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── MarqueeGallery.jsx
│   ├── Sections.jsx
│   ├── Download.jsx
│   ├── FaqSection.jsx
│   └── Footer.jsx
├── fonts/                     # Tipografía Switzer (.woff)
└── assets/                    # Imágenes de producción
    ├── community/             # Fotos de la comunidad
    └── loader/                # Fotogramas de la pantalla de carga
```

## 🧹 Qué NO se versiona (ver `.gitignore`)

Estas carpetas **no las usa el sitio** y quedan fuera de Git para mantener el
repo ligero (< 3 MB en lugar de > 100 MB):

| Carpeta        | Contenido                                   |
|----------------|---------------------------------------------|
| `uploads/`     | Imágenes originales y capturas de diseño    |
| `scraps/`      | Recortes de trabajo                         |
| `screenshots/` | Capturas de revisión                        |
| `_ds/`         | Sistema de diseño / UI kits de referencia   |
| `mobile-test.html` | Página de pruebas                      |

> **Si subes el proyecto arrastrando la carpeta a la web de GitHub**, el
> `.gitignore` **no** se aplica: borra antes esas carpetas o usa `git` por
> línea de comandos, que sí lo respeta.

## ⚠️ `.well-known/` — la carpeta que Finder te esconde

Empieza por punto, así que **el Finder de macOS no la muestra**. Pulsa
`Cmd + Shift + .` para verla. Si no llega al repositorio:

- Los enlaces `/u/<username>` **dejan de abrir la app** en quien ya la tiene.
- iOS y Android no pueden verificar el dominio.

`git add .` sí la incluye. Arrastrando carpetas al navegador, **no**.

Después de desplegar, comprueba que responde JSON y sin redirecciones:

```bash
curl -sI https://www.matlyst.app/.well-known/apple-app-site-association
curl -s  https://www.matlyst.app/.well-known/assetlinks.json
```

## 📦 Subir a GitHub por primera vez

```bash
git init
git add .
git commit -m "Matlyst landing"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

Como las carpetas pesadas están en `.gitignore`, solo se subirán los archivos
de producción.

---

## 🖼️ Assets

Todas las imágenes de producción están optimizadas (redimensionadas y
recomprimidas sin pérdida perceptible). No se requiere Git LFS: el asset más
pesado ronda los ~80 KB y el total de `assets/` está por debajo de ~1 MB.

## 📲 Descarga y enlaces de perfil

- La web no capta emails: la única acción es descargar en App Store
  (`https://apps.apple.com/es/app/matlyst/id6781277252`).
- `/u/<username>` sirve `u.html` vía el rewrite de `vercel.json`. En móvil
  redirige a App Store; en escritorio muestra el perfil con el botón. Añade
  `?web=1` a la URL para ver siempre la página.
- `api/u.mjs` inyecta las etiquetas Open Graph por usuario para la preview de
  WhatsApp. Necesita `package.json` con `"type": "module"`.
