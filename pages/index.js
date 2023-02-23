import styled from "styled-components";
import { Criteria, Member } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import SplashScreen from "./splashScreen";
import CacheLoader from "../components/CacheLoader";
import Players from "./players";

export default function Home({ desiredPlayer, setDesiredPlayer }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // getAllPlayers();
    // const backgroundImages = [
    //   "/scoreImageOrange.jpg",
    //   "/beachspielerin.jpg",
    //   "/playergroup.jpg",
    //   "/netz-blur.jpg",
    //   "/2players.jpg",
    // ];
    // cacheImages(backgroundImages);

    setTimeout(setIsLoading(false), 3000);
  }, []);

  // async function cacheImages(srcArray) {
  //   const promises = await srcArray.map((src) => {
  //     return new Promise((resolve, reject) => {
  //       const image = new Image();

  //       image.src = src;
  //       image.onload = resolve();
  //       image.onerror = reject();
  //     });
  //   });

  //   await Promise.all(promises);
  //   console.log(isLoading);
  //   setIsLoading(false);
  // }

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
