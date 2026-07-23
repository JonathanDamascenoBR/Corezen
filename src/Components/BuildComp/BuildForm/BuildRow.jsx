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
        <>
            <h3 className="text-left">{categoria}</h3>

            <div className="text-left">
                <select value={product} onChange={handleSelectChange} className="bg-[#131625] text-white border-none outline-none w-72 truncate cursor-pointer">
                    {item.map((produto) => (
                        <option key={produto.id} value={produto.id}>
                            {produto.modelo}
                        </option>
                    ))}
                </select>
            </div>

            <h3 className="text-right">R$ {produtoSelecionado?.valor ? produtoSelecionado.valor.toFixed(2) : "0.00"}</h3>
        </>
    );
}

export default BuildRow