/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
				sans: ['Plus Jakarta Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
