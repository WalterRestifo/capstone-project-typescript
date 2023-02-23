import styled from "styled-components";
import { Criteria, Member } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import SplashScreen from "./splashScreen";
import CacheLoader from "../components/CacheLoader";
import Players from "./players";

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
      {allPlayers.length === 0 ? (
        <>
          <SplashScreen />
          <CacheLoader />
        </>
      ) : (
        <>
          <Players
            desiredPlayer={desiredPlayer}
            setDesiredPlayer={setDesiredPlayer}
          />
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100dvh;
  font-family: baloo_2;
  font-size: 20px;
  position: relative;
  overflow: hidden;
`;
