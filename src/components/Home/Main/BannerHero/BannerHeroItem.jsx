import VideoBack from '../../../../assets/videos/Background-Corezen-Home.mp4'
import LogoNome from '../../../../assets/imgs/nome.png'

function BannerHeroItem({ item }) {


    const hero = () => {
        const alvo = document.getElementById("secao-build");

        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div id='hero' className="relative w-full h-screen overflow-y-auto">
                {/* <!-- Vídeo de fundo --> */}
                <video
                    className="absolute inset-0 w-full h-full object-cover "
                    src={VideoBack}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* <!-- Escurecimento --> */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* <!-- Logo e texto --> */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-0"
                >
                    <img src={LogoNome} alt="Logo" className='w-86 md:w-96 opacity-65' />
                    <h2 className="text-2xl text-gray-300">
                        {item.description}
                    </h2>
                </div>

                {/* <!-- Botão de seta no bottom --> */}
                <button
                    id="btnDescer"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
                    onClick={hero}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>
        </>

    )
}

export default BannerHeroItem