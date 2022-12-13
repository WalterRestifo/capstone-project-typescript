import styled from "styled-components";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <StyledHeader>
      <h1 className={styles.title}>MatchBall</h1>
      <h2 className={styles.description}>you have a match!</h2>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 2vh;
`;
