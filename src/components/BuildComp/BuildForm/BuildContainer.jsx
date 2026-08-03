import BuildRow from "../../BuildComp/BuildForm/BuildRow"
import productList from "../../../Data/Products.json"
import BuildFooter from "./BuildFooter"

function BuildContainer({ selecionados, setSelecionados, consumoTotal, precoTotal }) {

    const categorias = Object.groupBy(productList, (p) => p.categoria)

    const handleSelecionarPeca = (nomeCategoria, produtoObj) => {
        setSelecionados((prev) => ({ ...prev, [nomeCategoria]: produtoObj }))
    }

    const handleSalvar = () => {
        console.log("Build Salvar!", {
            pecas: selecionados,
            consumoTotal,
            precoTotal
        })
        alert(`Build salva com sucesso!`)
    }

    return (
        <div className="w-full xl:w-2/3 flex flex-col justify-center items-center md:mt-16 mt-22">
            <h2 className="text-3xl text-white md:mb-0 mb-8">Monte sua própria configuração</h2>
            <div className="w-full hidden md:grid grid-cols-3 mt-16 px-6">
                <h3 className=" text-[#53EAFD] text-start text-xl ml-6">Categoria</h3>
                <h3 className=" text-[#53EAFD] text-center text-xl">Modelo</h3>
                <h3 className="text-[#53EAFD] text-end mr-4 text-xl">Preço</h3>
            </div>
            <div className="bg-[#131625] w-full h-auto shadow-[0_0_20px_5px_rgba(83,234,253,0.6)] rounded-xl mt-4 p-6 border border-cyan-300">
                <div className="flex flex-col gap-6 text-white text-lg">
                    {Object.entries(categorias).map(([categoria, item], index) =>
                        <BuildRow
                            key={index}
                            categoria={categoria}
                            item={item}
                            onSelectProduct={(prod) => handleSelecionarPeca(categoria, prod)}
                        />
                    )}
                </div>
                <BuildFooter
                    consumo={consumoTotal}
                    preco={precoTotal}
                    onSalvar={handleSalvar} />

            </div>
        </div>
    );
}

export default BuildContainer