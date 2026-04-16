// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});