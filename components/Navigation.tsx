import Link from "next/link";
import styled from "styled-components";

export default function Navigation(): JSX.Element {
  return <StyledLink href={"/newUserForm"}>create your profile</StyledLink>;
}

const StyledLink = styled(Link)`
  height: 10vh;
  width: 40vw;
  background-color: lightgray;
  color: black;
  text-align: center;
  padding-top: 1.5rem;
`;
