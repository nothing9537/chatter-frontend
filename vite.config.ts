import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const baseAPI = 'http://localhost:3000';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/graphql': {
        target: baseAPI,
      },
      '/auth/login': {
        target: baseAPI,
      },
      '/auth/logout': {
        target: baseAPI,
      },
    },
  },
});
