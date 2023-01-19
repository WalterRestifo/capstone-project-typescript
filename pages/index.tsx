import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { Criteria, Member } from "../interfaces/interfaces";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

type HomeProps = {
  desiredPlayer: Criteria;
  setDesiredPlayer: any;
};

export default function Home({
  desiredPlayer,
  setDesiredPlayer,
}: HomeProps): JSX.Element {
  const [allPlayers, setAllPlayers] = useState<Member[]>([]);

  async function getAllPlayers(): Promise<void> {
    try {
      const response = await fetch("/api/players");
      if (!response.ok) {
        return console.error(
          "Error with the response of the players fetch. Response status: ",
          response.status
        );
      } else {
        const listOfAllPlayers = await response.json();
        setAllPlayers(listOfAllPlayers);
      }
    } catch (error) {
      console.error("Something went wrong with the players fetch: ", error);
    }
  }

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <StyledDiv>
      <Head>
        <title>MatchBall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header teaser={"you have a match!"} />
      <Main
        desiredPlayer={desiredPlayer}
        setDesiredPlayer={setDesiredPlayer}
        allPlayers={allPlayers}
        setAllPlayers={setAllPlayers}
        isSelectable={false}
      />
      <Navigation />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  font-family: baloo_2;
  background-image: url("/ball.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 20px;
`;
