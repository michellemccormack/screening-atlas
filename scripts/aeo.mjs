// AEO post-build: robots.txt for AI crawlers, FAQPage/HowTo JSON-LD from on-page Q&A and step lists,
// sitemap <lastmod>, and /llms.txt + /llms-full.txt. Runs after scripts/postbuild.mjs.
import fs from 'node:fs'; import path from 'node:path';
const dist = 'dist';
const pkgSite = { 'screening-atlas': 'https://screeningatlas.com', 'mailbox-atlas': 'https://mailboxatlas.com', 'apostille-atlas': 'https://apostillesteps.com' };
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const site = (process.env.SITE_URL || pkgSite[pkg.name] || '').replace(/\/$/, '');
const base = (process.env.BASE_PATH ?? '/').replace(/\/?$/, '/');
const root = new URL(site).origin + base; // e.g. https://screeningatlas.com/

// robots.txt: everyone allowed; named AI and search crawlers listed explicitly.
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'Google-Extended', 'Googlebot', 'Applebot', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'CCBot', 'Meta-ExternalAgent', 'Amazonbot', 'cohere-ai', 'MistralAI-User'];
fs.writeFileSync(path.join(dist, 'robots.txt'),
  `# AI assistants and search engines are welcome to crawl, cite and link this site.\n` +
  bots.map((b) => `User-agent: ${b}\nAllow: /\nDisallow: /kit/download-\n`).join('\n') +
  `\nUser-agent: *\nAllow: /\nDisallow: /kit/download-\n\nSitemap: ${root}sitemap.xml\n# Summary for language models: ${root}llms.txt\n`);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const decode = (t) => t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCharCode(parseInt(n, 16)));
const clean = (h) => decode(h
  .replace(/<(script|style|form|noscript|svg)[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<a[^>]*class="src"[^>]*>[\s\S]*?<\/a>/gi, ' ')
  .replace(/<span[^>]*class="aff-tag"[^>]*>[\s\S]*?<\/span>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\s+([.,;:!?)])/g, '$1').replace(/\(\s+/g, '(').trim();
const cap = (t, n) => { if (t.length <= n) return t; const c = t.slice(0, n); const i = c.lastIndexOf('. '); return (i > n * 0.4 ? c.slice(0, i + 1) : c.replace(/\s+\S*$/, '') + '…'); };
// Markdown-ish text for llms-full.txt (keeps citation URLs).
const toMd = (h) => decode(h
  .replace(/<(script|style|form|noscript|svg)[\s\S]*?<\/\1>/gi, '')
  .replace(/<span[^>]*class="aff-tag"[^>]*>[\s\S]*?<\/span>/gi, '')
  .replace(/<a[^>]*class="src"[^>]*href="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi, ' [source]($1)')
  .replace(/<a[^>]*class="src"[^>]*>[\s\S]*?<\/a>/gi, '')
  .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n').replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n').replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
  .replace(/<li[^>]*>/gi, '\n- ').replace(/<\/(p|div|ul|ol|table|blockquote)>/gi, '\n').replace(/<tr[^>]*>/gi, '\n| ').replace(/<\/t[hd]>/gi, ' | ')
  .replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ''))
  .split('\n').map((l) => l.replace(/[ \t]+/g, ' ').trim()).filter((l, i, a) => l || (a[i - 1] || '')).join('\n').replace(/\n{3,}/g, '\n\n').trim();

const pages = [];
for (const f of walk(dist).filter((f) => f.endsWith('.html') && !/(^|\/)404(\.html|\/index\.html)$/.test(f.replace(/\\/g, '/')))) {
  let h = fs.readFileSync(f, 'utf8');
  if (/<meta name="robots" content="noindex/i.test(h)) continue;
  const main = (h.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || [])[1] || '';
  const title = clean((h.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '');
  const desc = decode((h.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '');
  const canonical = (h.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || '';
  const modified = (h.match(/"dateModified":"(\d{4}-\d{2}-\d{2})"/) || [])[1] || '';
  const h1 = clean((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || title);
  // Split main content into heading sections.
  const body = main.replace(/<p class="meta"[^>]*style="margin-top:3rem"[^>]*>[\s\S]*?<\/p>/i, '');
  const sections = []; const re = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi; let m; const marks = [];
  while ((m = re.exec(body))) marks.push({ q: clean(m[2]), start: m.index, end: re.lastIndex });
  marks.forEach((k, i) => sections.push({ q: k.q, html: body.slice(k.end, i + 1 < marks.length ? marks[i + 1].start : body.length) }));
  const extra = [];
  const faqText = (x) => clean(x.replace(/<thead[\s\S]*?<\/thead>/gi, '').replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (m, row) => { const cells = [...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => clean(c[1])).filter(Boolean); return cells.length ? ' ' + cells[0] + ': ' + cells.slice(1).join(', ').replace(/\.$/, '') + '. ' : ''; }).replace(/<\/li>/gi, '; '));
  const faqs = sections.filter((s) => /\?$/.test(s.q)).map((s) => ({ q: s.q, a: cap(faqText(s.html), 1000) })).filter((x) => x.a.length >= 40);
  if (faqs.length >= 2 && canonical) extra.push({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${canonical}#faq`, url: canonical, mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) });
  const howSec = sections.find((s) => /\b(step|steps|how to|how do)\b/i.test(s.q) && /^\s*(<p[\s\S]*?<\/p>\s*)?<ol/i.test(s.html));
  if (howSec && canonical) {
    const ol = (howSec.html.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i) || [])[1] || '';
    const steps = [...ol.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((x) => clean(x[1])).filter(Boolean);
    if (steps.length >= 3) extra.push({ '@context': 'https://schema.org', '@type': 'HowTo', '@id': `${canonical}#howto`, url: canonical, name: /^(step by step|steps)$/i.test(howSec.q) ? h1 : howSec.q, description: desc, ...(modified ? { dateModified: modified } : {}), step: steps.map((t, i) => ({ '@type': 'HowToStep', position: i + 1, name: cap(t, 110), text: t })) });
  }
  if (extra.length && !h.includes('"@type":"FAQPage"') && !h.includes('"@type":"HowTo"')) {
    h = h.replace('</head>', extra.map((x) => `<script type="application/ld+json">${JSON.stringify(x).replace(/</g, '\\u003c')}</script>`).join('') + '</head>');
    fs.writeFileSync(f, h);
  }
  const rel = '/' + path.relative(dist, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  pages.push({ rel, url: canonical || root + rel.replace(/^\//, ''), title, h1, desc, modified, md: toMd(body) });
}

// sitemap <lastmod> from each page's dateModified.
const byUrl = Object.fromEntries(pages.map((p) => [p.url, p.modified]));
for (const sm of ['sitemap-0.xml', 'sitemap.xml']) {
  const fp = path.join(dist, sm); if (!fs.existsSync(fp)) continue;
  let x = fs.readFileSync(fp, 'utf8');
  x = x.replace(/<url>\s*<loc>([^<]*)<\/loc>[\s\S]*?<\/url>/g, (m, loc) => {
    try {
      const p = new URL(loc).pathname;
      if (p.includes('/kit/thanks') || p.includes('/get-it-done/thanks') || p.includes('/kit/download-')) return '';
    } catch {}
    return m;
  });
  if (!x.includes('<lastmod>')) x = x.replace(/<url><loc>([^<]+)<\/loc>/g, (m, loc) => byUrl[loc] ? `${m}<lastmod>${byUrl[loc]}</lastmod>` : m);
  fs.writeFileSync(fp, x);
}

// llms.txt and llms-full.txt
const home = pages.find((p) => p.rel === '/') || { title: '', desc: '' };
const siteName = home.title || pkg.name;
const utility = ['/about/', '/contact/', '/privacy/', '/affiliate-disclosure/'];
const depth = (rel) => rel.split('/').filter(Boolean).length;
const subCount = (rel) => pages.filter((q) => q.rel !== rel && q.rel.startsWith(rel) && depth(q.rel) > 1).length;
const guides = pages.filter((p) => p.rel !== '/' && !utility.includes(p.rel) && depth(p.rel) <= 1).sort((a, b) => (b.modified || '').localeCompare(a.modified || '') || a.title.localeCompare(b.title));
const short = (t) => t.replace(new RegExp(`\\s*\\|\\s*${siteName}$`), '');
const latest = pages.map((p) => p.modified).filter(Boolean).sort().pop() || '';
const llms = `# ${siteName}\n\n> ${home.desc}\n\n${siteName} is an independent reference site published by Atlas Guides. Every fee, rule and coverage claim links to the statute, government office or provider page it came from, and each page shows the date it was last checked. Where a figure could not be confirmed on a source page, the table shows a dash instead of a guess. Some outbound links are affiliate links; they are labeled and never change what a page says.\n\nLast updated: ${latest}\n\n## Guides\n\n${guides.map((p) => `- [${short(p.title)}](${p.url}): ${p.desc}${p.modified ? ` (checked ${p.modified})` : ''}${subCount(p.rel) ? ` Includes ${subCount(p.rel)} linked sub-pages.` : ''}`).join('\n')}\n\n## About this site\n\n${pages.filter((p) => utility.includes(p.rel)).map((p) => `- [${short(p.title)}](${p.url}): ${p.desc}`).join('\n')}\n\n## Optional\n\n- [Full text of every guide](${root}llms-full.txt): all pages as plain text with source links\n- [Sitemap](${root}sitemap.xml)\n`;
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);
const full = `# ${siteName}: full text\n\n> ${home.desc}\n\nPlain-text copy of every guide on ${root} with its source links. Cite the page URL shown under each heading. General information, not legal advice.\n\n` +
  [home, ...guides].filter((p) => p.md).map((p) => `---\n\nURL: ${p.url}\n${p.modified ? `Last updated: ${p.modified}\n` : ''}\n${p.md}\n`).join('\n');
fs.writeFileSync(path.join(dist, 'llms-full.txt'), full);
console.log(`aeo: ${pages.length} pages, llms.txt ${llms.length} bytes, llms-full.txt ${full.length} bytes`);
