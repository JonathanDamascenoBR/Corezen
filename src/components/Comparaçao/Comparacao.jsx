import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";

import Products from "../../Data/Products.json";

export default function Comparacao() {
  const location = useLocation();

  const [categoria, setCategoria] = useState(location.state?.categoriaSelecionada || "Placa Mãe");

  const pecas = Products.filter((item) => item.categoria === categoria);

  const [peca1, setPeca1] = useState(pecas[0]);
  const [peca2, setPeca2] = useState(pecas[1]);
  const [menuAberto, setMenuAberto] = useState(null);
  const nomeSpecs = {
    soquete: "Soquete",
    chipset: "Chipset",
    formato: "Formato",
    tipo_memoria: "Tipo de Memoria",
    slots_m2: "Slots M.2",
    pci_express: "PCI Express",
    nucleos_threads: "Núcleos / Threads",
    frequencia_base: "Frequência Base",
    frequencia_turbo: "Frequência Turbo",
    memoria_suportada: "Memória Suportada",
    tdp_padrao: "TDP Padrão",
  };

  useEffect(() => {
    if (location.state?.categoriaSelecionada) {
      setCategoria(location.state.categoriaSelecionada);
    }
  }, [location.state]);

  useEffect(() => {
    if (pecas.length >= 2) {
      setPeca1(pecas[0]);
      setPeca2(pecas[1]);
    } else if (pecas.length === 1) {
      setPeca1(pecas[0]);
      setPeca2(pecas[0]);
    }
  }, [categoria]);

  console.log(peca1);
  console.log(peca2);

  return (
    <main className="max-w-7xl mx-auto px-4 md:py-45 py-55">
      {/* Categoria */}
      <div className="mb-10 text-center">
        <h2 className="text-white text-xl font-bold mb-4">
          Selecione a Categoria
        </h2>

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="bg-slate-900 text-white border border-cyan-300 rounded px-4 py-2"
        >
          <option>Placa Mãe</option>
          <option>Processador</option>
          <option>Memória Ram</option>
          <option>Fonte</option>
          <option>Gabinetes</option>
          <option>Placa de Vídeo</option>
          <option>Armazenamento</option>
          <option>Cooler</option>
        </select>
      </div>

      {/* <!-- Seleção das Peças --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setMenuAberto("peca1")}
            className="bg-cyan-400 text-black pl-8 pr-2 py-2 rounded  hover:bg-cyan-300 transition flex items-center gap-2"
          >
            {peca1.modelo} <GoChevronDown />
          </button>

          {/* <!-- Card 1 --> */}
          <div className="bg-slate-900 rounded-lg p-6 w-full h-full">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <div className="bg-slate-800 rounded-lg p-6">
                  <img src={peca1.imagem} alt={peca1.modelo} className="w-48" />
                </div>
              </div>
            </div>

            <h2 className="text-center text-white mt-4 text-lg">{peca1.nome}</h2>

            <h3 className="text-center font-bold text-white mt-6">Descrição</h3>

            <p className="text-center text-gray-300 text-sm mt-4 leading-relaxed">
              {peca1.descricao}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setMenuAberto("peca2")}
            className="bg-cyan-400 text-black pl-8 pr-2 py-2 rounded  hover:bg-cyan-300 transition flex items-center gap-2"
          >
            {peca2.modelo} <GoChevronDown />
          </button>

          {/* <!-- Card 2 --> */}
          <div className="bg-slate-900 rounded-lg p-6 w-full h-full">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <div className="bg-slate-800 rounded-lg p-6">
                  <img src={peca2.imagem} alt={peca2.modelo} className="w-48" />
                </div>
              </div>
            </div>

            <h2 className="text-center text-white mt-4 text-lg">{peca2.nome}</h2>

            <h3 className="text-center font-bold text-white mt-6">Descrição</h3>

            <p className="text-center text-gray-300 text-sm mt-4 leading-relaxed">
              {peca2.descricao}
            </p>
          </div>
        </div>

        {/* <!-- Menu de Seleção --> */}
        {menuAberto && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-slate-950 border border-cyan-300 rounded-lg w-80 shadow-lg shadow-cyan-500/10 overflow-hidden">
              <div className="px-4 py-3 border-b border-cyan-500/20">
                <h3 className="text-cyan-300 font-bold text-sm tracking-wide">
                  Selecione a Peça
                </h3>
              </div>

              <div className="max-h-80 overflow-y-auto">
                {pecas.map((p) => (
                  <div
                    key={p.id}
                    className="text-white px-4 py-3 hover:bg-cyan-300 cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
                    onClick={() => {
                      if (menuAberto === "peca1") setPeca1(p);
                      if (menuAberto === "peca2") setPeca2(p);

                      setMenuAberto(null);
                    }}
                  >
                    <img
                      src={p.imagem}
                      alt={p.modelo}
                      className="w-12 h-12 object-contain"
                    />

                    <span>{p.modelo}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-cyan-300">
                <button
                  onClick={() => setMenuAberto(null)}
                  className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <!-- Resultado --> */}
      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Resultado da Comparação
        </h2>

        {/* Tabela */}

        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="border-b border-slate-600 bg-slate-800">
                <th className="w-1/3 p-4 text-cyan-300">Especificação</th>
                <th className="w-1/3 p-4 text-cyan-300">{peca1.modelo}</th>
                <th className="w-1/3p-4 text-cyan-300">{peca2.modelo}</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(peca1.specs).map((chave) => (
                <tr key={chave} className="border-b border-slate-600">
                  <td className="p-4 text-cyan-300 font-semibold">
                    {nomeSpecs[chave] || chave}
                  </td>

                  <td className="p-4 text-gray-300">{peca1.specs[chave]}</td>

                  <td className="p-4 text-gray-300">{peca2.specs[chave]}</td>
                </tr>
              ))}

              <tr>
                <td className="p-4 text-green-400 font-semibold">Resultado</td>

                <td className="p-4 text-green-400">Melhor custo-benefício</td>

                <td className="p-4 text-green-400">Melhor desempenho</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
