import Card from "../components/Card";
import DropdownMenu from "../components/DropdownMenu";
import { skill } from "../data/data";
import { gender } from "../data/data";
import { language } from "../data/data";
import styled from "styled-components";
import { Criteria, Member } from "../interfaces/interfaces";

type MainProps = {
  desiredPlayer: Criteria;
  setDesiredPlayer: any;
  allPlayers: Member[];
  setAllPlayers: any;
  isSelectable: boolean;
};
export default function Main({
  desiredPlayer,
  setDesiredPlayer,
  allPlayers,
  isSelectable,
}: MainProps): JSX.Element {
  const matchedPlayers: Member[] = allPlayers
    ?.filter((player: Member) => {
      return (
        (player.skill === desiredPlayer.skill ||
          desiredPlayer.skill === "Anything will do") &&
        (player.languages.indexOf(desiredPlayer.language) !== -1 ||
          desiredPlayer.language === "Anything will do") &&
        (player.gender === desiredPlayer.gender ||
          desiredPlayer.gender === "Anything will do")
      );
    })
    .reverse();

  function handleChange(criteria: string, value: string) {
    setDesiredPlayer({ ...desiredPlayer, [criteria]: value });
  }

  return (
    <StyledMain>
      <StyledDropdownMenuWrapper>
        <StyledForm data-cy="selection-form">
          <DropdownMenu
            options={skill}
            criteria={"skill"}
            onChange={handleChange}
            dataCy={"skill-select"}
          />
          <DropdownMenu
            options={gender}
            criteria={"gender"}
            onChange={handleChange}
            dataCy={"gender-select"}
          />
          <DropdownMenu
            options={language}
            //cannot use criteria={languages} because it will brake the filter function
            criteria={"language"}
            onChange={handleChange}
            dataCy={"language-select"}
          />
        </StyledForm>
      </StyledDropdownMenuWrapper>
      <StyledCardsWrapperSection data-cy="player-list">
        {matchedPlayers?.map(
          ({ name, cloudinarySrc, gender, languages, skill, id }) => {
            return (
              <Card
                key={name}
                name={name}
                cloudinarySrc={cloudinarySrc}
                skill={skill}
                languages={languages}
                gender={gender}
                id={id}
                isSelectable={isSelectable}
              />
            );
          }
        )}
      </StyledCardsWrapperSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 8rem auto;

  overflow-y: scroll;
  height: 70dvh;
`;

const StyledCardsWrapperSection = styled.section`
  display: flex;
  overflow-x: scroll;
  border: 1px solid white;
`;

const StyledDropdownMenuWrapper = styled.section`
  padding-left: 25dvw;
  padding-right: 3.1rem;
  height: fit-content;

  color: white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
