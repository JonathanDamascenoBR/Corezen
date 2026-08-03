import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SecaoPromocao from '../AbaProducts/SecaoPromocao'

import ImgProcessador from '../../../../assets/imgs/thumbs/ryzen-7.png'
import ImgPlacaMae from '../../../../assets/imgs/thumbs/B-850F.png'
import ImgPlacaVid from '../../../../assets/imgs/thumbs/rtx-5070.png'
import ImgMem from '../../../../assets/imgs/thumbs/xpg-mem.png'
import ImgCooler from '../../../../assets/imgs/thumbs/W-Cooler.png'
import ImgSsd from '../../../../assets/imgs/thumbs/ssd-m2.png'
import ImgFonte from '../../../../assets/imgs/thumbs/fonte.png'
import ImgGabinete from '../../../../assets/imgs/thumbs/gabinete.png'



function AbaBuild() {
    return (
        <>
            <div id="" className="max-w-7xl mx-auto w-full px-4 md:px-8">
                {/* Aba Build */}
                <section className="w-full">
                    <div className="w-full flex flex-col pt-7">
                        <h1 className="text-4xl pt-8 text-center">Comparador de Hardware</h1>
                        <p className="text-xl pt-10 text-gray-300 text-center">
                            Escolha abaixo uma peça para comparar o desempenho:
                        </p>
                        {/* Linha Divisória */}
                        <div className="bg-gray-400 max-w-7xl h-0.5 mt-10"></div>

                        {/* Linha 1 */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-10 pb-6 w-full justify-items-center max-w-7xl mx-auto"
                        >
                            {/* Linha 1 Bloco 1 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Processador" }}>
                                    <img
                                        src={ImgProcessador}
                                        alt="Processador"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Processador
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 1 Bloco 2 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Placa Mãe" }}>
                                    <img
                                        src={ImgPlacaMae}
                                        alt="Placa Mãe"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Placa Mãe
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 1 Bloco 3 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Memória Ram" }}>
                                    <img
                                        src={ImgMem}
                                        alt="Memória Ram"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Memória Ram
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 1 Bloco 4 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Placa de Vídeo" }}>
                                    <img
                                        src={ImgPlacaVid}
                                        alt="Placa de Vídeo"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Placa de Vídeo
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                        </div>

                        {/* Linha 2 */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 py-6 w-full justify-items-center"
                        >
                            {/* Linha 2 Bloco 1 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Cooler" }}>
                                    <img
                                        src={ImgCooler}
                                        alt="Cooler"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Cooler
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 2 Bloco 2 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Armazenamento" }}>
                                    <img
                                        src={ImgSsd}
                                        alt="Armazenamento"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// SSD - HD
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 2 Bloco 3 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Fonte" }}>
                                    <img
                                        src={ImgFonte}
                                        alt="Fonte"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Fonte
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                            {/* Linha 2 Bloco 4 */}
                            <div
                                className="relative w-74 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300"
                            >
                                <Link to="/testesDesemp" state={{ categoriaSelecionada: "Gabinetes" }}>
                                    <img
                                        src={ImgGabinete}
                                        alt="Gabinete"
                                        className="w-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </Link>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span
                                        className="font-bold text-xl flex gap-15 text-white group-hover:text-cyan-300 transition-colors duration-300"
                                    >// Gabinete
                                    </span>
                                    <span
                                        className="group-hover:text-cyan-300 transition-colors duration-300"
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
                        </div>
                    <div className="bg-gray-400 max-w-7xl h-0.5"></div>
                    </div>

                    {/* Promoções */}
                    <div className=''>
                        <SecaoPromocao />

                    </div>

                </section>
            </div>
        </>
    )
}

export default AbaBuild