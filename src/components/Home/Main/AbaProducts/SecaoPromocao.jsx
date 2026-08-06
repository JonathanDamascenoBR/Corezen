import { useState } from "react";
import BotoesFiltros from "./BotoesFiltros";
import ProductGrid from "./ProductGrid";

export default function SecaoPromocao() {
    // Inicializa direto na primeira categoria real da sua lista
    const [categoriaAtiva, setCategoriaAtiva] = useState("// Processadores");

    const categorias = [
        "// Processadores",
        "// Placas de Vídeo",
        "// Placas Mãe",
        "// Memórias"
    ];

    return (
        <div className="max-w-[1400px] mx-auto w-full shadow-black/50 rounded-lg">
            <p className="flex justify-center py-16 text-4xl font-bold">Promoções</p>
            <div className="bg-gray-400 w-full h-0.5"></div>
            <div className="py-6">
                <BotoesFiltros
                    categorias={categorias}
                    categoriaAtiva={categoriaAtiva}
                    onSelecionar={setCategoriaAtiva}
                />
            </div>

            <div className="">
                <ProductGrid categoriaAtiva={categoriaAtiva} />
            </div>
        </div>
    );
}