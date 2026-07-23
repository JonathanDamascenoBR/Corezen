import { useState, useMemo } from 'react';
import { ShoppingCart, Cpu, HardDrive, CheckCircle2, ShieldCheck, Zap, Layers, Gamepad2, Briefcase, MonitorPlay } from 'lucide-react';
import productsData from '../../Data/Products.json';

import amdSrc from '../../assets/imgs/imgsCombo/processador_amd.jpg';
import intelSrc from '../../assets/imgs/imgsCombo/placa_mae2.jpg';
import ryzen9Src from '../../assets/imgs/imgsCombo/memoria.jpg';
import intel9Src from '../../assets/imgs/imgsCombo/caixa_intel.jpg';
import apuSrc from '../../assets/imgs/imgsCombo/placa_mae_caixa.jpg';
import pcu3Src from '../../assets/imgs/imgsCombo/ram_sticks.jpg';

// Componente visual para renderizar cada card de combo individualmente
const ComboCard = ({ title, badge, price, oldPrice, imageUrl, description, components }) => {
  return (
    <div className="bg-slate-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group flex flex-col md:flex-row">
      {/* Seção da imagem do combo */}
      <div className="md:w-2/5 md:min-h-full h-56 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
          {badge}
        </div>
        <img 
          src={imageUrl} 
          alt={title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 to-transparent opacity-90"></div>
      </div>

      {/* Seção com as informações, componentes e preço */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-wide text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-6 font-light">{description}</p>
          
          {/* Grid contendo a lista de peças do kit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {components.map((comp, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-gray-300 bg-slate-800/40 p-3 rounded border border-gray-700/50">
                <span className="text-cyan-400">{comp.icon}</span>
                <span className="truncate" title={comp.name}>{comp.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé do card com exibição dos valores formatados */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-5 border-t border-gray-800 gap-2 mt-auto">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium tracking-wide uppercase mb-0.5">Preço Estimado</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-cyan-400 tracking-wider">{price}</span>
              {oldPrice && <span className="text-sm text-gray-500 line-through">{oldPrice}</span>}
            </div>
          </div>
          <div className="text-xs text-gray-500 max-w-xs text-left sm:text-right mt-1 sm:mt-0">
            *Os valores podem variar dependendo do mercado e da disponibilidade.
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Combos() {
  // Estado para controlar qual aba de categoria está selecionada
  const [activeTab, setActiveTab] = useState('gamers');

  // Configuração das abas de navegação da página
  const tabs = [
    { id: 'gamers', label: 'Gamers', icon: <Gamepad2 className="w-5 h-5" />, desc: "Alta taxa de quadros e gráficos no ultra." },
    { id: 'workstation', label: 'Workstation', icon: <Briefcase className="w-5 h-5" />, desc: "Render e edição pesada." },
    { id: 'entrada', label: 'Entrada', icon: <MonitorPlay className="w-5 h-5" />, desc: "Custo-benefício e jogos leves." }
  ];

  // Helper para formatar os valores numéricos no padrão de moeda brasileira (R$)
  const formatBRL = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  /**
   * Hook useMemo usado para guardar o resultado do processamento dos combos.
   * Isso evita que a busca no JSON e o cálculo dos preços rodem novamente 
   * a cada render da página, melhorando a performance do sistema.
   */
  const combosData = useMemo(() => {
    
    /**
     * Função auxiliar para buscar um produto específico dentro do arquivo JSON.
     * Ela normaliza os textos tirando acentos e espaços, e transformando tudo em minúsculo,
     * evitando erros caso o JSON venha com grafias ou caixas diferentes.
     */
    const getPart = (category, tier, brand = null) => {
      const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase();
      const normCat = normalize(category);
      
      return productsData.find(p => 
        normalize(p.categoria) === normCat && 
        p.faixaPreco === tier && 
        (!brand || p.marca === brand)
      );
    };

    /**
     * Função responsável por montar a estrutura de cada kit/combo de peças.
     * Recebe o parâmetro 'hasDedicatedGpu' para tratar corretamente os casos de 
     * kits com gráficos integrados (APU), impedindo que some o preço de uma GPU dedicada.
     */
    const buildCombo = (tier, brand, badge, title, desc, imageUrl, hasDedicatedGpu = true) => {
      const cpu = getPart('Processador', tier, brand);
      const mobo = getPart('Placa Mãe', tier, brand);
      const ram = getPart('Memoria Ram', tier); 
      const gpu = hasDedicatedGpu ? getPart('Placa de Vídeo', tier) : null;
      const storage = getPart('Armazenamento', tier); // Puxa o SSD correspondente ao tier do combo

      // Calcula o somatório dos preços das peças encontradas (ignora campos nulos como a GPU integrada)
      const totalValue = [cpu, mobo, ram, gpu, storage].reduce((acc, part) => acc + (part ? part.valor : 0), 0);

      // Monta a lista inicial de componentes que será exibida no card
      const compList = [
        { icon: <Cpu className="w-4 h-4" />, name: cpu ? `${cpu.marca} ${cpu.modelo}` : 'CPU Customizada' },
        { icon: <Layers className="w-4 h-4" />, name: mobo ? `${mobo.marca} ${mobo.modelo}` : 'Placa Mãe Compatível' },
        { icon: <HardDrive className="w-4 h-4" />, name: ram ? `${ram.marca} ${ram.modelo}` : 'Kit Memória RAM' },
        { icon: <HardDrive className="w-4 h-4 text-cyan-200" />, name: storage ? `${storage.marca} ${storage.modelo}` : 'Armazenamento SSD' }
      ];

      // Insere condicionalmente o texto de GPU dedicada ou de Gráficos Integrados
      if (hasDedicatedGpu) {
        compList.push({ icon: <CheckCircle2 className="w-4 h-4 text-green-400" />, name: gpu ? `${gpu.marca} ${gpu.modelo}` : 'GPU Dedicada' });
      } else {
        compList.push({ icon: <CheckCircle2 className="w-4 h-4 text-green-400" />, name: 'Gráficos Integrados' });
      }

      return {
        badge,
        title,
        description: desc,
        price: formatBRL(totalValue),
        oldPrice: formatBRL(totalValue * 1.15), // Simulação de preço antigo com margem de 15%
        imageUrl,
        components: compList
      };
    };

    // Retorna o objeto com todos os combos organizados por suas respectivas abas
    return {
      gamers: [
        buildCombo('medio', 'AMD', 'Mais Vendido', 'Kit Gamer Avançado Ryzen', 'O queridinho dos gamers. Processador com cache empilhado para máxima taxa de quadros (FPS) em jogos competitivos e fluidos.', amdSrc),
        buildCombo('medio', 'Intel', 'Alta Performance', 'Kit Gamer Pro Intel', 'Nova geração da Intel com suporte a memórias DDR5 velozes. Preparado para entregar fluidez impecável em Quad HD (1440p).', intelSrc)
      ],
      workstation: [
        buildCombo('alto', 'AMD', 'Extremo', 'Kit Render Master Ryzen 9', 'A configuração definitiva para criadores de conteúdo e profissionais do 3D. Domine qualquer tarefa de processamento paralelo.', ryzen9Src),
        buildCombo('alto', 'Intel', 'Ultra', 'Kit Creator Intel i9', 'Múltiplos núcleos de performance para lidar com máquinas virtuais, cálculos matemáticos complexos e programação multithread.', intel9Src)
      ],
      entrada: [
        // Uso estratégico do 'false' para desativar a placa de vídeo no Kit APU de entrada
        buildCombo('baixo', 'AMD', 'Custo-Benefício', 'Kit Básico APU Ryzen', 'Orçamento apertado e não quer placa de vídeo agora? Este kit com gráficos integrados roda eSports e jogos leves incrivelmente bem.', apuSrc, false),
        buildCombo('baixo', 'Intel', 'Pronto para Upgrade', 'Kit Entry Intel', 'Uma base sólida e acessível da Intel, perfeita para emparelhar com placas de vídeo de entrada e jogar títulos em Full HD (1080p).', pcu3Src, true)
      ]
    };
  }, []); // Array de dependências vazio garante que o processamento execute apenas uma vez no carregamento do componente

  return (
    <div className="w-full mt-24 mb-20 px-4 md:px-11 min-h-screen">
      <section className="max-w-7xl mx-auto py-10 md:pt-36">
        {/* Cabeçalho principal */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-4">Escolha a Categoria Ideal</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combos otimizados para cada perfil de usuário. Seja para iniciar sua jornada, focar no competitivo, ou trabalhar pesado.
          </p>
        </div>

        {/* Seção de cards informativos de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          <div className="bg-slate-900/30 border border-gray-800 p-4 md:p-6 rounded-lg text-left md:text-center flex flex-row md:flex-col items-center gap-4 md:gap-3">
            <ShieldCheck className="w-6 h-6 md:w-10 md:h-10 text-cyan-400 shrink-0" />
            <div>
              <h3 className="text-white font-bold text-sm md:text-lg whitespace-nowrap md:whitespace-normal">Garantia de Compatibilidade</h3>
              <p className="text-gray-400 text-sm hidden md:block mt-1">Peças selecionadas a dedo para não haver gargalo (bottleneck) no seu setup.</p>
            </div>
          </div>
          <div className="bg-slate-900/30 border border-gray-800 p-4 md:p-6 rounded-lg text-left md:text-center flex flex-row md:flex-col items-center gap-4 md:gap-3">
            <Zap className="w-6 h-6 md:w-10 md:h-10 text-cyan-400 shrink-0" />
            <div>
              <h3 className="text-white font-bold text-sm md:text-lg whitespace-nowrap md:whitespace-normal">Performance Testada</h3>
              <p className="text-gray-400 text-sm hidden md:block mt-1">Configurações submetidas a testes de estresse em render e jogos triplo-A.</p>
            </div>
          </div>
          <div className="bg-slate-900/30 border border-gray-800 p-4 md:p-6 rounded-lg text-left md:text-center flex flex-row md:flex-col items-center gap-4 md:gap-3">
            <ShoppingCart className="w-6 h-6 md:w-10 md:h-10 text-cyan-400 shrink-0" />
            <div>
              <h3 className="text-white font-bold text-sm md:text-lg whitespace-nowrap md:whitespace-normal">Desconto em Conjunto</h3>
              <p className="text-gray-400 text-sm hidden md:block mt-1">Levar as peças agrupadas em combo garante um desconto direto no valor final.</p>
            </div>
          </div>
        </div>

        {/* Botões de controle de Abas (Tabs) */}
        <div className="flex gap-4 mb-12 justify-center items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-3 md:px-6 py-4 rounded-lg border transition-all duration-300 cursor-pointer w-1/3 ${
                activeTab === tab.id 
                  ? 'bg-cyan-900/30 border-cyan-400 text-cyan-300 scale-105' 
                  : 'bg-slate-900/50 border-gray-800 text-gray-400 hover:border-gray-600 hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <div className="text-left">
                <div className="font-bold">{tab.label}</div>
                <div className="text-xs opacity-70 hidden md:block">{tab.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Listagem dinâmica dos combos com base na aba ativa */}
        <div className="flex flex-col gap-10 transition-opacity duration-300 ease-in-out" key={activeTab}>
          {combosData[activeTab].map((combo, index) => (
            <ComboCard key={`combo-${activeTab}-${index}`} {...combo} />
          ))}
        </div>
      </section>
    </div>
  );
}