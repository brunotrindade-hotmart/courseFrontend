import React, { useEffect, useState } from 'react';
import Messanger from '../messanger';

export default function RandomNumber({ timer }) {
  const [hit, setHit] = useState(false);
  const [randomNumber, setRandomNumber] = useState();

  const valueRandomNumber = () => setRandomNumber();

  const valueHit = () => setHit(false);

  const changeHit = () => {
    setHit(true);
    setTimeout(valueHit, 4000);
    setTimeout(valueRandomNumber, 4000)
  }

  const rule = (number) => {
    (number%3 === 0) && changeHit();
    (number%5 === 0) && changeHit();
  }

  const random = () => {
    const result = (Math.random()*100).toFixed(0);
    setRandomNumber(result);
    rule(result);
  }

  useEffect(() => {
    rule(randomNumber);
  }, [randomNumber]);

  useEffect(() => {
    const result = (timer/1000)%10;
    (timer > 1000) && (result === 0) && random();
  }, [timer]);

  return (
    <div>
      <h3>Número Aleatório</h3>
      <h2>{ randomNumber }</h2>
      <Messanger hit={hit} />
    </div>
  );
}