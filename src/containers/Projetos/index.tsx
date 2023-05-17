import { Repository as RepositoryType } from '../../App'
import Titulo from '../../components/Titulo'
import Projeto from '../../components/Projeto'
import { Lista } from './styles'

type Props = {
  repositorios: RepositoryType[]
}

const Projetos = ({ repositorios }: Props) => {
  return (
    <section>
      <Titulo fontSize={16}>Projeto</Titulo>
      <Lista>
        {repositorios.map((repositorio) => (
          <Projeto key={repositorio.id} projeto={repositorio} />
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
