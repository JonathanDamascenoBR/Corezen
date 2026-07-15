import BuildPerformanceJD from "./BuildPerformance"
import BuildNotes from './BuildNotes'

function BuildSidebarContainerJD({ pontuacao, notaTexto }) {
    return <>
        <div className="w-full xl:w-1/3 flex flex-col items-center gap-6">
            <BuildPerformanceJD
                pontuacao={pontuacao} />
            <BuildNotes
                texto={notaTexto} />
        </div>

    </>

}

export default BuildSidebarContainerJD