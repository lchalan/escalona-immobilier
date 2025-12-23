import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  site: 'https://escalona-immobilier.fr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@styles': path.resolve('./src/styles'),
        '@data': path.resolve('./src/data')
      }
    },
    build: {
      cssMinify: true
    }
  }
});
