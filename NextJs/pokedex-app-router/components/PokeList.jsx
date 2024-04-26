import PokeCard from "@/components/PokeCard";
import {getPokemonList} from "@/utils/pokeAPIWrapper";

const PokeList = async () => {

    const pokemonList = await getPokemonList()

    const allPokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        return await response.json()
    }))

    return (
        <ul className='pokemons-container'>
            {
                allPokemonData.map((pokemon) => (
                    <li key={pokemon.id}>
                        <PokeCard pokemon={pokemon}/>
                    </li>
                ))
            }
        </ul>
    );
};

export default PokeList;