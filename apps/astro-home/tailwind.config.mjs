/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	  // Añade otras rutas si es necesario
	],
	theme: {
	  extend: {
		colors: {
		  customGold: '#D6BA00', // Añade tu color personalizado aquí
		},
		animation: {
		  rotate: 'rotate 60s linear infinite',
		},
		keyframes: {
		  rotate: {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
		translate: {
		  '18': '4.5rem', // Ajusta este valor según sea necesario
		},
	  },
	},
	plugins: [],
  };
  