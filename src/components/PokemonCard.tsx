import { PokemonProps } from '../context/PokemonContext'

type PokemonCardProps = {
    pokemonInfo: PokemonProps
}


function PokemonCard({ pokemonInfo }: PokemonCardProps) {
    return (
        <div className='pokemon-card'>
            <img src={pokemonInfo.sprites.front_default} alt="pokemon" />
            <p>{pokemonInfo.name}</p>

        </div>
    )
}

export default PokemonCard