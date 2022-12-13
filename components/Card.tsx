import styles from "../styles/Home.module.css";

export default function Card({ name }) {
  return <p className={styles.card}>{name}</p>;
}
