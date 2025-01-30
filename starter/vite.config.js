import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Dossier source
  build: {
    target: 'es6', // Vise ES6
    outDir: '../dist', // Dossier de sortie
    emptyOutDir: true, // Vide le dossier dist avant de générer
  },
})
