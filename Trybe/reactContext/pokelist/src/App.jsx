import React, { useState, useEffect } from "react";
import BestPokemon from "./components/BestPokemon";

function App() {
  const [limit, setLimit] = useState(10);
  const [pokemonList, setPokemonList] = useState([]);
  const [visible, setVisible] = useState(false);
  const endPointLimit = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`

  const getPokemons = () => setLimit(limit + 10);

  useEffect(() => {
    const fetchApi = async () => {
      console.log(limit);
      const { results } = await fetch(endPointLimit).then((response) => response.json());
      setPokemonList(results);
    }
    fetchApi();
  }
  , [limit]);

  return (
    <main>
      <section>
        <h1>Pokemon List</h1>
        <button type="button" onClick={getPokemons}>Buscar pokemons</button>
        <button type="button" onClick={() => setVisible(!visible)}> Mostrar o melhor pokemon</button>
        { visible && <BestPokemon />}
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
