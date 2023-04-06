import { useState } from 'react'
import { PokemonProps } from '../context/PokemonContext'

type PokemonCardProps = {
    pokemonInfo: PokemonProps
}
type VisibleProps = {
    visible: boolean

}



function PokemonCard({ pokemonInfo }: PokemonCardProps) {


    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        setVisible(prevState => !prevState)
        console.log(event.currentTarget)
    }
    const [visible, setVisible] = useState(false)

    return (
        <div className='pokemon-card' onClick={handleClick}>
            <img src={visible ? pokemonInfo.sprites.back_default : pokemonInfo.sprites.front_default} alt="pokemon" />
            <p>{pokemonInfo.name}</p>
            <div className="pokemon-health">
                <p>Weight: {pokemonInfo.weight}</p>
                <p>Height: {pokemonInfo.height}</p>
            </div>
        </div>
    )
}

export default PokemonCard