import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MessageCircle, CheckCircle, Send, User, Users, Heart } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface WhatsAppRSVPProps {
  celebrantName: string;
  whatsappPhone: string;
}

export const WhatsAppRSVP: React.FC<WhatsAppRSVPProps> = ({
  celebrantName,
  whatsappPhone,
}) => {
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [adultsCount, setAdultsCount] = useState(1);
  const [kidsCount, setKidsCount] = useState(1);
  const [customWish, setCustomWish] = useState('');
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const cleanPhone = whatsappPhone.replace(/\D/g, '');

  const generateWhatsAppMessage = () => {
    let msg = `👑 *CONFIRMACIÓN REAL - FIESTA DE ${celebrantName.toUpperCase()}*\n\n`;
    msg += `✨ *Invitado(s):* ${guestName || 'Invitado Real'}\n`;
    if (attending === 'yes') {
      msg += `🎉 *Estado:* ¡Sí, asistiremos con mucha alegría!\n`;
      msg += `👥 *Adultos:* ${adultsCount}\n`;
      msg += `👧 *Niños:* ${kidsCount}\n`;
    } else {
      msg += `💌 *Estado:* Lamentablemente no podremos asistir, pero enviamos nuestros mejores deseos con mucho cariño.\n`;
    }

    if (customWish.trim()) {
      msg += `💖 *Mensaje para la Princesa:* "${customWish.trim()}"\n`;
    }

    msg += `\n🏰 ¡Muchas gracias por la invitación tan hermosa! ✨`;
    return msg;
  };

  const handleSendRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      soundManager.playMagicWand();
      alert('Por favor ingresa tu nombre o el de tu familia para la confirmación real ✨');
      return;
    }

    soundManager.playMagicWand();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#22c55e', '#ffd700', '#f472b6', '#ffffff'],
    });

    setHasConfirmed(true);

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const targetPhone = cleanPhone || '5215512345678';
    const waUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <div className="w-full bg-gradient-to-br from-emerald-50/90 via-pink-50/90 to-rose-50/90 rounded-3xl p-6 border-2 border-emerald-300 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2.5 rounded-2xl bg-emerald-500 text-white shadow-md">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block">
            Pase Real de Entrada
          </span>
          <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-pink-950">
            Confirmación de Asistencia
          </h3>
        </div>
      </div>

      <p className="text-xs text-gray-700 font-medium mb-5">
        Por favor confirma tu asistencia para que el reino prepare tu lugar de honor en la corte real.
      </p>

      {hasConfirmed && (
        <div className="mb-5 p-3 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center gap-2.5 text-xs text-emerald-900 font-semibold">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>¡Confirmación enviada con éxito! Puedes volver a pulsar el botón si necesitas reenviarla.</span>
        </div>
      )}

      <form onSubmit={handleSendRSVP} className="space-y-4">
        {/* Guest Name */}
        <div>
          <label className="block text-xs font-bold text-pink-900 mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-pink-500" />
            <span>Nombre de la Familia o Invitado(s) *</span>
          </label>
          <input
            type="text"
            required
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Ej. Familia Rodríguez o Mariana Pérez"
            className="w-full px-4 py-2.5 rounded-2xl bg-white border-2 border-pink-200 focus:border-pink-500 focus:outline-none text-sm text-gray-800 placeholder-gray-400 font-medium shadow-xs"
          />
        </div>

        {/* Attendance Toggle */}
        <div>
          <label className="block text-xs font-bold text-pink-900 mb-1.5">
            ¿Podrás acompañarnos al reino encantado?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setAttending('yes');
                soundManager.playMagicWand();
              }}
              className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                attending === 'yes'
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-[1.02]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span>👑</span>
              <span>¡Sí, asistiré!</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAttending('no');
                soundManager.playMagicWand();
              }}
              className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                attending === 'no'
                  ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-[1.02]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span>💌</span>
              <span>No podré asistir</span>
            </button>
          </div>
        </div>

        {/* Guest counts (Only if attending) */}
        {attending === 'yes' && (
          <div className="p-3.5 rounded-2xl bg-white/80 border border-pink-200 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold text-pink-900 flex items-center gap-1 mb-1.5">
                <Users className="w-3.5 h-3.5 text-pink-500" />
                <span>Adultos</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdultsCount(Math.max(1, adultsCount - 1))}
                  className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 font-bold flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-serif-royal font-bold text-lg text-pink-950 w-6 text-center">
                  {adultsCount}
                </span>
                <button
                  type="button"
                  onClick={() => setAdultsCount(adultsCount + 1)}
                  className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 font-bold flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-pink-900 flex items-center gap-1 mb-1.5">
                <span>👧</span>
                <span>Niños / Niñas</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setKidsCount(Math.max(0, kidsCount - 1))}
                  className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 font-bold flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-serif-royal font-bold text-lg text-pink-950 w-6 text-center">
                  {kidsCount}
                </span>
                <button
                  type="button"
                  onClick={() => setKidsCount(kidsCount + 1)}
                  className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 font-bold flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sweet Wish for the Princess */}
        <div>
          <label className="block text-xs font-bold text-pink-900 mb-1 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Mensaje o Deseo Especial para la Princesa (Opcional)</span>
          </label>
          <textarea
            rows={2}
            value={customWish}
            onChange={(e) => setCustomWish(e.target.value)}
            placeholder="¡Que todos tus deseos de cuento de hadas se hagan realidad!"
            className="w-full px-4 py-2 rounded-2xl bg-white border-2 border-pink-200 focus:border-pink-500 focus:outline-none text-xs text-gray-800 placeholder-gray-400 font-medium shadow-xs"
          />
        </div>

        {/* Submit to WhatsApp Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm shadow-lg hover:shadow-emerald-200 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Confirmar Asistencia por WhatsApp</span>
          <Send className="w-4 h-4 ml-1" />
        </button>
      </form>
    </div>
  );
};
