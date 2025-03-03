import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// export default defineConfig({
//   base: "./", // ✅ Ensures assets are referenced correctly
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: "index.html", // ✅ Ensure Vite knows to process index.html
//       output: {
//         entryFileNames: "assets/index.js",
//         chunkFileNames: "assets/[name].js",
//         assetFileNames: "assets/[name].[ext]"
//       }
//     }
//   }
// });

export default defineConfig({
  base: "./", // Correct for Chrome extension
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Use non-module format for Chrome extensions
    modulePreload: false,
    rollupOptions: {
      // No need to specify input, Vite uses index.html by default
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Use IIFE format instead of ESM for Chrome extension compatibility
        format: 'iife'
      }
    }
  }
});

