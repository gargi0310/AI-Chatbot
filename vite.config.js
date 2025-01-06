import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Point to the 'chatbot' folder (adjust if needed)
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the dist directory before building
  },
});
