# Ser Unidad

Sitio web de [Ser Unidad](https://www.instagram.com/ser.unidad/), el espacio de Hatha Yoga, Meditación Mindfulness y filosofía aplicada de Sergio Montagner en Maldonado y Punta del Este, Uruguay.

Landing de una sola página, en español e inglés, construida con React, TypeScript, Vite y Tailwind CSS.

## Desarrollo

```bash
yarn install
yarn dev
```

Otros comandos:

| Comando        | Qué hace                                        |
| -------------- | ----------------------------------------------- |
| `yarn build`   | Chequea tipos y genera `dist/`                  |
| `yarn preview` | Sirve `dist/` en local                          |
| `yarn lint`    | Corre ESLint                                    |
| `yarn deploy`  | Publica `dist/` en GitHub Pages (rama `gh-pages`) |

## Dónde está cada cosa

- Textos en español e inglés: `src/content/es.json` y `src/content/en.json`.
- Horarios, espacios y contacto: `src/content/site.ts`.
- Secciones de la página: `src/sections/`.
- Manual de marca y relevamiento de contenido: `admin doc/`.

La guía completa de arquitectura y marca está en [CLAUDE.md](./CLAUDE.md).
