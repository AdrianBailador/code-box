import React from 'react';
import PokeCss from '../../styles/Poke.module.css'
import '../../styles/globals.css'; // Importa el archivo CSS global
import Link from 'next/link'

const Pokemon = ({ data }) => {
    // Get the primary type of the Pokemon
    const primaryType = data.types[0].type.name;

    return (
        <div className={`${PokeCss.card} ${primaryType}`}>
            <div className={PokeCss.header}>
                <h1>{data.name}</h1>
                <span>#00{data.id}</span>
            </div>
            <img
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
                className={PokeCss.image}
            />
            <div className={PokeCss.body}>
                <h2>Types</h2>
                <div className={PokeCss.types}>
                    {data.types.map((type, index) => (
                        <span key={index} className={PokeCss.type}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <h2>Abilities</h2>
                <div className={PokeCss.abilities}>
                    {data.abilities.map((ability, index) => (
                        <span key={index} className={PokeCss.ability}>
                            {ability.ability.name}
                        </span>
                    ))}
                </div>
            </div>
            <button className={PokeCss.button}>
                <Link scroll={false} href="/">
                    Back to list
                </Link>
            </button>
        </div>


    );


};

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}

export default Pokemon;
