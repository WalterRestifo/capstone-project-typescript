import styled from "styled-components";

export default function Card({ name }) {
  return <StyledP>{name}</StyledP>;
}

const StyledP = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 125px;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
