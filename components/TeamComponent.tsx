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

  function handleAddTeam1(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    const team1 = localStorage.getItem("team1");
    if (!team1) {
      localStorage.setItem("team1", JSON.stringify(team));
    }
  }

  function handleAddTeam2(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    const team2 = localStorage.getItem("team2");
    if (!team2) {
      localStorage.setItem("team2", JSON.stringify(team));
    }
  }

  return (
    <StyledTeam onClick={() => setIsSelected(!isSelected)} key={team.id}>
      <StyledMiniCardWrapper>
        {team.players.map((player: MiniPlayer) => (
          <MiniCard
            key={player.name + player.cloudinarySrc}
            name={player.name}
            cloudinarySrc={player.cloudinarySrc}
          />
        ))}
      </StyledMiniCardWrapper>
      <StyledDataWrapper>
        <StyledP>Wins: {team.wins}</StyledP>
        <StyledP>Games: {team.games}</StyledP>
        <StyledP>Points: {team.points}</StyledP>
      </StyledDataWrapper>
      {isSelected && isClickable && (
        <>
          <StyledButton onClick={handleAddTeam1} data-cy="add-to-team-1-button">
            Team 1
          </StyledButton>
          <StyledButton onClick={handleAddTeam2} data-cy="add-to-team-2-button">
            Team 2
          </StyledButton>
          <StyledButton onClick={() => removeTeam(team.id)}>
            Delete
          </StyledButton>
        </>
      )}
    </StyledTeam>
  );
}

const StyledTeam = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledP = styled.p`
  color: white;
`;

const StyledDataWrapper = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledMiniCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  height: 7vh;
  width: 26.7vw;
  border-radius: 25px;
  font-family: baloo_2;
  font-size: 20px;
  color: white;
  /* background-color: transparent; */
  border-color: white;
  margin-bottom: 0.5rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
`;
