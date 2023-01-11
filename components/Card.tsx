import styled from "styled-components";
import { CldImage } from "next-cloudinary";
import { MiniPlayer } from "../interfaces/interfaces";
import { nanoid } from "nanoid";

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
  function handleTeamSelection(newPlayer: MiniPlayer) {
    const team = localStorage.getItem("newTeam");
    if (team) {
      const teamObj = JSON.parse(team);
      teamObj.players.push(newPlayer);
      localStorage.setItem("newTeam", JSON.stringify(teamObj));
    } else {
      const newTeam = {
        players: [newPlayer],
        points: 0,
        games: 0,
        wins: 0,
        id: nanoid(),
      };
      localStorage.setItem("newTeam", JSON.stringify(newTeam));
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
        <button onClick={() => handleTeamSelection(player)}>
          add to team 1
        </button>
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
