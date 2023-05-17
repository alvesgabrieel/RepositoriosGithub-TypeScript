import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState, useEffect } from 'react'

export type Repository = {
  id: string
  name: string
  language: string
  html_url: string
}

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(true)
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/alvesgabrieel/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  const handlerTema = () => {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={handlerTema} />
        <main>
          <Sobre />
          <Projetos repositorios={repositories} />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
