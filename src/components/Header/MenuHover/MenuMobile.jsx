import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react'
import MenuData from '../../../data/Menu.json'

function MenuMobile() {

  const [isOpen, setIsOpen] = useState(false);
  const [subMenuAberto, setSubMenuAberto] = useState(null);

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* <!-- Ícone --> */}
      <div className="flex z-100">
        <button
          onClick={toggleMenu}
          className="flex md:hidden hover:cursor-pointer hover:scale-120 duration-200 hover:text-cyan-300"
        >
          <i className="text-5xl pr-7"><FiAlignJustify /></i>
        </button>
      </div>

      {/* <!-- Menu Mobile --> */}
      <div
        className={`fixed top-0 left-0 w-full h-36 z-50 transition duration-300 ${isOpen ? 'translate-y-full' : '-translate-y-full'}`}
      >
        <nav className="relative flex flex-row gap-16 text-xl justify-center">
          {/* <!-- Inicio Div menu aba testes --> */}
          <div>
            <div
              className={` flex justify-center top-40 left-0 right-0 transform transition duration-300 ease-in-out z-50 `}
            >
              {/* <!-- Conteúdo do Menu --> */}
              <ul className="space-y-2 flex">
                {MenuData.map((item) => (
                  <li key={item.url} className="" onClick={() =>
                    setSubMenuAberto(
                      subMenuAberto === item.url ? null : item.url
                    )
                  }>
                    <a
                      href={item.url}
                      className="flex items-center justify-center text-white hover:text-cyan-300 transition"
                    >
                      <span className="ml-3">{item.label}</span>

                    </a>
                    {item.subMenu && (
                      <div className={`absolute flex left-0 top-10 mx-auto justify-center h-10 w-full transition duration-300 ease-in-out ${subMenuAberto === item.url ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                        {item.subMenu.map((itemSub, idx) => (
                          <a
                            href={itemSub.url}
                            key={idx}
                            className="flex items-center p-3 text-white hover:text-cyan-300 transition"
                          >
                            <span className="ml-3">{itemSub.label}</span>
                          </a>
                        )
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <!-- Overlay --> */}
      <div
        onClick={toggleMenu} className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed top-0 left-0 w-full bg-black/50 z-30 inset-0 transition-all duration-300'`}
      ></div>
    </>
  )
}

export default MenuMobile