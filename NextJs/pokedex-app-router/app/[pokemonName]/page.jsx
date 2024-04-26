import {getPokemonByName} from "@/utils/pokeAPIWrapper";
import PokemonImage from "@/components/PokemonImage";

const PokemonPage = async ({ params }) => {
    //get the name of the pokemon using object destructuring of the params object
    const { pokemonName } = params
   // console.log(params)
    //call the getPokemonByName function using the pokemonAPIWrapper
    // Util and pass the name of the pokemon obtained from params
    const pokemonData = await  getPokemonByName(pokemonName)
    return (
        <div>
            <div>
                <h1>{pokemonName}</h1>
                <span>#{pokemonData.id}</span>
            </div>
            <PokemonImage
                imageUrl={pokemonData.sprites.other.dream_world.front_default}
                name={pokemonName}
                />

            {/*<div>
                <h2>Types</h2>
                <div>
                    {data.types.map((type, index) => (
                        <span key={index}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <h2>Abilities</h2>
                <div >
                    {data.abilities.map((ability, index) => (
                        <span key={index} >
                            {ability.ability.name}
                        </span>
                    ))}
                </div>
            </div>
            <button >
                <Link scroll={false} href="/NextJs/pokedex-app-router/public">
                    Back to list
                </Link>
            </button>*/}
        </div>
    );
};

export default PokemonPage;
