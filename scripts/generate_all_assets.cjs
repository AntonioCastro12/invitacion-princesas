const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const vectorCrown = `
<g transform="translate(193, 269) scale(0.65)">
  <polygon points="0,15 3,5 11,10 18,2 25,10 33,5 36,15" fill="#fde047" stroke="#b45309" stroke-width="1.2" />
  <circle cx="3" cy="4" r="1.5" fill="#ffffff" />
  <circle cx="18" cy="1" r="2" fill="#ffffff" />
  <circle cx="33" cy="4" r="1.5" fill="#ffffff" />
  <rect x="0" y="14" width="36" height="3" fill="#ca8a04" rx="1" />
</g>
`;

const castleSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="800" height="900">
  <defs>
    <linearGradient id="castlePinkWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff5f7" />
      <stop offset="40%" stop-color="#fce7f3" />
      <stop offset="100%" stop-color="#fbcfe8" />
    </linearGradient>
    <linearGradient id="roofPinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f472b6" />
      <stop offset="50%" stop-color="#ec4899" />
      <stop offset="100%" stop-color="#be185d" />
    </linearGradient>
    <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="50%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
    <linearGradient id="gateWood" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9a3412" />
      <stop offset="50%" stop-color="#c2410c" />
      <stop offset="100%" stop-color="#7c2d12" />
    </linearGradient>
    <linearGradient id="gateInteriorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#fed7aa" />
      <stop offset="100%" stop-color="#f472b6" />
    </linearGradient>
  </defs>

  <ellipse cx="200" cy="270" rx="180" ry="170" fill="#fdf2f8" opacity="0.8" />
  <ellipse cx="200" cy="270" rx="140" ry="130" fill="#fce7f3" opacity="0.6" />

  <g>
    <rect x="75" y="240" width="55" height="150" fill="url(#castlePinkWall)" rx="4" stroke="#f472b6" stroke-width="2" />
    <path d="M 70 240 L 70 225 L 80 225 L 80 232 L 92 232 L 92 225 L 102 225 L 102 232 L 114 232 L 114 225 L 124 225 L 124 232 L 135 232 L 135 240 Z" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="1.5" />
    <polygon points="102,140 68,225 137,225" fill="url(#roofPinkGradient)" stroke="#be185d" stroke-width="2" />
    <line x1="102" y1="140" x2="102" y2="105" stroke="#ca8a04" stroke-width="2.5" />
    <path d="M 102 105 Q 120 112 102 122 Z" fill="#ec4899" stroke="#be185d" stroke-width="1" />
    <path d="M 94 280 Q 102 270 111 280 L 111 305 L 94 305 Z" fill="#67e8f9" opacity="0.8" stroke="#ca8a04" stroke-width="1.5" />
    <line x1="102.5" y1="274" x2="102.5" y2="305" stroke="#ca8a04" stroke-width="1" />
    <line x1="94" y1="290" x2="111" y2="290" stroke="#ca8a04" stroke-width="1" />
  </g>

  <g>
    <rect x="270" y="240" width="55" height="150" fill="url(#castlePinkWall)" rx="4" stroke="#f472b6" stroke-width="2" />
    <path d="M 265 240 L 265 225 L 275 225 L 275 232 L 287 232 L 287 225 L 297 225 L 297 232 L 309 232 L 309 225 L 319 225 L 319 232 L 330 232 L 330 240 Z" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="1.5" />
    <polygon points="298,140 263,225 332,225" fill="url(#roofPinkGradient)" stroke="#be185d" stroke-width="2" />
    <line x1="298" y1="140" x2="298" y2="105" stroke="#ca8a04" stroke-width="2.5" />
    <path d="M 298 105 Q 316 112 298 122 Z" fill="#ec4899" stroke="#be185d" stroke-width="1" />
    <path d="M 289 280 Q 297 270 306 280 L 306 305 L 289 305 Z" fill="#67e8f9" opacity="0.8" stroke="#ca8a04" stroke-width="1.5" />
    <line x1="297.5" y1="274" x2="297.5" y2="305" stroke="#ca8a04" stroke-width="1" />
    <line x1="289" y1="290" x2="306" y2="290" stroke="#ca8a04" stroke-width="1" />
  </g>

  <g>
    <rect x="155" y="160" width="90" height="230" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="2" />
    <path d="M 148 160 L 148 150 L 160 150 L 160 155 L 175 155 L 175 150 L 190 150 L 190 155 L 210 155 L 210 150 L 225 150 L 225 155 L 240 155 L 240 150 L 252 150 L 252 160 Z" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="1.5" />
    <rect x="170" y="80" width="60" height="75" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="2" />
    <polygon points="200,8 160,80 240,80" fill="url(#roofPinkGradient)" stroke="#be185d" stroke-width="2" />
    <line x1="200" y1="8" x2="200" y2="-20" stroke="#ca8a04" stroke-width="3" />
    <path d="M 200 -20 Q 235 -10 200 5 Z" fill="url(#goldTrim)" stroke="#ca8a04" stroke-width="1" />
    <circle cx="200" cy="-21" r="4.5" fill="#ffd700" stroke="#b45309" stroke-width="1" />
    <path d="M 193 105 Q 200 95 207 105 L 207 125 L 193 125 Z" fill="#fef08a" opacity="0.9" stroke="#ca8a04" stroke-width="1.5" />
  </g>

  <g>
    <path d="M 140 260 L 260 260 L 260 395 L 140 395 Z" fill="url(#castlePinkWall)" stroke="#f472b6" stroke-width="2" />
    <circle cx="200" cy="275" r="15" fill="url(#goldTrim)" stroke="#b45309" stroke-width="1.5" />
    ${vectorCrown}

    <path d="M 165 395 L 165 315 Q 200 285 235 315 L 235 395 Z" fill="url(#gateInteriorGlow)" stroke="#f472b6" stroke-width="2" />
    <polygon points="165,395 235,395 290,440 110,440" fill="url(#gateInteriorGlow)" opacity="0.6" />

    <path d="M 165 315 L 140 325 L 140 395 L 165 395 Z" fill="url(#gateWood)" stroke="#7c2d12" stroke-width="2" />
    <path d="M 235 315 L 260 325 L 260 395 L 235 395 Z" fill="url(#gateWood)" stroke="#7c2d12" stroke-width="2" />
  </g>

  <g>
    <path d="M 40 405 Q 200 390 360 405 L 360 435 L 40 435 Z" fill="#fdf2f8" opacity="0.7" />
    <circle cx="85" cy="405" r="6" fill="#f472b6" />
    <circle cx="95" cy="402" r="5" fill="#fb7185" />
    <circle cx="105" cy="406" r="6" fill="#f472b6" />
    <circle cx="295" cy="406" r="6" fill="#f472b6" />
    <circle cx="305" cy="402" r="5" fill="#fb7185" />
    <circle cx="315" cy="405" r="6" fill="#f472b6" />
  </g>
</svg>
`;

async function main() {
  const princessesDir = path.resolve('public/images/princesses');
  if (!fs.existsSync(princessesDir)) {
    fs.mkdirSync(princessesDir, { recursive: true });
  }

  // 1. Render Fairytale Castle PNG and SVG
  await sharp(Buffer.from(castleSvg))
    .png()
    .toFile(path.resolve('public/images/castle.png'));
  fs.writeFileSync(path.resolve('public/images/castle.svg'), castleSvg, 'utf-8');
  console.log('✓ Rendered public/images/castle.png and castle.svg');

  // 2. Render all 9 Baby Princesses PNGs and SVGs
  const file = fs.readFileSync('src/components/ChibiPrincessIllustration.tsx', 'utf-8');
  const ids = ['cinderella', 'belle', 'ariel', 'rapunzel', 'snowwhite', 'aurora', 'jasmine', 'tiana', 'anna'];

  for (const id of ids) {
    const marker = `{id === '${id}' && (`;
    const startIdx = file.indexOf(marker);
    if (startIdx === -1) continue;

    const svgStart = file.indexOf('<svg', startIdx);
    const svgEnd = file.indexOf('</svg>', svgStart) + 6;
    let svgContent = file.slice(svgStart, svgEnd);

    // Remove JSX comments
    svgContent = svgContent.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

    // Replace the opening tag to be a standalone valid XML SVG
    svgContent = svgContent.replace(/<svg[^>]+>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 220" width="640" height="880">`);

    // Clean up JSX attributes to valid SVG
    svgContent = svgContent.replace(/className="[^"]*"/g, '');
    svgContent = svgContent.replace(/strokeWidth=/g, 'stroke-width=');
    svgContent = svgContent.replace(/strokeLinecap=/g, 'stroke-linecap=');
    svgContent = svgContent.replace(/strokeDasharray=/g, 'stroke-dasharray=');
    svgContent = svgContent.replace(/stopColor=/g, 'stop-color=');
    svgContent = svgContent.replace(/fontSize=/g, 'font-size=');
    svgContent = svgContent.replace(/textAnchor=/g, 'text-anchor=');
    svgContent = svgContent.replace(/fontFamily=/g, 'font-family=');
    svgContent = svgContent.replace(/fontWeight=/g, 'font-weight=');

    const outPng = path.resolve(`public/images/princesses/${id}.png`);
    const outSvg = path.resolve(`public/images/princesses/${id}.svg`);

    await sharp(Buffer.from(svgContent)).png().toFile(outPng);
    fs.writeFileSync(outSvg, `<?xml version="1.0" encoding="UTF-8"?>\n${svgContent}`, 'utf-8');
    console.log(`✓ Rendered baby princess asset: ${id}.png and ${id}.svg`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
