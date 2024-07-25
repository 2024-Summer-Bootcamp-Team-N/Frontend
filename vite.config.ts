import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: process.env.NODE_ENV === 'development'
      ? {
          host: 'localhost',
          port: 5173,
        }
      : false, // 배포 환경에서는 HMR을 비활성화
  },
  optimizeDeps: {
    include: ['html2canvas']
  },
});

