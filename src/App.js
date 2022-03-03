import React, { useState, useEffect } from 'react'
import Acao from './Acao'

const App = () => {

  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://api.wazirx.com/sapi/v1/tickers/24hr")
      .then((resp) => resp.json())
      .then((moedas) => {

        setMoedas(

          (moedas || []).slice(0, 50).map(x => ({
            Nome: x.baseAsset,
            UltimoPreco: x.lastPrice,
            PrecoInicial: x.openPrice,
            Porcentagem: Math.round(((x.openPrice * 100) / x.lastPrice) - 100)
          })

          ))



      })
      .finally(() => setLoading(false))

  }, [])

  return (
    <>

      {
        loading ?
          <h1>
            Carregando
          </h1>
          :
          moedas.map((bitCoin, index) =>
            <Acao key={`${bitCoin.Nome}.${index}`} bitCoin={bitCoin} />
          )
      }

    </>
  );
}

export default App;
