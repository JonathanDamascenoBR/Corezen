import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-60">
        {/* <!-- Barra superior --> */}
        <div className="w-full h-10 bg-zinc-800 flex">
            {/* <!-- Div menu esquerda --> */}
            <div className="w-1/2">
                {/* <!-- Espaço para novidades --> */}
            </div>
            {/* <!-- Div menu direita --> */}
            <div className="w-1/2 flex justify-end px-10 gap-6 self-center">
                <div className="">
                    <a href=""><span className="fi fi-br text-xl"></span></a>
                </div>
                <nav1 className="">
                    <ul className="flex gap-6">
                        <li className="border-l-2 border-r-2 border-gray-600 px-5 hover:underline">
                            <a href="">Suporte</a>
                        </li>
                        <li className="hover:underline">
                            <a href="">Entrar</a>
                        </li>
                    </ul>
                </nav1>
            </div>
        </div>
        <div className="w-full xl:w-7xl py-4 mx-auto flex items-center xl:justify-between">
            {/* <!-- Ícone --> */}
            <div className="flex px-10">
                <button id="menu-toggle"
                    className="flex md:hidden hover:cursor-pointer hover:scale-120 duration-200 hover:text-cyan-300">
                    <i className="bi bi-list text-5xl pr-7"></i>
                </button>
            </div>

            {/* <!-- Menu --> */}
            <div className="md:w-max w-full group flex items-center justify-center cursor-pointer pt-2 md:pr-0 pr-40">
                <a href="home.html"><img src="../../media/imgs/LOGO BRANCO.png" alt="Logo"
                        className="w-16 h-16 object-contain relative transition-transform duration-300 group-hover:scale-105" /></a>

                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out max-w-0 opacity-0 group-hover:max-w-[250px] group-hover:opacity-100 group-hover:ml-4">
                    <img src="../../media/imgs/nome.png" alt="Nome do site" className="h-4 w-max object-contain" />
                </div>
            </div>
            <div className="mx-auto hidden md:flex w-full justify-end gap-30 pr-10">
                <nav className="flex gap-10 text-2xl"></nav>
            </div>
        </div>
    </header>
  );
}