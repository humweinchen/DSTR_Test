import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps the built site working from any sub-path,
// e.g. https://<user>.github.io/DSTR_Test/
export default defineConfig({
  plugins: [react()],
  base: './',
});
