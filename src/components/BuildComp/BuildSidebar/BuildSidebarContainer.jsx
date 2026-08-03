import BuildPerformance from "./BuildPerformance"
import BuildNotes from './BuildNotes'

function BuildSidebarContainer({ pontuacao, notaTexto }) {
    return (
        <>
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-6">
                <BuildPerformance
                    pontuacao={pontuacao} />
                <BuildNotes
                    texto={notaTexto} />
            </div>

        </>
    );
}

export default BuildSidebarContainer