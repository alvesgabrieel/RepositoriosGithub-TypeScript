import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

//nesse caso passamos 'styled' como função porque vamos estilizar um outro componente
export const Descricao = styled(P)`
  margin: 24px 0 40px;
`
export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
//Como fazer o aside acompanhar a barra de rolagem
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
