import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

/// <reference types="vitest" />
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts'
    }
})
