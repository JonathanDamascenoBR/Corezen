import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductItem from "./ProductItem";
import Promotions from "../../../../Data/Promotions.json";

const categoriaPorBotao = {
    "// Processadores": "Processadores",
    "// Placas de Vídeo": "Placas de Vídeo",
    "// Placas Mãe": "Placas mãe",
    "// Memórias": "Memórias"
};

function Products({ categoriaAtiva }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);

    const scrollRef = useRef(null);

    useEffect(() => {
        setLoading(true);

        try {
            const categoria = categoriaPorBotao[categoriaAtiva];
            const produtosFiltrados = Promotions.filter(produto =>
                produto.category === categoria
            );

            setItem(produtosFiltrados);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [categoriaAtiva]);

    // Função da rolagem pelos botões
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    if (loading) return <p className="text-white text-center py-4">Carregando...</p>;
    if (error) return <p className="text-red-500 text-center py-4">Erro.</p>;

    return (
        <div className="relative max-w-[1400px] mx-auto w-full p-4">
            {/* Container dos Produtos */}
            <div
                ref={scrollRef}
                className="
          justify-between md:justify-items-center overflow-x-auto md:gap-6 gap-80 pb-4 snap-x snap-mandatory scroll-smooth
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 lg:overflow-visible 
        "
            >
                {item.map(produto => (
                    <div
                        key={produto.id}
                        /* w-[260px] fixa o tamanho compacto do card no mobile */
                        className="w-[280px] flex-shrink-0 snap-center lg:w-auto"
                    >
                        <ProductItem item={produto} />
                    </div>
                ))}
            </div>

            {/* Botões Direita Esquerda */}
            <div className="flex justify-end items-center gap-4 py-4 md:hidden">
                {/* Botão Esquerdo */}
                <button
                    onClick={() => handleScroll('left')}
                    className="w-11 h-11 rounded-full bg-cyan-300 hover:bg-cyan-200 text-black flex items-center justify-center active:scale-95 transition-all shadow-md cursor-pointer"
                    aria-label="Anterior"
                >
                    <FaChevronLeft size={16} />
                </button>

                {/* Botão Direito */}
                <button
                    onClick={() => handleScroll('right')}
                    className="w-11 h-11 rounded-full bg-cyan-300 hover:bg-cyan-200 text-black flex items-center justify-center active:scale-95 transition-all shadow-md cursor-pointer"
                    aria-label="Próximo"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}

export default Products;