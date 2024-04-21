import Image from "next/image";
import styles from "./page.module.css";
import PokeList from "@/components/PokeList";
import HomeCss from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={HomeCss.container}>
      <h1>PokeDex</h1>
      <PokeList />
    </main>
  );
}
