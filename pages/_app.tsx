import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Criteria, Member } from "../interfaces/interfaces";

export default async function App({ Component, pageProps }: AppProps) {
  const [desiredPlayer, setDesiredPlayer] = useState<Criteria>({
    skill: "Anything will do",
    language: "Anything will do",
    gender: "Anything will do",
  });

  const [allPlayers, setAllPlayers] = useState<Member[]>([]);

  return (
    <Component
      {...pageProps}
      desiredPlayer={desiredPlayer}
      setDesiredPlayer={setDesiredPlayer}
      allPlayers={allPlayers}
      setAllPlayers={setAllPlayers}
    />
  );
}
