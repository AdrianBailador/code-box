import Link from 'next/link';
import HomeCss from '../styles/Home.module.css' // Importa el módulo CSS para el estilo

const PokeCard = ({pokemon}) => {
    return (
        <Link scroll={false} href={pokemon.name}>
            <div className={`${HomeCss.card} ${pokemon.types[0].type.name}`}>
                <div className={HomeCss.nombreTipos}>
                    <h3 exit={{opacity: 0}}>{pokemon.name}</h3>
                    <div className={HomeCss.tipos}>
                        {pokemon.types.map((tipos, index) => {
                            return (
                                <div key={index} className={HomeCss.tipo}>
                                    {tipos.type.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img
                    src={pokemon.sprites.front_default} // La URL de la imagen del pokemon
                    alt={pokemon.name} // El nombre del pokemon como texto alternativo para la imagen
                    width={100}
                    height={100}
                    className={HomeCss.imagen} // La clase CSS para la imagen
                />
            </div>
        </Link>
    );
};

export default PokeCard;
