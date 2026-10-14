const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/antonio.castro/.gemini/antigravity/scratch';
const publicDir = path.resolve(__dirname, '../public/images');
const princessesDir = path.resolve(publicDir, 'princesses');

if (!fs.existsSync(princessesDir)) {
  fs.mkdirSync(princessesDir, { recursive: true });
}

const assets = [
  { src: 'castle.png', dest: path.join(publicDir, 'castle.png') },
  { src: 'cinderella.png', dest: path.join(princessesDir, 'cinderella.png') },
  { src: 'belle.png', dest: path.join(princessesDir, 'belle.png') },
  { src: 'ariel.png', dest: path.join(princessesDir, 'ariel.png') },
  { src: 'aurora.png', dest: path.join(princessesDir, 'aurora.png') },
  { src: 'anna.png', dest: path.join(princessesDir, 'anna.png') },
];

let copied = 0;
for (const item of assets) {
  const fullSrc = path.join(srcDir, item.src);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, item.dest);
    console.log(`✓ Copied ${item.src} -> ${path.relative(path.resolve(__dirname, '..'), item.dest)}`);
    copied++;
  } else {
    console.warn(`! Source file not found: ${fullSrc}`);
  }
}

console.log(`\nBaby Princesses and Castle Assets setup complete: ${copied}/${assets.length} copied.`);
