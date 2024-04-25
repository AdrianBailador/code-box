import PokeList from "@/components/PokeList";

export default function Home() {
    return (
        <main className='wrapper'>
            <h1 className='logo-pokemon'>Pokédex</h1>
            <PokeList/>
        </main>
    );
}
