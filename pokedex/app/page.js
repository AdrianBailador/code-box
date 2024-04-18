"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(response => response.json())
      .then(data => setPokemonList(data.results));
  }, []);

  return (
    <div>
      <h1>Listado de Pokémon</h1>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <Link href={`/pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}


