
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import PokemonCard from './PokemonCard'


function PokemonContainer() {
  const { pokemon } = useContext(PokemonContext)
  const pokemonList = pokemon?.map((pokemonInfo) => {
    return <PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />

  })



  return (
    <div className='pokemon-container'>
      {pokemonList}
    </div>
  )
}

export default PokemonContainer