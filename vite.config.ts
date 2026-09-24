import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const base = siteUrl ? `${new URL(siteUrl).pathname.replace(/\/$/, '')}/` : '/';

export default defineConfig({
  base,
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
