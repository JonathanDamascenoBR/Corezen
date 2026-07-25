import PecasItem from "../Pecas/PecasItem";
import dados from "../../../Data/Products.json";
import Jogos from "../../../Data/Jogos.json";
import { useState } from "react";
import GraficoFps from "./GraficoFps";
import { motion } from "framer-motion";

function Pecas() {
    const processadoresJp = dados.filter((p) => p.categoria === "Processador");
    const placasDeVideoJp = dados.filter((p) => p.categoria === "Placa de Vídeo");
    const jogosJp = Jogos.filter((p) => p.categoria === "Jogo");
    const resolucaoJp = Jogos.filter((p) => p.categoria === "Resolução");

    const [cpuSelecionada, setCpuSelecionada] = useState(null);
    const [gpuSelecionada, setgpuSelecionada] = useState(null);
    const [jogoSelecionado, setjogoSelecionado] = useState(null);
    const [resoSelecionada, setResoSelecionada] = useState(null);

    function calcularFps() {
        if (
            !cpuSelecionada ||
            !gpuSelecionada ||
            !jogoSelecionado ||
            !resoSelecionada
        ) {
            return null;
        }
        const hardWareJp =
            cpuSelecionada.powerScore * jogoSelecionado.pesoCpu +
            gpuSelecionada.powerScore * jogoSelecionado.pesoGpu;

        const desempenhoJp = hardWareJp / jogoSelecionado.powerScore;

        const fpsBase = desempenhoJp * 90;

        const fpsResolucao = fpsBase / resoSelecionada.multiplicador;

        const fpsQualiMedia = Math.round(fpsResolucao);
        const fpsQualiBaixa = Math.round(fpsQualiMedia * 1.2);
        const fpsQualiAlta = Math.round(fpsQualiMedia * 0.8);


        console.log(cpuSelecionada);
        console.log(gpuSelecionada);
        console.log(jogoSelecionado);
        console.log(resoSelecionada);

        return {
            baixa: fpsQualiBaixa,
            media: fpsQualiMedia,
            alta: fpsQualiAlta,
        };
    }

    const resultadoFps = calcularFps();
    console.log(resultadoFps);

    return (
        <section className="w-full max-w-7xl mx-auto bg-slate-950 text-white text-center justify-center mt-46">
            <h2 className="text-5xl text-white mt-10">Testes em Jogos</h2>
            <div className="flex md:justify-between mt-15 md:items-start w-full flex-col md:flex-row justify-center items-center md:gap-0 gap-8">
                <PecasItem
                    titulosjp="Processador"
                    produtosjp={processadoresJp}
                    onSelect={setCpuSelecionada}
                />
                <PecasItem
                    titulosjp="Placa de Vídeo"
                    produtosjp={placasDeVideoJp}
                    onSelect={setgpuSelecionada}
                />
                <PecasItem
                    titulosjp="Jogo"
                    produtosjp={jogosJp}
                    onSelect={setjogoSelecionado}
                />
                <PecasItem
                    titulosjp="Resolução"
                    produtosjp={resolucaoJp}
                    onSelect={setResoSelecionada}
                />
            </div>
            <div className="">
                <h3 className="mt-20 text-3xl font-bold text-cyan-400">Desempenho</h3>
                <motion.div
                    className="text-white flex flex-col items-center justify-center"

                    initial={{ opacity: 0, y: 30 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1, ease: "easeOut" }} className="text-black flex flex-col items-center justify-end gap-3">
                    <GraficoFps resultadoFps={resultadoFps} />

                </motion.div>
            </div>
        </section>
    );
}

export default Pecas;
