import Header from "../components/Header";
import styled from "styled-components";
import DropdownMenu from "../components/DropdownMenu";
import { skill, language, gender } from "../data/data";
import Link from "next/link";
import { useState } from "react";
import { ownPlayerCard } from "../data/data";
import { CldUploadButton } from "next-cloudinary";

export default function NewUserForm(): JSX.Element {
  const skillOptions = skill.slice(1);
  const languageOptions = language.slice(1);
  const genderOptions = gender.slice(1);
  const [checkedState, setCheckedState] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  let isSubmitted = false;
  ownPlayerCard.languages = [];

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    ownPlayerCard.name = event.target.username.value;
    const languageArray = [...ownPlayerCard.languages];

    checkedState.map((languageIsChecked, index) => {
      if (languageIsChecked === true && index == 0) {
        languageArray.push("English");
      }
      if (languageIsChecked === true && index == 1) {
        languageArray.push("German");
      }
      if (languageIsChecked === true && index == 2) {
        languageArray.push("Spanish");
      }
      ownPlayerCard.languages = languageArray;
      console.log(ownPlayerCard);
    });

    try {
      await fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ownPlayerCard),
      });
    } catch (error) {
      console.error("Something went wrong with the fetch: ", error);
    }

    isSubmitted = true;
    event.target.username.focus();
  }

  function handleChangeSkill(value: string): void {
    ownPlayerCard.skill = value;
  }

  function handleChangeGender(value: string): void {
    ownPlayerCard.gender = value;
  }

  function handleCheckboxStateChange(indexOfTheCheckbox: number): void {
    const updatedCheckedState = checkedState.map(
      (languageCheckedState, index) =>
        index === indexOfTheCheckbox
          ? !languageCheckedState
          : languageCheckedState
    );
    setCheckedState(updatedCheckedState);
  }

  return (
    <StyledNewUserFormDiv>
      <Header teaser={"New Player"} />
      <StyledMain>
        <StyledP>Create your profile here and share your abilities!</StyledP>
        <StyledDropdownMenuWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <CldUploadButton uploadPreset="next-cloudinary-unsigned" />
            <label htmlFor="username">Your name (max 10 characters):</label>
            <input
              name="username"
              id="username"
              maxLength={10}
              placeholder="Your name"
              required
            />
            <DropdownMenu
              options={skillOptions}
              criteria={"skill"}
              onChange={handleChangeSkill}
            />
            <DropdownMenu
              options={genderOptions}
              criteria={"gender"}
              onChange={handleChangeGender}
            />
            {languageOptions.map((language, index) => {
              return (
                <label key={language + index}>
                  {language}
                  <input
                    type={"checkbox"}
                    name="language"
                    id={language + index}
                    value={language}
                    onChange={() => handleCheckboxStateChange(index)}
                  />
                </label>
              );
            })}

            <StyledSubmitButton>Submit</StyledSubmitButton>
          </StyledForm>
        </StyledDropdownMenuWrapper>
        <p>{isSubmitted && "Your profile was created successfully! 🥳"}</p>
        <StyledLink href={"/"}>back to the main page</StyledLink>
      </StyledMain>
    </StyledNewUserFormDiv>
  );
}

const StyledNewUserFormDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10rem auto;
`;

const StyledDropdownMenuWrapper = styled.section`
  background-color: black;
  border: 1px solid white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;
`;

const StyledP = styled.p`
  text-align: center;
  border: 1px solid white;
  margin: 0;
`;

const StyledMain = styled.main`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledSubmitButton = styled.button`
  height: 7vh;
  width: 30vw;
`;

const StyledLink = styled(Link)`
  height: 10vh;
  width: 40vw;
  background-color: lightgray;
  color: black;
  text-align: center;
  padding-top: 1rem;
  position: absolute;
  bottom: 0;
  left: 30%;
`;
