import styled from "styled-components";
import { CldImage } from "next-cloudinary";

type CardProps = {
  name: string;
  cloudinarySrc: string;
};

export default function MiniCard({
  name,
  cloudinarySrc,
}: CardProps): JSX.Element {
  return (
    <StyledDiv>
      <CldImage
        width="80"
        height="80"
        src={cloudinarySrc}
        alt="a profile image"
      />
      <p>{name}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 1.25rem;
  margin: 0.5rem;

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
