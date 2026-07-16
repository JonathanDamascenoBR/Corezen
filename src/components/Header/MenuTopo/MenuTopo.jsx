import "flag-icons/css/flag-icons.min.css";

function MenuTopo() {
    return (
        <>
            {/* <!-- Barra superior --> */}
            <div className="w-full h-10 bg-zinc-800 flex text-white">
                {/* <!-- Div menu esquerda --> */}
                <div className="w-1/2">
                    {/* <!-- Espaço para novidades --> */}
                </div>
                {/* <!-- Div menu direita --> */}
                <div className="w-1/2 flex justify-end px-10 gap-6 self-center">
                    <div className="">
                        <a href=""><span className="fi fi-br text-xl"></span></a>
                    </div>
                    <nav className="">
                        <ul className="flex gap-6">
                            <li
                                className="border-l-2 border-r-2 border-gray-600 px-5 hover:underline"
                            >
                                <a href="">Suporte</a>
                            </li>
                            <li className="hover:underline">
                                <a href="/login">Entrar</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MenuTopo