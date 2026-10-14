import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface LocationSectionProps {
  venueName: string;
  venueAddress: string;
  googleMapsUrl?: string;
  dressCode?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  venueName,
  venueAddress,
  googleMapsUrl,
  dressCode,
}) => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${venueName}, ${venueAddress}`;
  const mapsLink =
    googleMapsUrl && googleMapsUrl.length > 5
      ? googleMapsUrl
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const wazeLink = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}`;

  const handleCopy = () => {
    soundManager.playMagicWand();
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-pink-200 shadow-xl relative overflow-hidden">
      {/* Background Decorative Castle Crest */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none text-pink-600">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M 20 80 L 20 50 L 30 50 L 30 80 L 50 80 L 50 40 L 40 40 L 50 20 L 60 40 L 50 40 L 50 80 L 70 80 L 70 50 L 80 50 L 80 80 Z" />
        </svg>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-2xl bg-pink-100 text-pink-600">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest block">
            Ubicación del Reino
          </span>
          <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-pink-950">
            {venueName}
          </h3>
        </div>
      </div>

      <p className="text-sm text-gray-700 font-medium mb-4 pl-1 flex items-start gap-1.5">
        <span>📍</span>
        <span>{venueAddress}</span>
      </p>

      {/* Dress code note if available */}
      {dressCode && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 mb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-pink-900 mb-0.5">
            <span>✨</span>
            <span>Código de Vestimenta Real:</span>
          </div>
          <p className="text-xs text-pink-950 font-medium">{dressCode}</p>
        </div>
      )}

      {/* Map Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playMagicWand()}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs font-bold shadow-md hover:shadow-pink-300 transition-all cursor-pointer"
        >
          <Navigation className="w-4 h-4" />
          <span>Abrir en Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>

        <a
          href={wazeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playMagicWand()}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md hover:shadow-sky-300 transition-all cursor-pointer"
        >
          <span>🚗</span>
          <span>Abrir en Waze</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      <div className="mt-3 flex justify-center">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-semibold py-1.5 px-3 rounded-full hover:bg-pink-50 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">¡Dirección Copiada al Portapapeles!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar dirección para compartir o GPS</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
