// import React, { useEffect, useState } from 'react'


type PaginationProps = {
    pokemonPerPage: number,
    totalPokemons: number,
    paginate: (pageNumber: number) => void


}

function Pagination({ pokemonPerPage, totalPokemons, paginate }: PaginationProps) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">{number}</a>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Pagination