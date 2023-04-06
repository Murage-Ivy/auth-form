// import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"


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
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link className="number" onClick={() => paginate(number)} to="#">{number}</Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Pagination