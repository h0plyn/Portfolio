import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import type { PageQueryData } from "../pages";

export default function Projects({
	data,
}: { data: PageQueryData["projects"] }) {
	const projects = data.edges.filter(({ node }) => node.shoulddisplay);

	return (
		<motion.div
			className="flex flex-col justify-center pb-24 m-auto lg:pt-28"
			layout
			initial={{ x: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 80,
				bounce: 0.95,
				duration: 0.2,
				damping: 12,
			}}
		>
			<div className="flex flex-col items-center justify-center">
				{projects.map(({ node }) => {
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
		</motion.div>
	);
}
