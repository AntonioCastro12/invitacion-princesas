import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PrincessAvatar, FairytaleCastleSvg } from './PrincessArt';
import { PRINCESSES_DATA, PrincessCharacter, InvitationData } from '../types/invitation';
import { soundManager } from '../utils/soundEffects';
import { Sparkles, Heart, Crown, Music, VolumeX, ChevronDown } from 'lucide-react';

interface PrincessCastleStageProps {
  invitation: InvitationData;
  isCastleOpen: boolean;
  onOpenCastle: () => void;
  onRevealDetails: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenUpload?: () => void;
}

export const PrincessCastleStage: React.FC<PrincessCastleStageProps> = ({
  invitation,
  isCastleOpen,
  onOpenCastle,
  onRevealDetails,
  isMusicPlaying,
  onToggleMusic,
  onOpenUpload,
}) => {
  const [selectedPrincess, setSelectedPrincess] = useState<PrincessCharacter | null>(null);

  const handleCastleClick = () => {
    if (!isCastleOpen) {
      onOpenCastle();
      soundManager.playCastleGateFanfare();
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#f472b6', '#38bdf8', '#c084fc', '#4ade80'],
      });
    } else {
      soundManager.playMagicWand();
    }
  };

  const handlePrincessClick = (princess: PrincessCharacter) => {
    setSelectedPrincess(princess);
    soundManager.playMagicWand();
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.5 },
      colors: [princess.color, '#ffd700', '#ffffff'],
    });
  };

  // 5 princesses on left, 4 on right flanking the castle
  const leftPrincesses = PRINCESSES_DATA.slice(0, 5);
  const rightPrincesses = PRINCESSES_DATA.slice(5, 9);

  return (
    <div className="relative w-full min-h-[92vh] flex flex-col items-center justify-between px-3 py-6 overflow-hidden">
      {/* Top Floating Music & Fairy Controls */}
      <div className="w-full max-w-lg flex items-center justify-between px-3 z-30">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-pink-200 text-xs font-semibold text-pink-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Cuento Encantado</span>
          </div>

          {onOpenUpload && (
            <button
              onClick={onOpenUpload}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 text-[11px] font-bold shadow-xs cursor-pointer transition-all"
            >
              <span>📸</span>
              <span>Subir Imagen</span>
            </button>
          )}
        </div>

        <button
          onClick={onToggleMusic}
          aria-label={isMusicPlaying ? 'Silenciar música' : 'Activar música mágica'}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-pink-200 text-xs font-medium text-pink-800 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          {isMusicPlaying ? (
            <>
              <Music className="w-3.5 h-3.5 text-pink-600 animate-bounce" />
              <span>Música Mágica (Sonando)</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-gray-500" />
              <span>Activar Música 🎵</span>
            </>
          )}
        </button>
      </div>

      {/* Royal Ribbon Banner at Top (inspired by user image 4 with butterflies) */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-md mx-auto my-3 text-center z-20 relative"
      >
        {/* Floating Pink Butterflies (like in user screenshot) */}
        <span className="absolute -top-3 -left-2 text-lg animate-float">🦋</span>
        <span className="absolute -top-2 -right-2 text-lg animate-float" style={{ animationDelay: '1.5s' }}>🦋</span>
        <span className="absolute -bottom-2 right-4 text-sm animate-float" style={{ animationDelay: '2.5s' }}>🦋</span>

        <div className="relative inline-block px-8 py-3 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-2xl shadow-lg border-2 border-white/80">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rotate-45 border-l-2 border-b-2 border-white/60" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rotate-45 border-r-2 border-t-2 border-white/60" />

          <p className="font-script text-2xl sm:text-3xl text-white font-bold drop-shadow-sm tracking-wide">
            Invitación Real
          </p>
          <h1 className="font-serif-royal text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-950 tracking-tight drop-shadow-xs">
            {invitation.celebrantName}
          </h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mt-1 rounded-full bg-white/80 text-pink-800 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Crown className="w-3 h-3 text-amber-500 fill-amber-400" />
            <span>¡Cumple {invitation.celebrantAge} Años!</span>
            <Crown className="w-3 h-3 text-amber-500 fill-amber-400" />
          </div>
        </div>
      </motion.div>

      {/* Interactive Castle & Emerging Princesses Arena */}
      <div className="relative w-full max-w-lg mx-auto flex items-center justify-center my-2">
        {/* Left Princesses Column (Emerging onto left side) */}
        <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
          {leftPrincesses.map((princess, idx) => (
            <motion.div
              key={princess.id}
              initial={{ scale: 0, opacity: 0, x: 60, y: 0 }}
              animate={
                isCastleOpen
                  ? {
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        delay: 0.3 + idx * 0.15,
                        type: 'spring',
                        stiffness: 120,
                        damping: 12,
                      },
                    }
                  : { scale: 0, opacity: 0, x: 60, y: 0 }
              }
              whileHover={{ scale: 1.15, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePrincessClick(princess)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="relative p-1 rounded-2xl bg-white/60 backdrop-blur-xs border border-pink-200/80 shadow-md group-hover:shadow-pink-300/60 transition-all">
                <PrincessAvatar id={princess.id} size={54} />
                <span className="absolute -bottom-1 -right-1 text-xs">✨</span>
              </div>
              <span className="text-[9px] font-bold text-pink-900 bg-white/85 px-1.5 py-0.5 rounded-full mt-0.5 shadow-xs border border-pink-100">
                {princess.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Center: The Enchanted Castle or User's Uploaded WhatsApp Image */}
        <div className="relative z-10 w-full px-12 sm:px-14 flex flex-col items-center justify-center">
          {invitation.customImageUrl ? (
            <div
              onClick={handleCastleClick}
              className="relative max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300 cursor-pointer group bg-pink-100 flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <img
                src={invitation.customImageUrl}
                alt="Imagen de WhatsApp de la fiesta"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-pink-900/10 pointer-events-none" />

              {/* Glowing magic overlay */}
              <div className="absolute -inset-1 rounded-3xl border-2 border-dashed border-amber-300/80 animate-pulse pointer-events-none" />

              {/* Castle doors badge / indicator */}
              {!isCastleOpen ? (
                <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-xs py-2 px-3 rounded-2xl text-center shadow-lg border border-pink-200">
                  <p className="text-xs font-bold text-pink-900 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                    <span>¡Toca la imagen para que salgan las princesas!</span>
                  </p>
                </div>
              ) : (
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md text-[10px] font-bold text-pink-800 flex items-center gap-1">
                  <span>✨</span>
                  <span>¡Reino Abierto!</span>
                </div>
              )}
            </div>
          ) : (
            <FairytaleCastleSvg isOpen={isCastleOpen} onToggleOpen={handleCastleClick} />
          )}

          {/* Touch invitation on castle gate when closed */}
          {!isCastleOpen && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={handleCastleClick}
              className="absolute left-1/2 -translate-x-1/2 bottom-8 cursor-pointer z-30"
            >
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-rose-400 text-white font-bold text-sm shadow-xl border-2 border-white/90 hover:brightness-110 active:scale-95 transition-all">
                <Sparkles className="w-4 h-4 text-yellow-200 animate-spin" />
                <span>¡Toca para Abrir!</span>
                <Heart className="w-4 h-4 text-pink-200 fill-pink-300" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Princesses Column (Emerging onto right side) */}
        <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
          {rightPrincesses.map((princess, idx) => (
            <motion.div
              key={princess.id}
              initial={{ scale: 0, opacity: 0, x: -60, y: 0 }}
              animate={
                isCastleOpen
                  ? {
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        delay: 0.4 + idx * 0.15,
                        type: 'spring',
                        stiffness: 120,
                        damping: 12,
                      },
                    }
                  : { scale: 0, opacity: 0, x: -60, y: 0 }
              }
              whileHover={{ scale: 1.15, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePrincessClick(princess)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="relative p-1 rounded-2xl bg-white/60 backdrop-blur-xs border border-pink-200/80 shadow-md group-hover:shadow-pink-300/60 transition-all">
                <PrincessAvatar id={princess.id} size={54} />
                <span className="absolute -bottom-1 -left-1 text-xs">🌸</span>
              </div>
              <span className="text-[9px] font-bold text-pink-900 bg-white/85 px-1.5 py-0.5 rounded-full mt-0.5 shadow-xs border border-pink-100">
                {princess.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Princess Interactive Greeting Speech Bubble */}
      <AnimatePresence>
        {selectedPrincess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-x-4 bottom-24 max-w-md mx-auto z-50 bg-white/95 backdrop-blur-md p-4 rounded-3xl border-2 border-pink-300 shadow-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xl">{selectedPrincess.elementEmoji}</span>
              <h4 className="font-serif-royal font-bold text-pink-900 text-base">
                Mensaje de {selectedPrincess.name}
              </h4>
              <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-semibold">
                {selectedPrincess.badge}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-700 italic">
              &ldquo;{selectedPrincess.greeting}&rdquo;
            </p>
            <button
              onClick={() => setSelectedPrincess(null)}
              className="mt-3 text-xs text-pink-600 font-bold hover:underline cursor-pointer"
            >
              Cerrar mensaje ✨
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Call to Action: Reveal Invitation Details */}
      <div className="w-full max-w-md mx-auto text-center mt-2 z-20">
        {isCastleOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-xs font-semibold text-pink-900/80 tracking-wide uppercase">
              ✨ ¡Toca cada princesa o desliza para ver los detalles! ✨
            </p>
            <button
              onClick={onRevealDetails}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 text-white font-bold text-base shadow-xl hover:shadow-pink-400/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
            >
              <Crown className="w-5 h-5 text-yellow-200 fill-yellow-300" />
              <span>Revelar Detalles de la Fiesta</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </motion.div>
        ) : (
          <p className="text-xs text-pink-800/80 italic font-medium">
            Toca la pantalla o el castillo para comenzar la magia...
          </p>
        )}
      </div>
    </div>
  );
};
