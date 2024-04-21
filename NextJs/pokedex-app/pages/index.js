import { useState } from 'react' // Importa el hook useState de React para manejar el estado
import Head from 'next/head' // Importa el componente Head de Next.js para manejar el encabezado del documento
import Image from 'next/image' // Importa el componente Image de Next.js para manejar imágenes
import HomeCss from '../styles/Home.module.css' // Importa el módulo CSS para el estilo
import Link from 'next/link' // Importa el componente Link de Next.js para el enrutamiento

// Este es un componente funcional que recibe varias props
export default function Home({ pokemones, minimimosDatos, tipos, notFound }) {

  const [filtro, setFiltrar] = useState(minimimosDatos) // Define el estado para el filtro con useState

  const filtrar = (elTipo) => { // Define una función para filtrar los pokemones por tipo

    setFiltrar(minimimosDatos) // Resetea el filtro a los datos mínimos

    if (elTipo === "borrar") { // Si el tipo es "borrar", resetea el filtro
      setFiltrar(minimimosDatos)
    }
    else { // Si no, filtra los pokemones por el tipo seleccionado

      let filtradoPorTypo = minimimosDatos
        .filter((pokemon) => pokemon.types.some((tipo) => tipo.type.name === elTipo)) // Filtra los pokemones que tienen el tipo seleccionado
        .map((tem2) => { // Mapea los pokemones filtrados

          let nuevosTem = { ...tem2 } // Crea una copia del pokemon

          return nuevosTem // Devuelve el nuevo pokemon
        })
      setFiltrar(filtradoPorTypo) // Actualiza el estado del filtro con los pokemones filtrados

    }

  }

  return (
    <>
      <div className={HomeCss.container}> 
        <div className={HomeCss.filtros}> 
          <button className={`${HomeCss.botonFiltro} ${HomeCss.botonTodos}`} onClick={() => filtrar("borrar")}>
            Mostrar todos 
          </button>
          <div className={HomeCss.botones}> 
            {
              tipos.map((tipo, index) => { // Mapea los tipos de pokemones

                return (
                  <button key={tipo.name} className={`${HomeCss.botonFiltro} ${tipo.name}`} aria-label={tipo.name} onClick={() => filtrar(tipo.name)}>

                    {tipo.name} 

                  </button> // Un botón para cada tipo de pokemon
                )
              })
            }


          </div>
        </div>


        <div className={HomeCss.titulo}> 
          <h1>Pokemones</h1> 
        </div>
        <div className={HomeCss.columnas}> 

          <ul> 
            {filtro ? filtro.map(pokemon => ( // Mapea los pokemones filtrados
              <li key={pokemon.id}> 
                <Link scroll={false} href={{ // Un componente Link para la ruta a la página del pokemon
                  pathname: '/pokemon/[name]',
                  query: { name: pokemon.name }
                }}>
                  
                    <div className={`${HomeCss.card} ${pokemon.types[0].type.name}`}> 
                      <div className={HomeCss.nombreTipos}> 

                        <h3 exit={{ opacity: 0 }}>{pokemon.name}</h3> 


                        <div className={HomeCss.tipos}>
                          {pokemon.types.map((tipos, index) => { // Mapea los tipos del pokemon
                            return (
                              <div key={index} className={HomeCss.tipo}> 
                                {tipos.type.name} 
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <img
                        src={pokemon.sprites} // La URL de la imagen del pokemon
                        alt={pokemon.name} // El nombre del pokemon como texto alternativo para la imagen
                        width={100}
                        height={100}
                        className={HomeCss.imagen} // La clase CSS para la imagen
                      />
                    </div>
                  


                </Link>
              </li>
            )) : 'Cargando...'} 
          </ul>
        </div>


      </div>
    </>
  )
}

export async function getStaticProps(context) { // Esta función se ejecuta en el servidor antes de renderizar la página

  const resTipos = await fetch('https://pokeapi.co/api/v2/type') // Hace una petición a la API de tipos de Pokemon
  const tipos = await resTipos.json() // Convierte la respuesta en JSON

  const traemosPokemones = async (porPokemon) => { // Define una función para traer los pokemones
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${porPokemon}?limit=101&offset=0/`) // Hace una petición a la API de Pokemon
    const data = await response.json() // Convierte la respuesta en JSON

    return data // Devuelve los datos del pokemon
  }
  let pokemones = [] // Define un array para los pokemones
  for (let i = 1; i <= 100; i++) { // Para cada número del 1 al 100
    let data = await traemosPokemones(i) // Trae el pokemon correspondiente
    pokemones.push(data) // Añade el pokemon al array
  }



  let minimimosDatos = pokemones.map(pokemon => { // Mapea los pokemones para obtener los datos mínimos
    return {
      id: pokemon.id, // El ID del pokemon
      name: pokemon.name, // El nombre del pokemon
      sprites: pokemon.sprites.other.dream_world.front_default, // La URL de la imagen del pokemon
      types: pokemon.types // Los tipos del pokemon
    }
  })



  return {
    props: {
      tipos: tipos.results, // Devuelve los tipos como una prop
      minimimosDatos, // Devuelve los datos mínimos como una prop

    },
  }
}
