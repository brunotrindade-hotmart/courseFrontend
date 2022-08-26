import React, { useState, useEffect } from "react";

function App() {
  const DEFAULT_LIMIT = 10

  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemons = () => setLimit(limit + 10)



  useEffect(()=>{

    const getPokemonsList = async () => {
      const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const { results } = await fetch(endPoint).then((response) => response.json());
      setPokemonList(results);
    } 

    getPokemonsList()
    
  },[ limit ])

  return (
    <main>
      <section>
        <h1>Pokemon dddd</h1>
        <button type="button" onClick={getPokemons}>Buscar pokemons</button>
        <div>
          <ul>
            {
              pokemonList.map(({ name }) => (<li key={ name }>{ name }</li>))
            }
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
