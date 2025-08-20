import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        proxy: {
            '/api/humetro': {
                target: 'http://data.humetro.busan.kr',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/api\/humetro/, ''),
            },
        },
    }


});

