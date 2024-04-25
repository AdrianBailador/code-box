import PokeCard from "@/components/PokeCard";

const PokeList = async () => {
    // Hace una petición a la API de Pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=27&offset=0.`)
    // Convierte la respuesta en JSON
    const data = await response.json()
    const pokemonList = data.results

    const allPokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        //console.log(JSON.stringify(data, null, 2));
        return data
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