import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Login from './pages/Login/login'
import AreaUsuario from './pages/AreaUsuario/AreaUsuario'
import Home from './pages/Home/Home'
import Build from './pages/BuildPage/BuildPage'
import Combos from './pages/Combos/Combos'
import TesteJogos from './pages/Testes/TestesEmJogos/TesteJogos'
import TesteDeDesempenho from './pages/Testes/TesteDeDesempenho/TesteDeDesempenho'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/Home/ScrollToTop/ScrollToTop';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      {/* Conteúdo Principal */}
      <main className=" text-gray-200 flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/testeJogos" element={<TesteJogos />} />
          <Route path="/testesDesemp" element={<TesteDeDesempenho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuario" element={<AreaUsuario />} />
        </Routes>
      </main>

      <ChatBot />

      <Footer />
    </>
  )
}

export default App