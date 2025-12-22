import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://escalona-immobilier.fr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
