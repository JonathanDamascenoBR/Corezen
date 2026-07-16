import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import TesteJogos from './pages/Testes/TestesEmJogos/TesteJogos'
import Login from './pages/Login/Login'
import Build from './pages/Build/BuildPage'
import Combos from './pages/Combos/Combos'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />

      {/* Conteúdo Principal */}
      <main className=" text-gray-200 flex justify-center flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/testeJogos" element={<TesteJogos />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
