import styled from "styled-components";

type HeaderProps = {
  teaser: string;
};

export default function Header({ teaser }: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <StyledH1>MatchBall</StyledH1>
      <h2>{teaser}</h2>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  background-color: black;
  border: 1px solid white;
`;

const StyledH1 = styled.h1`
  margin: 0;
  margin-top: 2vh;
`;
