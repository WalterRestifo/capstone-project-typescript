import Header from "../components/Header";
import styled from "styled-components";
import DropdownMenu from "../components/DropdownMenu";
import { skill, language, gender } from "../data/data";
import { Member } from "../interfaces/interfaces";

export default function NewUserForm(): JSX.Element {
  const skillOptions = skill.slice(1);
  const languageOptions = language.slice(1);
  const genderOptions = gender.slice(1);
  const ownPlayerCard: Member = {
    name: "",
    skill: "",
    language: "",
    gender: "",
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    ownPlayerCard.name = event.target.username.value;
    await fetch("/api/allPlayers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ownPlayerCard),
    });
    event.target.reset();
    event.target.username.focus();
  }

  function handleChange(criteria: string, value: string) {
    ownPlayerCard[criteria] = value;
  }

  return (
    <StyledNewUserFormDiv>
      <Header />
      <StyledMain>
        <StyledP>
          You can create your own profile hier and let the others know, what you
          can!
        </StyledP>
        <StyledDropdownMenuWrapper>
          <StyledForm onSubmit={handleSubmit}>
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
              onChange={handleChange}
            />
            <DropdownMenu
              options={languageOptions}
              criteria={"language"}
              onChange={handleChange}
            />
            <DropdownMenu
              options={genderOptions}
              criteria={"gender"}
              onChange={handleChange}
            />
            <button>Submit</button>
          </StyledForm>
        </StyledDropdownMenuWrapper>
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
  padding: 2rem;
`;

const StyledMain = styled.main`
  margin-left: 2rem;
  margin-right: 2rem;
`;
