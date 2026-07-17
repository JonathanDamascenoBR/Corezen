import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import AreaUsuario from './pages/AreaUsuario/AreaUsuario'
import Home from './pages/Home/Home'
import Build from './pages/Build/BuildPage'
import Combos from './pages/Combos/Combos'
import TesteJogos from './pages/Testes/TestesEmJogos/TesteJogos'
import TesteDeDesempenho from './pages/Testes/TestesDeDesempenho/TestesDeDesempenho'
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
          <Route path="/testeDesemp" element={<TesteDeDesempenho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuario" element={<AreaUsuario />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
