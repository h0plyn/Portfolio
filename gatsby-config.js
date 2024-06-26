require("dotenv").config();

module.exports = {
	flags: {
		PARTIAL_HYDRATION: true,
	},
	plugins: [
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-image",
		"gatsby-plugin-typescript",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: "gatsby-source-datocms",
			options: {
				apiToken: process.env.DATO_API_KEY,
				disableLiveReload: false,
				previewMode: true,
			},
		},
	],
};
