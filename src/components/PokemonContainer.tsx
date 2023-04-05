
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function PokemonContainer() {
    const {pokemons, pokemon} = useContext(PokemonContext)
    // console.log(pokemons)
    console.log(pokemon)
  return (
    <div>
        
    </div>
  )
}

export default PokemonContainer