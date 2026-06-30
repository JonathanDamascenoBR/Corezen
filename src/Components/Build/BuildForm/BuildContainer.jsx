import { useState } from "react"
import BuildRow from "../../Build/BuildForm/BuildRow"
import productList from "../../../Data/Products.json"
import BuildFooter from "./BuildFooter"

function BuildContainerJD() {

    const categorias = Object.groupBy(productList, (p) => p.categoria)

    const [selecionados, setSelecionados] = useState({})

    const handleSelecionarPeca = (nomeCategoria, produtoObj) => {
        setSelecionados((prev) => ({ ...prev, [nomeCategoria]: produtoObj }))
    }

    const listaDeSelecinados = Object.values(selecionados)

    const consumoTotal = listaDeSelecinados.reduce((acc, item) => acc + (item?.consumo || 0), 0)
    const precoTotal = listaDeSelecinados.reduce((acc, item) => acc + (item.valor || 0), 0)

    const handleSalvar = () => {
        console.log("Build Salvar!", {
            pecas: selecionados,
            consumoTotal,
            precoTotal
        })
        alert(`Build salva com sucesso! Total: R$ ${precoTotal.toFixed(2)}`)
    }

    return <div className="w-full xl:w-2/3 flex flex-col justify-center items-center mt-32">
        <h2 className="text-3xl text-white">Monte sua própria configuração</h2>
        <div className="w-full grid grid-cols-3 mt-16">
            <h3 className=" text-[#53EAFD] text-start text-xl ml-6">Categoria</h3>
            <h3 className=" text-[#53EAFD] text-center text-xl">Modelo</h3>
            <h3 className="text-[#53EAFD] text-end mr-4 text-xl">Preço</h3>
        </div>
        <div className="bg-[#131625] w-full h-auto rounded-xl mt-4 p-6">
            <div className="grid grid-cols-3 text-white text-lg gap-6">
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
}

export default BuildContainerJD