import { LayoutGroup } from "framer-motion";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import Projects from "../components/Projects";
import History from "../components/History";
import { Footer } from "../components/Footer";

const HomePage = () => {
	return (
		<>
			<GlobalStyles />
			<LayoutGroup>
				<Header />
				<Projects />
			</LayoutGroup>
			<History />
			<Footer />
		</>
	);
};

export default HomePage;
export { Head } from "../lib/head";
