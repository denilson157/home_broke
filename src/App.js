import React, { Fragment } from 'react'
import Acao from './Acao'

const App = () => {

  const objetos = [
    {
      Crescimento: -12.32,
      Nome: "MGLU13",
      Preco: 99.9
    },
    {
      Crescimento: -7.32,
      Nome: "PETR4",
      Preco: 99.9
    },
    {
      Crescimento: 15.66,
      Nome: "OIBR4",
      Preco: 99.9
    }

  ]
  return (
    <div className="App">

      {
        objetos.map(acao =>

          <Fragment key={acao.Crescimento}>
            <Acao acao={acao} />
          </Fragment>

        )
      }

    </div>
  );
}

export default App;
