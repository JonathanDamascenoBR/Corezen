function BuildFooterJD({ consumo, preco, onSalvar }) {
    return <>
        <div className="flex justify-between items-center mt-10">
            <h3 className="text-[#53EAFD] text-xl">Consumo Total:<span className="text-white ml-2">{consumo} W</span></h3>
            <h3 className="text-[#53EAFD] text-xl">Preço:<span className="text-white ml-2">R$ {preco.toFixed(2)} </span></h3>
            <button className="border-2 p-2 rounded-md border-[#53EAFD] text-white cursor-pointer hover:bg-[#53EAFD] hover:text-black hover:scale-110 transition-all duration-300"
                onClick={onSalvar}>
                Salvar Build
            </button>
        </div>
    </>
}

export default BuildFooterJD