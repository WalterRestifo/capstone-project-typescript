import styled from "styled-components";
import { MiniPlayer, Team } from "../interfaces/interfaces";
import { useState } from "react";
import MiniCard from "./MiniCard";
import removeTeam from "../utils/removeTeam";

type TeamProps = {
  team: Team;
  isClickable: boolean;
};

export default function TeamComponent({
  team,
  isClickable,
}: TeamProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  function handleAddTeam1() {
    const team1 = localStorage.getItem("team1");
    if (!team1) {
      localStorage.setItem("team1", JSON.stringify(team));
    }
  }

  function handleAddTeam2() {
    const team2 = localStorage.getItem("team2");
    if (!team2) {
      localStorage.setItem("team2", JSON.stringify(team));
    }
  }

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
          <button onClick={handleAddTeam1} data-cy="add-to-team-1-button">
            Team 1
          </button>
          <button onClick={handleAddTeam2} data-cy="add-to-team-2-button">
            Team 2
          </button>
          <button onClick={() => removeTeam(team.id)}>delete Team</button>
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
