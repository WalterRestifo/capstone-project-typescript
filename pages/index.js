import styled from "styled-components";
import { useEffect, useState } from "react";
import SplashScreen from "./splashScreen";
import CacheLoader from "../components/CacheLoader";
import Players from "./players";

export default function Home({ desiredPlayer, setDesiredPlayer }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <StyledDiv>
      {isLoading === true ? (
        <>
          <SplashScreen />
          <CacheLoader />
        </>
      ) : (
        <>
          <Players
            desiredPlayer={desiredPlayer}
            setDesiredPlayer={setDesiredPlayer}
          />
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100dvh;
  font-family: baloo_2;
  font-size: 20px;
  position: relative;
  overflow: hidden;
`;
