import { Repository as RepositoryType } from '../../App'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

type Props = {
  projeto: RepositoryType
}

const Projeto = ({ projeto }: Props) => {
  return (
    <Card>
      <Titulo>{projeto.name}</Titulo>
      <Paragrafo tipo="secundario">{projeto.language}</Paragrafo>
      <LinkBotao>
        <a href={projeto.html_url} target="_blank" rel="noreferrer">
          Ver projeto no github
        </a>
      </LinkBotao>
    </Card>
  )
}

export default Projeto
