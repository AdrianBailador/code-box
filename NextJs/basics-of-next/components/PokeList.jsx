"use client"
import React, {useEffect, useState} from 'react';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0.`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokeList(data.results);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchPokemon();
    }, []);

    return (
        <ul>
            {pokeList.map((pokemone, index) => (
                <li key={pokemone.name}>{pokemone.name}</li>
            ))}
        </ul>

    );
};

export default PokeList;