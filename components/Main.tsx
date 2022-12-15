import Card from "../components/Card";
import DropdownMenu from "../components/DropdownMenu";
import { skill } from "../data/data";
import { gender } from "../data/data";
import { language } from "../data/data";
import styled from "styled-components";
import { members } from "../data/data";
import { useState } from "react";
import { Criteria, Member } from "../interfaces/interfaces";

export default function Main(): JSX.Element {
  const [desiredPlayer, setDesiredPlayer] = useState<Criteria>({
    skill: "Anything will do",
    language: "Anything will do",
    gender: "Anything will do",
  });

  const matchedPlayers: Member[] = members.filter((member: Member) => {
    return (
      (member.skill === desiredPlayer.skill ||
        desiredPlayer.skill === "Anything will do") &&
      (member.language === desiredPlayer.language ||
        desiredPlayer.language === "Anything will do") &&
      (member.gender === desiredPlayer.gender ||
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
        {matchedPlayers.map(({ name, id }) => {
          return <Card key={id} name={name} />;
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
