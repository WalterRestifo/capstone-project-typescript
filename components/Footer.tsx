import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import React from "react";

export default function Footer() {
  return (
    <StyledFooter className={styles.footer}>
      Powered by WR and{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
`;
