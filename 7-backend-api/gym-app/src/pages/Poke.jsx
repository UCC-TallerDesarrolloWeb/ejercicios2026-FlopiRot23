import { useState, useEffect } from 'react'
import PokeCard from '@components/PokeCard'

function Poke() {
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const traerPokemones = async () => {
      try {
        const lista = []
        // pido los pokemones del 1 al 20
        for (let i = 1; i <= 20; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          const data = await response.json()
          lista.push(data)
        }
        setPokemones(lista)
      } catch (error) {
        console.log('Error al traer los pokemones', error)
      }
    }

    traerPokemones()
  }, [])

  return (
    <div className="poke">
      <h2>Pokemones</h2>
      <div className="poke-lista">
        {pokemones.map((p) => (
          <PokeCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  )
}

export default Poke
