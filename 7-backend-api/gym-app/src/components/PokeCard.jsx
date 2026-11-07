function PokeCard({ pokemon }) {
  return (
    <div className="poke-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>#{pokemon.id} {pokemon.name}</h3>
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
    </div>
  )
}

export default PokeCard
