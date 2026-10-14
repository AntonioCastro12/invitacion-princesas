import React, { useState } from 'react';
import { X, Save, RotateCcw, Share2, Check, Sparkles } from 'lucide-react';
import { InvitationData, DEFAULT_INVITATION } from '../types/invitation';
import { soundManager } from '../utils/soundEffects';
import { CustomImageUploader } from './CustomImageUploader';

interface EditInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  invitation: InvitationData;
  onSave: (newData: InvitationData) => void;
}

export const EditInvitationModal: React.FC<EditInvitationModalProps> = ({
  isOpen,
  onClose,
  invitation,
  onSave,
}) => {
  const [formData, setFormData] = useState<InvitationData>(invitation);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof InvitationData, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playMagicWand();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    soundManager.playMagicWand();
    if (confirm('¿Deseas restaurar los datos de ejemplo predeterminados?')) {
      setFormData(DEFAULT_INVITATION);
    }
  };

  const handleShareLink = () => {
    soundManager.playMagicWand();
    try {
      const json = JSON.stringify(formData);
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(json))));
      const shareUrl = `${window.location.origin}${window.location.pathname}?invite=${encoded}`;

      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-pink-300 p-6 my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-pink-100 text-gray-500 hover:text-pink-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-2xl bg-pink-100 text-pink-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif-royal font-bold text-xl text-pink-950">
              Personalizar Invitación Real
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Modifica los datos y agrega tus fotos o imágenes de WhatsApp.
            </p>
          </div>
        </div>

        {/* Custom Image Uploader for WhatsApp Images */}
        <div className="mb-5">
          <CustomImageUploader
            customImageUrl={formData.customImageUrl}
            layoutMode={formData.layoutMode}
            onImageSelected={(url) => handleChange('customImageUrl', url)}
            onLayoutChange={(mode) => handleChange('layoutMode', mode)}
          />
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs font-medium text-gray-700">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="block font-bold text-pink-900 mb-1">Nombre de la Festejada</label>
              <input
                type="text"
                required
                value={formData.celebrantName}
                onChange={(e) => handleChange('celebrantName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block font-bold text-pink-900 mb-1">Edad a Cumplir</label>
              <input
                type="number"
                min="1"
                max="18"
                required
                value={formData.celebrantAge}
                onChange={(e) => handleChange('celebrantAge', parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-pink-900 mb-1">Frase o Cuento de Introducción</label>
            <textarea
              rows={2}
              value={formData.storyMessage}
              onChange={(e) => handleChange('storyMessage', e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-bold text-pink-900 mb-1">Texto de Fecha</label>
              <input
                type="text"
                value={formData.dateText}
                onChange={(e) => handleChange('dateText', e.target.value)}
                placeholder="Ej. Sábado, 28 de Noviembre"
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block font-bold text-pink-900 mb-1">Texto de Hora</label>
              <input
                type="text"
                value={formData.timeText}
                onChange={(e) => handleChange('timeText', e.target.value)}
                placeholder="Ej. 4:00 PM"
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-pink-900 mb-1">
              Fecha ISO (para la Cuenta Regresiva)
            </label>
            <input
              type="datetime-local"
              value={formData.eventDateIso.slice(0, 16)}
              onChange={(e) => handleChange('eventDateIso', `${e.target.value}:00`)}
              className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block font-bold text-pink-900 mb-1">Nombre del Salón / Lugar</label>
            <input
              type="text"
              value={formData.venueName}
              onChange={(e) => handleChange('venueName', e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block font-bold text-pink-900 mb-1">Dirección Completa</label>
            <input
              type="text"
              value={formData.venueAddress}
              onChange={(e) => handleChange('venueAddress', e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-bold text-pink-900 mb-1">
                WhatsApp para Confirmaciones
              </label>
              <input
                type="text"
                value={formData.whatsappPhone}
                onChange={(e) => handleChange('whatsappPhone', e.target.value)}
                placeholder="Ej. 5215512345678"
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
              <span className="text-[10px] text-gray-500">Incluye código de país (sin +)</span>
            </div>
            <div>
              <label className="block font-bold text-pink-900 mb-1">Código de Vestimenta</label>
              <input
                type="text"
                value={formData.dressCode}
                onChange={(e) => handleChange('dressCode', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-pink-900 mb-1">Sugerencia de Regalo</label>
            <input
              type="text"
              value={formData.giftSuggestion}
              onChange={(e) => handleChange('giftSuggestion', e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Shareable Link Generator Button */}
          <div className="p-3 bg-pink-50 rounded-2xl border border-pink-200 flex flex-col gap-2">
            <span className="text-[11px] font-bold text-pink-900">
              🔗 Enlace Compartible Personalizado
            </span>
            <p className="text-[10px] text-gray-600">
              Genera un enlace con todos estos datos grabados para enviarlo por WhatsApp a tus invitados.
            </p>
            <button
              type="button"
              onClick={handleShareLink}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white hover:bg-pink-100 border border-pink-300 text-pink-700 font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">¡Enlace Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-pink-600" />
                  <span>Copiar Enlace para WhatsApp</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restaurar</span>
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-md cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Cambios</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
