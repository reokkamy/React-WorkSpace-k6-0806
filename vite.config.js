// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api-busan': {
                target: 'https://apis.data.go.kr',
                changeOrigin: true,
                secure: true,
                rewrite: p => p.replace(/^\/api-busan/, ''),
            },
        },
    },
})
