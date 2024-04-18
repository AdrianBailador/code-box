import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPokemonDetails(data));
    }
  }, [name]);

  if (!pokemonDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <h2>Estadísticas</h2>
      {pokemonDetails.stats.map((stat, index) => (
        <div key={index}>
          {stat.stat.name}: {stat.base_stat}
        </div>
      ))}
    </div>
  );
}
