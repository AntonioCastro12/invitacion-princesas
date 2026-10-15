import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Crown, Sparkles, Heart, ChevronDown } from 'lucide-react';
import { InvitationData, PRINCESSES_DATA, PrincessCharacter } from '../types/invitation';

interface PrincessGatheringStageProps {
  invitation: InvitationData;
  isCastleOpen: boolean;
  onOpenCastle: () => void;
  onRevealDetails: () => void;
}

// Royal procession coordinates surrounding the castle in a majestic horseshoe arc
const PROCESSION_POSITIONS: Record<
  string,
  { xSm: number; ySm: number; xLg: number; yLg: number; zIndex: number; scale: number; delay: number }
> = {
  // Torre superior izquierda (mágica y etérea)
  elsa:     { xSm: -112, ySm: -190, xLg: -170, yLg: -230, zIndex: 26, scale: 0.95, delay: 0.5 },
  // Flanco medio izquierdo (balcón / jardín lateral)
  belle:    { xSm: -128, ySm: -95,  xLg: -188, yLg: -115, zIndex: 28, scale: 1.0,  delay: 0.32 },
  // Jardín inferior izquierdo (sendero de flores)
  mulan:    { xSm: -108, ySm: 12,   xLg: -155, yLg: 18,   zIndex: 32, scale: 1.05, delay: 0.18 },
  // Frente y centro (salida principal de las puertas)
  rapunzel: { xSm: 0,    ySm: 60,   xLg: 0,    yLg: 80,   zIndex: 40, scale: 1.15, delay: 0.05 },
  // Jardín inferior derecho (sendero de flores)
  anna:     { xSm: 108,  ySm: 12,   xLg: 155,  yLg: 18,   zIndex: 32, scale: 1.05, delay: 0.18 },
  // Flanco medio derecho (balcón / jardín lateral)
  ariel:    { xSm: 128,  ySm: -95,  xLg: 188,  yLg: -115, zIndex: 28, scale: 1.0,  delay: 0.32 },
  // Torre superior derecha (mágica y etérea)
  aurora:   { xSm: 112,  ySm: -190, xLg: 170,  yLg: -230, zIndex: 26, scale: 0.95, delay: 0.5 },
};

export const PrincessGatheringStage: React.FC<PrincessGatheringStageProps> = ({
  invitation,
  isCastleOpen,
  onOpenCastle,
  onRevealDetails,
}) => {
  const [activePrincess, setActivePrincess] = useState<PrincessCharacter | null>(null);
  const [replayKey, setReplayKey] = useState(0);

  const handlePrincessClick = (princess: PrincessCharacter) => {
    setActivePrincess(princess);

    // Celebratory confetti burst in princess's signature color
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.55 },
      colors: [princess.color, '#ffd700', '#ffffff', '#f472b6'],
      disableForReducedMotion: false,
    });
  };

  const handleCastleClick = () => {
    if (!isCastleOpen) {
      onOpenCastle();
    }
    // Celebratory burst
    confetti({
      particleCount: 75,
      spread: 85,
      origin: { y: 0.5 },
      colors: ['#ffd700', '#f472b6', '#38bdf8', '#c084fc', '#4ade80'],
    });
  };


  return (
    <div className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-2 px-2 select-none">
      {/* Royal Ribbon Banner at Top with Floating Butterflies */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md mx-auto my-1.5 text-center z-20 relative px-4"
      >
        <span className="absolute -top-2 left-4 text-xl animate-float">🦋</span>
        <span className="absolute top-4 right-4 text-lg animate-float" style={{ animationDelay: '1.2s' }}>🦋</span>
        <span className="absolute -bottom-1 left-8 text-sm animate-float" style={{ animationDelay: '2.3s' }}>🦋</span>

        <div className="relative inline-block w-full max-w-sm px-6 py-2.5 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-3xl shadow-lg border-2 border-white/90">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rotate-45 border-l-2 border-b-2 border-white/60" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rotate-45 border-r-2 border-t-2 border-white/60" />

          <p className="font-script text-2xl sm:text-3xl text-white font-bold drop-shadow-sm">
            Invitación Real
          </p>
          <h1 className="font-serif-royal text-2xl sm:text-3xl font-extrabold text-pink-950 tracking-tight">
            {invitation.celebrantName}
          </h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mt-0.5 rounded-full bg-white/90 text-pink-900 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Crown className="w-3.5 h-3.5 text-pink-500 fill-pink-400" />
            <span>¡Cumple {invitation.celebrantAge} Años!</span>
            <Crown className="w-3.5 h-3.5 text-pink-500 fill-pink-400" />
          </div>
        </div>
      </motion.div>

      {/* Main Enchanted Arena: Fairytale Castle with Baby Princesses Emerging from Gates */}
      <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto flex flex-col items-center justify-center my-2">
        <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[550px]">
          {/* Fairy Glow Behind Castle */}
          <div className="absolute inset-x-8 top-12 bottom-16 -z-10 rounded-full bg-radial from-pink-200/90 via-rose-100/40 to-transparent blur-2xl pointer-events-none" />

          {/* Central Castle Container */}
          <div
            onClick={handleCastleClick}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] px-2 flex flex-col items-center cursor-pointer group"
            title="Tocar el castillo para abrir o celebrar"
          >
            {/* Castle Image */}
            <div className="relative w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/images/castle.png"
                alt="Castillo de Princesas"
                className="w-full h-auto max-h-[380px] sm:max-h-[430px] object-contain drop-shadow-2xl pointer-events-none"
                loading="eager"
              />

              {/* Radiant Portal Light Effect Inside Archway */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-24 sm:w-30 h-24 sm:h-30 overflow-hidden flex items-end justify-center pointer-events-none">
                {isCastleOpen ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: [0.95, 1.2, 0.95] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="w-full h-full rounded-t-full bg-gradient-to-t from-amber-300/80 via-yellow-100/60 to-transparent flex items-center justify-center filter blur-xs"
                  >
                    <span className="text-3xl animate-spin" style={{ animationDuration: '8s' }}>✨</span>
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.05, 0.9] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-16 h-20 rounded-t-full bg-amber-200/50 blur-sm flex items-center justify-center"
                  >
                    <span className="text-lg">🌟</span>
                  </motion.div>
                )}
              </div>

              {/* Emerging Baby Princesses Procession */}
              {/* They start inside the castle portal and fan out surrounding the castle! */}
              <div key={replayKey} className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-0 h-0 pointer-events-none">
                {PRINCESSES_DATA.map((princess, idx) => {
                  const pos = PROCESSION_POSITIONS[princess.id] || { xSm: 0, ySm: 40, xLg: 0, yLg: 50, zIndex: 30, scale: 1, delay: idx * 0.1 };
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                  const targetX = isMobile ? pos.xSm : pos.xLg;
                  const targetY = isMobile ? pos.ySm : pos.yLg;

                  return (
                    <motion.div
                      key={princess.id}
                      initial={{ scale: 0.1, opacity: 0, x: 0, y: -30 }}
                      animate={
                        isCastleOpen
                          ? {
                              scale: pos.scale,
                              opacity: 1,
                              x: targetX,
                              y: targetY,
                              transition: {
                                delay: 0.15 + (pos.delay ?? idx * 0.12),
                                type: 'spring',
                                stiffness: 85,
                                damping: 12,
                              },
                            }
                          : { scale: 0.1, opacity: 0, x: 0, y: -30 }
                      }
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                      style={{ zIndex: pos.zIndex }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrincessClick(princess);
                      }}
                      title={`Tocar a ${princess.name}`}
                    >
                      {/* Idle floating/swaying animation once emerged */}
                      <motion.div
                        animate={
                          isCastleOpen
                            ? {
                                y: [0, -6, 0],
                                rotate: idx % 2 === 0 ? [-1.5, 1.5, -1.5] : [1.5, -1.5, 1.5],
                              }
                            : {}
                        }
                        transition={{
                          repeat: Infinity,
                          duration: 2.8 + (idx % 3) * 0.4,
                          ease: 'easeInOut',
                          delay: 0.8 + idx * 0.2,
                        }}
                        whileHover={{ scale: 1.18, y: -8 }}
                        whileTap={{ scale: 0.92 }}
                        className="relative flex flex-col items-center filter drop-shadow-lg hover:drop-shadow-2xl transition-all"
                      >
                        {/* Soft fairy glow halo under each baby princess */}
                        <div
                          className="absolute inset-0 rounded-full blur-md opacity-70 scale-90 -z-10 pointer-events-none"
                          style={{ backgroundColor: princess.color }}
                        />

                        {/* Stardust for upper floating princesses */}
                        {pos.ySm < -100 && (
                          <span className="absolute -top-2 -right-1 text-xs animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
                            ✨
                          </span>
                        )}

                        {/* Baby Princess Image */}
                        <div className="w-18 h-22 sm:w-22 sm:h-26 flex items-end justify-center">
                          <img
                            src={`/images/princesses/${princess.id}.png`}
                            alt={princess.name}
                            className="max-w-full max-h-full object-contain pointer-events-none"
                            loading="eager"
                          />
                        </div>

                        {/* Dainty Name Ribbon */}
                        <div className="mt-0.5 px-2 py-0.5 rounded-full bg-white/95 border border-pink-200 shadow-xs flex items-center gap-1">
                          <span className="text-[9px] sm:text-[10px] font-bold text-pink-900 whitespace-nowrap">
                            {princess.name}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Pulsing Button on Castle when Closed */}
            {!isCastleOpen && (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="mt-3 cursor-pointer z-30"
              >
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-xs sm:text-sm shadow-xl border-2 border-white hover:brightness-110 active:scale-95 transition-all">
                  <Sparkles className="w-4 h-4 text-yellow-200 animate-spin" />
                  <span>¡Toca el Castillo para que Salgan las Princesas!</span>
                  <Heart className="w-4 h-4 text-pink-200 fill-pink-300" />
                </button>
              </motion.div>
            )}

            {/* Interactive Status Indicator when Open */}
            {isCastleOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-20 sm:mt-24 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-pink-200 text-[11px] font-bold text-pink-800 shadow-xs z-30"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Las princesas bebés han salido del castillo • Toca a cada una</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Selected Princess Interactive Speech Bubble */}
        <AnimatePresence>
          {activePrincess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              className="fixed inset-x-4 bottom-24 max-w-md mx-auto z-50 bg-white/95 backdrop-blur-md p-4 rounded-3xl border-2 border-pink-300 shadow-2xl text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl">{activePrincess.elementEmoji}</span>
                <h4 className="font-serif-royal font-bold text-pink-900 text-base">
                  Mensaje de {activePrincess.name}
                </h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold">
                  {activePrincess.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 italic px-2 leading-relaxed">
                &ldquo;{activePrincess.greeting}&rdquo;
              </p>
              <button
                onClick={() => setActivePrincess(null)}
                className="mt-3 inline-flex items-center gap-1 text-xs text-pink-600 font-bold hover:underline cursor-pointer"
              >
                <span>Cerrar mensaje ✨</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-md mx-auto text-center my-3 z-30 flex flex-col items-center gap-2.5"
      >
        {/* Reveal Party Details Main CTA */}
        <button
          onClick={onRevealDetails}
          className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-pink-300/80 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
        >
          <Sparkles className="w-4 h-4 text-pink-200" />
          <span>Tocar para Revelar Detalles de la Fiesta</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>

        <p className="text-[11px] text-pink-800/80 font-bold mt-2">
          ✨ Toca el castillo o a las princesas para descubrir su magia ✨
        </p>
      </motion.div>
    </div>
  );
};
