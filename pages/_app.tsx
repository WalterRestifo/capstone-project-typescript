import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useState } from "react";
import { Criteria } from "../interfaces/interfaces";

export default function App({ Component, pageProps }: AppProps) {
  const [desiredPlayer, setDesiredPlayer] = useState<Criteria>({
    skill: "Anything will do",
    language: "Anything will do",
    gender: "Anything will do",
  });

  return (
    <div>
      <Component
        {...pageProps}
        desiredPlayer={desiredPlayer}
        setDesiredPlayer={setDesiredPlayer}
      />
    </div>
  );
}
