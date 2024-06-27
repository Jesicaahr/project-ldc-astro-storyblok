/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2897ec',
				'primary-darker': '#1d519a',
			},
			fontFamily: {
				'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
