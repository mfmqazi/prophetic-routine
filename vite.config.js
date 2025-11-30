import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/prophetic-routine/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shamail: resolve(__dirname, 'shamail.html'),
            },
        },
    },
})
