import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./assets/Components/Header/Header";
import Comparaçao from "./assets/Components/Comparaçao/Comparaçao";
import Footer from "./assets/Components/Footer/Footer";

function App() {

  return (
  <>
    <Header/>
    <main className="bg-slate-950 text-white orbitron">



    <Comparaçao/>
    <Footer/>
    </main>
    
  
  </>
  );
}

export default App;
