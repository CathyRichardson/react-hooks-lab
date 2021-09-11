import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
   const [pokemon, setPokemon] = useState({}) 
   const { name } = props.match.params
   
    useEffect(async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setPokemon(data)
        } catch (error) {
            console.log(error)
        }
    }, [name])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
        </div>
    )
}
export default Pokemon;