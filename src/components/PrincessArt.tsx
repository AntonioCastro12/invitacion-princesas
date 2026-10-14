import React from 'react';

interface PrincessAvatarProps {
  id: string;
  size?: number;
  className?: string;
  showSparkleRing?: boolean;
}

export const PrincessAvatar: React.FC<PrincessAvatarProps> = ({
  id,
  size = 90,
  className = '',
  showSparkleRing = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {showSparkleRing && (
        <div className="absolute -inset-2 rounded-full border-2 border-dashed border-amber-300/80 animate-spin" style={{ animationDuration: '12s' }} />
      )}

      {/* Cinderella (Cenicienta) */}
      {id === 'cinderella' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Hair Bun & Band */}
          <circle cx="50" cy="30" r="22" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
          <ellipse cx="50" cy="18" rx="14" ry="12" fill="#eab308" />
          <path d="M 36 28 C 42 20, 58 20, 64 28" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="19" ry="17" fill="#fed7aa" />
          {/* Bangs */}
          <path d="M 33 36 C 40 43, 48 38, 52 35 C 56 38, 64 42, 67 36 C 65 30, 35 30, 33 36 Z" fill="#fde047" />
          {/* Eyes - Big Chibi Cute Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#38bdf8" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#38bdf8" />
          {/* Blush & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Choker */}
          <path d="M 46 56 H 54" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          {/* Ballgown */}
          <path d="M 42 58 L 50 63 L 58 58 L 74 105 C 74 110, 26 110, 26 105 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          {/* Puffy Sleeves */}
          <circle cx="34" cy="62" r="7" fill="#bae6fd" />
          <circle cx="66" cy="62" r="7" fill="#bae6fd" />
          {/* Skirt draping overlay */}
          <path d="M 33 75 Q 50 85 67 75 Q 50 102 33 75 Z" fill="#e0f2fe" opacity="0.8" />
          {/* Sparkles */}
          <text x="70" y="30" fontSize="12" fill="#ffd700">✨</text>
        </svg>
      )}

      {/* Belle (Bella) */}
      {id === 'belle' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Brown Hair & Bun */}
          <circle cx="50" cy="28" r="22" fill="#78350f" />
          <circle cx="50" cy="18" r="12" fill="#92400e" />
          <circle cx="50" cy="18" r="4" fill="#fbbf24" />
          {/* Flowing curls */}
          <path d="M 30 38 Q 24 55 32 70" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 70 38 Q 76 55 68 70" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="19" ry="17" fill="#fed7aa" />
          {/* Hair Bangs */}
          <path d="M 33 36 C 42 41, 48 38, 50 36 C 52 38, 58 41, 67 36 C 64 30, 36 30, 33 36 Z" fill="#92400e" />
          {/* Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#451a03" />
          <circle cx="57" cy="42" r="3.8" fill="#451a03" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#eab308" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#eab308" />
          {/* Blush & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Golden Gown */}
          <path d="M 40 58 Q 50 64 60 58 L 76 105 C 76 110, 24 110, 24 105 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Off shoulder drape */}
          <path d="M 32 60 Q 50 68 68 60 Q 50 64 32 60 Z" fill="#fde047" />
          {/* Red Rose */}
          <circle cx="50" cy="72" r="3" fill="#ef4444" />
          <text x="68" y="32" fontSize="11" fill="#ef4444">🌹</text>
        </svg>
      )}

      {/* Ariel */}
      {id === 'ariel' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Red Hair */}
          <path d="M 28 35 C 24 18, 76 16, 74 35 C 85 45, 84 80, 72 90 C 70 65, 68 50, 68 45 C 55 45, 45 45, 32 45 C 32 55, 30 75, 24 88 C 18 70, 20 45, 28 35 Z" fill="#dc2626" />
          {/* Big hair swoosh */}
          <path d="M 42 22 Q 65 18 68 32 Q 55 30 42 34 Z" fill="#ef4444" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#fed7aa" />
          {/* Eyes (Teal/Green) */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#14b8a6" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#14b8a6" />
          {/* Blush & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Turquoise Ballgown */}
          <path d="M 42 58 L 50 63 L 58 58 L 74 105 C 74 110, 26 110, 26 105 Z" fill="#2dd4bf" stroke="#0f766e" strokeWidth="1.5" />
          {/* Puffy Sleeves */}
          <circle cx="34" cy="62" r="6.5" fill="#99f6e4" />
          <circle cx="66" cy="62" r="6.5" fill="#99f6e4" />
          {/* Starfish hair barrette */}
          <text x="64" y="28" fontSize="11" fill="#f59e0b">⭐</text>
        </svg>
      )}

      {/* Rapunzel */}
      {id === 'rapunzel' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Huge Golden Braided Hair wrapping down */}
          <path d="M 28 35 C 26 18, 74 16, 72 35 C 80 50, 78 85, 78 110 C 72 108, 68 85, 68 60 C 55 60, 45 60, 32 60 C 30 75, 26 95, 24 105 C 20 85, 22 50, 28 35 Z" fill="#facc15" />
          <path d="M 68 45 Q 82 70 74 105" stroke="#eab308" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* Flowers in braid */}
          <circle cx="74" cy="55" r="2.5" fill="#ec4899" />
          <circle cx="77" cy="72" r="2.5" fill="#38bdf8" />
          <circle cx="73" cy="90" r="2.5" fill="#f43f5e" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#fed7aa" />
          {/* Hair Bangs */}
          <path d="M 33 36 C 42 42, 48 38, 52 35 C 55 38, 62 42, 67 36 C 64 28, 36 28, 33 36 Z" fill="#fde047" />
          {/* Green Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#22c55e" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#22c55e" />
          {/* Blush & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Purple / Lavender Dress */}
          <path d="M 40 58 L 50 63 L 60 58 L 74 105 C 74 110, 26 110, 26 105 Z" fill="#c084fc" stroke="#7e22ce" strokeWidth="1.5" />
          {/* Corset laces */}
          <path d="M 48 64 L 52 66 M 48 68 L 52 70" stroke="#f472b6" strokeWidth="1.2" />
          {/* Pascal icon */}
          <text x="68" y="24" fontSize="10" fill="#22c55e">🦎</text>
        </svg>
      )}

      {/* Snow White (Blancanieves) */}
      {id === 'snowwhite' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Black Bob Hair */}
          <ellipse cx="50" cy="38" rx="23" ry="21" fill="#0f172a" />
          {/* Red Ribbon & Bow */}
          <path d="M 34 26 Q 50 20 66 26" stroke="#ef4444" strokeWidth="3" fill="none" />
          <path d="M 46 19 Q 50 16 54 19 Q 52 23 50 20 Q 48 23 46 19 Z" fill="#dc2626" />
          {/* Face - porcelain white skin */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#ffedd5" />
          {/* Bangs */}
          <path d="M 33 36 C 42 42, 48 38, 50 36 C 53 38, 58 42, 67 36 C 64 30, 36 30, 33 36 Z" fill="#0f172a" />
          {/* Brown Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#78350f" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#78350f" />
          {/* Rosy Red Cheeks & Lips */}
          <circle cx="38" cy="47" r="3.5" fill="#f43f5e" opacity="0.6" />
          <circle cx="62" cy="47" r="3.5" fill="#f43f5e" opacity="0.6" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Blue Bodice */}
          <path d="M 42 58 L 58 58 L 56 70 L 44 70 Z" fill="#1d4ed8" />
          {/* Puffy Red and Blue Striped Sleeves */}
          <circle cx="34" cy="62" r="6" fill="#3b82f6" />
          <circle cx="66" cy="62" r="6" fill="#3b82f6" />
          {/* Yellow Skirt */}
          <path d="M 44 70 L 56 70 L 74 105 C 74 110, 26 110, 26 105 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Apple icon */}
          <text x="68" y="30" fontSize="11" fill="#dc2626">🍎</text>
        </svg>
      )}

      {/* Aurora (Bella Durmiente) */}
      {id === 'aurora' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Long Flowing Golden Locks */}
          <path d="M 28 35 C 24 18, 76 16, 72 35 C 80 50, 78 80, 74 100 C 68 70, 66 50, 66 45 C 55 45, 45 45, 34 45 C 34 55, 32 70, 26 100 C 22 80, 20 48, 28 35 Z" fill="#facc15" />
          {/* Golden Tiara */}
          <path d="M 42 24 L 50 16 L 58 24 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#fed7aa" />
          {/* Hair Bangs */}
          <path d="M 33 36 C 42 42, 48 38, 52 35 C 55 38, 62 42, 67 36 C 64 28, 36 28, 33 36 Z" fill="#fde047" />
          {/* Violet Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#8b5cf6" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#8b5cf6" />
          {/* Rosy Blush & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.5" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Princess Pink Gown */}
          <path d="M 40 58 Q 50 63 60 58 L 76 105 C 76 110, 24 110, 24 105 Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
          {/* White pointed collar */}
          <path d="M 34 58 L 50 66 L 66 58 Z" fill="#fff1f2" />
          <text x="68" y="32" fontSize="11" fill="#fbbf24">👑</text>
        </svg>
      )}

      {/* Tiana */}
      {id === 'tiana' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Dark curly updo with lily tiara */}
          <circle cx="50" cy="28" r="22" fill="#1c1917" />
          <circle cx="50" cy="16" r="12" fill="#292524" />
          {/* Lily Tiara */}
          <path d="M 45 22 L 50 14 L 55 22 Z" fill="#86efac" />
          <circle cx="50" cy="18" r="2.5" fill="#fef08a" />
          {/* Deep brown complexion */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#a16207" />
          {/* Warm brown eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#0f172a" />
          <circle cx="57" cy="42" r="3.8" fill="#0f172a" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          {/* Cheeks & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.4" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.4" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Waterlily Green Ballgown */}
          <path d="M 40 58 Q 50 64 60 58 L 76 105 C 76 110, 24 110, 24 105 Z" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
          {/* Yellow petal bodice */}
          <path d="M 43 58 Q 50 70 57 58 Z" fill="#fef08a" />
          <text x="68" y="30" fontSize="11" fill="#4ade80">🌸</text>
        </svg>
      )}

      {/* Jasmine (Jazmín) */}
      {id === 'jasmine' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Flowing thick dark hair with ponytail bands */}
          <ellipse cx="50" cy="38" rx="24" ry="22" fill="#0f172a" />
          <ellipse cx="50" cy="75" rx="16" ry="14" fill="#0f172a" />
          {/* Teal Headband with Blue Jewel */}
          <path d="M 34 26 Q 50 21 66 26" stroke="#06b6d4" strokeWidth="4" fill="none" />
          <circle cx="50" cy="23" r="3.5" fill="#0284c7" stroke="#fbbf24" strokeWidth="1" />
          {/* Warm olive golden skin */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#d97706" />
          {/* Big Almond Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#09090b" />
          <circle cx="57" cy="42" r="3.8" fill="#09090b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#854d0e" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#854d0e" />
          {/* Cheeks & Smile */}
          <circle cx="38" cy="47" r="3" fill="#f43f5e" opacity="0.4" />
          <circle cx="62" cy="47" r="3" fill="#f43f5e" opacity="0.4" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Gold Earrings and Necklace */}
          <circle cx="30" cy="46" r="3" fill="#fbbf24" />
          <circle cx="70" cy="46" r="3" fill="#fbbf24" />
          <path d="M 43 56 Q 50 60 57 56" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
          {/* Teal Royal Outfit */}
          <path d="M 42 60 L 58 60 L 55 69 L 45 69 Z" fill="#06b6d4" />
          <path d="M 44 72 L 56 72 L 72 105 C 72 110, 28 110, 28 105 Z" fill="#22d3ee" stroke="#0891b2" strokeWidth="1.5" />
          <text x="68" y="30" fontSize="11" fill="#fbbf24">✨</text>
        </svg>
      )}

      {/* Anna (Arendelle) */}
      {id === 'anna' && (
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
          {/* Auburn Hair with Twin Braids */}
          <ellipse cx="50" cy="38" rx="22" ry="20" fill="#b45309" />
          <path d="M 30 45 Q 20 70 25 95" stroke="#b45309" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 70 45 Q 80 70 75 95" stroke="#b45309" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* White hair streak on right braid */}
          <path d="M 68 45 Q 74 65 72 80" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Face */}
          <ellipse cx="50" cy="42" rx="18" ry="16" fill="#fed7aa" />
          {/* Bangs */}
          <path d="M 33 36 C 42 42, 48 38, 52 35 C 55 38, 62 42, 67 36 C 64 28, 36 28, 33 36 Z" fill="#b45309" />
          {/* Blue / Turquoise Eyes */}
          <circle cx="43" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="57" cy="42" r="3.8" fill="#1e293b" />
          <circle cx="42" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="56" cy="40.5" r="1.3" fill="#ffffff" />
          <circle cx="44.5" cy="43.5" r="0.7" fill="#0284c7" />
          <circle cx="58.5" cy="43.5" r="0.7" fill="#0284c7" />
          {/* Freckles & Blush */}
          <circle cx="38" cy="47" r="3" fill="#f472b6" opacity="0.4" />
          <circle cx="62" cy="47" r="3" fill="#f472b6" opacity="0.4" />
          <circle cx="41" cy="45" r="0.8" fill="#9a3412" />
          <circle cx="43" cy="46" r="0.8" fill="#9a3412" />
          <circle cx="57" cy="46" r="0.8" fill="#9a3412" />
          <circle cx="59" cy="45" r="0.8" fill="#9a3412" />
          <path d="M 47 48 Q 50 51 53 48" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Teal & Black Bodice */}
          <path d="M 42 58 L 58 58 L 55 70 L 45 70 Z" fill="#042f2e" />
          {/* Rosemaling floral trim */}
          <circle cx="50" cy="64" r="2" fill="#ec4899" />
          {/* Blue Skirt */}
          <path d="M 44 70 L 56 70 L 74 105 C 74 110, 26 110, 26 105 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
          {/* Magenta Capelet */}
          <path d="M 32 58 Q 50 54 68 58 Q 66 68 62 72 Q 50 66 38 72 Z" fill="#be185d" />
          <text x="68" y="30" fontSize="11" fill="#f59e0b">🌻</text>
        </svg>
      )}
    </div>
  );
};

export const FairytaleCastleSvg: React.FC<{ isOpen: boolean; onToggleOpen?: () => void }> = ({
  isOpen,
  onToggleOpen,
}) => {
  return (
    <div
      onClick={onToggleOpen}
      className="relative mx-auto w-full max-w-[340px] aspect-[4/5] cursor-pointer select-none transition-transform duration-500 hover:scale-[1.02]"
    >
      <svg viewBox="0 0 400 480" className="w-full h-full filter drop-shadow-xl overflow-visible">
        <defs>
          <linearGradient id="castlePinkWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf2f4" />
            <stop offset="50%" stopColor="#fce7ed" />
            <stop offset="100%" stopColor="#fbcfe8" />
          </linearGradient>

          <linearGradient id="roofPinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <linearGradient id="gateWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9a3412" />
            <stop offset="50%" stopColor="#c2410c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>

          <linearGradient id="gateInteriorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>

          <filter id="fairyGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Halo behind castle */}
        <ellipse cx="200" cy="270" rx="180" ry="170" fill="#fdf2f8" opacity="0.8" />
        <ellipse cx="200" cy="270" rx="140" ry="130" fill="#fce7f3" opacity="0.6" filter="url(#fairyGlowEffect)" />

        {/* Left Outer Tower */}
        <g>
          {/* Wall */}
          <rect x="75" y="240" width="55" height="150" fill="url(#castlePinkWall)" rx="4" stroke="#f472b6" strokeWidth="2" />
          {/* Battlements */}
          <path d="M 70 240 L 70 225 L 80 225 L 80 232 L 92 232 L 92 225 L 102 225 L 102 232 L 114 232 L 114 225 L 124 225 L 124 232 L 135 232 L 135 240 Z" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="1.5" />
          {/* Conical Roof */}
          <polygon points="102,140 68,225 137,225" fill="url(#roofPinkGradient)" stroke="#be185d" strokeWidth="2" />
          {/* Flag Spire */}
          <line x1="102" y1="140" x2="102" y2="105" stroke="#ca8a04" strokeWidth="2.5" />
          <path d="M 102 105 Q 120 112 102 122 Z" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
          {/* Arched Window */}
          <path d="M 94 280 Q 102 270 111 280 L 111 305 L 94 305 Z" fill="#67e8f9" opacity="0.8" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="102.5" y1="274" x2="102.5" y2="305" stroke="#ca8a04" strokeWidth="1" />
          <line x1="94" y1="290" x2="111" y2="290" stroke="#ca8a04" strokeWidth="1" />
        </g>

        {/* Right Outer Tower */}
        <g>
          {/* Wall */}
          <rect x="270" y="240" width="55" height="150" fill="url(#castlePinkWall)" rx="4" stroke="#f472b6" strokeWidth="2" />
          {/* Battlements */}
          <path d="M 265 240 L 265 225 L 275 225 L 275 232 L 287 232 L 287 225 L 297 225 L 297 232 L 309 232 L 309 225 L 319 225 L 319 232 L 330 232 L 330 240 Z" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="1.5" />
          {/* Conical Roof */}
          <polygon points="298,140 263,225 332,225" fill="url(#roofPinkGradient)" stroke="#be185d" strokeWidth="2" />
          {/* Flag Spire */}
          <line x1="298" y1="140" x2="298" y2="105" stroke="#ca8a04" strokeWidth="2.5" />
          <path d="M 298 105 Q 316 112 298 122 Z" fill="#ec4899" stroke="#be185d" strokeWidth="1" />
          {/* Arched Window */}
          <path d="M 289 280 Q 297 270 306 280 L 306 305 L 289 305 Z" fill="#67e8f9" opacity="0.8" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="297.5" y1="274" x2="297.5" y2="305" stroke="#ca8a04" strokeWidth="1" />
          <line x1="289" y1="290" x2="306" y2="290" stroke="#ca8a04" strokeWidth="1" />
        </g>

        {/* Central High Spire & Tower */}
        <g>
          {/* Main Central Tower Body */}
          <rect x="155" y="160" width="90" height="230" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="2" />
          {/* Mid Turret balcony */}
          <path d="M 148 160 L 148 150 L 160 150 L 160 155 L 175 155 L 175 150 L 190 150 L 190 155 L 210 155 L 210 150 L 225 150 L 225 155 L 240 155 L 240 150 L 252 150 L 252 160 Z" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="1.5" />
          {/* Upper Slender Tower */}
          <rect x="170" y="80" width="60" height="75" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="2" />
          {/* Central High Roof Cone */}
          <polygon points="200,8 160,80 240,80" fill="url(#roofPinkGradient)" stroke="#be185d" strokeWidth="2" />
          {/* High Royal Flagpole */}
          <line x1="200" y1="8" x2="200" y2="-20" stroke="#ca8a04" strokeWidth="3" />
          <path d="M 200 -20 Q 235 -10 200 5 Z" fill="url(#goldTrim)" stroke="#ca8a04" strokeWidth="1" />
          {/* Golden Crown on pinnacle */}
          <circle cx="200" cy="-21" r="4.5" fill="#ffd700" stroke="#b45309" strokeWidth="1" />
          {/* Central High Window */}
          <path d="M 193 105 Q 200 95 207 105 L 207 125 L 193 125 Z" fill="#fef08a" opacity="0.9" stroke="#ca8a04" strokeWidth="1.5" filter="url(#fairyGlowEffect)" />
        </g>

        {/* Castle Gatehouse Arch & Doors */}
        <g>
          {/* Gatehouse Wall */}
          <path d="M 140 260 L 260 260 L 260 395 L 140 395 Z" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="2" />
          {/* Gatehouse Battlements */}
          <path d="M 136 260 L 136 248 L 150 248 L 150 254 L 165 254 L 165 248 L 180 248 L 180 254 L 195 254 L 195 248 L 205 248 L 205 254 L 220 254 L 220 248 L 235 248 L 235 254 L 250 254 L 250 248 L 264 248 L 264 260 Z" fill="url(#castlePinkWall)" stroke="#f472b6" strokeWidth="1.5" />
          {/* Royal Crest / Medallion above gate */}
          <circle cx="200" cy="275" r="14" fill="url(#goldTrim)" stroke="#b45309" strokeWidth="1.5" />
          <text x="200" y="280" fontSize="13" textAnchor="middle" fill="#78350f" fontWeight="bold">👑</text>

          {/* Gate Opening - Inner Portal Background */}
          <path d="M 165 395 L 165 315 Q 200 285 235 315 L 235 395 Z" fill="url(#gateInteriorGlow)" stroke="#f472b6" strokeWidth="2" />

          {/* Golden Magical Light Ray emerging when opened */}
          {isOpen && (
            <g className="animate-pulse">
              <polygon points="165,395 235,395 290,440 110,440" fill="url(#gateInteriorGlow)" opacity="0.6" />
              <circle cx="200" cy="330" r="28" fill="#ffffff" opacity="0.7" filter="url(#fairyGlowEffect)" />
              <text x="200" y="360" fontSize="22" textAnchor="middle" fill="#ffd700">✨</text>
            </g>
          )}

          {/* Left Wooden Gate Door */}
          <g
            style={{
              transformOrigin: '165px 350px',
              transform: isOpen ? 'rotateY(-75deg) scaleX(0.4)' : 'rotateY(0deg) scaleX(1)',
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <path d="M 165 395 L 165 315 Q 182.5 300 200 307 L 200 395 Z" fill="url(#gateWood)" stroke="#78350f" strokeWidth="1.5" />
            {/* Iron bands & studs */}
            <path d="M 165 335 L 200 335 M 165 365 L 200 365" stroke="#451a03" strokeWidth="2" />
            <circle cx="193" cy="350" r="3" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />
          </g>

          {/* Right Wooden Gate Door */}
          <g
            style={{
              transformOrigin: '235px 350px',
              transform: isOpen ? 'rotateY(75deg) scaleX(0.4)' : 'rotateY(0deg) scaleX(1)',
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <path d="M 235 395 L 235 315 Q 217.5 300 200 307 L 200 395 Z" fill="url(#gateWood)" stroke="#78350f" strokeWidth="1.5" />
            {/* Iron bands & studs */}
            <path d="M 200 335 L 235 335 M 200 365 L 235 365" stroke="#451a03" strokeWidth="2" />
            <circle cx="207" cy="350" r="3" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />
          </g>
        </g>

        {/* Lush Blooming Floral Base & Green Grass (matching user's watercolor image) */}
        <g>
          {/* Grass hill */}
          <ellipse cx="200" cy="415" rx="190" ry="35" fill="#86efac" opacity="0.8" />
          <ellipse cx="200" cy="425" rx="160" ry="30" fill="#bbf7d0" opacity="0.9" />

          {/* Blooming Pink Roses and Flowers clustered at castle base */}
          {/* Left Cluster */}
          <circle cx="90" cy="395" r="16" fill="#f472b6" opacity="0.9" />
          <circle cx="115" cy="390" r="14" fill="#fb7185" opacity="0.9" />
          <circle cx="70" cy="405" r="12" fill="#ec4899" opacity="0.9" />
          <circle cx="135" cy="405" r="15" fill="#fbcfe8" opacity="0.95" />
          {/* Flower centers */}
          <circle cx="90" cy="395" r="4" fill="#fde047" />
          <circle cx="115" cy="390" r="4" fill="#fef08a" />
          <circle cx="70" cy="405" r="3" fill="#fef08a" />
          <circle cx="135" cy="405" r="4" fill="#fde047" />

          {/* Right Cluster */}
          <circle cx="270" cy="395" r="15" fill="#f472b6" opacity="0.9" />
          <circle cx="295" cy="390" r="14" fill="#fb7185" opacity="0.9" />
          <circle cx="320" cy="405" r="13" fill="#ec4899" opacity="0.9" />
          <circle cx="250" cy="405" r="14" fill="#fbcfe8" opacity="0.95" />
          {/* Flower centers */}
          <circle cx="270" cy="395" r="4" fill="#fde047" />
          <circle cx="295" cy="390" r="4" fill="#fef08a" />
          <circle cx="320" cy="405" r="3" fill="#fef08a" />
          <circle cx="250" cy="405" r="4" fill="#fde047" />

          {/* Leaves */}
          <ellipse cx="60" cy="415" rx="12" ry="6" fill="#4ade80" transform="rotate(-20 60 415)" />
          <ellipse cx="150" cy="415" rx="12" ry="6" fill="#4ade80" transform="rotate(25 150 415)" />
          <ellipse cx="235" cy="415" rx="12" ry="6" fill="#4ade80" transform="rotate(-15 235 415)" />
          <ellipse cx="335" cy="415" rx="12" ry="6" fill="#4ade80" transform="rotate(30 335 415)" />
        </g>

        {/* Delicate Watercolor Cherry Blossom Branch at Top Left (matching user's uploaded images) */}
        <g>
          {/* Branch */}
          <path d="M -10 10 Q 50 30 110 20 Q 140 15 170 35" stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75" />
          <path d="M 60 27 Q 90 45 105 60" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
          {/* Cherry blossoms */}
          <circle cx="45" cy="22" r="7" fill="#fbcfe8" />
          <circle cx="45" cy="22" r="2" fill="#f43f5e" />
          <circle cx="85" cy="18" r="9" fill="#fbcfe8" />
          <circle cx="85" cy="18" r="2.5" fill="#f43f5e" />
          <circle cx="120" cy="22" r="8" fill="#f472b6" />
          <circle cx="120" cy="22" r="2" fill="#ffe4e6" />
          <circle cx="95" cy="50" r="8" fill="#fbcfe8" />
          <circle cx="95" cy="50" r="2" fill="#f43f5e" />
          <circle cx="155" cy="30" r="7" fill="#fbcfe8" />
          <circle cx="155" cy="30" r="2" fill="#f43f5e" />
        </g>
      </svg>
    </div>
  );
};
