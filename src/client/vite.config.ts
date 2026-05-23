import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dolphin-web/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': { target: 'https://new-market-maker.dev.decodebackoffice.com', changeOrigin: true },
      '/fapi': { target: 'https://new-market-maker.dev.decodebackoffice.com', changeOrigin: true },
    },
  },
});
