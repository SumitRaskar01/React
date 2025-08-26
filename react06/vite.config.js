// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/getjoke": {
//         target: "https://api.freeapi.app/api/v1/public/randomjokes?limit=1&query=science&inc=categories%252Cid%252Ccontent&page=1",
//         changeOrigin: true
//       }
//     }
//   }
// });

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/getjoke': {
        target: 'https://api.freeapi.app',
        changeOrigin: true,
        rewrite: (path) =>
          '/api/v1/public/randomjokes?limit=1&query=science&inc=categories%2Cid%2Ccontent&page=1',
      },
    },
  },
});
