import styled from 'styled-components'


const arredondarEFormatar = (valor) => {
    valor = parseFloat(valor)
    let numero = Math.round(((valor || 0) + Number.EPSILON) * 100) / 100
    return numero.toLocaleString("pt-BR")
}

const Acao = ({ bitCoin }) => {

    const BoxAcao = styled.div`
        box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
        border-radius: .25rem;
        display: flex;
        margin-bottom: 1rem;
        padding: .6rem;
    `

    const DiferencaAcao = styled.div`
        border-radius: .25rem;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        font-size: 1.775rem;
        min-width: 90px;
        padding: 0 10px;


        background-color: #17a2b8d4;
        `

    const InfoAcao = styled.div`
        display: flex;
    
        flex-direction: column;
    
        justify-content: center;
            
        padding: 0 10px;
    `

    const TextoAcao = styled.p`
        margin: 0px;
        margin-block: 0px;
    `

    const NomeAcao = styled(TextoAcao)`
        font-size: 1.775rem;

    `

    const PrecoInicial = styled(TextoAcao)`
        color: #9e9293;
        text-decoration: line-through;
    `

    const PrecoAtual = styled(TextoAcao)`
        font-size: 1.5rem;
    `

    const Icone = styled.span.attrs({
        className: 'material-icons',
        value: `${props => props.value}`
    })`
        color: ${props => props.color}
    `

    const Porcentagem = styled.p`
        display: inline;
        margin: 0 0 0 8px;
    `

    const SimboloPorcentagem = styled.span`
        font-size: 1.2rem;
        margin: 0 8px 0 0
    `

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