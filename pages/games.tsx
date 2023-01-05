import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Link from "next/link";

export default function Games(): JSX.Element {
  return (
    <StyledDiv>
      <Head>
        <title>MatchBall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header teaser={"Games"} />
      <section></section>
      <section>
        <button>
          <Link href={"/scoreForm"}>Add a new game</Link>
        </button>
      </section>
      <Navigation />
    </StyledDiv>
  );
}

const StyledDiv = styled.div``;