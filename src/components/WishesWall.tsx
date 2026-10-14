import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface Wish {
  id: string;
  name: string;
  text: string;
  time: string;
  emoji: string;
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Tía Carolina y Familia',
    text: '¡Que disfrutes tu fiesta al máximo mi princesa hermosa! Eres la alegría de la familia.',
    time: 'Hace 2 horas',
    emoji: '👑',
  },
  {
    id: '2',
    name: 'Princesita Valentina',
    text: '¡Ya quiero que bailemos juntas con Cenicienta y Ariel! Feliz cumpleaños amiga.',
    time: 'Ayer',
    emoji: '💖',
  },
  {
    id: '3',
    name: 'Padrinos Roberto y Elena',
    text: 'Que Dios llene tu vida de bendiciones, magia y muchas sonrisas.',
    time: 'Ayer',
    emoji: '✨',
  },
];

export const WishesWall: React.FC<{ celebrantName: string }> = ({ celebrantName }) => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('princess_invitation_wishes');
      return saved ? JSON.parse(saved) : DEFAULT_WISHES;
    } catch {
      return DEFAULT_WISHES;
    }
  });

  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('princess_invitation_wishes', JSON.stringify(wishes));
    } catch {
      // storage error
    }
  }, [wishes]);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    soundManager.playMagicWand();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ec4899', '#fde047', '#38bdf8'],
    });

    const emojis = ['👑', '💖', '✨', '🌹', '🥿', '🎀', '🪄'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const newWish: Wish = {
      id: Date.now().toString(),
      name: author.trim(),
      text: text.trim(),
      time: 'Justo ahora',
      emoji: randomEmoji,
    };

    setWishes([newWish, ...wishes]);
    setAuthor('');
    setText('');
  };

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 rounded-3xl p-6 border-2 border-pink-200 shadow-xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2.5 rounded-2xl bg-pink-500 text-white">
          <Heart className="w-5 h-5 fill-white" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest block">
            Cofre de Recuerdos
          </span>
          <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-pink-950">
            Deseos para {celebrantName}
          </h3>
        </div>
      </div>

      <p className="text-xs text-gray-700 font-medium mb-4">
        Deja un mensaje cariñoso que la princesa guardará por siempre en su libro de cuentos.
      </p>

      {/* New wish input */}
      <form onSubmit={handleAddWish} className="mb-5 space-y-2.5 bg-white/90 p-3.5 rounded-2xl border border-pink-200">
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Tu Nombre / Familia"
          className="w-full px-3.5 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
        />
        <div className="flex gap-2">
          <input
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe tu deseo mágico..."
            className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold flex items-center gap-1 shadow-md cursor-pointer"
          >
            <span>Publicar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Wishes list */}
      <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {wishes.map((w) => (
          <div
            key={w.id}
            className="p-3.5 rounded-2xl bg-white/80 border border-pink-100 shadow-xs flex items-start gap-3 transition-all hover:bg-white"
          >
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-base shrink-0 shadow-xs">
              {w.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <h5 className="font-bold text-xs text-pink-950 truncate">{w.name}</h5>
                <span className="text-[10px] text-pink-400 font-medium">{w.time}</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">&ldquo;{w.text}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
