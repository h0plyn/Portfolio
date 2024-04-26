import type { PageQueryData } from "../pages";

export default function History({ data }: { data: PageQueryData["history"] }) {
	return (
		<section className="flex flex-col justify-center w-full bg-light-green p-8 lg:px-40 lg: lg:py-56">
			<div className="font-sans font-light text-2xl leading-10 text-dark-green lg:text-4xl lg:mb-20">
				Previous
			</div>
			{data.edges.map(({ node }) => {
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
	);
}
