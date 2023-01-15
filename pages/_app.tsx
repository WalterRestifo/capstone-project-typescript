import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Criteria, Member } from "../interfaces/interfaces";

export default function App({ Component, pageProps }: AppProps) {
  const [desiredPlayer, setDesiredPlayer] = useState<Criteria>({
    skill: "Anything will do",
    language: "Anything will do",
    gender: "Anything will do",
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getAllPlayers();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Component
      {...pageProps}
      desiredPlayer={desiredPlayer}
      setDesiredPlayer={setDesiredPlayer}
    />
  );
}
