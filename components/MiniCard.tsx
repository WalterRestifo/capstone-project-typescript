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
      <StyledCldImage
        width="80"
        height="80"
        src={cloudinarySrc}
        alt="a profile image"
      />
      <StyledP>{name}</StyledP>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-size: 1.25rem;
  color: white;
  padding-bottom: 0;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
`;

const StyledCldImage = styled(CldImage)`
  border-radius: 50%;
`;

const StyledP = styled.p`
  color: white;
`;
