/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.DB_SITE_URL,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  sitemapSize: 1000,

  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // ...other options
};
