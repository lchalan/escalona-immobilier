/**
 * CONFIGURATION ASTRO POUR SITEMAP
 * 
 * Note: Cette configuration nécessite l'installation de @astrojs/sitemap
 * Commande: npm install @astrojs/sitemap
 * 
 * Une fois installé, ajouter l'import et l'intégration dans astro.config.mjs
 */

// Liste des pages à inclure dans le sitemap
export const sitemapPages = [
  // Pages principales
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/contact/', changefreq: 'monthly', priority: 0.6 },
  
  // Acheter/Vendre
  { url: '/acheter/', changefreq: 'daily', priority: 0.9 },
  { url: '/acheter/appartements/', changefreq: 'daily', priority: 0.8 },
  { url: '/vendre/', changefreq: 'monthly', priority: 0.8 },
  { url: '/vendre/estimation-gratuite/', changefreq: 'monthly', priority: 0.9 },
  
  // Lyon 2ème
  { url: '/lyon-2-arrondissement/', changefreq: 'weekly', priority: 0.9 },
  { url: '/lyon-2-arrondissement/quartiers/', changefreq: 'monthly', priority: 0.7 },
  { url: '/lyon-2-arrondissement/quartiers/bellecour/', changefreq: 'monthly', priority: 0.8 },
  { url: '/lyon-2-arrondissement/quartiers/ainay/', changefreq: 'monthly', priority: 0.8 },
  { url: '/lyon-2-arrondissement/quartiers/confluence/', changefreq: 'monthly', priority: 0.8 },
  { url: '/lyon-2-arrondissement/quartiers/perrache/', changefreq: 'monthly', priority: 0.8 },
  { url: '/lyon-2-arrondissement/quartiers/presquile/', changefreq: 'monthly', priority: 0.8 },
  { url: '/lyon-2-arrondissement/quartiers/cordeliers/', changefreq: 'monthly', priority: 0.8 },
  
  // FAQ
  { url: '/faq/', changefreq: 'weekly', priority: 0.8 },
  { url: '/faq/faq-achat/', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq/faq-vente/', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq/faq-location/', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq/faq-lyon-2/', changefreq: 'monthly', priority: 0.7 },
  
  // Marché
  { url: '/marche-immobilier/', changefreq: 'weekly', priority: 0.8 },
  { url: '/marche-immobilier/rapport-mensuel/', changefreq: 'monthly', priority: 0.6 },
  
  // Utilitaires
  { url: '/mentions-legales/', changefreq: 'yearly', priority: 0.3 },
  { url: '/politique-confidentialite/', changefreq: 'yearly', priority: 0.3 },
  { url: '/plan-du-site/', changefreq: 'monthly', priority: 0.4 }
];

/**
 * Configuration recommandée pour astro.config.mjs :
 * 
 * import { defineConfig } from 'astro/config';
 * import sitemap from '@astrojs/sitemap';
 * 
 * export default defineConfig({
 *   site: 'https://escalona-immobilier.fr',
 *   integrations: [
 *     sitemap({
 *       filter: (page) => !page.includes('/api/'),
 *       changefreq: 'weekly',
 *       priority: 0.7,
 *       lastmod: new Date(),
 *       customPages: [
 *         'https://escalona-immobilier.fr/acheter/',
 *         'https://escalona-immobilier.fr/vendre/'
 *       ]
 *     })
 *   ]
 * });
 */

export default sitemapPages;
