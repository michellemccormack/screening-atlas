// Post-build: sitemap.xml alias, robots.txt from SITE_URL/BASE_PATH, and base-prefix root-relative links.
import fs from 'node:fs'; import path from 'node:path';
const dist = 'dist';
const site = (process.env.SITE_URL || 'https://screeningatlas.com').replace(/\/$/, '');
const base = (process.env.BASE_PATH ?? '/').replace(/\/?$/, '/'); // e.g. /screening-atlas/
fs.copyFileSync(path.join(dist, 'sitemap-0.xml'), path.join(dist, 'sitemap.xml'));
const origin = new URL(site).origin;
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}sitemap.xml\n`);
if (base !== '/') {
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
  for (const f of walk(dist).filter(f => f.endsWith('.html'))) {
    let h = fs.readFileSync(f, 'utf8');
    h = h.replace(/(href|src)="\/(?!\/)/g, (m, a, off) => m).replace(/(href|src)="\/(?!\/)([^"]*)"/g, (m, a, rest) =>
      ('/' + rest).startsWith(base) ? m : `${a}="${base}${rest}"`);
    fs.writeFileSync(f, h);
  }
}
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
