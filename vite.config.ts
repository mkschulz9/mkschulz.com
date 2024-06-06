import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mkschulz9.github.io/',
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      // Additional Rollup build options can be specified here
    },
  },
});
