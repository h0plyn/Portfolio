import { LayoutGroup } from "framer-motion";
import { Header } from "../components/Header";
import Projects from "../components/Projects";
import History from "../components/History";
import { Footer } from "../components/Footer";
import { graphql } from "gatsby";
import type { IGatsbyImageData } from "gatsby-plugin-image";

export interface PageQueryData {
	header: {
		hero: string;
		subhead: string;
	};
	extendedAbout: {
		edges: {
			node: {
				copy: string;
			};
		}[];
	};
	projects: {
		edges: {
			node: {
				image: {
					gatsbyImageData: IGatsbyImageData;
					title: string;
				};
				description: string;
				projectid: number;
				projecturl: string;
				title: string;
				aspect: "vertical" | "horizontal";
				shoulddisplay: boolean;
			};
		}[];
	};
	history: {
		edges: {
			node: {
				job: string;
				year: string;
				role: string;
			};
		}[];
	};
}

const HomePage = ({ data }: { data: PageQueryData }) => (
	<>
		<LayoutGroup>
			<Header header={data.header} extendedAbout={data.extendedAbout} />
			<Projects data={data.projects} />
		</LayoutGroup>
		<History data={data.history} />
		<Footer />
	</>
);

export const query = graphql`
	query HomePageQuery {
		header: datoCmsHeader {
			hero
			subhead
		}
		extendedAbout: allDatoCmsExtendedtext(sort: { order: ASC }) {
			edges {
				node {
					copy
				}
			}
		}
		projects: allDatoCmsProject(sort: { projectid: ASC }) {
        edges {
          node {
            image {
              gatsbyImageData(layout: CONSTRAINED)
              title
            }
            description
            projectid
            projecturl
            title
            aspect
            shoulddisplay
          }
        }
      }
			history: allDatoCmsExperience(sort: { order: ASC }) {
        edges {
          node {
            order
            role
            job
            year
          }
        }
      }

	}
`;

export default HomePage;
export { Head } from "../lib/head";
