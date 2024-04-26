import React from 'react';
import Image from "next/image";

const PokemonImage = ({imageUrl, name}) => {
    return (
        <Image
            src={imageUrl}
            alt={`Image of ${name}`}
            priority
            fill
        />
    );
};

export default PokemonImage;