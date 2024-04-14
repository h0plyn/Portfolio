export const ExternalLink = ({
	children,
	href,
	rel,
	target,
}: {
	href: string;
	children: React.ReactNode;
	target?: string;
	rel?: string;
}) => {
	return (
		<a href={href} className="hover:transform-none" target={target} rel={rel}>
			{children}
		</a>
	);
};
