import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'stera-icons/icons': path.resolve(__dirname, '../../src/icons'),
      'stera-icons': path.resolve(__dirname, '../../src'),
    },
  },
  server: {
    port: 3000,
  },
});
