import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";

interface ExtendedAboutNode {
	node: {
		copy: string;
	};
}

const ExtendedText = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: var(--light-green);
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 4rem;
    margin-top: 2.7rem;
  }
`;

export const ExtendedAbout = () => {
	const { allDatoCmsExtendedtext } = useStaticQuery(graphql`
    query {
      allDatoCmsExtendedtext(sort: { order: ASC }) {
        edges {
          node {
            copy
            order
          }
        }
      }
    }
  `);

	return (
		<motion.div
			layout
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -50, opacity: 0 }}
			transition={{
				default: { duration: 0.1, delay: 0.2 },
			}}
		>
			{allDatoCmsExtendedtext.edges.map(({ node }: ExtendedAboutNode) => (
				<ExtendedText key={node.copy}>{node.copy}</ExtendedText>
			))}
		</motion.div>
	);
};
