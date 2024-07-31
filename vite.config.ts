import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/ws': {
        target: 'http://daphne:8001',
        ws: true,
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      host: 'houseadvisor.site',
      protocol: 'wss',
      clientPort: 443,
    },
  },
  optimizeDeps: {
    include: ['html2canvas'],
  },
});
