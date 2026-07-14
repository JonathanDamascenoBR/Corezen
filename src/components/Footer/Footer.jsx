import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-gray-900 mt-auto">
      <div className="w-full max-w-7xl py-4 px-6 md:px-11 xl:px-16 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-10 h-10 text-cyan-400" />
            <span className="text-2xl font-bold tracking-widest text-white">CORE<span className="text-cyan-400">ZEN</span></span>
          </div>
          <p className="text-white mb-6">Hardware - Benchmarks - Reviews</p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-600 text-white transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-400 text-white transition-colors" aria-label="Twitter">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M22.162 5.656c-.63.28-1.307.467-2.02.551a3.533 3.533 0 001.553-1.95 7.054 7.054 0 01-2.238.855 3.518 3.518 0 00-5.992 3.207A9.995 9.995 0 013 4.89a3.516 3.516 0 001.088 4.693 3.484 3.484 0 01-1.593-.44v.045c0 1.702 1.21 3.123 2.816 3.448a3.52 3.52 0 01-1.587.06c.447 1.394 1.747 2.408 3.283 2.436A7.057 7.057 0 012 19.54a9.958 9.958 0 005.393 1.577c6.472 0 10.01-5.362 10.01-10.01 0-.153-.004-.307-.01-.459a7.15 7.15 0 001.769-1.748z" />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-500 text-white transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:mx-auto">
          <h3 className="text-white font-semibold text-xl mb-4">Navegação</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-sky-300 hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/combos" className="text-sky-300 hover:text-white transition-colors">Combos</Link>
            </li>
            <li>
              <Link to="#" className="text-sky-300 hover:text-white transition-colors">Serviços</Link>
            </li>
            <li>
              <Link to="#" className="text-sky-300 hover:text-white transition-colors">Contato</Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="lg:ml-auto">
          <h3 className="text-white font-semibold text-xl mb-4">Sobre Nós</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sky-300 hover:text-white transition-colors">Carreiras</a>
            </li>
            <li>
              <a href="#" className="text-sky-300 hover:text-white transition-colors">Blog</a>
            </li>
            <li>
              <a href="#" className="text-sky-300 hover:text-white transition-colors">Privacidade</a>
            </li>
            <li>
              <a href="#" className="text-sky-300 hover:text-white transition-colors">Termos</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
        <p className="text-lg mb-2">Construído por apaixonados por tecnologia</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Corezen. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
