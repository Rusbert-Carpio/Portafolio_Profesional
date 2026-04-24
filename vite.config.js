import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Si publicas en GitHub Pages dentro de un repositorio llamado, por ejemplo,
// "portfolio", cambia base a: '/portfolio/'
// Para dominio propio o localhost, déjalo en '/'.
export default defineConfig({
    plugins: [react()],
    base: '/Portafolio_Profesional/',
});