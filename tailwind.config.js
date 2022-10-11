/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				// sans: 'Oranienbaum, serif',
				// sans: "'Limelight', cursive",
				// sans: "'Croissant One', cursive",
				sans: "'Antic Didone', serif",
				// serif: "'Petit Formal Script', cursive",
				serif: "'Italiana', serif",
			},
		},
	},
	plugins: [],
}
