import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function copyBabyAssetsPlugin() {
  return {
    name: 'copy-baby-assets',
    buildStart() {
      try {
        const srcDir = 'C:/Users/antonio.castro/.gemini/antigravity/scratch';
        const publicDir = path.resolve(__dirname, 'public/images');
        const princessesDir = path.resolve(publicDir, 'princesses');

        if (!fs.existsSync(princessesDir)) {
          fs.mkdirSync(princessesDir, { recursive: true });
        }

        const assets = [
          { src: 'new_castle.png', dest: path.join(publicDir, 'castle.png') },
          { src: 'user_rapunzel.png', dest: path.join(princessesDir, 'rapunzel.png') },
          { src: 'user_aurora.png', dest: path.join(princessesDir, 'aurora.png') },
          { src: 'user_ariel_dress.png', dest: path.join(princessesDir, 'ariel.png') },
          { src: 'user_elsa.png', dest: path.join(princessesDir, 'elsa.png') },
          { src: 'user_belle.png', dest: path.join(princessesDir, 'belle.png') },
          { src: 'user_mulan.png', dest: path.join(princessesDir, 'mulan.png') },
          { src: 'user_anna.png', dest: path.join(princessesDir, 'anna.png') },
        ];

        for (const item of assets) {
          const fullSrc = path.join(srcDir, item.src);
          if (fs.existsSync(fullSrc)) {
            fs.copyFileSync(fullSrc, item.dest);
          }
        }
      } catch (e) {
        console.warn('Could not auto-copy baby assets:', e);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), copyBabyAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
