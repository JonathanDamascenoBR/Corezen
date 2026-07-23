function BuildPerformance({ pontuacao }) {
    return (
        <div className="flex flex-col items-center mt-32">
            <h2 class="text-2xl text-center text-white">
                Compatibilidade<br />entre as peças
            </h2>
            <div
                class="border-[3px] border-[#53EAFD] h-32 w-32 my-10 rounded-full flex items-center justify-center text-3xl shrink-0 text-white"
            >
                {pontuacao}
            </div>
        </div>
    )

}

export default BuildPerformance