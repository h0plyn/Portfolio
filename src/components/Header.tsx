import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { ExtendedAbout } from "./ExtendedAbout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
  padding-top: 7rem;

  @media screen and (min-width: 960px) {
    padding-top: 15rem;
  }
`;

const ContentBox = styled.div`
  width: 90%;

  @media screen and (min-width: 960px) {
    width: 70%;
  }
`;

const MainText = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 3rem;
  color: var(--text);
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    margin-top: 2.7rem;
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

const SubText = styled.h1`
  font-family: nimbus-sans-extended;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: var(--text);
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: input-mono, monospace;
  font-size: 0.9rem;
  margin-left: 1rem;
  width: 7rem;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  background-color: var(--light-green);
  color: var(--light-green-secondary);
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  @media screen and (min-width: 960px) {
    padding: 1rem;
    margin-top: 1.8rem;
    font-size: 1rem;
    width: 10rem;
    border-radius: 10px;

    &:hover {
      transform: translateY(-0.2rem);
      box-shadow: 3px 8px 34px -10px rgba(255, 255, 255, 0.2);
      text-decoration: none;
      background-color: var(--button);
      transition: background-color 0.5s ease-in-out;
    }
  }
`;

const ButtonText = styled.p`
  color: var(--button-text);
`;

export default function Header() {
	const { datoCmsHeader } = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        hero
        subhead
      }
    }
  `);

	const { hero, subhead } = datoCmsHeader;
	const [readMore, setReadMore] = useState(false);

	return (
		<Container>
			<ContentBox>
				<MainText>{hero}</MainText>
				<SubText>{subhead}</SubText>
				<AnimatePresence>{readMore && <ExtendedAbout />}</AnimatePresence>
				<motion.div
					layout
					onClick={() => setReadMore((prev) => !prev)}
					transition={{ type: "tween", duration: 0.2 }}
				>
					<DropdownButton>
						<ButtonText>Read&nbsp;{readMore ? "less" : "more"}</ButtonText>
					</DropdownButton>
				</motion.div>
			</ContentBox>
		</Container>
	);
}
