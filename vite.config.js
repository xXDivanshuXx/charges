import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells MUI to use styled-components
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});
