import { Link } from "react-router-dom";

export default function Comparaçao() {
  return ( 
  <main className="max-w-6xl mx-auto px-4 py-45">

  {/* <!-- Seleção das Peças --> */}
  <div className="grid md:grid-cols-2 gap-8 mb-8">

    <div className="text-center">
      <button
        className="bg-cyan-400 text-black px-8 py-2 rounded font-semibold hover:bg-cyan-300 transition">
        Peça 01
      </button>
    </div>

    <div className="text-center">
      <button
        className="bg-cyan-400 text-black px-8 py-2 rounded font-semibold hover:bg-cyan-300 transition">
        Peça 02
      </button>
    </div>

  </div>

  {/* <!-- Cards --> */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* <!-- Card 1 --> */}
    <div className="bg-gray-900 rounded-lg p-6">

      <div className="flex justify-center">
     <img 
        src="../../media/imgs/placaMae01.png" 
        alt="aaa" 
        className="w-48" 
    />
      </div>

      <h2 className="text-center text-white mt-4 text-lg">
        Placa-Mãe Asrock B450M-HDV R4.0
      </h2>

      <h3 className="text-center font-bold text-white mt-6">
        Descrição
      </h3>

      <p className="text-center text-gray-300 text-sm mt-4 leading-relaxed">
        Placa-Mãe Asrock B450M-HDV R4.0 AM4.
        Interface Ultra M.2 PCIe Gen3 x4.
        Compatível com processadores Ryzen.
        Suporte para memória DDR4.
      </p>

    </div>

    {/* <!-- Card 2 --> */}
    <div className="bg-gray-900 rounded-lg p-6">

      <div className="flex justify-center">
        <img 
        src="../../media/imgs/placaMae01.png" 
        alt="aaa" 
        className="w-48" 
        />
      </div>

      <h2 className="text-center text-white mt-4 text-lg">
        Gigabyte B650M Aorus Elite AX
      </h2>

      <h3 className="text-center font-bold text-white mt-6">
        Descrição
      </h3>

      <p className="text-center text-gray-300 text-sm mt-4 leading-relaxed">
        Placa-mãe AM5 de última geração.
        Compatível com Ryzen série 7000 e 9000.
        Memórias DDR5.
        PCIe Gen5 e Wi-Fi integrado.
      </p>

    </div>

  </div>

  {/* <!-- Resultado --> */}
  <section className="mt-16">

    <h2 className="text-center text-3xl font-bold text-white mb-8">
      Resultado da Comparação
    </h2>

    <div className="grid grid-cols-2 text-center mb-4">
      <span className="text-cyan-400 font-bold">
        Peça 01
      </span>

      <span className="text-cyan-400 font-bold">
        Peça 02
      </span>
    </div>

    <div className="bg-gray-900 rounded-lg overflow-hidden">

      <table className="w-full text-center">

        <tbody>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              AM4
            </td>

            <td className="p-4 text-gray-300">
              AM5
            </td>
          </tr>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              Ryzen série 1000 a 5000
            </td>

            <td className="p-4 text-gray-300">
              Ryzen série 7000 e 9000
            </td>
          </tr>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              DDR4
            </td>

            <td className="p-4 text-gray-300">
              DDR5
            </td>
          </tr>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              PCIe Gen3
            </td>

            <td className="p-4 text-gray-300">
              PCIe Gen5
            </td>
          </tr>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              Até 64GB RAM
            </td>

            <td className="p-4 text-gray-300">
              Até 192GB RAM
            </td>
          </tr>

          <tr className="border-b border-slate-600">
            <td className="p-4 text-gray-300">
              Sem Wi-Fi
            </td>

            <td className="p-4 text-gray-300">
              Wi-Fi Integrado
            </td>
          </tr>

          <tr>
            <td className="p-4 text-green-400 font-semibold">
              Melhor custo-benefício
            </td>

            <td className="p-4 text-green-400 font-semibold">
              Melhor desempenho
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  </section>

</main>



  );
}