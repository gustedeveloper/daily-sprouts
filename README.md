# Despliegue automático de una app Vue (Vite) en GitHub Pages con GitHub Actions

## 🎯 Objetivo
Desplegar una aplicación hecha con Vue 3 + Vite + Vue Router en GitHub Pages de forma automática utilizando GitHub Actions.

## Paso a paso seguido

### 1. Configuración de Vite

**Archivo `vite.config.ts`:**

```ts
export default defineConfig({
  base: '/daily-sprouts/',
  ...
});
```
Esto permite que el proyecto funcione correctamente en GitHub Pages, que sirve el proyecto desde https://gustedeveloper.github.io/daily-sprouts/.

## 2. Configuración de Vue Router

En `router/index.ts`:

```typescript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  ...
});
```

El valor `import.meta.env.BASE_URL` toma el valor del campo `base` en `vite.config.ts`, que ya está correctamente configurado para GitHub Pages.

## 3. Creación del workflow de despliegue

**Archivo:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Add 404.html (for SPA support)
        run: cp dist/index.html dist/404.html

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 4. Configuración del repositorio en GitHub

En el repositorio:

- Ir a **Settings > Pages**
- Seleccionar rama: `gh-pages`
- Carpeta: `/root`

También es importante ir a **Settings > Actions > General**, y en la sección **Workflow permissions**, asegurarse de seleccionar:

🔘 **Read and write permissions**

Esto permite que GitHub Actions tenga permiso para hacer push a la rama `gh-pages`.

## 5. Desencadenar el despliegue

Cada vez que se haga un push a la rama `main`, se ejecuta automáticamente el workflow de despliegue.

Esto puede ocurrir directamente o al hacer un merge desde un Pull Request.

## 6. Resultado

El proyecto queda desplegado en: https://gustedeveloper.github.io/daily-sprouts/
