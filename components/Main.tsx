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
};
export default function Main({
  desiredPlayer,
  setDesiredPlayer,
  allPlayers,
}: MainProps): JSX.Element {
  const matchedPlayers: Member[] = allPlayers.filter((player: Member) => {
    return (
      (player.skill === desiredPlayer.skill ||
        desiredPlayer.skill === "Anything will do") &&
      (player.languages.indexOf(desiredPlayer.language) !== -1 ||
        desiredPlayer.language === "Anything will do") &&
      (player.gender === desiredPlayer.gender ||
        desiredPlayer.gender === "Anything will do")
    );
  });

  function handleChange(criteria: string, value: string) {
    setDesiredPlayer({ ...desiredPlayer, [criteria]: value });
  }

  return (
    <StyledMain>
      <StyledDropdownMenuWrapper>
        <StyledForm>
          <DropdownMenu
            options={skill}
            criteria={"skill"}
            onChange={handleChange}
          />
          <DropdownMenu
            options={language}
            //cannot use criteria={languages} because it will brake the filter function
            criteria={"language"}
            onChange={handleChange}
          />
          <DropdownMenu
            options={gender}
            criteria={"gender"}
            onChange={handleChange}
          />
        </StyledForm>
      </StyledDropdownMenuWrapper>
      <StyledCardsWrapperSection>
        {matchedPlayers.map(({ name, cloudinarySrc }) => {
          return <Card key={name} name={name} cloudinarySrc={cloudinarySrc} />;
        })}
      </StyledCardsWrapperSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: 10rem auto;
  border: 1px solid white;
  overflow-y: scroll;
`;

const StyledCardsWrapperSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;

  border: 1px solid white;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledDropdownMenuWrapper = styled.section`
  background-color: black;
  border: 1px solid white;
  padding-left: 3.1rem;
  padding-right: 3.1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
