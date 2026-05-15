import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons/fi', 'react-icons/fa', 'react-icons/ri'],   // pre-bundle icons (avoids 1000s of module requests)
  },
})