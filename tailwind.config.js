import colors from 'tailwindcss/colors';

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				primary: colors.indigo
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
