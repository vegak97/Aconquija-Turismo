# Aconquija Turismo — React

Sitio turístico de Aconquija, Catamarca, construido con React, Vite y React Router.

## Requisitos

- Node.js compatible con la versión de Vite indicada en `package.json`.
- npm.

## Desarrollo local

Desde esta carpeta (`aconquija-react/`):

```bash
npm install
npm run dev
```

## Comprobaciones y compilación

```bash
npm run lint
npm run build
npm run preview
```

La compilación de producción se genera en `dist/`.

## Publicación en Netlify

La configuración de Netlify está en el archivo `../netlify.toml`. El directorio base es `aconquija-react`, el comando de compilación es `npm run build` y la carpeta publicada es `dist`. El archivo `public/_redirects` permite que las rutas de React Router funcionen al entrar directamente o recargar una página secundaria.

## Recursos

Las imágenes del proyecto se guardan en `imagenes/` dentro de esta carpeta. Los recursos públicos de Vite (como el favicon y las redirecciones) se encuentran en `public/`.

## Estructura

- `src/components/`: componentes de interfaz y páginas.
- `src/pages/`: páginas y rutas.
- `src/data/`: datos de navegación y contenido.
- `src/styles/`: estilos globales y compartidos.
- `imagenes/`: recursos gráficos del sitio.
- `public/`: recursos servidos directamente por Vite.

El registro de cambios y la metodología están documentados en `Registro.md` y `Metodologia.md`.
