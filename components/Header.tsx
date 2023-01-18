import styled from "styled-components";

type HeaderProps = {
  teaser: string;
};

export default function Header({ teaser }: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <h1>MatchBall</h1>
      <StyledH2>{teaser}</StyledH2>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  padding-top: 10px;

  color: white;
`;

const StyledH2 = styled.h2`
  position: relative;
  bottom: 17px;
`;
