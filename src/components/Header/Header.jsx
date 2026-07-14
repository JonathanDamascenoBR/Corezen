import { Link } from 'react-router-dom';
import { Menu, Cpu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTestMenuOpen, setIsTestMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTestMenu = () => setIsTestMenuOpen(!isTestMenuOpen);

  return (
    <>
      <header className="w-full absolute top-0 left-0 z-50">
        {/* Top bar */}
        <div className="w-full h-10 bg-zinc-800 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-end px-4 md:px-10 gap-4 md:gap-6 items-center text-sm md:text-base">
            <div>
              <span className="text-xl">🇧🇷</span>
            </div>
            <nav>
              <ul className="flex gap-4 md:gap-6 items-center">
                <li className="border-l-2 border-r-2 border-gray-600 px-3 md:px-5 hover:underline">
                  <a href="#">Suporte</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Entrar</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full max-w-7xl py-4 mx-auto flex items-center justify-between">
          {/* Mobile Menu Icon */}
          <div className="flex px-4 md:px-10 md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="hover:cursor-pointer hover:scale-110 duration-200 hover:text-cyan-300"
            >
              <Menu className="w-10 h-10" />
            </button>
          </div>

          {/* Logo Area */}
          <div className="group flex items-center justify-center cursor-pointer pt-2 mx-auto md:mx-0 md:ml-10">
            <Link to="/" className="flex items-center gap-3">
              <Cpu className="w-12 h-12 text-cyan-400 relative transition-transform duration-300 group-hover:scale-105" />
              <div className="overflow-hidden transition-all duration-500 ease-in-out">
                <span className="text-3xl font-bold tracking-widest text-white">CORE<span className="text-cyan-400">ZEN</span></span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex w-full justify-end gap-10 pr-10 items-center">
            <nav className="flex gap-8 text-xl items-center">
              <Link to="/" className="text-white hover:text-cyan-300 transition-colors">Home</Link>
              <Link to="/combos" className="text-white hover:text-cyan-300 transition-colors">Combos</Link>
              
              {/* Dropdown Menu */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-cyan-300 transition-colors py-2">
                  Testes <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full right-0 w-56 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50">
                  <div className="bg-slate-900 border border-gray-700/50 rounded-lg shadow-xl shadow-black/50 overflow-hidden flex flex-col">
                    <Link to="#" className="px-4 py-3 text-white hover:text-cyan-300 hover:bg-slate-800 transition-colors">
                      Teste de Jogos
                    </Link>
                    <Link to="#" className="px-4 py-3 text-white hover:text-cyan-300 hover:bg-slate-800 transition-colors">
                      Teste de Desempenho
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Content */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-950 z-50 transform transition-transform duration-300 ease-in-out border-r border-gray-800 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6 mt-14">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-cyan-300 transition-colors">Home</Link>
            <Link to="/combos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-cyan-300 transition-colors">Combos</Link>
            <div>
              <button 
                onClick={toggleTestMenu}
                className="flex items-center justify-between w-full text-xl text-white hover:text-cyan-300 transition-colors"
              >
                Testes <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isTestMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`flex flex-col gap-4 mt-4 ml-4 overflow-hidden transition-all duration-300 ${isTestMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link to="#" className="text-gray-300 hover:text-cyan-300 transition-colors">Teste de Jogos</Link>
                <Link to="#" className="text-gray-300 hover:text-cyan-300 transition-colors">Teste de Desempenho</Link>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
