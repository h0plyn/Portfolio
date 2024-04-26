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
}) => (
	<a
		href={href}
		className="hover:transform-none hover:text-dark-green transition-colors"
		target={target}
		rel={rel}
	>
		{children}
	</a>
);
