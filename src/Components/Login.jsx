import React from "react";

export default function Login() {
  return (
    <div>
      <div class="max-w-7xl mx-auto mt-20 relative grid md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl">
        {/* <!-- LADO ESQUERDO --> */}
        <div class="bg-slate-700 flex flex-col items-center justify-center text-center px-10 py-80">
          <h1 class="text-4xl mb-6">
            Bem Vindo ao <br />
            <span class="font-bold text-white">Corezen</span>
          </h1>

          <p class="text-gray-300 mb-8 text-sm">
            ja possui conta? prossiga com o botao a baixo para fazer login.
          </p>

          <button
            id="openLogin"
            class="bg-cyan-400 text-black px-8 py-2 rounded-md hover:bg-cyan-300 transition"
          >
            Login
          </button>
        </div>

        {/* <!-- LADO DIREITO --> */}

        <div class="bg-slate-900 px-16 py-24 flex flex-col justify-center items-center">
          <h2 class="text-2xl text-center mb-6">Crie Sua Conta</h2>

          {/* <!-- Ícones --> */}
          <div class="flex justify-center gap-6 mb-4 text-xl">
            <i class="bi bi-facebook cursor-pointer hover:text-cyan-400"></i>
            <i class="bi bi-envelope-fill cursor-pointer hover:text-cyan-400"></i>
          </div>

          <p class="text-center text-sm text-gray-400 mb-6">
            ou use seu e-mail para registrar
          </p>

          {/* <!-- FORM --> */}
          <form class="flex flex-col gap-4">
            {/* <!-- Nome --> */}
            <div class="relative mt-2">
              <i class="bi bi-person absolute left-3 top-2 text-gray-400/70"></i>
              <input
                type="text"
                placeholder="Nome:"
                class="w-full pl-10 pr-4 py-2 rounded bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* <!-- Email --> */}
            <div class="relative mt-3">
              <i class="bi bi-envelope absolute left-3 top-2 text-gray-400/70"></i>
              <input
                type="email"
                placeholder="E-mail:"
                class="w-full pl-10 pr-4 py-2 rounded bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* <!-- Senha --> */}
            <div class="relative mt-2">
              <i class="bi bi-lock absolute left-3 top-2 text-gray-400/70"></i>
              <input
                type="password"
                placeholder="Senha:"
                class="w-full pl-10 pr-4 py-2 rounded bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              class="bg-cyan-400 mt-4 text-black py-2 px-6 rounded w-fit self-center hover:bg-cyan-300 transition"
            >
              Criar Conta
            </button>
          </form>
        </div>
        {/* <!-- LADO ESQUERDO --> */}
        <div class="bg-slate-900 px-10 py-16 flex flex-col justify-center">
          <h2 class="text-2xl text-center mb-6">Realize seu login</h2>

          {/* <!-- Ícones --> */}
          <div class="flex justify-center gap-6 mb-4 text-xl">
            <i class="bi bi-facebook cursor-pointer hover:text-cyan-400"></i>
            <i class="bi bi-envelope-fill cursor-pointer hover:text-cyan-400"></i>
          </div>

          <p class="text-center text-sm text-gray-400 mb-6">
            ou use seu e-mail para registrar
          </p>

          {/* <!-- FORM --> */}
          <form class="flex flex-col gap-4">
            {/* <!-- Email --> */}
            <div class="relative mt-3">
              <i class="bi bi-envelope absolute left-3 top-2 text-gray-400/70"></i>
              <input
                type="email"
                placeholder="E-mail:"
                class="w-full pl-10 pr-4 py-2 rounded bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* <!-- Senha --> */}
            <div class="relative mt-2">
              <i class="bi bi-lock absolute left-3 top-2 text-gray-400/70"></i>
              <input
                type="password"
                placeholder="Senha:"
                class="w-full pl-10 pr-4 py-2 rounded bg-zinc-800/30 text-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <button class="text-center text-sm text-gray-400 mb-6">
              esqueceu sua senha?
            </button>

            <button
              type="submit"
              class="bg-cyan-400 mt-4 text-black py-2 px-8 rounded w-fit self-center hover:bg-cyan-300 transition"
            >
              Login
            </button>
          </form>
        </div>
        {/* <!-- LADO DIREITO --> */}
        <div class="bg-slate-700 flex flex-col items-center justify-center text-center px-10 py-80">
          <h1 class="text-4xl mb-6">
            Bem Vindo ao <br />
            <span class="font-bold text-white">Corezen</span>
          </h1>

          <p class="text-gray-300 mb-8 text-sm">
            Ainda nao fez cadastro? prossiga com o botao abaixo para realizar
            seu registro
          </p>

          <button
            id="openLogin"
            class="bg-cyan-400 text-black px-8 py-2 rounded-md hover:bg-cyan-300 transition"
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
