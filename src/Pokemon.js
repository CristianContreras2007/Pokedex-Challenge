import React from 'react'
import './App.css';

const Pokemon = ({pokemon}) => {

    if(pokemon === null) return
    const name = pokemon.name
    const image = pokemon.sprites.front_default
    const types = pokemon.types.map(el => el.type.name)
    const typesString = types.join(', ')
    const weight = pokemon.weight
    const number = pokemon.order
    const height = pokemon.height

    return(
        <div class="description">
            <center>
            <h1>Name: {name}</h1>
            <img src= {image} alt="Pokemon"/>
            <h2>Type: {typesString}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Number: {number}</h2>
            <h2>Height: {height}</h2>
            </center>
        </div>

    )

}

export default Pokemon