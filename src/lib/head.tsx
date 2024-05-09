const seo = {
	url: "https://rickyrhodes.dev",
	title: "Ricky Rhodes | Software Engineer",
	description: "TypeScript, GraphQL, NodeJS, Gatsby",
	favicon: "",
	image: "https://dl.dropboxusercontent.com/s/qp7m0pjsrlf3w88/meta.png",
};

export function Head() {
	return (
		<>
			<link
				rel="preconnect"
				href="https://use.typekit.net"
				crossOrigin="anonymous"
			/>
			<link
				rel="preconnect"
				href="https://use.typekit.net/ekg2qbb.css"
				crossOrigin="anonymous"
			/>
			<link rel="stylesheet" href="https://use.typekit.net/ekg2qbb.css" />
			<meta name="theme-color" content="#003331" />
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<link rel="icon" type="image/png" sizes="32x32" href={seo.favicon} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={seo.image} />
			<meta name="twitter:card" content="summary_large_image" />
		</>
	);
}
