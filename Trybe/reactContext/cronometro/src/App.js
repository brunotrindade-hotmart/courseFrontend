import React, { useState, useEffect } from 'react';
import Acerto from './component/Acerto';

function App() {
  const [numero, setNumero] = useState();
  const [acerto, setAcerto] = useState(false);

  const timeout = () => {
    setTimeout(setAcerto(!acerto), 4000)
  }

  const handleAcerto = () => {
    setAcerto(!acerto);
    timeout();
  }

  const calcular = () => (numero%3 === 0 || numero%5 === 0) ? handleAcerto() : null;

  const random = () => {
    setNumero((Math.random()*100).toFixed(0));
  }

  useEffect(() => {
    calcular();
  }, [numero, calcular]);

  useEffect(() => {
    setTimeout(random, 10000);
  }, []);

  return (
    <div>
      {
        acerto && <Acerto acerto={acerto}/>
      }
    </div>
  );
}

export default App;
