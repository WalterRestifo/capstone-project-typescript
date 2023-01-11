import styled from "styled-components";
import { MiniPlayer, Team } from "../interfaces/interfaces";
import { useState } from "react";
import MiniCard from "./MiniCard";

type TeamProps = {
  team: Team;
  isClickable: boolean;
};

export default function TeamComponent({
  team,
  isClickable,
}: TeamProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <StyledTeam onClick={() => setIsSelected(!isSelected)} key={team.id}>
      {team.players.map((player: MiniPlayer) => (
        <MiniCard
          key={player.name + player.cloudinarySrc}
          name={player.name}
          cloudinarySrc={player.cloudinarySrc}
        />
      ))}
      <p>Wins: {team.wins}</p>
      <p>Games: {team.games}</p>
      <p>TotalPoints: {team.points}</p>
      {isSelected && isClickable && (
        <>
          <button
            onClick={() => localStorage.setItem("team1", JSON.stringify(team))}
          >
            Team 1
          </button>
          <button
            onClick={() => localStorage.setItem("team2", JSON.stringify(team))}
          >
            Team 2
          </button>
        </>
      )}
    </StyledTeam>
  );
}

const StyledTeam = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
