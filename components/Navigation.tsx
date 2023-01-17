import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Navigation(): JSX.Element {
  return (
    <StyledNav>
      <StyledLink href={"/"}>
        <Image alt="Home" src="/webpagehome-white.svg" height={55} width={55} />
      </StyledLink>
      <StyledLink href={"/games"}>
        <Image
          alt="competitions"
          src={"/competition-icon.svg"}
          height={53}
          width={53}
        />
      </StyledLink>
      <StyledLink data-cy="newUserForm-navigation" href={"/newUserForm"}>
        <Image
          alt="profile"
          src={"/profile-white.svg"}
          height={60}
          width={60}
        />
      </StyledLink>
    </StyledNav>
  );
}

const StyledLink = styled(Link)`
  height: 10vh;
  width: 30vw;
  padding-top: 0.2em;
  border-radius: 25px;
  transition: scale 0.15s ease;

  :active {
    scale: 1.1;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 7%;
  width: 100vw;
`;
