import { Cpu, ChevronDown, ArrowRightLeft } from 'lucide-react';

const HWCard = ({ imageUrl, title }) => {
  return (
    <div className="relative w-64 h-80 bg-gray-900 overflow-hidden cursor-pointer group hover:border hover:border-white/50 bg-radial hover:from-white/10 transition duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="flex items-center justify-between px-4 py-6 border-t border-gray-800">
        <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
          // {title}
        </span>
        <ArrowRightLeft className="w-5 h-5 group-hover:text-cyan-300 text-gray-500 transition-colors duration-300" />
      </div>

      {/* Decorative corners */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></span>
      <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></span>
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></span>
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></span>
    </div>
  );
};

export default function Home() {
  const scrollToContent = () => {
    document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        {/* Background Image fallback instead of specific user video */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10">
          <div className="flex items-center gap-4">
            <Cpu className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" />
            <span className="text-5xl md:text-7xl font-bold tracking-widest text-white">CORE<span className="text-cyan-400">ZEN</span></span>
          </div>
          <h2 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide text-center max-w-2xl px-4">
            Simule, compare e descubra o setup top para você.
          </h2>
        </div>

        {/* Scroll Button */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-12 h-12" />
        </button>
      </section>

      {/* Main Content */}
      <section id="comparador" className="w-full py-20 px-4 md:px-11">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h1 className="text-3xl md:text-5xl pb-2 text-center font-bold tracking-wide">Comparador de Preço</h1>
          <h2 className="text-xl md:text-2xl text-gray-400 text-center font-light">Simule, Compare e descubra o setup perfeito para você.</h2>
          <p className="text-lg text-cyan-300/80 text-center uppercase tracking-widest pt-6">Escolha abaixo uma peça para comparar</p>
          
          <div className="flex flex-col gap-12 pt-8">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-8 justify-center">
              <HWCard title="Processador" imageUrl="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop" />
              <HWCard title="Placa Mãe" imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" />
              <HWCard title="Memória RAM" imageUrl="https://images.unsplash.com/photo-1562976540-1502f7ae8e4a?q=80&w=2127&auto=format&fit=crop" />
              <HWCard title="Placa de Vídeo" imageUrl="https://images.unsplash.com/photo-1587202372775-e229f172b9d6?q=80&w=2070&auto=format&fit=crop" />
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-8 justify-center">
              <HWCard title="Air Cooler" imageUrl="https://images.unsplash.com/photo-1628122676735-9fd422bb2b46?q=80&w=2066&auto=format&fit=crop" />
              <HWCard title="Fonte" imageUrl="https://images.unsplash.com/photo-1555617154-db2eb33e41db?q=80&w=2070&auto=format&fit=crop" />
              <HWCard title="NVMe SSD" imageUrl="https://images.unsplash.com/photo-1628620822184-25e2d6b3ad4f?q=80&w=2037&auto=format&fit=crop" />
              <HWCard title="Gabinete" imageUrl="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=2056&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
