import Image from "next/image";
import styles from "./page.module.css";
import PokeList from "@/components/PokeList";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>PokeDex</h1>
      <PokeList />
    </main>
  );
}
