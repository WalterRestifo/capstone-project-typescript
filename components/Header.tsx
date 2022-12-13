import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>MatchBall</StyledH1>
      <h2>you have a match!</h2>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 2vh;
  text-align: center;
`;

const StyledH1 = styled.h1`
  margin: 0;
  margin-top: 2vh;
`;
