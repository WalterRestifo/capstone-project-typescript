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

  const [allPlayers, setAllPlayers] = useState<Member[]>([]);

  async function getAllPlayers(): Promise<void> {
    const response = await fetch("/api/allPlayers");
    if (!response.ok) {
      return console.error(
        "Error with the response of the fetch. Response status: ",
        response.status
      );
    } else {
      const listOfAllPlayers = await response.json();
      setAllPlayers(listOfAllPlayers);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getAllPlayers();
    }, 500);
    return () => clearInterval(interval);
  }, []);

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
