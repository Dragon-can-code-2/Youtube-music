import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
            "@component": path.resolve(__dirname, './src/component')
        }
    },
    server: {
        port: 3000
    }
})