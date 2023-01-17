import styled from "styled-components";

type HeaderProps = {
  teaser: string;
};

export default function Header({ teaser }: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <h1>MatchBall</h1>
      <h2>{teaser}</h2>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  padding-top: 10px;

  color: white;
`;
