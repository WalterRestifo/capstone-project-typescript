import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Link from "next/link";
import { Match } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import Image from "next/image";

export default function Games(): JSX.Element {
  const [matches, setMatches] = useState<[Match]>();

  async function getMatches() {
    const response = await fetch("/api/matches");
    const data: [Match] = await response.json();
    setMatches(data);
  }

  useEffect(() => {
    getMatches();
  }, []);

  async function handleDeleteMatch(id: string) {
    await fetch(`/api/matches/${id}`, {
      method: "DELETE",
    });
    getMatches();
  }

  function handleEmptyLocalStorage() {
    localStorage.removeItem("team1");
    localStorage.removeItem("team2");
    localStorage.removeItem("team1WithLastGamePoints");
    localStorage.removeItem("team2WithLastGamePoints");
  }

  return (
    <StyledDiv>
      <Head>
        <title>MatchBall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={"/playergroup.jpg"}
        alt={"Player group background image"}
        fill={true}
        objectFit={"cover"}
        objectPosition={"center"}
        style={{ position: "absolute", zIndex: -1 }}
      />
      <Header teaser={"Games"} />
      <StyledMatchWrapperSection>
        <StyledUl data-cy="match-list">
          {matches &&
            matches.map((match: Match, index: number) => {
              return (
                <StyledMatch key={match.id}>
                  <StyledP>Match {index + 1}</StyledP>
                  <TeamComponent team={match.team1} isClickable={false} />
                  <StyledP>vs</StyledP>
                  <TeamComponent team={match.team2} isClickable={false} />
                  <StyledP>Winner: {match.winner}</StyledP>
                  <StyledDeleteButton
                    data-cy="delete-match-button"
                    onClick={() => handleDeleteMatch(match.id)}
                    aria-label="delete match"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/deleteIcon.svg"
                      alt="delete match"
                    />
                  </StyledDeleteButton>
                </StyledMatch>
              );
            })}
        </StyledUl>
      </StyledMatchWrapperSection>
      <StyledAddNewGameButton
        data-cy="teamChoice-navigation"
        onClick={handleEmptyLocalStorage}
      >
        <StyledLink href={"/teamChoice"}>
          <Image
            width={30}
            height={30}
            src={"/plus-rectangle_1.svg"}
            alt="Add a new game"
          />
        </StyledLink>
      </StyledAddNewGameButton>
      <Navigation />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  font-size: 20px;
  font-family: baloo_2;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledP = styled.p`
  color: white;
  margin-left: 1rem;
`;

const StyledMatchWrapperSection = styled.section`
  overflow-y: scroll;
  border: 1px solid white;
  height: 65vh;
  width: 100vw;
  margin-top: -1rem;
`;

const StyledMatch = styled.li`
  position: relative;
  width: 100vw;
  margin-top: 1rem;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
`;

// position: absolute;
  // bottom: 5.1rem;
  // left: 45.5%;

const StyledAddNewGameButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  left: 47vw;
  top: 3vh;
  
`;

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  transition: scale 0.15s ease;
  :active {
    scale: 1.5;
  }
`;
