const pokeAPI = 'https://pokeapi.co/api/v2/';

//function to get the list of pokemons
export async function getPokemonList() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=27&offset=0`)
    const data = await response.json()
    return data.results
}

//function to get the pokemon by name
export async function getPokemonByName(name) {
    const response = await fetch(`${pokeAPI}pokemon/${name}`);
    return await response.json();
}
