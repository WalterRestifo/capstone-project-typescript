import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
//import { ImageInterface } from "../interfaces/interfaces";

export default function CacheLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const backgroundImages = [
      "/scoreImageOrange.jpg",
      "/beachspielerin.jpg",
      "/playergroup.jpg",
      "/netz-blur.jpg",
      "/2players.jpg",
    ];
    cacheImages(backgroundImages);
  }, []);

  async function cacheImages(srcArray) {
    const promises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();

        image.src = src;
        image.onload = resolve();
        image.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  return (
    // <StyledcacheLoader>
    //   <Image
    //     src={"/scoreImageOrange.jpg"}
    //     alt={"volleyball game background image"}
    //     fill={true}
    //     objectFit={"cover"}
    //     objectPosition={"center"}
    //     style={{ position: "absolute", zIndex: -1 }}
    //   />
    //   <Image
    //     src={"/beachspielerin.jpg"}
    //     alt={"female beachvolleyball player background image"}
    //     fill={true}
    //     objectFit={"cover"}
    //     objectPosition={"center"}
    //     style={{ position: "absolute", zIndex: -1 }}
    //   />
    //   <Image
    //     src={"/playergroup.jpg"}
    //     alt={"Player group background image"}
    //     fill={true}
    //     objectFit={"cover"}
    //     objectPosition={"center"}
    //     style={{ position: "absolute", zIndex: -1 }}
    //   />
    //   <Image
    //     src={"/netz-blur.jpg"}
    //     alt={"volleyball net background image"}
    //     fill={true}
    //     objectFit={"cover"}
    //     objectPosition={"center"}
    //     style={{ position: "absolute", zIndex: -1 }}
    //   />
    //   <Image
    //     src={"/2players.jpg"}
    //     alt={"volleyball game background image"}
    //     fill={true}
    //     objectFit={"cover"}
    //     objectPosition={"center"}
    //     style={{ position: "absolute", zIndex: -1 }}
    //   />
    // </StyledcacheLoader>
    isLoading
  );
}

const StyledcacheLoader = styled.div`
  display: none;
`;
