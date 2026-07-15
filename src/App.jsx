import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Build from './pages/Build/Build'
import Combos from './pages/Combos/Combos'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
        <Header />

        {/* Conteúdo Principal */}
        <main className="my-10 text-gray-200 flex justify-center flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<Build />} />
            <Route path="/combos" element={<Combos />} />
          </Routes>
        </main>

        <Footer />
    </>
  )
}

export default App
