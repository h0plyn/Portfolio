import React from "react";
import { LayoutGroup } from "framer-motion";
import GlobalStyles from "../GlobalStyles";
import App from "../components";
import "./styles.css";

const Home = () => {
	return (
		<div className="home">
			<GlobalStyles />
			<LayoutGroup>
				<App />
			</LayoutGroup>
		</div>
	);
};

export default Home;
export { Head } from "../lib/head";
