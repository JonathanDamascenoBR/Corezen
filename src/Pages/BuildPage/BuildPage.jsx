import { useState } from "react"
import BuildContainer from "../../Components/BuildComp/BuildForm/BuildContainer"
import BuildSidebarContainer from "../../Components/BuildComp/BuildSidebar/BuildSidebarContainer"

function BuildPage() {

    const [selecionados, setSelecionados] = useState({})

    const listaDeSelecionados = Object.values(selecionados)

    const consumoTotal = listaDeSelecionados.reduce((acc, item) => acc + (item?.consumo || 0), 0)
    const precoTotal = listaDeSelecionados.reduce((acc, item) => acc + (item?.valor || 0), 0)

    const pontuacaoFinal = listaDeSelecionados.reduce((acc, item) => acc + (item?.pontuacao || 0), 0)

    const analisarSetup = () => {

        const faixaMobo = selecionados["Placa Mãe"]?.faixaPreco;
        const faixaGpu = selecionados["Placa de Vídeo"]?.faixaPreco;

        if (faixaMobo === faixaGpu) {
            if (faixaMobo === "baixo") {
                return "Configuração equilibrada para tarefas básicas e jogos leves. Ótimo custo-benefício!"
            }
            if (faixaMobo === "medio") {
                return "Excelente equilíbrio! Esse setup intermediário vai rodar a maioria dos jogos e tarefas com ótimo desempenho."
            }
            if (faixaMobo === "alto") {
                return "Setup entusiasta de alta performance! Componentes topo de linha preparados para qualquer desafio pesados."
            }
        }

        if (faixaMobo === "baixo" && (faixaGpu === "medio" || faixaGpu === "alto")) {
            return "Alerta de Gargalo: Sua Placa Mãe é de entrada para uma Placa de Vídeo forte. Isso pode limitar recursos da GPU ou futuros upgrades."
        }

        if (faixaMobo === "alto" && faixaGpu === "baixo") {
            return "Observação: Você escolheu uma Placa Mãe topo de linha, mas a Placa de Vídeo é básica. O rendimento gráfico em jogos será o limitador aqui."
        }

        if (faixaMobo === "medio" && faixaGpu === "alto") {
            return "Bom setup! A placa mãe intermediária vai aguentar bem a GPU, oferecendo uma ótima margem de performance."
        }

        if (faixaMobo === "medio" && faixaGpu === "baixo") {
            return "Setup focado em processamento. A Placa de Vídeo mais básica vai limitar o desempenho em texturas pesadas e altas resoluções."
        }

        return "Componentes selecionados com sucesso!"
    }

    const notaDeCompatibilidade = analisarSetup()

    return (
        <section className="w-full p-6 xl:p-0 mx-auto">
            <div className="w-7xl mx-auto flex flex-col xl:flex-row mt-28 mb-10 gap-6">
                <BuildContainer
                    selecionados={selecionados}
                    setSelecionados={setSelecionados}
                    consumoTotal={consumoTotal}
                    precoTotal={precoTotal} />
                <BuildSidebarContainer
                    pontuacao={pontuacaoFinal}
                    notaTexto={notaDeCompatibilidade} />
            </div>
        </section>
    );
}

export default BuildPage