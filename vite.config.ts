import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '/singularis-test-2024/',
  resolve: {
    alias: {
      types: path.resolve(__dirname, './src/types'),

      features: path.resolve(__dirname, './src/features'),
      components: path.resolve(__dirname, './src/compoents'),
      shared: path.resolve(__dirname, './src/shared'),
      widgets: path.resolve(__dirname, './src/widgets')
      // components: `${path.resolve(__dirname, './src/components/')}`,
      // public: `${path.resolve(__dirname, './public/')}`,
    }
  }
});
