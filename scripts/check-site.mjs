import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

// Validate the actual static output, including legacy redirect pages.
const root = path.resolve('dist');
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]))).flat();
}
const htmlFiles = (await files(root)).filter(file => file.endsWith('.html'));
const pages = new Map();
for (const file of htmlFiles) pages.set(file, await readFile(file, 'utf8'));
let links = 0;
const emails = new Set();
const external = new Set();
for (const [file, html] of pages) {
  const relative = path.relative(root, file);
  assert.match(html, /<title>[^<]+<\/title>/, `${relative}: missing title`);
  const redirect = /http-equiv="refresh"/i.test(html);
  if (!redirect) {
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${relative}: expected one h1`);
    assert.match(html, /<html lang="(?:en|ro)"/, `${relative}: missing language`);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(ids.length, new Set(ids).size, `${relative}: duplicate ID`);
    assert.match(html, /rel="canonical" href="https:\/\/thorn\.ro\//, `${relative}: wrong canonical`);
    assert.doesNotMatch(html, /<form\b|formspree\.io/, `${relative}: unexpected form recipient`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (value.startsWith('mailto:')) { emails.add(value.slice(7)); continue; }
    if (/^(data:|tel:)/.test(value)) continue;
    const basePath = '/' + relative.replaceAll(path.sep, '/').replace(/index\.html$/, '');
    const url = new URL(value, `https://thorn.ro${basePath}`);
    if (url.origin !== 'https://thorn.ro') { external.add(url.href); continue; }
    if (!value.startsWith('/') && !value.startsWith('#') && !value.startsWith('https://thorn.ro')) continue;
    const target = path.join(root, decodeURIComponent(url.pathname));
    const candidates = [target, path.join(target, 'index.html')];
    let found;
    for (const candidate of candidates) {
      try { if ((await stat(candidate)).isFile()) { found = candidate; break; } } catch {}
    }
    assert.ok(found, `${relative}: missing target ${value}`);
    if (url.hash && pages.has(found)) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(pages.get(found).includes(`id="${id}"`), `${relative}: missing anchor ${value}`);
    }
    links++;
  }
}
for (const route of ['index.html', 'ro/index.html', 'contact/index.html', 'ro/contact/index.html',
  'services/index.html', 'ro/servicii/index.html', 'companies/index.html', 'ro/companii/index.html',
  'portfolio/index.html', 'ro/portofoliu/index.html', 'public-sector/index.html', 'ro/primarii/index.html',
  'about/index.html', 'ro/despre/index.html', 'how-we-work/index.html', 'ro/cum-lucram/index.html']) {
  assert.ok(pages.has(path.join(root, route)), `Missing required page ${route}`);
}
assert.deepEqual([...emails].sort(), ['adrian@thorn.ro', 'contact@thorn.ro', 'ioana@thorn.ro']);
console.log(`PASS: ${htmlFiles.length} HTML files; ${links} local links/assets/anchors; 16 required bilingual pages; 3 expected email addresses.`);
console.log(`External URLs (availability checked separately): ${[...external].join(', ')}`);
