import "./Header.css";
import MenuTopo from '../Header/MenuTopo/MenuTopo'
import MenuMobile from '../Header/MenuHover/MenuMobile'
import MenuHoverTeste from './MenuHover/MenuHoverTeste'
import Logo from '../../assets/imgs/LogoBranco.png'
import LogoHover from '../../assets/imgs/nome.png'


function Header() {
    return (
        <>
            <header className="w-full absolute top-0 left-0 z-60">
                {/* <!-- Barra superior --> */}
                <MenuTopo />
                <div
                    className="w-full xl:w-7xl py-4 mx-auto flex items-center xl:justify-between"
                >
                    <MenuMobile />

                    {/* <!-- Menu --> */}
                    <div
                        className="md:w-max w-full group flex items-center justify-center cursor-pointer pt-2 md:pr-0 pr-40"
                    >
                        <a href="/"
                        ><img
                                src={Logo}
                                alt="Logo"
                                className="w-16 h-16 object-contain relative transition-transform duration-300 group-hover:scale-105"
                            /></a>

                        <div
                            className="overflow-hidden transition-all duration-500 ease-in-out max-w-0 opacity-0 group-hover:max-w-[250px] group-hover:opacity-100 group-hover:ml-4"
                        >
                            <img
                                src={LogoHover}
                                alt="Nome do site"
                                className="h-4 w-max object-contain"
                            />
                        </div>
                    </div>

                    <div className="mx-auto hidden md:flex w-full justify-end gap-30 pr-10">
                        <div className="">
                            {/* <!-- Textos Header --> */}
                            <nav className="flex gap-10 text-2xl">
                                {/* Aba Hover Testes */}
                                <MenuHoverTeste />
                            </nav>
                        </div>
                        {/* <!-- Fim Div menu aba testes --> */}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
