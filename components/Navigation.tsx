import Link from "next/link";
import styled from "styled-components";

export default function Navigation(): JSX.Element {
  return (
    <Link href={"/newUserForm"}>
      <StyledButton>create your profile</StyledButton>
    </Link>
  );
}

const StyledButton = styled.button`
  height: 10vh;
  width: 40vw;
`;
