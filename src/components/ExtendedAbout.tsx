import { motion } from "framer-motion";
import type { PageQueryData } from "../pages";

export const ExtendedAbout = ({
	data,
}: { data: PageQueryData["extendedAbout"] }) => (
	<motion.div
		layout
		initial={{ y: -50, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		exit={{ y: -50, opacity: 0 }}
		transition={{
			default: { duration: 0.1, delay: 0.2 },
		}}
	>
		{data.edges.map(({ node }) => (
			<div
				key={node.copy}
				className="font-sans text-light-green pb-4 font-normal text-base lg:mt-10 lg:text-4xl/10 lg:break-words"
			>
				{node.copy}
			</div>
		))}
	</motion.div>
);
