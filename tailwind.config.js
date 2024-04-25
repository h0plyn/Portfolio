/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			green: "#004643",
			white: "#fffffe",
			"light-green": "#abd1c6",
			"dark-green": "#001e1d",
			orange: "#f9bc60",
		},
		fontFamily: {
			sans: "nimbus-sans-extended,  sans-serif",
			mono: "input-mono, monospace",
		},
		screens: {
			lg: "960px",
		},
		extend: {},
	},
	plugins: [],
};
