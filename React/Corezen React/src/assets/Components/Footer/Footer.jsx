import { Link } from "react-router-dom";

export default function Footer() {
  return ( 
     <footer className="bg-slate-950 text-gray-400 pt-16 pb-8">
        <div className="w-full max-w-7xl py-4 px-11 xl:px-16 mx-auto grid sm:grid-cols-3 md:grid-cols-3 gap-10">
            {/* <!-- Logo + descrição --> */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                    <img src="../../media/imgs/nome.png" className="h-auto w-58" alt="nome" />
                </h2>
                <p className="text-w mb-6">
                    Hardware - Benchmarks - Reviews
                </p>

                {/* <!-- Redes sociais --> */}
                <div className="flex space-x-4">
                    <a href="#" className=" hover:text-blue-800 text-white transition flex items-center justify-center">
                        {/* <!-- Facebook --> */}
                        <i className="bi bi-facebook text-4xl"></i>
                    </a>

                    <a href="#" className="hover:text-blue-400 text-white transition flex items-center justify-center">
                        {/* <!-- Twitter/X --> */}
                        <i className="bi bi-twitter-x text-4xl"></i>
                    </a>

                    <a href="#" className="hover:text-pink-500 text-white transition flex items-center justify-center">
                        {/* <!-- Instagram --> */}
                        <i className="bi bi-instagram text-4xl"></i>
                    </a>
                </div>
            </div>

            {/* <!-- Menu 1 --> */}
            <div className="w-fit md:mx-auto text-left text-xl md:translate-x-12">
                <h3 className="text-white font-semibold mb-4">Navegação</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Serviços</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Contato</a>
                    </li>
                </ul>
            </div>

            {/* <!-- Menu 2 --> */}
            <div className="w-fit md:ml-auto text-left text-xl">
                <h3 className="text-white font-semibold mb-4">Sobre Nós</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Carreiras</a>
                    </li>
                    <li><a href="#" className="hover:text-white text-sky-300 transition">Blog</a></li>
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Privacidade</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white text-sky-300 transition">Termos</a>
                    </li>
                </ul>
            </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-white">
            <p className="text-lg">Construído por apaixonados por tecnologia</p>
            <p className="text-sm">&copy; 2026 Corezen. Todos os direitos reservados.</p>
        </div>
    </footer>




  );
}