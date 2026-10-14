import React, { useState } from 'react';

interface RealPrincessImageProps {
  id: string;
  name: string;
  size?: number; // width in pixels
  className?: string;
  onClick?: () => void;
  showSparkle?: boolean;
}

export const RealPrincessImage: React.FC<RealPrincessImageProps> = ({
  id,
  name,
  size = 130,
  className = '',
  onClick,
  showSparkle = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = `/images/princesses/${id}.png`;

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
      style={{ width: size }}
    >
      {/* Sparkle halo behind character */}
      {showSparkle && (
        <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}

      {/* Real Disney Princess PNG - No name tag as requested */}
      <div className="relative w-full aspect-[3/4] flex items-end justify-center filter drop-shadow-md group-hover:drop-shadow-xl transition-all">
        <img
          src={imageSrc}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={`max-w-full max-h-full object-contain pointer-events-none transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-80 scale-95'
          }`}
          loading="eager"
        />
      </div>
    </div>
  );
};
