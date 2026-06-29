import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-full min-h-screen max-w-7xl mx-auto relative overflow-hidden md:mt-20 mt-0 md:h-[850px] md:rounded-xl rounded-xl shadow-2xl">
        {/* FUNDOS ANIMADOS */}
        <div
          className={`
    hidden md:block
    absolute top-0 left-0 h-full w-1/2 z-10
    bg-slate-700
    transition-transform duration-[1400ms]
    ease-[cubic-bezier(0.77,0,0.175,1)]
    ${isLogin ? "translate-x-full" : "translate-x-0"}
  `}
        />

        <div
          className={`
    hidden md:block
    absolute top-0 left-1/2 h-full w-1/2 z-0
    bg-slate-900
    transition-transform duration-[1400ms]
    ease-[cubic-bezier(0.77,0,0.175,1)]
    ${isLogin ? "-translate-x-full" : "translate-x-0"}
  `}
        />
        <div
          className={`
    md:hidden
    absolute inset-0
    ${isLogin ? "bg-slate-900" : "bg-slate-700"}
    `}
        />
        <div
          className={`
    md:hidden
    absolute top-0 left-0 w-full h-full
    z-10
    rounded-none
    ${isLogin ? "bg-slate-900" : "bg-slate-700"}
    transition-transform duration-[1400ms]
    ease-[cubic-bezier(0.77,0,0.175,1)]
    ${isLogin ? "translate-y-0" : "-translate-y-[100%]"}
  `}
        />

        {/* CONTEÚDO */}
        <div className="relative z-20 mt-15 grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[850px]">
          {/* LADO TEXTO */}
          <div
            className={`
              flex flex-col items-center justify-center text-center px-10
              transition-all duration-[1200ms] delay-300 ease-in-out
              ${isLogin ? "md:order-2" : "md:order-1"}
            `}
          >
            <div
              key={isLogin ? "login-text" : "register-text"}
              className="transition-all duration-500 ease-in-out"
            >
              <h1 className="text-4xl mb-6 text-white">
                Bem Vindo ao <br />
                <span className="font-bold text-cyan-400">Corezen</span>
              </h1>

              <p className="text-gray-300 mb-8 text-sm">
                {isLogin
                  ? "Ainda não possui conta? Crie uma agora"
                  : "Já possui conta? Faça login abaixo"}
              </p>

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="bg-cyan-400 text-black px-8 py-3 rounded-md hover:bg-cyan-300 transition"
              >
                {isLogin ? "Cadastrar-se" : "Faça Login"}
              </button>
            </div>
          </div>

          {/* LADO FORM */}
          <div
            className={`
              px-6 py-12 sm:px-10 md:px-24 md:py-32 flex flex-col justify-center items-center
              transition-all duration-[1200ms] delay-300 ease-in-out
              ${isLogin ? "md:order-1" : "md:order-2"}
            `}
          >
            <div
              key={isLogin ? "login-form" : "register-form"}
              className="w-full max-w-lg transition-all duration-500 ease-in-out scale-100 opacity-100"
            >
              <h2 className="text-2xl text-center mb-6 text-white">
                {isLogin ? "Realize seu login" : "Crie Sua Conta"}
              </h2>

              {/* FORM */}
              <form className="flex flex-col gap-4">
                {!isLogin && (
                  <div className="relative animate-in fade-in duration-500">
                    <input
                      type="text"
                      placeholder="Nome:"
                      className="w-full pl-5 pr-4 py-3 rounded-md bg-zinc-800/30 text-white/70 outline-none"
                    />
                  </div>
                )}

                {/* EMAIL */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail:"
                    className="w-full pl-5 pr-4 py-3 rounded-md bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* SENHA */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Senha:"
                    className="w-full pl-5 pr-4 py-3 rounded-md bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* CONFIRMAR SENHA */}
                {!isLogin && (
                  <div className="relative animate-in fade-in duration-500">
                    <input
                      type="password"
                      placeholder="Confirmar senha:"
                      className="w-full pl-5 pr-4 py-3 rounded-md bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-cyan-400 mt-4 text-black py-3 px-6 rounded w-fit self-center hover:bg-cyan-300 transition"
                >
                  {isLogin ? "Entrar" : "Criar Conta"}
                </button>
              </form>

              {/* ÍCONES */}
              <p className="text-center mt-5 text-sm text-gray-400 mb-6">
                {isLogin ? "ou faça login usando" : "ou faça registro usando"}
              </p>

              <div className="flex justify-center gap-6 mb-4 text-xl text-white">
                <FaFacebook className="md:text-3xl text-4xl hover:scale-110 transition" />
                <FaGoogle className="md:text-3xl text-4xl hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
