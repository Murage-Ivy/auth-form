
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

function PokemonContainer() {
  const { pokemon } = useContext(PokemonContext)

  console.log(pokemon?.[0])
  return (
    <div>

    </div>
  )
}

export default PokemonContainer