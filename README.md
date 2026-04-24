# Portfolio Futurista - React + Vite

Portafolio profesional oscuro/futurista preparado para GitHub Pages.

## Instalar dependencias

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Crear build

```bash
npm run build
```

## Vista previa del build

```bash
npm run preview
```

## Publicar en GitHub Pages

1. Sube el proyecto a GitHub.
2. Si el repositorio se llama `portfolio`, cambia en `vite.config.js`:

```js
base: '/portfolio/'
```

3. Ejecuta:

```bash
npm run build
npm run deploy
```

## Personalización rápida

Edita principalmente:

- `src/data/profile.js`
- `src/data/projects.js`
- `public/images/avatar.svg`
- `public/cv/CV.pdf`

