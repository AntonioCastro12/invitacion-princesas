import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, Trash2, Sparkles, Check } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface CustomImageUploaderProps {
  customImageUrl?: string;
  onImageSelected: (base64Url: string | undefined) => void;
  layoutMode?: string;
  onLayoutChange: (mode: 'castle_center' | 'princesses_borders' | 'watercolor_romantic' | 'custom_uploaded') => void;
}

export const CustomImageUploader: React.FC<CustomImageUploaderProps> = ({
  customImageUrl,
  onImageSelected,
  layoutMode = 'castle_center',
  onLayoutChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    soundManager.playMagicWand();
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      onImageSelected(result);
      onLayoutChange('custom_uploaded');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    soundManager.playMagicWand();
    onImageSelected(undefined);
    onLayoutChange('castle_center');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full bg-white/95 rounded-2xl p-4 border-2 border-pink-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-pink-600" />
          <span className="font-bold text-xs text-pink-950">
            Imágenes de la Invitación
          </span>
        </div>
        {customImageUrl && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className="flex items-center gap-1 text-[11px] text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Quitar Imagen</span>
          </button>
        )}
      </div>

      <p className="text-[11px] text-gray-600 leading-relaxed">
        Sube la captura o imagen de WhatsApp que descargaste de tu teléfono para usarla como fondo o portada del castillo.
      </p>

      {/* Upload button */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="whatsapp-image-upload-input"
        />

        <label
          htmlFor="whatsapp-image-upload-input"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          <Upload className="w-4 h-4" />
          <span>
            {customImageUrl ? 'Cambiar Imagen de WhatsApp' : '📸 Subir Imagen de WhatsApp / Galería'}
          </span>
        </label>
      </div>

      {/* Image Preview thumbnail if uploaded */}
      {customImageUrl && (
        <div className="relative rounded-xl overflow-hidden border-2 border-pink-300 max-h-44 flex items-center justify-center bg-pink-50 shadow-inner">
          <img
            src={customImageUrl}
            alt="Tu imagen de WhatsApp"
            className="w-full h-full object-contain max-h-44 rounded-lg"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
            <Check className="w-3 h-3" />
            <span>Imagen Activa</span>
          </div>
        </div>
      )}

      {/* Layout Presets (Matching user's screenshots) */}
      <div className="pt-2 border-t border-pink-100">
        <span className="block text-[11px] font-bold text-pink-900 mb-2">
          Estilos de Diseño (Inspirados en tus imágenes):
        </span>
        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
          <button
            type="button"
            onClick={() => onLayoutChange('castle_center')}
            className={`p-2 rounded-xl border text-left flex items-center gap-1.5 transition-all cursor-pointer ${
              layoutMode === 'castle_center'
                ? 'bg-pink-100 border-pink-400 text-pink-900 font-bold shadow-xs'
                : 'bg-white border-pink-100 text-gray-700 hover:bg-pink-50'
            }`}
          >
            <span>🏰</span>
            <span>Castillo Central (Img 4)</span>
          </button>

          <button
            type="button"
            onClick={() => onLayoutChange('princesses_borders')}
            className={`p-2 rounded-xl border text-left flex items-center gap-1.5 transition-all cursor-pointer ${
              layoutMode === 'princesses_borders'
                ? 'bg-pink-100 border-pink-400 text-pink-900 font-bold shadow-xs'
                : 'bg-white border-pink-100 text-gray-700 hover:bg-pink-50'
            }`}
          >
            <span>👑</span>
            <span>Princesas en Bordes (Img 3)</span>
          </button>

          <button
            type="button"
            onClick={() => onLayoutChange('watercolor_romantic')}
            className={`p-2 rounded-xl border text-left flex items-center gap-1.5 transition-all cursor-pointer ${
              layoutMode === 'watercolor_romantic'
                ? 'bg-pink-100 border-pink-400 text-pink-900 font-bold shadow-xs'
                : 'bg-white border-pink-100 text-gray-700 hover:bg-pink-50'
            }`}
          >
            <span>🌸</span>
            <span>Acuarela & Cerezos (Img 1)</span>
          </button>

          {customImageUrl && (
            <button
              type="button"
              onClick={() => onLayoutChange('custom_uploaded')}
              className={`p-2 rounded-xl border text-left flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === 'custom_uploaded'
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold shadow-xs'
                  : 'bg-white border-emerald-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <span>🖼️</span>
              <span>Tu Imagen Subida</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
