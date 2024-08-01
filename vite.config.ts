import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    https: process.env.NODE_ENV === 'production3' ? {
      key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/houseadvisor.site/privkey.pem')),
      cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/houseadvisor.site/fullchain.pem')),
    } : false,
    proxy: {
      '/ws': {
        target: 'http://daphne:8001',
        ws: true,
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: process.env.NODE_ENV === 'production3' ? {
      host: 'houseadvisor.site',
      protocol: 'wss',
      clientPort: 443,
    } : {
      host: 'localhost',
      protocol: 'ws',
      clientPort: 5173,
    },
  },
  optimizeDeps: {
    include: ['html2canvas'],
  },
});
