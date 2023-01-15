import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Link from "next/link";
import { Team, Match } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";

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
      <Header teaser={"Games"} />
      <section>
        <StyledUl data-cy="match-list">
          {matches &&
            matches.map((match: Match, index: number) => {
              return (
                <li key={match.id}>
                  <p>Match {index + 1}</p>
                  <TeamComponent team={match.team1} isClickable={false} />
                  <TeamComponent team={match.team2} isClickable={false} />
                  <p>Winner: {match.winner}</p>
                  <button
                    data-cy="delete-match-button"
                    onClick={() => handleDeleteMatch(match.id)}
                  >
                    delete match
                  </button>
                </li>
              );
            })}
        </StyledUl>
      </section>
      <section>
        <button
          data-cy="teamChoice-navigation"
          onClick={handleEmptyLocalStorage}
        >
          <Link href={"/teamChoice"}>Add a new game</Link>
        </button>
      </section>
      <Navigation />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7rem auto 4rem;
  padding: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;
