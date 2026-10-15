const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/antonio.castro/.gemini/antigravity/scratch';
const publicDir = path.resolve(__dirname, '../public/images');
const princessesDir = path.resolve(publicDir, 'princesses');

if (!fs.existsSync(princessesDir)) {
  fs.mkdirSync(princessesDir, { recursive: true });
}

// Map the user uploaded castle and all baby princesses
const assets = [
  { src: 'new_castle.png', dest: path.join(publicDir, 'castle.png') },
  { src: 'user_rapunzel.png', dest: path.join(princessesDir, 'rapunzel.png') },
  { src: 'user_aurora.png', dest: path.join(princessesDir, 'aurora.png') },
  { src: 'user_ariel_dress.png', dest: path.join(princessesDir, 'ariel.png') },
  { src: 'user_elsa.png', dest: path.join(princessesDir, 'elsa.png') },
  { src: 'user_belle.png', dest: path.join(princessesDir, 'belle.png') },
  { src: 'user_mulan.png', dest: path.join(princessesDir, 'mulan.png') },
  { src: 'user_anna.png', dest: path.join(princessesDir, 'anna.png') },
];

let copied = 0;
for (const item of assets) {
  const fullSrc = path.join(srcDir, item.src);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, item.dest);
    console.log(`✓ Copiado: ${item.src} -> ${path.relative(path.resolve(__dirname, '..'), item.dest)}`);
    copied++;
  } else {
    console.warn(`! Archivo fuente no encontrado: ${fullSrc}`);
  }
}

console.log(`\n¡Éxito! Se actualizaron ${copied}/${assets.length} recursos de princesas y castillo.`);
