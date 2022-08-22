/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			dark: "#0d1117",
			yellow: {
			  400: "#F1C40F",
			},
		  },
		},
	  },
	plugins: [require("@tailwindcss/typography")],
}
