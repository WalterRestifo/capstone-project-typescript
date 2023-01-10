import Head from "next/head";
import Header from "../components/Header";
import styled from "styled-components";
import Link from "next/link";
import MiniCard from "../components/MiniCard";
import { useEffect, useState } from "react";
import { Team } from "../interfaces/interfaces";

export default function ScoreForm(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pointsTeam1, setPointsTeam1] = useState(0);
  const [pointsTeam2, setPointsTeam2] = useState(0);
  const [team1, setTeam1] = useState<Team>({ players: [], points: 0 });
  const [team2, setTeam2] = useState<Team>({ players: [], points: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const team1FromLocalStorage = localStorage.getItem("team1");
      if (team1FromLocalStorage) {
        setTeam1(JSON.parse(team1FromLocalStorage));
      }

      const team2FromLocalStorage = localStorage.getItem("team2");
      if (team2FromLocalStorage) {
        setTeam2(JSON.parse(team2FromLocalStorage));
      }
    }
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    setPointsTeam1(form.elements.pointsTeam1.value);
    setPointsTeam2(form.elements.pointsTeam2.value);
    setIsSubmitted(true);
  }

  useEffect(() => {
    if (isSubmitted) {
      console.log("pointsTeam1: ", pointsTeam1);
      console.log("pointsTeam2: ", pointsTeam2);

      setTeam1({ ...team1, points: pointsTeam1 });
      localStorage.setItem("team1WithPoints", JSON.stringify(team1));
      console.log("team1: ", team1);

      setTeam2({ ...team2, points: pointsTeam2 });
      localStorage.setItem("team2WithPoints", JSON.stringify(team2));
      console.log("team2: ", team2);
    }
  }, [isSubmitted]);

  return (
    <StyledDiv>
      <Head>
        <title>MatchBall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header teaser={"Scores"} />
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormDiv>
          <div>
            <StyledP>Team 1</StyledP>
            {team1.players.length > 0 &&
              team1.players.map((player) => {
                return (
                  <MiniCard
                    key={player.name + player.cloudinarySrc}
                    name={player.name}
                    cloudinarySrc={player.cloudinarySrc}
                  />
                );
              })}
            <label htmlFor="pointsTeam1">Points: </label>
            <StyledInput
              type="number"
              name="pointsTeam1"
              id="pointsTeam1"
              maxLength={2}
              aria-label="points for Team 1"
            />
          </div>
          <p>VS</p>
          <div>
            <StyledP>Team 2</StyledP>
            {team2 &&
              team2.players.map((player) => {
                return (
                  <MiniCard
                    key={player.name + player.cloudinarySrc}
                    name={player.name}
                    cloudinarySrc={player.cloudinarySrc}
                  />
                );
              })}
            <label htmlFor="pointsTeam2">Points: </label>
            <StyledInput
              type="number"
              name="pointsTeam2"
              id="pointsTeam2"
              maxLength={2}
              aria-label="points for Team 2"
            />
          </div>
        </StyledFormDiv>
        {!isSubmitted && <button type="submit">save</button>}
        <button>
          <Link href={"/games"}>back</Link>
        </button>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7rem auto;
  padding: 0;
`;

const StyledForm = styled.form`
  border: 1px solid #eaeaea;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledFormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eaeaea;
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledInput = styled.input`
  width: 2rem;
  height: 2rem;
`;
