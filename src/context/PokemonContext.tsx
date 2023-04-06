import { createContext, useEffect, useState } from "react";

type PokeContextProviderProps = {
    children: React.ReactNode
}

type PokemonContextType = {
    pokemon: PokemonProps[] | null,
    setPokemon: React.Dispatch<React.SetStateAction<any>>
}

type PokemonProps = {
    name: string,
    url: string,
    id: number,
    image: string,
    types: string[],
    stats: {
        hp: number,
        attack: number,
        defense: number,
        speed: number,
        specialAttack: number,
        specialDefense: number
    }
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





    // const fetchPokemon = useCallback(async (pokemonUrl: string) => {
    //     const response = await fetch(`${pokemonUrl}`)
    //     const data = await response.json()
    //     setPokemon([...pokemon, data])
    // }, [pokemon])







    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}
