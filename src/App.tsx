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

  // Default to false so the user gets the interactive button to open the invitation
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isCastleOpen, setIsCastleOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

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
    setHasOpenedEnvelope(true);
    setIsCastleOpen(true);

    // Silent celebratory confetti burst
    confetti({
      particleCount: 110,
      spread: 95,
      origin: { y: 0.5 },
      colors: ['#ffd700', '#f472b6', '#38bdf8', '#c084fc', '#4ade80'],
    });
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

      {/* Initial Royal Envelope / Invitation Cover with Opening Button */}
      <AnimatePresence>
        {!hasOpenedEnvelope && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-linear-to-b from-pink-950/70 via-purple-950/60 to-pink-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-sm bg-linear-to-b from-[#fff5f7] via-[#fde8ed] to-[#fce4ec] rounded-[36px] p-8 border-2 border-pink-300 shadow-2xl text-center overflow-hidden"
            >
              {/* Delicate watercolor cherry blossom corner accent */}
              <div className="absolute top-2 left-3 text-pink-400 select-none text-xl">🌸</div>
              <div className="absolute top-2 right-3 text-pink-400 select-none text-xl">🌸</div>

              {/* Sparkle badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-pink-700 text-xs font-bold uppercase tracking-widest mb-4 border border-pink-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Mensaje del Reino</span>
              </div>

              <h2 className="font-script text-3xl sm:text-4xl text-pink-600 font-bold mb-1">
                Decreto Real
              </h2>

              <p className="font-serif-royal text-xl sm:text-2xl font-black text-pink-950 mb-2">
                Para Ti: Una Invitación Especial
              </p>

              <p className="text-xs text-gray-700 font-medium mb-6 leading-relaxed">
                El castillo de las princesas abre sus puertas para celebrar el cumpleaños de nuestra pequeña princesa{' '}
                <span className="font-bold text-pink-900">{invitation.celebrantName}</span>.
              </p>

              {/* Royal Seal Button to Open Invitation */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleOpenEnvelope}
                className="relative inline-flex flex-col items-center justify-center w-28 h-28 rounded-full bg-linear-to-br from-pink-500 via-rose-500 to-pink-600 text-white shadow-2xl border-4 border-white hover:shadow-pink-400/80 transition-all cursor-pointer group mx-auto"
              >
                <div className="absolute -inset-2 rounded-full border-2 border-dashed border-pink-300 animate-spin" style={{ animationDuration: '9s' }} />
                <Crown className="w-9 h-9 text-white fill-white/80 group-hover:scale-110 transition-transform mb-1" />
                <span className="text-[11px] font-black uppercase tracking-wider text-pink-100">
                  Abrir Invitación
                </span>
              </motion.button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-pink-800">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Toca el botón para abrir el castillo</span>
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-400" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Controls Header */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between px-4 pt-4 pb-1 z-30 relative">
        {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 text-xs font-semibold text-pink-700 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Castillo de Princesas Bebés</span>
        </div> */}

        <div className="flex items-center gap-2">
          {/* Reopen Envelope Button */}
          <button
            onClick={() => {
              setHasOpenedEnvelope(false);
              setIsCastleOpen(false);
            }}
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/90 hover:bg-pink-50 text-pink-800 text-xs font-bold shadow-xs cursor-pointer transition-all border border-pink-200"
            title="Volver a abrir el sobre e invitación"
          >
            <Crown className="w-3.5 h-3.5 text-pink-500" />
            <span className="hidden sm:inline">Sobre Real</span>
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
