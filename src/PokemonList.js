import React from 'react'

export default function PokemonList({ pokemon }) { // prop from App.js (pokemon state) passed into function argument

  return (
    <div>
        {pokemon.map(p => ( // calls pokemon argument to map() over the pokemon list to provide "key" for each element
            <div key={p}>{p}</div> // providing unique key to each object in the list (which are the pokmon objects: name and url)- {p} shouldnt have any duplicates so it works
        ))}
    </div>
  )
}
