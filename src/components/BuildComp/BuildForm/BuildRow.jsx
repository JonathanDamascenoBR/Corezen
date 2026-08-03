import { useState, useEffect } from "react";

function BuildRow({ categoria, item, onSelectProduct }) {

    const [product, setProduct] = useState(item[0]?.id || "")

    const produtoSelecionado = item.find(
        (produto) => String(produto.id) === String(product)
    );

    useEffect(() => {
        if (produtoSelecionado && onSelectProduct) {
            onSelectProduct(produtoSelecionado);
        }
    }, [product]);

    const handleSelectChange = (e) => {
        setProduct(e.target.value);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4 md:py-0 border-b border-[#1c2136] md:border-none">

            {/* Categoria */}
            <div className="flex flex-col md:block">
                <span className="md:hidden text-sm text-[#53EAFD] mb-1 font-semibold">Categoria</span>
                <h3 className="text-left w-full truncate">{categoria}</h3>
            </div>

            {/* Modelo */}
            <div className="flex flex-col md:block">
                <span className="md:hidden text-sm text-[#53EAFD] mb-1 font-semibold">Modelo</span>
                <div className="w-full flex items-center md:justify-center">
                    <select
                        value={product}
                        onChange={handleSelectChange}
                        className="bg-[#131625] text-white border-none outline-none w-full md:w-72 truncate cursor-pointer"
                    >
                        {item.map((produto) => (
                            <option key={produto.id} value={produto.id}>
                                {produto.modelo}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Preço */}
            <div className="flex flex-col md:block">
                <span className="md:hidden text-sm text-[#53EAFD] mb-1 font-semibold">Preço</span>
                <h3 className="text-left md:text-right">
                    R$ {produtoSelecionado?.valor ? produtoSelecionado.valor.toFixed(2) : "0.00"}
                </h3>
            </div>

        </div>
    );
}

export default BuildRow