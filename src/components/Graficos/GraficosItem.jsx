import Grafico2 from '../../assets/videos/grafico2.mp4'

function GraficosItem() {
    return (
        <div className="lg:w-7xl mx-auto  m-30 gap-7 ">
            <div className="bg-gray900 h-180 rounded-xl ">
                <h2 className="text-center text-2xl text-cyan-400 font-bold">Média de Desempenho</h2>
                <div className="flex justify-center ">
                    <video src={Grafico2}
                        className="h-60 absolute w-full lg:mt-60 " autoPlay loop muted playsInline>
                    </video>
                </div>
            </div>
        </div>)
}

export default GraficosItem