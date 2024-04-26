import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
	return (
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
	);
};
