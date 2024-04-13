import styled from "styled-components";

const FooterContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: var(--light-green);
  justify-content: space-around;
  align-items: center;

  a {
    color: var(--text);
    transition: color 200ms ease;

    :hover {
      transform: unset;
      color: var(--background-color);
    }
  }

  @media screen and (min-width: 960px) {
    justify-content: left;
    align-items: center;
    gap: 2rem;
    padding-left: 14rem;
    padding-bottom: 5rem;
    font-size: 1.2rem;
  }
`;

export default function Footer() {
	return (
		<FooterContainer>
			<a href="https://github.com/h0plyn">Github</a>

			<a
				href="https://www.linkedin.com/in/rickyrhodes/"
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</a>

			<a
				href="https://standardresume.co/r/azQnZ76rvx8XG6MLTzvny"
				target="_blank"
				rel="noreferrer"
			>
				Resume
			</a>

			<a href="mailto:devrickyrhodes@gmail.com?subject=Hey there!">Contact</a>
		</FooterContainer>
	);
}
