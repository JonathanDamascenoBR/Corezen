import "./App.css";
import { Routes, Route } from "react-router-dom";
import TesteDesempenho from "./components/Pages/TesteDesempenho";


function App() {
  return (
    <main className="w-full mt-18">
      <Routes>
        <Route path="/" element={<TesteDesempenho />} />
      </Routes>
    </main>
  )
}

export default App