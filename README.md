# Screening Atlas: tenant screening, state by state

Static Astro site. Personal project (not Secret Boston).

    npm install
    npm run build      # -> dist/ (also copies sitemap-0.xml to sitemap.xml)
    npm run preview

Live: https://screeningatlas.com/ (GitHub Pages from the gh-pages branch; DNS on Vercel, public/CNAME sets the custom domain).
Defaults build for that URL. For the github.io path instead: SITE_URL=https://michellemccormack.github.io/screening-atlas BASE_PATH=/screening-atlas npm run build.
scripts/postbuild.mjs writes robots.txt and sitemap.xml and prefixes root-relative links with the base path.

## Publish
Copy the contents of dist/ to the root of the gh-pages branch (keep .nojekyll).

## Add a page
1. Create src/pages/<slug>.astro using layouts/Base.astro (title, description props).
2. Cite every fact with <Src href="..."/>. If a figure isn't on a source page, put an em dash (—) in the table cell; never invent a value, and never show an "unverified", "not captured", or "affiliate link pending" badge on the published site.
3. Affiliate links: <Aff id="smartmove|turbotenant|rentredi|rentec|rentprep" .../>. Only approved programs (listed in the approved set in Aff.astro, with the tracking href) show the small "affiliate link" tag. Unapproved Aff links must render as ordinary outbound links with no badge.
4. Link it from src/pages/index.astro, tick it off in PAGE-QUEUE.md, and rebuild.

Data: src/data/fee-caps.json (checked dates per entry). Raw source captures: research/.
