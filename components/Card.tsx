import styled from "styled-components";
import { CldImage } from "next-cloudinary";

type CardProps = {
  name: string;
  cloudinarySrc: string;
  languages: string[];
  gender: string;
  skill: string;
};

export default function Card({
  name,
  cloudinarySrc,
  languages,
  gender,
  skill,
}: CardProps): JSX.Element {
  return (
    <StyledDiv>
      <CldImage width="80" height="80" src={cloudinarySrc} alt={name} />
      <p>{name}</p>
      <p>{skill}</p>
      <p>{gender}</p>

      {languages.map((language: string) => {
        return <p key={language}>{language}</p>;
      })}
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
