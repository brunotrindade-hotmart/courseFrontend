import MyContext from "./MyContext";
import { useState } from "react";
import Daugther from "./Daugther";

export default function GreatGrandMother () {
  const [money, setMoney] = useState(1000000);

  console.log(money);

  const handleSpendMoney = () => {
    setMoney((prevState) => prevState - 100);
  }

  const contextValue = {
    money: money,
    spendMoney: handleSpendMoney,
  }

  return (
    <MyContext.Provider value={contextValue}>
        <h1>Eu sou a bisavó</h1>
        <Daugther />
    </MyContext.Provider>
  );
};
