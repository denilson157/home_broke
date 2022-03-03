import {
    BoxAcao,
    DiferencaAcao,
    InfoAcao,
    NomeAcao,
    PrecoInicial,
    PrecoAtual,
    Icone,
    Porcentagem,
    SimboloPorcentagem,
} from './Components'

const arredondarEFormatar = (valor) => {
    valor = parseFloat(valor)
    let numero = Math.round(((valor || 0) + Number.EPSILON) * 100) / 100
    return numero.toLocaleString("pt-BR")
}

const Acao = ({ bitCoin }) => {

    return (
        <BoxAcao>
            <DiferencaAcao>
                <div>

                    <Icone color={bitCoin.Porcentagem < 0 ? "red" : "#17a2b8d4"}>
                        trending_down
                    </Icone>

                    <Porcentagem>
                        {Math.abs(bitCoin.Porcentagem)}
                    </Porcentagem>
                    <SimboloPorcentagem>%</SimboloPorcentagem>

                    <Icone color={bitCoin.Porcentagem > 0 ? "#1bff00" : "#17a2b8d4"}>
                        trending_up
                    </Icone>

                </div>
            </DiferencaAcao>

            <InfoAcao>

                <NomeAcao>
                    {bitCoin.Nome.toUpperCase()}
                </NomeAcao>

                <PrecoInicial>
                    {arredondarEFormatar(bitCoin.PrecoInicial)}
                </PrecoInicial>

                <PrecoAtual>
                    {arredondarEFormatar(bitCoin.UltimoPreco)}
                </PrecoAtual>

            </InfoAcao>
        </BoxAcao>
    )
}

export default Acao