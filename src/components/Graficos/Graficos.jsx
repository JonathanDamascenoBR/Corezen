import GraficosItem from "./GraficosItem"

function Graficos() {
    return (
        <section className="w-full bg-slate-950 text-white orbitron text-center py-30">
            <div className="w-7xl mx-auto items-center justify-center">
                <div>
                    <h4 className="text-3xl font-bold text-center">Desempenho</h4>
                </div>
            </div>
            <GraficosItem />

        </section>)
}

export default Graficos