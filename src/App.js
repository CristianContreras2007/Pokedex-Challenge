
import './App.css';
import React, {useState} from 'react';
import Pokemon from './Pokemon';

const App = () => {

  const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'

  const [pokemonData, setPokemonData] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)

  const fetchPokemon = async (e) => {
    e.preventDefault()
  try{

    const fetchData = await fetch(API_BASE + searchedPokemon.toLowerCase())
    const json = await fetchData.json()
    setPokemonData(json)
    setError(null)
    setSearchedPokemon('')

  } catch (err) {
    console.error(err)
    setError('No Pokemon Found')
  }
  }
  
  return (
   <div>
    <center>
    <form onSubmit={fetchPokemon}>
      <input
      type='text'
      value={searchedPokemon}
      onChange = {e => setSearchedPokemon(e.target.value)}
      />
      <input type='submit' />
    </form>
    <div>
      {error ? <div>{error}</div> : <Pokemon pokemon={pokemonData} />}
    </div>
    </center>
   </div>
  );
}

export default App;
