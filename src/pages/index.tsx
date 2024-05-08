import { graphql } from "gatsby";
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";
import { ExternalLink } from "../components/ExternalLink";

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
		<div className="flex flex-col items-center justify-center px-6 pb-20 pt-32 lg:pt-72">
			<div className="lg:w-9/12 lg:pl-12">
				<div className="font-sans font-normal text-lg/10 text-white pb-4 lg:text-4xl/10">
					{data.header.hero}
				</div>
				<div className="font-sans font-normal text-lg/7 text-white pb-4 lg:text-4xl/10">
					{data.header.subhead}
				</div>
				{data.extendedAbout.edges.map(({ node }) => (
					<div
						key={node.copy}
						className="font-sans text-light-green pb-4 font-normal text-base lg:mt-10 lg:text-4xl/10 lg:break-words"
					>
						{node.copy}
					</div>
				))}
			</div>
		</div>
		<div className="flex flex-col justify-center pb-24 m-auto lg:pt-28">
			<div className="flex flex-col items-center justify-center">
				{data.projects.edges
					.filter(({ node }) => node.shoulddisplay)
					.map(({ node }) => {
						const { image, title, description, projecturl, aspect } = node;
						return (
							<div
								className="flex flex-col items-center h-full w-11/12 mt-6 lg:w-9/12 lg:mt-20 lg:mb-16 lg:odd:flex-row lg:even:flex-row-reverse"
								key={title}
							>
								<a className="w-fit" href={projecturl}>
									<GatsbyImage
										className={`${
											aspect === "vertical"
												? "h-[70vw] lg:h-[28vw]"
												: "h-[50vw] lg:h-[20vw]"
										} px-0 mt-0 mb-4 lg:flex-row lg:flex-1 lg:m-0 lg:p-0`}
										image={image.gatsbyImageData}
										alt={title}
										objectFit="contain"
									/>
								</a>
								<div className="flex flex-col justify-center items-center w-10/12 lg:justify-start lg:items-start lg:flex-auto lg:w-full lg:h-full lg:pl-20">
									<h3 className="font-sans font-normal text-white text-lg mb-4 lg:text-4xl lg:mb-7">
										{title}
									</h3>
									<p className="font-mono font-bold text-sm pl-4 mb-7 lg:text-base lg:pl-0">
										{description}
									</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
		<section className="flex flex-col justify-center w-full bg-light-green p-8 lg:px-40 lg: lg:py-56">
			<div className="font-sans font-light text-2xl leading-10 text-dark-green lg:text-4xl lg:mb-20">
				Previous
			</div>
			{data.history.edges.map(({ node }) => {
				const { job, year, role } = node;
				return (
					<div
						key={`${role}${year}`}
						className="flex flex-col items-start mb-4 border-t-[1px] border-t-dark-green pt-4 w-full lg:py-20 lg:mb-0 lg:m-auto"
					>
						<div className="text-green flex w-full mb-2 lg:items-center lg:justify-center">
							<div className="font-sans text-green text-base font-normal tracking-wide lg:text-2xl lg:flex-1">
								{job}
							</div>
							<div className="text-sm ml-4 font-light mt-1 lg:mt-2 lg:text-xl lg:flex-1">
								{year}
							</div>
							<p className="hidden text-green font-extralight text-xl mr-12 mt-2 flex-[2] lg:flex">
								{role}
							</p>
						</div>
						<p className="text-green text-sm font-extralight lg:hidden">
							{role}
						</p>
					</div>
				);
			})}
		</section>
		<footer className="bg-light-green flex w-full h-12 justify-around items-center lg:justify-start lg:gap-8 lg:pl-56 lg:pb-20">
			<ExternalLink href="https://github.com/h0plyn">Github</ExternalLink>
			<ExternalLink
				href="https://www.linkedin.com/in/rickyrhodes/"
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</ExternalLink>
			<ExternalLink
				href="https://standardresume.co/r/azQnZ76rvx8XG6MLTzvny"
				target="_blank"
				rel="noreferrer"
			>
				Resume
			</ExternalLink>
			<ExternalLink href="mailto:devrickyrhodes@gmail.com?subject=Hey there!">
				Contact
			</ExternalLink>
		</footer>
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
