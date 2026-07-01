import React from "react";
import { FaCamera } from "react-icons/fa";

function AreaUsuarioC() {
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-center p-6">
      {/* Container principal */}

      {/* Container interno */}
      <div className="bg-slate-900 border-white rounded-3xl p-50 gap-60 flex flex-col md:flex-row justify-between items-center">
        {/* Lado esquerdo */}
        <div className="flex flex-col gap-6 p-5 w-full md:w-1/2">
          <button className="border border-white rounded-2xl py-6 px-8 text-white text-xl hover:bg-white hover:text-black transition">
            Botão de builds salvas
          </button>

          <button className="border border-white rounded-2xl py-6 px-8 text-white text-xl hover:bg-white hover:text-black transition">
            Relatar problema
          </button>

          <button className="border border-white rounded-2xl py-6 px-8 text-white text-xl hover:bg-white hover:text-black transition">
            Configurações
          </button>
        </div>

        {/* Lado direito */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-6">
          {/* Foto de perfil */}
          <div className="">
            <img
              className="rounded-full"
              src="https://i.pravatar.cc/150"
              alt="Avatar"
            />
            {/* Ícone câmera */}
            <button className="absolute bottom-2 left-4 border border-white rounded-md p-2 text-white hover:bg-white hover:text-black transition">
              <FaCamera />
            </button>
          </div>

          {/* Nome */}
          <h2 className="text-white text-3xl font-medium">Usuario</h2>

          {/* Editar info */}
          <button className="border border-white rounded-md px-3 py-2 text-white text-md hover:bg-white hover:text-black transition">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AreaUsuarioC;
