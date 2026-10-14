import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Clock, Crown, Gift, Shirt, ArrowUp, Heart } from 'lucide-react';
import { InvitationData } from '../types/invitation';
import { CountdownClock } from './CountdownClock';
import { LocationSection } from './LocationSection';
import { WhatsAppRSVP } from './WhatsAppRSVP';
import { WishesWall } from './WishesWall';
import { soundManager } from '../utils/soundEffects';

interface RoyalStorybookDetailsProps {
  invitation: InvitationData;
  onScrollToTop: () => void;
}

export const RoyalStorybookDetails: React.FC<RoyalStorybookDetailsProps> = ({
  invitation,
  onScrollToTop,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 space-y-8 relative z-20">
      {/* Chapter 1: The Royal Story Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#fffcf7] rounded-3xl p-6 sm:p-8 border-4 border-pink-200 shadow-2xl relative overflow-hidden text-center"
      >
        {/* Parchment background decorative corners */}
        <div className="absolute top-2 left-2 text-pink-300 select-none text-2xl font-serif">❦</div>
        <div className="absolute top-2 right-2 text-pink-300 select-none text-2xl font-serif">❦</div>
        <div className="absolute bottom-2 left-2 text-pink-300 select-none text-2xl font-serif">❦</div>
        <div className="absolute bottom-2 right-2 text-pink-300 select-none text-2xl font-serif">❦</div>

        {/* Seal Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg mb-3 border-2 border-white">
          <Crown className="w-7 h-7 text-white fill-white/80" />
        </div>

        <p className="font-script text-3xl sm:text-4xl text-pink-600 font-bold mb-1">
          Decreto Real
        </p>

        <h2 className="font-serif-royal text-2xl sm:text-3xl font-extrabold text-pink-950 mb-3">
          El Mágico Cumpleaños de {invitation.celebrantName}
        </h2>

        <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed italic max-w-md mx-auto mb-5">
          &ldquo;{invitation.storyMessage}&rdquo;
        </p>

        {/* Parents and Godparents line if available */}
        {(invitation.parentNames || invitation.godparentNames) && (
          <div className="border-t border-b border-pink-200 py-3 my-4 flex flex-col gap-1 text-xs text-pink-900 font-semibold">
            {invitation.parentNames && (
              <p>
                <span className="text-pink-600 font-bold">Con la bendición de sus papás:</span>{' '}
                {invitation.parentNames}
              </p>
            )}
            {invitation.godparentNames && (
              <p>
                <span className="text-pink-600 font-bold">Padrinos:</span>{' '}
                {invitation.godparentNames}
              </p>
            )}
          </div>
        )}

        {/* Big Date and Time Badge */}
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mx-auto mt-2">
          <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-pink-50 border border-pink-200">
            <Calendar className="w-5 h-5 text-pink-600" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-pink-500 block">Día Especial</span>
              <span className="text-xs font-bold text-pink-950">{invitation.dateText}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-rose-50 border border-pink-200">
            <Clock className="w-5 h-5 text-rose-600" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-rose-500 block">Hora Real</span>
              <span className="text-xs font-bold text-pink-950">{invitation.timeText}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chapter 2: Real-time Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CountdownClock
          eventDateIso={invitation.eventDateIso}
          celebrantName={invitation.celebrantName}
          venueName={invitation.venueName}
          venueAddress={invitation.venueAddress}
        />
      </motion.div>

      {/* Chapter 3: Venue & Google Maps Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LocationSection
          venueName={invitation.venueName}
          venueAddress={invitation.venueAddress}
          googleMapsUrl={invitation.googleMapsUrl}
          dressCode={invitation.dressCode}
        />
      </motion.div>

      {/* Chapter 4: Royal Itinerary Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-pink-200 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2.5 rounded-2xl bg-purple-500 text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block">
              Programa de Gala
            </span>
            <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-pink-950">
              Itinerario del Gran Baile
            </h3>
          </div>
        </div>

        <div className="relative border-l-2 border-pink-300 ml-4 pl-6 space-y-6">
          {invitation.itinerary.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-pink-100 border-2 border-pink-500 flex items-center justify-center text-xs shadow-md group-hover:scale-110 transition-transform">
                {idx === 0 && '👑'}
                {idx === 1 && '💃'}
                {idx === 2 && '🍰'}
                {idx === 3 && '🎂'}
                {idx >= 4 && '🎁'}
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                {item.time}
              </div>
              <h4 className="font-serif-royal font-bold text-sm text-pink-950">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 font-medium mt-0.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chapter 5: Dress code and Gift Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="p-5 rounded-3xl bg-pink-50/90 border border-pink-200 shadow-md">
          <div className="flex items-center gap-2 mb-2 text-pink-800 font-bold text-xs uppercase tracking-wider">
            <Shirt className="w-4 h-4 text-pink-500" />
            <span>Código de Vestimenta</span>
          </div>
          <p className="text-xs text-gray-700 font-medium leading-relaxed">
            {invitation.dressCode}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-pink-50/90 border border-pink-200 shadow-md">
          <div className="flex items-center gap-2 mb-2 text-pink-800 font-bold text-xs uppercase tracking-wider">
            <Gift className="w-4 h-4 text-pink-500" />
            <span>Mesa de Regalos</span>
          </div>
          <p className="text-xs text-gray-700 font-medium leading-relaxed">
            {invitation.giftSuggestion}
          </p>
        </div>
      </motion.div>

      {/* Chapter 6: Integrated WhatsApp RSVP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <WhatsAppRSVP
          celebrantName={invitation.celebrantName}
          whatsappPhone={invitation.whatsappPhone}
        />
      </motion.div>

      {/* Chapter 7: Digital Wishes Wall */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <WishesWall celebrantName={invitation.celebrantName} />
      </motion.div>

      {/* Return to Castle Button */}
      <div className="text-center pt-4">
        <button
          onClick={() => {
            soundManager.playMagicWand();
            onScrollToTop();
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-pink-50 text-pink-700 border-2 border-pink-300 text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Volver a ver las Princesas y el Castillo</span>
          <Heart className="w-4 h-4 text-pink-400 fill-pink-300" />
        </button>
      </div>
    </div>
  );
};
