import * as cheerio from 'cheerio';
import fs from 'fs';

const BASE_URL = 'https://elchico.in';
const visited = new Set();
const toVisit = [BASE_URL];

const allLinks = new Set();
const allImages = new Set();
const allForms = [];
const allCTAs = [];

async function scrape() {
  while (toVisit.length > 0) {
    const url = toVisit.pop();
    if (visited.has(url)) continue;
    
    console.log(`Scraping: ${url}`);
    visited.add(url);
    
    try {
      const res = await fetch(url);
      const text = await res.text();
      const $ = cheerio.load(text);
      
      // Extract links
      $('a').each((i, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        if (href) {
          allLinks.add(href);
          if (text) {
             allCTAs.push({ text, href, page: url });
          }
          // Normalize URL
          if (href.startsWith(BASE_URL) || href.startsWith('/')) {
            let fullUrl = href.startsWith('/') ? BASE_URL + href : href;
            // Remove trailing slashes for deduplication
            fullUrl = fullUrl.replace(/\/$/, '');
            // Ignore anchors, wp-admin, mailto, tel, tags
            if (!fullUrl.includes('#') && !fullUrl.includes('wp-admin') && !fullUrl.includes('wp-content') && !fullUrl.startsWith('mailto') && !fullUrl.startsWith('tel') && !fullUrl.includes('/tag/') && !fullUrl.includes('/category/') && !fullUrl.includes('/author/')) {
              // Re-add slash for standard checking if needed, but keeping it simple
              if (!visited.has(fullUrl) && !visited.has(fullUrl + '/') && !toVisit.includes(fullUrl) && !toVisit.includes(fullUrl + '/')) {
                toVisit.push(fullUrl);
              }
            }
          }
        }
      });
      
      // Extract images
      $('img').each((i, el) => {
        const src = $(el).attr('src');
        const alt = $(el).attr('alt') || '';
        if (src) {
          allImages.add(JSON.stringify({ src, alt, page: url }));
        }
      });
      
      // Extract forms
      $('form').each((i, el) => {
        const action = $(el).attr('action');
        allForms.push({ action, page: url, method: $(el).attr('method') });
      });
      
    } catch (e) {
      console.error(`Failed to scrape ${url}: ${e.message}`);
    }
  }
  
  const output = {
    pages: Array.from(visited),
    links: Array.from(allLinks),
    images: Array.from(allImages).map(s => JSON.parse(s)),
    forms: allForms,
    ctas: allCTAs
  };
  
  fs.writeFileSync('docs/scrape_results.json', JSON.stringify(output, null, 2));
  console.log('Scraping complete. Results saved to docs/scrape_results.json');
}

scrape();
