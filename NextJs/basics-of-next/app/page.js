import Image from "next/image";
import styles from "./page.module.css";
import Img1 from "../public/images/pexels-veeterzy-303383.jpg";
import PokeList from "@/components/PokeList";
export default function HomePage() {
    return (
        <>
            <h1>
                The Official Website of the most beautiful Pokemon's
            </h1>
            <p>
                The first ten pokemon's
            </p>
            <PokeList />
        </>
    );
}
