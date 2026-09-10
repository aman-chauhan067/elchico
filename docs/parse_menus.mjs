import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

async function parsePDF(filePath) {
  try {
    let dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    console.log(`\n--- ${path.basename(filePath)} ---`);
    console.log(`Pages: ${data.numpages}`);
    // Print first 500 characters of text to see if it's text-based or image-based
    console.log(data.text.substring(0, 500).trim());
  } catch (err) {
    console.log(`Error parsing ${filePath}: ${err.message}`);
  }
}

async function run() {
  const menuDir = 'public/assets/source/menus';
  const files = fs.readdirSync(menuDir);
  for (const file of files) {
    if (file.endsWith('.pdf')) {
      await parsePDF(path.join(menuDir, file));
    }
  }
}

run();
