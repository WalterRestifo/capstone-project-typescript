import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

import styles from "../styles/Home.module.css";
import styled from "styled-components";

const dummyArray = [
  {
    name: "Walter",
  },
  {
    name: "Eshi",
  },
  {
    name: "Andy",
  },
  {
    name: "Elgin",
  },
  {
    name: "Kirsten",
  },
  {
    name: "Neele",
  },
  {
    name: "Waltertest",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MatchBall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          {dummyArray.map(({ name }) => {
            return <Card key={name} name={name} />;
          })}
        </div>
      </main>
    </div>
  );
}
