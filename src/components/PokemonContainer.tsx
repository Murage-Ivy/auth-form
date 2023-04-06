
import { useContext, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import Pagination from './Pagination'
import PokemonCard from './PokemonCard'
import PokemonHeader from './PokemonHeader'


function PokemonContainer() {
  const { pokemon } = useContext(PokemonContext)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pokemonPerPage] = useState<number>(8)



  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemons = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const pokemonList = currentPokemons?.map((pokemonInfo) => {
    return <PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />

  })




  return (
    <>
      <PokemonHeader />
      <div id='pokemon-container'>
        {pokemonList}
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemons={pokemon.length}
        paginate={paginate}
      />

    </>

  )
}

export default PokemonContainer