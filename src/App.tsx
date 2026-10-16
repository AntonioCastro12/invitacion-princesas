import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Settings, Crown } from 'lucide-react';
import { DEFAULT_INVITATION, InvitationData } from './types/invitation';
import { ParticleSparkles } from './components/ParticleSparkles';
import { PrincessGatheringStage } from './components/PrincessGatheringStage';
import { RoyalStorybookDetails } from './components/RoyalStorybookDetails';
import { EditInvitationModal } from './components/EditInvitationModal';
import { DownloadAssetsModal } from './components/DownloadAssetsModal';

export default function App() {
  const [invitation, setInvitation] = useState<InvitationData>(() => {
    // Check if customized data is present in URL or localStorage
    if (typeof window !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const inviteParam = urlParams.get('invite');
        if (inviteParam) {
          const decoded = decodeURIComponent(escape(atob(decodeURIComponent(inviteParam))));
          return JSON.parse(decoded);
        }
        const saved = localStorage.getItem('princess_invitation_data');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Error loading invitation data:', e);
      }
    }
    return DEFAULT_INVITATION;
  });

  // Default to false so the user gets the interactive castle intro to open the invitation
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isZoomingCastle, setIsZoomingCastle] = useState(false);
  const [isCastleOpen, setIsCastleOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const detailsRef = useRef<HTMLDivElement | null>(null);

  // Save to localStorage when invitation changes
  const handleSaveInvitation = (newData: InvitationData) => {
    setInvitation(newData);
    try {
      localStorage.setItem('princess_invitation_data', JSON.stringify(newData));
    } catch {
      // storage error
    }
  };

  const handleOpenEnvelope = () => {
    if (isZoomingCastle) return;
    setIsZoomingCastle(true);

    // Initial fairy stardust burst when touching the castle
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#ffd700', '#fef08a', '#f472b6', '#ffffff'],
    });

    // After the cinematic Disney-style zoom through the castle gates, reveal the invitation
    setTimeout(() => {
      setHasOpenedEnvelope(true);
      setIsCastleOpen(true);
      setIsZoomingCastle(false);

      confetti({
        particleCount: 110,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ffd700', '#f472b6', '#38bdf8', '#c084fc', '#4ade80'],
      });
    }, 1050);
  };

  const handleRevealDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-[#fdf2f4] via-[#fde8ed] to-[#fce4ec] text-[#4a2e35] overflow-x-hidden selection:bg-pink-300 selection:text-pink-900">
      {/* Interactive Fairy Particle Canvas & Falling Petals */}
      <ParticleSparkles />

      {/* Initial Disney-Movie Style Castle Intro with Zoom-In Transition */}
      <AnimatePresence>
        {!hasOpenedEnvelope && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeOut' } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-linear-to-b from-[#240b36]/95 via-[#5c164e]/90 to-[#832161]/95 backdrop-blur-md overflow-hidden select-none"
          >
            {/* Twinkling Starlight Backdrop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <span className="absolute top-[12%] left-[15%] text-yellow-200 text-sm animate-pulse">✦</span>
              <span className="absolute top-[18%] right-[18%] text-pink-200 text-xs animate-pulse" style={{ animationDelay: '0.7s' }}>✨</span>
              <span className="absolute top-[28%] left-[22%] text-yellow-100 text-xs animate-pulse" style={{ animationDelay: '1.3s' }}>★</span>
              <span className="absolute top-[25%] right-[12%] text-yellow-200 text-sm animate-pulse" style={{ animationDelay: '0.4s' }}>✦</span>
              <span className="absolute bottom-[22%] left-[12%] text-pink-200 text-xs animate-pulse" style={{ animationDelay: '1.1s' }}>✨</span>
              <span className="absolute bottom-[26%] right-[16%] text-yellow-100 text-xs animate-pulse" style={{ animationDelay: '0.9s' }}>✦</span>
            </div>

            {/* Top Floating Royal Title (fades out as castle zooms in) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isZoomingCastle
                  ? { opacity: 0, y: -40, scale: 0.9, transition: { duration: 0.4 } }
                  : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }
              }
              className="relative z-20 text-center mb-2 px-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-xs text-yellow-200 text-[11px] font-bold uppercase tracking-widest mb-2 border border-yellow-200/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Había una vez en un Reino Mágico</span>
              </div>

              <h2 className="font-script text-4xl sm:text-5xl text-pink-200 font-bold drop-shadow-[0_2px_10px_rgba(244,114,182,0.6)]">
                Invitación Real
              </h2>

              <p className="font-serif-royal text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-md mt-0.5">
                {invitation.celebrantName}
              </p>
            </motion.div>

            {/* Interactive Fairytale Castle with Disney Shooting Star Arc & Zoom Effect */}
            <motion.div
              onClick={handleOpenEnvelope}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={
                isZoomingCastle
                  ? {
                      scale: 4.5,
                      y: -115,
                      transition: { duration: 1.05, ease: [0.4, 0, 0.2, 1] },
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, type: 'spring' },
                    }
              }
              whileHover={!isZoomingCastle ? { scale: 1.04 } : {}}
              whileTap={!isZoomingCastle ? { scale: 0.97 } : {}}
              className="relative z-10 w-full max-w-[330px] sm:max-w-[400px] flex flex-col items-center justify-center cursor-pointer group my-1"
              title="Toca el castillo para entrar a la invitación"
            >
              {/* Radiant Magical Glow Behind the Castle */}
              <div className="absolute inset-4 -z-10 rounded-full bg-radial from-pink-400/50 via-amber-200/25 to-transparent blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

              {/* Disney-Style Shooting Star Arc Over the Castle */}
              <svg
                viewBox="0 0 400 220"
                className="absolute -top-8 inset-x-0 w-full h-auto pointer-events-none z-20 overflow-visible"
              >
                <defs>
                  <linearGradient id="disneyStarArc" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fde047" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fef08a" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 25 180 Q 200 -25 375 180"
                  fill="none"
                  stroke="url(#disneyStarArc)"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.4] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>

              {/* Floating Castle Image */}
              <motion.img
                src="/images/castle.png"
                alt="Castillo Real de Princesas"
                animate={!isZoomingCastle ? { y: [0, -6, 0] } : {}}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-auto max-h-[340px] sm:max-h-[390px] object-contain drop-shadow-[0_12px_35px_rgba(244,114,182,0.55)] pointer-events-none"
              />

              {/* Glowing Archway Portal Inside the Castle Gates (expands into light flash on zoom!) */}
              <motion.div
                animate={
                  isZoomingCastle
                    ? {
                        scale: 22,
                        opacity: [0.9, 1, 1],
                        transition: { duration: 0.95, ease: 'easeIn' },
                      }
                    : {
                        scale: [0.95, 1.15, 0.95],
                        opacity: [0.55, 0.9, 0.55],
                        transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                      }
                }
                className="absolute bottom-[11%] left-1/2 -translate-x-1/2 w-20 h-24 rounded-t-full bg-radial from-yellow-100 via-amber-300/80 to-transparent blur-md pointer-events-none z-30 flex items-center justify-center"
              >
                {!isZoomingCastle && <span className="text-2xl animate-pulse">✨</span>}
              </motion.div>
            </motion.div>

            {/* Bottom Call-To-Action Prompt (fades out during zoom) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                isZoomingCastle
                  ? { opacity: 0, y: 30, transition: { duration: 0.3 } }
                  : { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }
              }
              onClick={handleOpenEnvelope}
              className="relative z-20 mt-3 flex flex-col items-center cursor-pointer"
            >
              <motion.div
                animate={{ scale: [0.97, 1.04, 0.97] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(244,114,182,0.7)] border-2 border-white/90 hover:brightness-110 active:scale-95 transition-all"
              >
                <Crown className="w-4 h-4 text-yellow-200 fill-yellow-200" />
                <span>Toca el Castillo para Entrar al Reino</span>
                <Sparkles className="w-4 h-4 text-yellow-200 animate-spin" style={{ animationDuration: '5s' }} />
              </motion.div>

              <p className="mt-2 text-xs text-pink-200/90 font-medium flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                <span>Las puertas reales están listas para abrirse</span>
                <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Controls Header */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between px-4 pt-4 pb-1 z-30 relative">
        <div className="flex items-center gap-2">
          {/* Replay Castle Intro Button */}
          <button
            onClick={() => {
              setHasOpenedEnvelope(false);
              setIsCastleOpen(false);
              setIsZoomingCastle(false);
            }}
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/90 hover:bg-pink-50 text-pink-800 text-xs font-bold shadow-xs cursor-pointer transition-all border border-pink-200"
            title="Volver a ver la entrada del castillo"
          >
            <Crown className="w-3.5 h-3.5 text-pink-500" />
            <span className="hidden sm:inline">Entrada Real</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center pb-24">
        {/* Princess Gathering Stage: Fairytale Castle & Emerging Baby Princesses */}
        <PrincessGatheringStage
          invitation={invitation}
          isCastleOpen={isCastleOpen}
          onOpenCastle={() => {
            setIsCastleOpen(true);
            confetti({
              particleCount: 50,
              spread: 70,
              origin: { y: 0.5 },
              colors: ['#ffd700', '#f472b6', '#38bdf8', '#c084fc', '#4ade80'],
            });
          }}
          onRevealDetails={handleRevealDetails}
        />

        {/* Royal Storybook Scroll Sections (Details, Countdown, Maps, Itinerary, RSVP, Wishes) */}
        <div ref={detailsRef} className="w-full">
          <RoyalStorybookDetails
            invitation={invitation}
            onScrollToTop={handleScrollToTop}
          />
        </div>
      </main>

      {/* Edit Invitation Modal */}
      {/* <EditInvitationModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        invitation={invitation}
        onSave={handleSaveInvitation}
      /> */}
    </div>
  );
}
