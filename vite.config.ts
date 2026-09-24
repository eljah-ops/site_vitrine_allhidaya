import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const githubPagesBase = '/site_vitrine_allhidaya/';

export default defineConfig(({ command }) => ({
  base:
    process.env.VITE_BASE_PATH ||
    (command === 'build' ? githubPagesBase : '/'),
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
}));
