# AGENTS.md

## Commands (pnpm, no npm)

- `pnpm install`
- `pnpm dev`
- `pnpm build` / `pnpm preview`
- `pnpm lint` — única verificación; no hay scripts de test ni typecheck

## Stack

- React 19 + Vite 8. `src/App.jsx` es un componente vacío; las libs están instaladas pero sin uso aún.
- React Router v8: importar todo desde `react-router` (NO `react-router-dom`).
- Tailwind v4 vía `@tailwindcss/vite`: config CSS-first. Único CSS es `src/index.css` con `@import 'tailwindcss'`. NO hay `tailwind.config.js`; tema vía `@theme` en CSS.
- axios (API) y react-hook-form (forms) instalados, sin usar.

## Toolchain

- React Compiler habilitado (babel + `reactCompilerPreset` en `vite.config.js`): no agregar `useMemo`/`useCallback` manuales.
- ESLint: `react-refresh` (vite) + `react-hooks`: un archivo que exporta un componente no puede exportar otra cosa (rompe HMR).
- Iconos: sprite `public/icons.svg` vía `<use href="/icons.svg#...">`.
- El repo aún no está bajo git (no hay `.git`).