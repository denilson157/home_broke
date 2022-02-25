const Acao = ({ bitCoin }) => {
    return (
        <div>
            <p>
                {bitCoin.Nome}
                |
                Preço: {bitCoin.UltimoPreco} |
                Preço Inicial: {bitCoin.PrecoInicial} |
                Diferença: {bitCoin.Porcentagem} |
            </p>
        </div>
    )
}

export default Acao