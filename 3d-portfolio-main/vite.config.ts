import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Yeh Vite ko batayega ke library ke andar 'module' ya 'main' file dhoonde
    mainFields: ['module', 'main'],
  },
  optimizeDeps: {
    include: ['three', 'three-stdlib'],
  },
});