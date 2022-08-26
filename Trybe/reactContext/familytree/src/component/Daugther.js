import React from 'react';
import MyContext from './MyContext';

export default function Daugther() {
  return(
    <MyContext.Consumer>
      {
        (value) => (
          <div>
            <p>{`Eu tenho ${value.money} para gastar`}</p>
            <button onClick={ value.spendMoney }>Pedir um Ifood</button>
          </div>
        )
      }
    </MyContext.Consumer>
  );
}
