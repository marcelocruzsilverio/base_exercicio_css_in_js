import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'

// import './global.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
