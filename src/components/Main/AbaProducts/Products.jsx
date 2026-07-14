import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Promotions from "../../../data/Promotions.json";

const categoriaPorBotao = {
    "// Processadores": "Processadores",
    "// Placas de Video": "Placas de Vídeo",
    "// Placas Mãe": "Placas mãe",
    "// Memórias": "Memórias"
};

function Products({ categoriaAtiva }) {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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

    if (loading)
        return <p className="text-white text-center py-4">Carregando...</p>;

    if (error)
        return <p className="text-red-500 text-center py-4">Erro.</p>;

    return (
        <section className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:flex gap-8 pt-5 center pl-20 md:pl-0 justify-center">

            {item.map(produto => (
                <ProductItem
                    key={produto.id}
                    item={produto}
                />
            ))}

        </section>
    );

}

export default Products;