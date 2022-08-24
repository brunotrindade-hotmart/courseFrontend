import React, { useEffect } from 'react';

export default function BestPokemon () {
  useEffect(() => {
    return function cleanUp () {
      console.log("Desmontou")
    };
  }, [])
  
  return (
    <div>
      <h1>Scyther</h1>
    </div>
  )
}