import { createContext, useEffect, useState } from "react";

type PokeContextProviderProps = {
    children: React.ReactNode
}

type PokemonContextType = {
    pokemon: PokemonProps[],
    setPokemon: React.Dispatch<React.SetStateAction<any>>
}

export type PokemonProps = {
    name: string,
    sprites: {
        front_default: string,
        back_default: string
    },
    weight: number,
    height: number,
    id: number,
}

type PokemonsArrayType = {

    name: string,
    url: string,

}


export const PokemonContext = createContext<PokemonContextType>({} as PokemonContextType)

export const PokemonContextProvider = ({ children }: PokeContextProviderProps) => {
    const [pokemon, setPokemon] = useState<Array<PokemonProps>>([])



    const fetchPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        data.results?.map(async (pokemonurl: PokemonsArrayType) => {

            const response = await fetch(`${pokemonurl.url}`)
            const data = await response.json()
            setPokemon(prevPokemon => [...prevPokemon, data])

        })
    }



    useEffect(() => {
        fetchPokemons()

    }, [])


    const value = {
        pokemon,
        setPokemon,
    }
    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}
