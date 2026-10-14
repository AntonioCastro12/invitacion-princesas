import React from 'react';

interface ChibiPrincessProps {
  id: string;
  size?: number; // width in pixels
  className?: string;
  animated?: boolean;
}

export const ChibiPrincessIllustration: React.FC<ChibiPrincessProps> = ({
  id,
  size = 140,
  className = '',
  animated = true,
}) => {
  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-lg transition-transform duration-300 ${
        animated ? 'hover:scale-110 hover:-translate-y-2' : ''
      } ${className}`}
      style={{ width: size, height: size * 1.35 }}
    >
      {/* CINDERELLA (Cenicienta) */}
      {id === 'cinderella' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="cinHair" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="cinDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="cinSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff1ee" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>

          {/* Blonde Bun behind head */}
          <ellipse cx="80" cy="46" rx="34" ry="32" fill="url(#cinHair)" stroke="#ca8a04" strokeWidth="2" />
          <ellipse cx="80" cy="24" rx="22" ry="18" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Blue Headband */}
          <path d="M 54 48 C 65 30, 95 30, 106 48" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="53" cy="50" r="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="107" cy="50" r="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Head & Face */}
          <ellipse cx="80" cy="72" rx="36" ry="33" fill="url(#cinSkin)" />

          {/* Hair Bangs & side locks */}
          <path d="M 46 64 C 60 76, 75 70, 80 65 C 85 70, 100 76, 114 64 C 112 50, 48 50, 46 64 Z" fill="url(#cinHair)" />
          <path d="M 45 68 Q 42 90 48 95" stroke="#facc15" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 115 68 Q 118 90 112 95" stroke="#facc15" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* Big Chibi Eyes */}
          <g>
            {/* Left Eye */}
            <ellipse cx="66" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="79" r="1.8" fill="#38bdf8" />
            <path d="M 58 66 Q 66 61 74 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Eyelashes */}
            <path d="M 72 67 L 76 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            {/* Right Eye */}
            <ellipse cx="94" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="79" r="1.8" fill="#38bdf8" />
            <path d="M 86 66 Q 94 61 102 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 67 L 104 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Sweet Rosy Cheeks & Smile */}
          <ellipse cx="58" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="102" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <path d="M 76 86 Q 80 91 84 86" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Black Satin Choker */}
          <path d="M 72 102 H 88" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

          {/* Blue Ballgown */}
          {/* Puffy sleeves */}
          <circle cx="50" cy="115" r="14" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="110" cy="115" r="14" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />

          {/* Bodice */}
          <path d="M 64 105 L 96 105 L 91 135 L 69 135 Z" fill="url(#cinDress)" stroke="#0284c7" strokeWidth="2" />
          <path d="M 74 105 L 80 125 L 86 105" fill="#e0f2fe" />

          {/* Big Princess Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#cinDress)" stroke="#0284c7" strokeWidth="2.5" />

          {/* Puffy Side Drapes on Skirt */}
          <path d="M 68 135 Q 40 145 42 165 Q 60 160 72 145 Z" fill="#f0f9ff" opacity="0.9" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 92 135 Q 120 145 118 165 Q 100 160 88 145 Z" fill="#f0f9ff" opacity="0.9" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Cute Little Hands holding dress */}
          <circle cx="48" cy="138" r="6" fill="#fed7aa" />
          <circle cx="112" cy="138" r="6" fill="#fed7aa" />

          {/* Glass slipper sparkle indicator */}
          <g transform="translate(112, 38) scale(0.6)"><polygon points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7" fill="#facc15" /><circle cx="10" cy="10" r="2" fill="#ffffff" /></g>
        </svg>
      )}

      {/* BELLE (Bella) */}
      {id === 'belle' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="belleHair" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="60%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <linearGradient id="belleDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>

          {/* Brown Hair Bun & Topknot */}
          <circle cx="80" cy="40" rx="34" ry="30" fill="url(#belleHair)" stroke="#451a03" strokeWidth="2" />
          <circle cx="80" cy="22" r="16" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          <circle cx="80" cy="22" r="6" fill="#facc15" />

          {/* Flowing curls on sides */}
          <path d="M 45 60 Q 30 100 44 135" stroke="#78350f" strokeWidth="9" strokeLinecap="round" fill="none" />
          <path d="M 115 60 Q 130 100 116 135" stroke="#78350f" strokeWidth="9" strokeLinecap="round" fill="none" />

          {/* Head & Face */}
          <ellipse cx="80" cy="72" rx="36" ry="33" fill="#fed7aa" />

          {/* Bangs */}
          <path d="M 46 64 C 60 76, 75 70, 80 65 C 85 70, 100 76, 114 64 C 112 48, 48 48, 46 64 Z" fill="url(#belleHair)" />

          {/* Warm Brown Chibi Eyes */}
          <g>
            <ellipse cx="66" cy="75" rx="7" ry="9" fill="#29180c" />
            <circle cx="64" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="79" r="1.8" fill="#ca8a04" />
            <path d="M 58 66 Q 66 61 74 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 67 L 76 64" stroke="#29180c" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="75" rx="7" ry="9" fill="#29180c" />
            <circle cx="92" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="79" r="1.8" fill="#ca8a04" />
            <path d="M 86 66 Q 94 61 102 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 67 L 104 64" stroke="#29180c" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="102" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <path d="M 76 86 Q 80 91 84 86" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Golden Gown */}
          {/* Off-shoulder draped shawl */}
          <path d="M 46 112 Q 80 126 114 112 Q 106 122 80 125 Q 54 122 46 112 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />

          {/* Bodice */}
          <path d="M 64 112 L 96 112 L 91 135 L 69 135 Z" fill="url(#belleDress)" stroke="#ca8a04" strokeWidth="2" />

          {/* Huge Tiered Golden Ballgown */}
          <path d="M 68 135 Q 80 142 92 135 L 134 205 C 134 216, 26 216, 26 205 Z" fill="url(#belleDress)" stroke="#ca8a04" strokeWidth="2.5" />

          {/* Swags / ruched scallops on skirt */}
          <path d="M 38 175 Q 60 190 80 175 Q 100 190 122 175" stroke="#eab308" strokeWidth="3" fill="none" />
          <path d="M 48 198 Q 80 208 112 198" stroke="#eab308" strokeWidth="3" fill="none" />

          {/* Red Rose in Hand */}
          <circle cx="80" cy="142" r="7" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
          <path d="M 80 149 L 80 162" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="142" r="2.5" fill="#dc2626" />

          <g transform="translate(112, 38) scale(0.6)"><circle cx="10" cy="10" r="7" fill="#f43f5e" /><circle cx="10" cy="10" r="4" fill="#fb7185" /></g>
        </svg>
      )}

      {/* ARIEL */}
      {id === 'ariel' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="arielHair" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="40%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="arielDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#99f6e4" />
              <stop offset="40%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>

          {/* Huge Flowing Ruby Hair behind */}
          <path d="M 40 50 C 15 20, 140 15, 126 50 C 150 90, 145 155, 128 180 C 122 135, 118 100, 118 90 C 95 90, 65 90, 42 90 C 42 110, 36 150, 22 170 C 10 130, 20 70, 40 50 Z" fill="url(#arielHair)" stroke="#991b1b" strokeWidth="2" />

          {/* Giant Hair Swoop across forehead */}
          <path d="M 64 36 Q 112 28 116 56 Q 95 50 66 58 Z" fill="#ef4444" />
          {/* Yellow Starfish hair barrette */}
          <polygon points="120,40 124,48 132,49 126,55 128,63 121,58 114,62 116,54 110,48 118,48" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

          {/* Head & Face */}
          <ellipse cx="80" cy="74" rx="35" ry="32" fill="#fed7aa" />

          {/* Sea Green / Aqua Eyes */}
          <g>
            <ellipse cx="66" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="80" r="1.8" fill="#14b8a6" />
            <path d="M 58 67 Q 66 62 74 67" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 68 L 76 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="80" r="1.8" fill="#14b8a6" />
            <path d="M 86 67 Q 94 62 102 67" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 68 L 104 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="102" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <path d="M 76 87 Q 80 92 84 87" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Turquoise Ballgown */}
          {/* Puffy Sleeves */}
          <circle cx="48" cy="116" r="13" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1.5" />
          <circle cx="112" cy="116" r="13" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="1.5" />

          {/* Bodice */}
          <path d="M 64 106 L 96 106 L 91 135 L 69 135 Z" fill="url(#arielDress)" stroke="#0f766e" strokeWidth="2" />
          <path d="M 70 106 Q 80 120 90 106" fill="#ccfbf1" />

          {/* Big Princess Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#arielDress)" stroke="#0f766e" strokeWidth="2.5" />
          <path d="M 52 145 Q 80 160 108 145" stroke="#ccfbf1" strokeWidth="3" fill="none" />

          {/* Hands */}
          <circle cx="48" cy="138" r="6" fill="#fed7aa" />
          <circle cx="112" cy="138" r="6" fill="#fed7aa" />

          <g transform="translate(112, 38) scale(0.6)"><path d="M 5 15 C 5 5, 15 5, 15 15 Z" fill="#2dd4bf" stroke="#0f766e" stroke-width="1.5" /></g>
        </svg>
      )}

      {/* RAPUNZEL */}
      {id === 'rapunzel' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="rapHair" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="rapDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="40%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>

          {/* Giant Thick Braided Golden Hair wrapped around */}
          <path d="M 40 50 C 20 20, 140 15, 126 50 C 145 80, 145 130, 142 180 C 135 215, 110 215, 95 210" stroke="url(#rapHair)" strokeWidth="18" strokeLinecap="round" fill="none" />
          {/* Hair flowers */}
          <circle cx="138" cy="90" r="4" fill="#f472b6" />
          <circle cx="140" cy="120" r="4" fill="#38bdf8" />
          <circle cx="136" cy="150" r="4.5" fill="#f43f5e" />
          <circle cx="120" cy="195" r="4" fill="#fbbf24" />

          {/* Head & Face */}
          <ellipse cx="80" cy="72" rx="35" ry="32" fill="#fed7aa" />

          {/* Bangs */}
          <path d="M 46 64 C 60 76, 75 70, 80 65 C 85 70, 100 76, 114 64 C 112 48, 48 48, 46 64 Z" fill="url(#rapHair)" />

          {/* Big Green Chibi Eyes */}
          <g>
            <ellipse cx="66" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="79" r="1.8" fill="#22c55e" />
            <path d="M 58 66 Q 66 61 74 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 67 L 76 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="79" r="1.8" fill="#22c55e" />
            <path d="M 86 66 Q 94 61 102 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 67 L 104 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="102" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <path d="M 76 86 Q 80 91 84 86" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Pascal Chameleon perched on head */}
          <g transform="translate(42, 28) scale(0.9)">
            <ellipse cx="14" cy="12" rx="10" ry="7" fill="#4ade80" stroke="#15803d" strokeWidth="1.2" />
            <circle cx="18" cy="9" r="4.5" fill="#ffffff" stroke="#15803d" strokeWidth="1" />
            <circle cx="19" cy="9" r="2" fill="#0f172a" />
            <path d="M 6 15 Q 0 16 2 20" stroke="#15803d" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* Lavender & Purple Dress */}
          <circle cx="50" cy="115" r="12" fill="#f5d0fe" stroke="#c084fc" strokeWidth="1.5" />
          <circle cx="110" cy="115" r="12" fill="#f5d0fe" stroke="#c084fc" strokeWidth="1.5" />

          {/* Bodice with Corset Lacing */}
          <path d="M 64 105 L 96 105 L 91 135 L 69 135 Z" fill="url(#rapDress)" stroke="#7e22ce" strokeWidth="2" />
          <path d="M 76 112 L 84 116 M 76 120 L 84 124 M 76 128 L 84 132" stroke="#fbcfe8" strokeWidth="2" />

          {/* Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#rapDress)" stroke="#7e22ce" strokeWidth="2.5" />
          <path d="M 75 138 L 85 210 L 75 210 Z" fill="#fae8ff" opacity="0.6" />

          <g transform="translate(112, 38) scale(0.6)"><polygon points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7" fill="#facc15" /><circle cx="10" cy="10" r="2" fill="#ffffff" /></g>
        </svg>
      )}

      {/* SNOW WHITE (Blancanieves) */}
      {id === 'snowwhite' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="snowSkirt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>

          {/* Black Bob Hair */}
          <ellipse cx="80" cy="62" rx="42" ry="38" fill="#0f172a" stroke="#020617" strokeWidth="2" />

          {/* Big Red Ribbon Bow on top */}
          <g>
            <path d="M 52 38 Q 80 26 108 38" stroke="#ef4444" strokeWidth="5" fill="none" />
            <path d="M 74 25 Q 80 18 86 25 Q 83 32 80 27 Q 77 32 74 25 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
            <circle cx="80" cy="27" r="4" fill="#ef4444" />
          </g>

          {/* Porcelain Face */}
          <ellipse cx="80" cy="74" rx="35" ry="32" fill="#fff7ed" />

          {/* Hair Bangs */}
          <path d="M 46 64 C 60 76, 75 70, 80 65 C 85 70, 100 76, 114 64 C 112 48, 48 48, 46 64 Z" fill="#0f172a" />

          {/* Brown Chibi Eyes */}
          <g>
            <ellipse cx="66" cy="76" rx="7" ry="9" fill="#1e1b4b" />
            <circle cx="64" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="80" r="1.8" fill="#78350f" />
            <path d="M 58 67 Q 66 62 74 67" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 68 L 76 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="76" rx="7" ry="9" fill="#1e1b4b" />
            <circle cx="92" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="80" r="1.8" fill="#78350f" />
            <path d="M 86 67 Q 94 62 102 67" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 68 L 104 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Rosy Cheeks & Sweet Smile */}
          <ellipse cx="58" cy="86" rx="6" ry="4" fill="#f43f5e" opacity="0.65" />
          <ellipse cx="102" cy="86" rx="6" ry="4" fill="#f43f5e" opacity="0.65" />
          <path d="M 76 87 Q 80 93 84 87" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* White High Collar */}
          <path d="M 54 105 L 80 115 L 106 105 L 100 95 L 60 95 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />

          {/* Royal Blue Bodice */}
          <path d="M 64 108 L 96 108 L 91 135 L 69 135 Z" fill="#1d4ed8" stroke="#1e40af" strokeWidth="2" />

          {/* Puffy Striped Sleeves */}
          <circle cx="48" cy="116" r="13" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          <ellipse cx="48" cy="116" rx="4" ry="9" fill="#ef4444" />
          <circle cx="112" cy="116" r="13" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          <ellipse cx="112" cy="116" rx="4" ry="9" fill="#ef4444" />

          {/* Bright Yellow Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#snowSkirt)" stroke="#ca8a04" strokeWidth="2.5" />

          {/* Red Apple in hand */}
          <circle cx="80" cy="145" r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="1.2" />
          <path d="M 80 138 Q 82 134 84 135" stroke="#78350f" strokeWidth="1.5" fill="none" />
          <circle cx="80" cy="144" r="1.5" fill="#fca5a5" />

          <g transform="translate(112, 38) scale(0.6)"><circle cx="10" cy="11" r="7" fill="#ef4444" /><path d="M 10 4 Q 13 2 14 5" stroke="#15803d" stroke-width="2" fill="none" /></g>
        </svg>
      )}

      {/* AURORA (Bella Durmiente) */}
      {id === 'aurora' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="auroraDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="40%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>

          {/* Long Flowing Golden Waves behind */}
          <path d="M 40 50 C 20 20, 140 15, 126 50 C 145 80, 142 140, 134 185 C 122 130, 118 90, 118 85 C 95 85, 65 85, 42 85 C 42 105, 38 140, 26 185 C 15 140, 20 70, 40 50 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />

          {/* Golden Crown Tiara */}
          <path d="M 68 40 L 80 26 L 92 40 L 86 42 L 80 37 L 74 42 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="80" cy="32" r="2" fill="#ec4899" />

          {/* Head & Face */}
          <ellipse cx="80" cy="72" rx="35" ry="32" fill="#fed7aa" />

          {/* Violet / Purple Eyes */}
          <g>
            <ellipse cx="66" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="79" r="1.8" fill="#8b5cf6" />
            <path d="M 58 66 Q 66 61 74 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 67 L 76 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="75" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="71" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="79" r="1.8" fill="#8b5cf6" />
            <path d="M 86 66 Q 94 61 102 66" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 67 L 104 64" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="102" cy="85" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.6" />
          <path d="M 76 86 Q 80 91 84 86" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* White Pointed Collar */}
          <path d="M 50 106 L 80 120 L 110 106 L 102 100 L 58 100 Z" fill="#ffffff" stroke="#fbcfe8" strokeWidth="1.5" />

          {/* Pink Gown Bodice */}
          <path d="M 64 112 L 96 112 L 91 135 L 69 135 Z" fill="url(#auroraDress)" stroke="#db2777" strokeWidth="2" />

          {/* Full Princess Pink Ballgown */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#auroraDress)" stroke="#db2777" strokeWidth="2.5" />

          {/* Pointed Peplum Overlays */}
          <path d="M 68 135 L 50 155 L 75 145 Z" fill="#fbcfe8" />
          <path d="M 92 135 L 110 155 L 85 145 Z" fill="#fbcfe8" />

          <g transform="translate(110, 38) scale(0.6)"><polygon points="0,15 3,5 10,10 17,2 24,10 31,5 34,15" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" /></g>
        </svg>
      )}

      {/* JASMINE (Jazmín) */}
      {id === 'jasmine' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="jasOutfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>

          {/* Thick Dark Ponytail Hair with Teal bands */}
          <ellipse cx="80" cy="62" rx="44" ry="40" fill="#0f172a" />
          <ellipse cx="80" cy="115" rx="26" ry="24" fill="#0f172a" />
          <ellipse cx="80" cy="165" rx="18" ry="16" fill="#0f172a" />
          {/* Hair bands */}
          <rect x="70" y="95" width="20" height="5" fill="#06b6d4" rx="2.5" />
          <rect x="74" y="145" width="12" height="5" fill="#06b6d4" rx="2.5" />

          {/* Teal Headband with Blue Jewel */}
          <path d="M 50 48 Q 80 38 110 48" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="80" cy="43" r="5" fill="#0284c7" stroke="#fbbf24" strokeWidth="1.5" />

          {/* Head & Face - Warm Golden Skin */}
          <ellipse cx="80" cy="74" rx="35" ry="32" fill="#d97706" />

          {/* Big Almond Eyes */}
          <g>
            <ellipse cx="66" cy="76" rx="7.5" ry="9" fill="#09090b" />
            <circle cx="64" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="80" r="1.8" fill="#854d0e" />
            <path d="M 57 66 Q 66 61 75 66" stroke="#09090b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 73 66 L 77 63" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />

            <ellipse cx="94" cy="76" rx="7.5" ry="9" fill="#09090b" />
            <circle cx="92" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="80" r="1.8" fill="#854d0e" />
            <path d="M 85 66 Q 94 61 103 66" stroke="#09090b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 101 66 L 105 63" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="86" rx="5.5" ry="3.5" fill="#f43f5e" opacity="0.45" />
          <ellipse cx="102" cy="86" rx="5.5" ry="3.5" fill="#f43f5e" opacity="0.45" />
          <path d="M 76 87 Q 80 92 84 87" stroke="#451a03" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Golden Triangle Earrings & Necklace */}
          <polygon points="44,78 40,88 48,88" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          <polygon points="116,78 112,88 120,88" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          <path d="M 68 104 Q 80 112 92 104" stroke="#fbbf24" strokeWidth="3.5" fill="none" />

          {/* Teal Off-shoulder crop top */}
          <path d="M 52 110 L 108 110 L 102 125 L 58 125 Z" fill="url(#jasOutfit)" stroke="#0891b2" strokeWidth="2" />
          <circle cx="80" cy="117" r="3" fill="#38bdf8" stroke="#fbbf24" strokeWidth="1" />

          {/* Teal Royal Harem Pants / Skirt */}
          <path d="M 64 135 L 96 135 L 128 205 C 128 215, 32 215, 32 205 Z" fill="url(#jasOutfit)" stroke="#0891b2" strokeWidth="2.5" />
          {/* Gold belt waistband */}
          <path d="M 62 135 Q 80 142 98 135" stroke="#fbbf24" strokeWidth="4" fill="none" />

          {/* Little Abu Monkey next to her */}
          <g transform="translate(112, 140) scale(0.85)">
            <ellipse cx="16" cy="16" rx="10" ry="11" fill="#78350f" />
            <ellipse cx="16" cy="18" rx="7" ry="7" fill="#fed7aa" />
            <circle cx="13" cy="16" r="1.5" fill="#0f172a" />
            <circle cx="19" cy="16" r="1.5" fill="#0f172a" />
            {/* Abu tiny red fez hat */}
            <polygon points="14,6 18,6 20,11 12,11" fill="#dc2626" />
          </g>

          <g transform="translate(110, 38) scale(0.6)"><ellipse cx="14" cy="14" rx="10" ry="5" fill="#f59e0b" /><path d="M 6 12 Q 10 6 14 10" stroke="#f59e0b" stroke-width="2" fill="none" /></g>
        </svg>
      )}

      {/* TIANA */}
      {id === 'tiana' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="tianaDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="50%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* Dark curly updo with Waterlily Tiara */}
          <circle cx="80" cy="46" rx="36" ry="32" fill="#1c1917" stroke="#0c0a09" strokeWidth="2" />
          <circle cx="80" cy="22" r="18" fill="#292524" />

          {/* Waterlily Tiara */}
          <path d="M 70 34 L 80 20 L 90 34 Z" fill="#86efac" stroke="#16a34a" strokeWidth="1.2" />
          <circle cx="80" cy="28" r="3.5" fill="#fef08a" />

          {/* Rich Brown Skin */}
          <ellipse cx="80" cy="74" rx="35" ry="32" fill="#a16207" />

          {/* Warm Brown Eyes */}
          <g>
            <ellipse cx="66" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="80" r="1.8" fill="#78350f" />
            <path d="M 58 67 Q 66 62 74 67" stroke="#292524" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 68 L 76 65" stroke="#292524" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="80" r="1.8" fill="#78350f" />
            <path d="M 86 67 Q 94 62 102 67" stroke="#292524" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 68 L 104 65" stroke="#292524" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cheeks & Radiant Smile */}
          <ellipse cx="58" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.4" />
          <ellipse cx="102" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.4" />
          <path d="M 76 87 Q 80 92 84 87" stroke="#451a03" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Waterlily Green Ballgown */}
          {/* Pale yellow petal bodice */}
          <path d="M 64 108 L 96 108 L 91 135 L 69 135 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />

          {/* Layered Green Leaf Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#tianaDress)" stroke="#16a34a" strokeWidth="2.5" />

          {/* Petal layers on skirt */}
          <path d="M 68 135 Q 50 165 70 180 Q 80 155 70 135 Z" fill="#fef08a" opacity="0.85" />
          <circle cx="75" cy="140" r="5" fill="#ffffff" />
          <circle cx="75" cy="140" r="2" fill="#fef08a" />

          <g transform="translate(112, 38) scale(0.6)"><circle cx="10" cy="10" r="4" fill="#f472b6" /><circle cx="10" cy="10" r="2" fill="#fef08a" /></g>
        </svg>
      )}

      {/* ANNA (Arendelle) */}
      {id === 'anna' && (
        <svg viewBox="0 0 160 220" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="annaSkirt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {/* Auburn Hair with Twin Braids */}
          <ellipse cx="80" cy="62" rx="42" ry="38" fill="#b45309" stroke="#9a3412" strokeWidth="2" />
          {/* Twin Braids */}
          <path d="M 45 75 Q 30 120 38 165" stroke="#b45309" strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M 115 75 Q 130 120 122 165" stroke="#b45309" strokeWidth="11" strokeLinecap="round" fill="none" />
          {/* White magic hair streak on right braid */}
          <path d="M 116 78 Q 128 115 120 150" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Head & Face */}
          <ellipse cx="80" cy="74" rx="35" ry="32" fill="#fed7aa" />

          {/* Blue / Turquoise Eyes */}
          <g>
            <ellipse cx="66" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="64" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="68" cy="80" r="1.8" fill="#0284c7" />
            <path d="M 58 67 Q 66 62 74 67" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 72 68 L 76 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

            <ellipse cx="94" cy="76" rx="7" ry="9" fill="#0f172a" />
            <circle cx="92" cy="72" r="3.2" fill="#ffffff" />
            <circle cx="96" cy="80" r="1.8" fill="#0284c7" />
            <path d="M 86 67 Q 94 62 102 67" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 100 68 L 104 65" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Cute Freckles across nose */}
          <circle cx="68" cy="83" r="1.2" fill="#9a3412" />
          <circle cx="72" cy="85" r="1.2" fill="#9a3412" />
          <circle cx="88" cy="85" r="1.2" fill="#9a3412" />
          <circle cx="92" cy="83" r="1.2" fill="#9a3412" />

          {/* Cheeks & Smile */}
          <ellipse cx="58" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.5" />
          <ellipse cx="102" cy="86" rx="5.5" ry="3.5" fill="#f472b6" opacity="0.5" />
          <path d="M 76 87 Q 80 92 84 87" stroke="#be185d" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Magenta Capelet */}
          <path d="M 50 106 Q 80 96 110 106 L 102 128 Q 80 118 58 128 Z" fill="#be185d" stroke="#9d174d" strokeWidth="1.5" />

          {/* Black Velvet Bodice with Rosemaling */}
          <path d="M 64 115 L 96 115 L 91 135 L 69 135 Z" fill="#042f2e" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="80" cy="124" r="3" fill="#ec4899" />
          <circle cx="75" cy="124" r="1.5" fill="#4ade80" />
          <circle cx="85" cy="124" r="1.5" fill="#4ade80" />

          {/* Royal Blue Nordic Skirt */}
          <path d="M 68 135 Q 80 145 92 135 L 132 205 C 132 216, 28 216, 28 205 Z" fill="url(#annaSkirt)" stroke="#0369a1" strokeWidth="2.5" />

          <g transform="translate(112, 38) scale(0.6)"><circle cx="10" cy="10" r="5" fill="#eab308" /><circle cx="10" cy="10" r="3" fill="#78350f" /></g>
        </svg>
      )}
    </div>
  );
};
