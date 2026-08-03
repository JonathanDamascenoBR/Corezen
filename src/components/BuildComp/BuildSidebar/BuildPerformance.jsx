function BuildPerformance({ pontuacao }) {
    return (
        <div className="flex flex-col items-center md:mt-32 mt-12">
            <h2 className="text-2xl text-center text-white">
                Compatibilidade <br /> entre as peças
            </h2>
            <div
                className="border-[3px] border-[#53EAFD] shadow-[0_0_25px_5px_rgba(83,234,253,0.6)] h-32 w-32 my-10 rounded-full flex items-center justify-center text-3xl shrink-0 text-white"
            >
                {pontuacao}
            </div>
        </div>
    )

}

export default BuildPerformance