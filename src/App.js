
const App = () => {

  const objetos = [
    {
      Crescimento: "",
      Nome: "MGLU13",
      Preco: 99.9
    },
    {
      Crescimento: "",
      Nome: "PETR4",
      Preco: 99.9
    },
    {
      Crescimento: "",
      Nome: "",
      Preco: 99.9
    }

  ]
  return (
    <div className="App">

      {
        objetos.map(o =>

          <div key={o.Crescimento}>

            <p>
              {o.Nome}
            </p>

          </div>

        )
      }

    </div>
  );
}

export default App;
