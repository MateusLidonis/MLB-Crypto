import React, { useState } from "react";
import axios from "axios";

function App() {
  const [coin, setCoin] = useState();
  const [coinData, setCoinData] = useState();

  const search = (e) => {
    e.preventDefault();
    if (coin) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=brl`
        )
        .then((res) => {
          setCoinData(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
    console.log(coin);
  };

  return (
    <div>
      <input
        placeholder="Digite uma criptomoeda"
        onChange={(e) => setCoin(e.target.value)}
      />
      <br></br>
      <br></br>
      <button type="submit" onClick={search}>
        Pesquisar
      </button>
      {coinData && coinData[coin] && <p>Preço: {coinData[coin].brl}</p>}
    </div>
  );
}

export default App;
