import styled from 'styled-components'


export const BoxAcao = styled.div`
box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
border-radius: .25rem;
display: flex;
margin: 0 1rem 1rem 1rem;
padding: .6rem;
min-width: 30%;
`

export const DiferencaAcao = styled.div`
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

export const InfoAcao = styled.div`
display: flex;

flex-direction: column;

justify-content: center;
    
padding: 0 10px;
`

const TextoAcao = styled.p`
margin: 0px;
margin-block: 0px;
`

export const NomeAcao = styled(TextoAcao)`
font-size: 1.775rem;

`

export const PrecoInicial = styled(TextoAcao)`
color: #9e9293;
text-decoration: line-through;
`

export const PrecoAtual = styled(TextoAcao)`
font-size: 1.5rem;
`

export const Icone = styled.span.attrs({
    className: 'material-icons',
    value: `${props => props.value}`
})`
color: ${props => props.color}
`

export const Porcentagem = styled.p`
display: inline;
margin: 0 0 0 8px;
`

export const SimboloPorcentagem = styled.span`
font-size: 1.2rem;
margin: 0 8px 0 0
`

export const ContainerAcao = styled.div`
    display: flex;
    flex-wrap: wrap
`