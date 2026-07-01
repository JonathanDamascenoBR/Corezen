function BuildNotesJD({ texto }) {
    return <div className="flex flex-col">
        <h2 className="text-xl">Observações</h2>
        <div className="bg-[#131625] w-full h-full rounded-xl p-6 text-white">
            <p className="text-sm text-center m-4 text-white ">
                Notificação: Build com algumas observações
            </p>
            <p className="text-sm text-center m-4 text-white">{texto}</p>
        </div>
    </div >

}

export default BuildNotesJD