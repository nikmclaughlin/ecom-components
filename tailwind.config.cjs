const { black } = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
			gridTemplateColumns: {
				'two-thirds' : '2fr 1fr',
				'review' : 'min-content auto'
			},
		},
	},
	plugins: [require("daisyui"), plugin(function({ addComponents }) {
		addComponents({
			'.fwborder' : {
				borderWidth: '2px',
				borderColor: '#f00',
			}
		})
	})],
	daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", { 
			armada: {
				"primary": "#38bdf8",
				"secondary": "#ec4899",
				"accent": "#a855f7",
				"neutral": "#111827",
				"base-100": "#f3f4f6",
				"info": "#6b7280",
				"success": "#a3e635",
				"warning": "#facc15",
				"error": "#ef4444",
			}, }, ],
  },
}
