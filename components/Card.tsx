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
  id: string;
  isSelectable: boolean;
};

export default function Card({
  name,
  cloudinarySrc,
  languages,
  gender,
  skill,
  id,
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

  async function handleDeletePlayer(id: string) {
    await fetch("./api/players/" + id, {
      method: "DELETE",
    });
  }

  const player = { name: name, cloudinarySrc: cloudinarySrc };
  return (
    <StyledDiv>
      <StyledCldImage width="100" height="120" src={cloudinarySrc} alt={name} />

      <p>{name}</p>
      <p>{skill}</p>
      <p>{gender}</p>
      <StyledUl>
        {languages.map((language: string) => {
          return <li key={language}>{language}</li>;
        })}
      </StyledUl>
      <StyledDeleteButton
        data-cy="delete-user-button"
        onClick={() => handleDeletePlayer(id)}
      >
        delete player
      </StyledDeleteButton>
      {isSelectable && (
        <button onClick={() => handleTeamSelection(player)}>add to team</button>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 20px;
  line-height: 1.5;
  min-height: 317px;
  min-width: 200px;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  text-align: center;
  color: white;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: scale 0.15s ease;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  :focus,
  :active {
    scale: 1.1;
  }
`;

const StyledDeleteButton = styled.button`
  display: none;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledCldImage = styled(CldImage)`
  margin-top: 0.5em;
  border-radius: 25px;
`;
