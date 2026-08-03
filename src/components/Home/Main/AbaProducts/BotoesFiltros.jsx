import { BsArrowReturnRight } from "react-icons/bs";
function BotoesFiltros({ categorias, categoriaAtiva, onSelecionar }) {
    return (
        <>
            {/* Inicio Botões */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto w-full">
                {/* Botão 1 */}
                {categorias.map((categoria) => (
                    <div key={categoria} className={`relative overflow-hidden group transition duration-300 
                ${categoria === categoriaAtiva
                            ? "border border-cyan-400 bg-cyan-400/10 "
                            : "bg-gray-900/60 hover:border hover:border-white/50 bg-radial hover:from-white/10 border-b border-slate-800 backdrop-blur-md"
                        }`}
                    >
                        <div onClick={() => onSelecionar(categoria)} className="flex items-center justify-between p-3 cursor-pointer w-full gap-2">
                            <button className="font-bold text-base sm:text-lg lg:text-xl text-white group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer text-left truncate">
                                {categoria}
                            </button>
                            <span
                                className="group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                            >
                                <i
                                    className="text-xl group-hover:text-cyan-300"
                                ><BsArrowReturnRight /></i>
                            </span>

                        </div>
                        {/* Cantos da borda */}
                        <span
                            className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        ></span>

                        <span
                            className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        ></span>

                        <span
                            className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        ></span>

                        <span
                            className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        ></span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BotoesFiltros