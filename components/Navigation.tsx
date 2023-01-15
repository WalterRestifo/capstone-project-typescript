import Link from "next/link";
import styled from "styled-components";

export default function Navigation(): JSX.Element {
  return (
    <StyledNav>
      <StyledLink data-cy="newUserForm-navigation" href={"/newUserForm"}>
        create a profile
      </StyledLink>
      <StyledLink href={"/games"}>Competitions</StyledLink>
      <StyledLink href={"/"}>Home</StyledLink>
    </StyledNav>
  );
}

const StyledLink = styled(Link)`
  height: 10vh;
  width: 40vw;
  background-color: lightgray;
  color: black;
  text-align: center;
  padding-top: 1.5rem;
  border: 1px solid black;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
