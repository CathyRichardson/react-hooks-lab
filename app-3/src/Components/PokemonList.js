import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PokemonList(props) {

    const [pokemons, setPokemons] = useState([]);

    useEffect(async () => {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(data.results)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            {pokemons.map((item, index) => {
                return <Link to={`/pokemon/${item.name}`}><p key={index}>{item.name}</p></Link>
            })}
        </div>
    );
}

export default PokemonList;
