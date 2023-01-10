import styled from "styled-components";
import { CldImage } from "next-cloudinary";
import { MiniPlayer } from "../interfaces/interfaces";

type CardProps = {
  name: string;
  cloudinarySrc: string;
  languages: string[];
  gender: string;
  skill: string;
  isSelectable: boolean;
};

export default function Card({
  name,
  cloudinarySrc,
  languages,
  gender,
  skill,
  isSelectable,
}: CardProps): JSX.Element {
  function handleTeamSelection1(newPlayer: MiniPlayer) {
    const team = localStorage.getItem("team1");
    if (team) {
      const teamObj = JSON.parse(team);
      teamObj.players.push(newPlayer);
      localStorage.setItem("team1", JSON.stringify(teamObj));
    } else {
      localStorage.setItem("team1", JSON.stringify({ players: [newPlayer] }));
    }
  }

  function handleTeamSelection2(newPlayer: MiniPlayer) {
    const team = localStorage.getItem("team2");
    if (team) {
      const teamObj = JSON.parse(team);
      teamObj.players.push(newPlayer);
      localStorage.setItem("team2", JSON.stringify(teamObj));
    } else {
      localStorage.setItem("team2", JSON.stringify({ players: [newPlayer] }));
    }
  }

  const player = { name: name, cloudinarySrc: cloudinarySrc };
  return (
    <StyledDiv>
      <CldImage width="80" height="80" src={cloudinarySrc} alt={name} />
      <p>{name}</p>
      <p>{skill}</p>
      <p>{gender}</p>
      <ul>
        {languages.map((language: string) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>

      {isSelectable && (
        <>
          <button onClick={() => handleTeamSelection1(player)}>
            add to team 1
          </button>
          <button onClick={() => handleTeamSelection2(player)}>
            add to team 2
          </button>
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 1.25rem;
  line-height: 0.8;
  min-height: 317px;
  min-width: 200px;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
