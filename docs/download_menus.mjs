import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const results = JSON.parse(fs.readFileSync('docs/scrape_results.json', 'utf8'));

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);
    const fileStream = fs.createWriteStream(dest, { flags: 'wx' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`Downloaded ${url} to ${dest}`);
  } catch (err) {
    console.log(`Skipped or failed ${url} - ${err.message}`);
  }
}

async function run() {
  const menuDir = 'public/assets/source/menus';
  if (!fs.existsSync(menuDir)) {
    fs.mkdirSync(menuDir, { recursive: true });
  }
  
  const pdfLinks = results.links.filter(href => href.toLowerCase().endsWith('.pdf'));
  
  for (const src of pdfLinks) {
    if (src) {
      const url = src.startsWith('//') ? 'https:' + src : (src.startsWith('/') ? 'https://elchico.in' + src : src);
      const filename = path.basename(new URL(url).pathname);
      const dest = path.join(menuDir, filename);
      await downloadFile(url, dest);
    }
  }
}

run();
