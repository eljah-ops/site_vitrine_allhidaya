import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist/client');
const site = new URL(`${(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')}/`);
const html = readFileSync(path.join(output, 'index.html'), 'utf8');
assert(html.includes('id="accueil"'), 'The export must contain the school homepage.');

function checkUrl(value) {
  const url = new URL(value, site);
  if (url.origin !== site.origin) return;
  assert(url.pathname.startsWith(site.pathname), `URL outside the site: ${value}`);
  const file = path.join(output, decodeURIComponent(url.pathname.slice(site.pathname.length)));
  assert(statSync(file).isFile(), `Missing exported asset: ${value}`);
}

let references = 0;
for (const tag of html.matchAll(/<(?:script|img|link)\b[^>]*>/g)) {
  if (/rel="(?:canonical|alternate)"/.test(tag[0])) continue;
  const attribute = tag[0].match(/(?:src|href)="([^"]+)"/);
  if (attribute) { checkUrl(attribute[1]); references++; }
}

const photos = JSON.parse(readFileSync('lib/school-photos.json', 'utf8'));
for (const photo of photos) {
  checkUrl(photo.src);
  checkUrl(photo.thumbnail);
}

let copiedFiles = 0;
function checkPublic(directory = 'public') {
  for (const name of readdirSync(directory)) {
    const source = path.join(directory, name);
    if (statSync(source).isDirectory()) { checkPublic(source); continue; }
    const destination = path.join(output, path.relative('public', source));
    assert(readFileSync(source).equals(readFileSync(destination)), `Public file changed or missing: ${source}`);
    copiedFiles++;
  }
}
checkPublic();
console.log(`Export verified: ${photos.length} photos and their thumbnails, ${copiedFiles} public files, ${references} HTML asset references.`);
