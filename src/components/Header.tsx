import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExtendedAbout } from "./ExtendedAbout";
import type { PageQueryData } from "../pages";

export const Header = ({
	header,
	extendedAbout,
}: {
	header: PageQueryData["header"];
	extendedAbout: PageQueryData["extendedAbout"];
}) => {
	const [readMore, setReadMore] = useState(false);
	const { hero, subhead } = header;

	return (
		<div className="flex flex-col items-center justify-center px-6 pb-20 pt-32 lg:pt-72">
			<div className="lg:w-9/12 lg:pl-12">
				<div className="font-sans font-normal text-lg/10 text-white pb-4 lg:text-4xl/10">
					{hero}
				</div>
				<div className="font-sans font-normal text-lg/7 text-white pb-4 lg:text-4xl/10">
					{subhead}
				</div>
				<AnimatePresence>
					{readMore && <ExtendedAbout data={extendedAbout} />}
				</AnimatePresence>
				<motion.div layout transition={{ type: "tween", duration: 0.2 }}>
					<button
						type="button"
						onClick={() => setReadMore((prev) => !prev)}
						className="text-sm bg-light-green text-dark-green p-2 rounded-md lg:p-4 lg:text-base lg:mt-7 lg:w-40 lg:rounded-lg lg:hover:-translate-y-1 lg:hover:shadow-[3px_8px_34px_-10px_rgba(255,255,255,0.2)]"
					>
						Read&nbsp;{readMore ? "less" : "more"}
					</button>
				</motion.div>
			</div>
		</div>
	);
};
