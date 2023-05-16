import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Gabriel Alves</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          alvesgabrieel
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
