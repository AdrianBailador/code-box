import Link from 'next/link';
import '../styles/globals.css';
import Image from "next/image";

function getTypeIconSrc(type) {
    return `/images/types-icons/${type}.svg`;
}

function getPokemonImage(id) {
    const isPokemonHasSvg = id < 650;
    const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;
    if (isPokemonHasSvg) {
        return `${base}/dream-world/${id}.svg`;
    }
    return `${base}/official-artwork/${id}.png`;
}

const PokeCard = ({pokemon, pokemon: {name}}) => {

    return (
        // Un componente Link para la ruta a la página del pokemon
        <Link className={`pokemon-card ${pokemon.types[0].type.name}`} href={pokemon.name}>
            <div>
                <span className='id-number'>{'#' + pokemon.id}</span>
                <span className='pokemon-name'>{name}</span>

                <div className='types'>
                    {
                        pokemon.types.map(({type}) => {
                            const typeImg = getTypeIconSrc(type.name);

                            return (
                                <div key={type.name} className={type.name}>
                                    <img src={typeImg} alt={type.name}/>
                                    <span className='type-name'>{type.name}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='pokeball-bg'></div>
            <Image
                width={200}
                height={200}
                className='pokemon-image'
                src={`${getPokemonImage(pokemon.id)}`}
                alt={'pokemon-image'}/>
        </Link>
    )
        ;
};

export default PokeCard;
