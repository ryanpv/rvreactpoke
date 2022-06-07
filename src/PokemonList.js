import React from 'react'

export default function PokemonList({ pokemon }) {

  return (
    <div>
        {pokemon.map(p => (
            <div key={p}>{p}</div> // unique key - {p} shouldnt have any duplicates so it works
        ))}
    </div>
  )
}
