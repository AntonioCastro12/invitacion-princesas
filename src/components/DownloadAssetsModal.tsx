import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Sparkles, Check, Castle } from 'lucide-react';
import { PRINCESSES_DATA } from '../types/invitation';

interface DownloadAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAssetsModal: React.FC<DownloadAssetsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setDownloadedItem(filename);
      setTimeout(() => setDownloadedItem(null), 2500);
    } catch {
      // Fallback direct link download
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.click();
    }
  };

  const handleDownloadAll = async () => {
    // Sequentially trigger downloads
    const items = [
      { url: '/images/castle.png', name: 'castillo_real_dibujo.png' },
      ...PRINCESSES_DATA.map((p) => ({
        url: `/images/princesses/${p.id}.png`,
        name: `princesa_${p.id}_dibujo.png`,
      })),
    ];

    for (let i = 0; i < items.length; i++) {
      await handleDownload(items[i].url, items[i].name);
      await new Promise((r) => setTimeout(r, 200));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-950/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-[#fff5f7] via-[#fde8ed] to-[#fce4ec] rounded-[32px] p-6 sm:p-7 border-2 border-pink-300 shadow-2xl my-8 text-center max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-pink-100 text-pink-700 transition-colors cursor-pointer"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-pink-700 text-xs font-bold uppercase tracking-wider mb-2 border border-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Descarga de Imágenes Mágicas</span>
          </div>

          <h3 className="font-serif-royal text-2xl font-bold text-pink-950 mb-1">
            Princesas Bebés y Castillo
          </h3>

          <p className="text-xs text-gray-700 font-medium mb-5 max-w-sm mx-auto leading-relaxed">
            Descarga las ilustraciones oficiales de las Princesas Bebés y el Castillo Encantado en alta resolución con fondo transparente (formato PNG) para imprimir recuerdos, souvenirs, decoración o tus invitaciones físicas.
          </p>

          {/* Download All Button */}
          <div className="mb-6">
            <button
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Todo el Paquete Real (Castillo + 5 Princesas Bebés)</span>
            </button>
          </div>

          {/* Castle Card */}
          <div className="bg-white/90 rounded-2xl p-4 border border-pink-200 mb-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-16 h-18 bg-pink-50 rounded-xl p-1 flex items-center justify-center border border-pink-200 shrink-0">
                <img
                  src="/images/castle.png"
                  alt="Castillo Real de Cuento"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs text-pink-950 block flex items-center gap-1">
                  <Castle className="w-3.5 h-3.5 text-pink-500" />
                  Gran Castillo de Cuento Real
                </span>
                <span className="text-[11px] text-gray-500 font-medium block">
                  Ilustración Acuarela • PNG Transparente
                </span>
              </div>
            </div>

            <button
              onClick={() => handleDownload('/images/castle.png', 'castillo_real_cuento.png')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              {downloadedItem === 'castillo_real_cuento.png' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Descargado!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Castillo</span>
                </>
              )}
            </button>
          </div>

          {/* Princesses Grid */}
          <div className="text-left mb-2">
            <span className="text-xs font-bold text-pink-900 uppercase tracking-wider block">
              Princesas Bebés (PNG Transparente)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PRINCESSES_DATA.map((p) => {
              const filename = `princesa_${p.id}_dibujo.png`;
              const isDownloaded = downloadedItem === filename;

              return (
                <div
                  key={p.id}
                  className="bg-white/90 rounded-2xl p-2.5 border border-pink-200 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group"
                >
                  <div className="w-16 h-20 flex items-center justify-center p-1">
                    <img
                      src={`/images/princesses/${p.id}.png`}
                      alt="Princesa Bebé"
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <button
                    onClick={() => handleDownload(`/images/princesses/${p.id}.png`, filename)}
                    className={`w-full mt-2 py-1.5 px-2 rounded-xl text-[11px] font-bold inline-flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      isDownloaded
                        ? 'bg-green-500 text-white'
                        : 'bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>¡Listo!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3 h-3 text-pink-500" />
                        <span>Descargar</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-5 text-center">
            <button
              onClick={onClose}
              className="text-xs font-bold text-pink-800 hover:text-pink-950 underline cursor-pointer"
            >
              Cerrar y volver a la invitación
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
