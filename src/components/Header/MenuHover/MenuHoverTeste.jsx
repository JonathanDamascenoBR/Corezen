import { useState } from 'react'
import MenuData from '../../../data/Menu.json'

function MenuHoverTeste() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen)
    }


    return (
        <>
            {/* <!-- Inicio Div menu aba testes --> */}
            {MenuData.map((item, idx) => (
                <div key={idx} className='z-60'>
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-cyan-300 flex flex-col items-center"
                    >
                        <a
                            href={item.url}
                            className="flex items-center justify-center text-white hover:text-cyan-300 transition"
                        >
                            <span className="ml-3">{item.label}</span>
                        </a>

                        {/* <!-- Conteúdo do Menu --> */}
                        {item.subMenu && (
                            <div

                                className={`absolute flex 2xl:ml-255 2xl:justify-center justify-end top-0 left-0 right-0 transform transition-transform duration-300 ease-in-out z-30 py-9 px-10 gap-6 
                                    ${isOpen ? 'translate-y-full' : '-translate-y-full'}`}>
                                {item.subMenu.map((itemSub, idx) => (
                                    <a
                                        key={idx}
                                        href={itemSub.url}
                                        className="flex items-center text-white hover:text-cyan-300 transition z-60"
                                    >
                                        <span className="">{itemSub.label}</span>
                                    </a>
                                )
                                )}
                            </div>
                        )}
                    </button>
                </div>
            ))}

        </>
    )
}

export default MenuHoverTeste