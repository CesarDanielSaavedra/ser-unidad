# Ser Unidad · sitio web

Landing page de **Ser Unidad**, el espacio de Hatha Yoga, Meditación Mindfulness y filosofía aplicada de **Sergio Montagner** en Maldonado y Punta del Este, Uruguay. Sitio de una sola página con secciones ancladas, en español e inglés.

## Stack y comandos

- React 18 + TypeScript + Vite 6 + Tailwind CSS 3. Sin router: todo el sitio es una página con anclas.
- `yarn dev` levanta el entorno local. `yarn build` corre `tsc -b` y el build de Vite. `yarn lint` corre ESLint. `yarn preview` sirve `dist/`.
- `yarn deploy` publica `dist/` en la rama `gh-pages` (GitHub Pages en `/ser-unidad/`). El `base` de Vite es `/ser-unidad/` en producción y `/` en desarrollo.
- Antes de subir cambios: `yarn lint && yarn build` tienen que pasar limpios. El build corre en Linux, así que las mayúsculas en rutas de import importan.

## Estructura

```
src/
  App.tsx                 orden de las secciones
  main.tsx                punto de entrada, envuelve en LanguageProvider
  index.css               @font-face, base de Tailwind, utilidades .label y .hairline
  content/
    es.json, en.json      TODOS los textos traducibles, misma estructura en ambos
    site.ts               datos que no se traducen: teléfono, WhatsApp, horarios, espacios, zonas
  sections/               una sección por archivo, en el orden de la página
  components/
    layout/               Navbar (fijo, con menú móvil) y Footer
    ui/                   Button, Container, SectionHeading, Reveal, icons
    decor/                Isotype (logo en SVG inline) y Mandala (textura generada por código)
  context/, hooks/        idioma (useLanguage), contenido tipado (useContent), animación de aparición (useReveal)
  assets/fonts/           woff2 subseteadas a latín (originales: Google Fonts, Noto Serif y Be Vietnam Pro)
public/assets/            logo, isotipo (verde y blanco) e imágenes
admin doc/                manual de marca (PDF) y relevamiento de Instagram
```

## Reglas de trabajo

- **Los textos van en `src/content/*.json`, nunca hardcodeados en JSX.** Si agregás una clave en `es.json`, agregala también en `en.json`. El tipo `Content` sale de `es.json`.
- Los datos del negocio (horarios, lugares, contacto) van en `src/content/site.ts`. Los ids de las secciones (`#concepto`, `#propuesta`, `#sobre-sergio`, `#horarios`, `#espacios`, `#contacto`) se mantienen en español en ambos idiomas.
- Todas las acciones del sitio llevan a WhatsApp con un mensaje precargado (`site.whatsapp(mensaje)`) o a un ancla. No hay formularios ni backend.
- Las animaciones respetan `prefers-reduced-motion`. Usá `<Reveal>` para aparición al hacer scroll, no `IntersectionObserver` a mano.
- Imágenes en `public/assets/images/`, referenciadas con `import.meta.env.BASE_URL` para que funcionen en GitHub Pages.

## Marca (resumen del manual)

- **Concepto:** asana (meditación) + infinito (iteración, mejora) + elevación (crecimiento). El isotipo es la figura en asana con las piernas formando un infinito.
- **Colores** (tokens en `tailwind.config.js`): principales `gold #957F48` y `forest #4E5A51`. Secundarios `indigo #606AA1`, `sage #7B867E`, `clay #B27A64`, `sky #DCE1EC`, `mist #D9E1D9`, `sand #E7E2CD`, `blush #E2C8C1`. Derivados: `cream #F4F1E8`, `ivory #FBF9F4`, `forest.deep`, `gold.dark`.
- **Uso:** fondos claros (sand, cream, ivory) con mucho aire. Forest para texto y bandas oscuras. Gold para acentos, etiquetas y el botón principal. Los secundarios se usan como acentos chicos (por ejemplo, el color de cada actividad en la grilla de horarios: yoga sky/indigo, meditación mist/forest, yoga suave blush/clay).
- **Tipografía:** Noto Serif para títulos (el manual pide Noto Serif Ethiopic; se usa Noto Serif por cobertura latina). Be Vietnam Pro para cuerpo y etiquetas. Etiquetas en mayúsculas con tracking amplio (clase `.label`).
- **Texturas:** mandala en línea fina (componente `Mandala`) sobre fondos claros u oscuros con baja opacidad. El manual también tiene un patrón de íconos (loto, buda, ojo) que todavía no está implementado.
- **Tono de voz:** cálido, cercano, voseo rioplatense, invita en vez de vender. Frases propias de Sergio: "Respirá, pausá y conectate con vos mismo/a", "No se trata de hacerlo perfecto. Se trata de volver. De estar. De respirar", "Que sea de beneficio para todos los seres". Ver `admin doc/instagram/relevamiento-instagram.md` para más.

## Pendientes conocidos

- Confirmar con Sergio los horarios y lugares actuales (los del sitio salen de un flyer de mediados de 2025) y precios.
- Fotos reales: hoy el hero usa una foto de la orilla y "Sobre Sergio" muestra un panel decorativo. Cuando haya fotos, ponerlas en `public/assets/images/` y setear `site.aboutPhoto`.
- Logo en vector oficial (el SVG actual es el que había en el repo).
- Sección de talleres o eventos con fechas, si Sergio quiere mantenerla actualizada.
- Mail de contacto: no figura en ningún lado.
