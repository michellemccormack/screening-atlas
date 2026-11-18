import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// SITE_URL is the production origin. Update when a custom domain is added.
export default defineConfig({
  site: process.env.SITE_URL || 'https://screeningatlas.com',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
