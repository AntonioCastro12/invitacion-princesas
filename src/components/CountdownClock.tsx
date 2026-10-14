import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface CountdownClockProps {
  eventDateIso: string;
  celebrantName: string;
  venueName: string;
  venueAddress: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownClock: React.FC<CountdownClockProps> = ({
  eventDateIso,
  celebrantName,
  venueName,
  venueAddress,
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(eventDateIso).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (isNaN(target) || diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDateIso]);

  // Google Calendar link generator
  const getGoogleCalendarUrl = () => {
    const target = new Date(eventDateIso);
    if (isNaN(target.getTime())) return '#';
    const startIso = target.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const end = new Date(target.getTime() + 4 * 60 * 60 * 1000); // 4 hour party
    const endIso = end.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const title = encodeURIComponent(`Cumpleaños Real de ${celebrantName} 👑`);
    const details = encodeURIComponent(`¡Te esperamos para celebrar este mágico cumpleaños de princesas en ${venueName}!`);
    const location = encodeURIComponent(`${venueName}, ${venueAddress}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  // Download .ics file for Apple Calendar / Outlook
  const downloadIcs = () => {
    soundManager.playMagicWand();
    const target = new Date(eventDateIso);
    const end = new Date(target.getTime() + 4 * 60 * 60 * 1000);
    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Invitacion Princesas//ES',
      'BEGIN:VEVENT',
      `SUMMARY:Cumpleaños Real de ${celebrantName} 👑`,
      `DESCRIPTION:¡Gran fiesta mágica de princesas!`,
      `LOCATION:${venueName}, ${venueAddress}`,
      `DTSTART:${formatDate(target)}`,
      `DTEND:${formatDate(end)}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Fiesta_${celebrantName.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-gradient-to-b from-rose-50/90 to-pink-100/90 rounded-3xl p-6 border-2 border-pink-200/90 shadow-xl text-center relative overflow-hidden">
      {/* Decorative top ribbon */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
        <Clock className="w-3.5 h-3.5 text-pink-500" />
        <span>Cuenta Regresiva Real</span>
      </div>

      <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-pink-950 mb-4">
        {timeLeft.isPast ? '¡El Gran Día Ha Llegado!' : 'Faltan Pocos Días Para la Magia'}
      </h3>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto mb-6">
        {[
          { label: 'DÍAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MINUTOS', value: timeLeft.minutes },
          { label: 'SEGUNDOS', value: timeLeft.seconds },
        ].map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-xs border-2 border-pink-200 shadow-md transform hover:scale-105 transition-transform"
          >
            <span className="font-serif-royal font-black text-2xl sm:text-3xl text-pink-600">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-pink-900 tracking-wider mt-0.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Calendar Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playMagicWand()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold shadow-md hover:shadow-pink-300 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Google Calendar</span>
        </a>

        <button
          onClick={downloadIcs}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-pink-50 text-pink-800 border border-pink-300 text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Guardar en Calendario (.ics)</span>
        </button>
      </div>
    </div>
  );
};
