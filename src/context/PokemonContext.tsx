import { createContext, useEffect, useState } from "react";

type PokeContextProviderProps = {
    children: React.ReactNode
}

type PokemonContextType = {
    pokemon: PokemonProps[] | null,
    setPokemon: React.Dispatch<React.SetStateAction<any>>
    pokemons: PokemonsArrayType[] | null,
    setPokemons: React.Dispatch<React.SetStateAction<any>>
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

    const [pokemons, setPokemons] = useState<Array<PokemonsArrayType>>([])



    const value = {
        pokemon,
        pokemons,
        setPokemon,
        setPokemons

    }

    const fetchPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        setPokemons(data.results)
    }

    const fetchPokemon = async (pokemonUrl: string) => {
        const response = await fetch(`${pokemonUrl}`)
        const data = await response.json()
        setPokemon([...pokemon, data])
    }

    useEffect(() => {
        fetchPokemons()

    }, [])
    useEffect(() => {
        pokemons.map(pokemon => fetchPokemon(pokemon.url))
    }, [pokemons, fetchPokemon])


    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}
