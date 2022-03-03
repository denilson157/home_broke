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
        
        font-size: 1.875rem;
        min-width: 50px;


        background-color: #17a2b8;
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
        font-size: 1.875rem;

    `

    const PrecoInicial = styled(TextoAcao)`
        color: #9e9293;
        text-decoration: line-through;
    `

    const PrecoAtual = styled(TextoAcao)`
        font-size: 1.6rem;
    `



    return (
        <BoxAcao>
            <DiferencaAcao>
                <div>
                    {
                        bitCoin.Porcentagem < 0 &&
                        <i>
                            {`<`}
                        </i>
                    }
                    {bitCoin.Porcentagem}
                    {
                        bitCoin.Porcentagem > 0 &&
                        <i>
                            {`>`}
                        </i>
                    }
                </div>
            </DiferencaAcao>
            
            <InfoAcao>

                <NomeAcao>
                    {bitCoin.Nome}
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