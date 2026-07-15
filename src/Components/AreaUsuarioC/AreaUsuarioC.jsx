import React from "react";
import { FaCamera } from "react-icons/fa";

function AreaUsuarioC() {
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-center p-6">
      {/* Container principal */}

      {/* Container interno */}
      <div className="bg-slate-900 border-white rounded-3xl p-50 gap-70 flex flex-col md:flex-row justify-center items-center">
        {/* Lado esquerdo */}
        <div className="flex flex-col gap-6 p-5 items-center  w-full md:w-1/2">
          <button className="text-black bg-cyan-400 mt hover:bg-cyan-300 transition   rounded-md py-6 px-6  text-xl ">
            Builds Salvas
          </button>
          <button className=" text-black bg-cyan-400 mt hover:bg-cyan-300 transition  rounded-md py-6 px-6  text-xl ">
            Configurações
          </button>

          <button className="text-black bg-cyan-400 mt hover:bg-cyan-300 transition  rounded-md py-6 px-6 text-xl">
            Relatar problema
          </button>
        </div>

        <div className="hidden md:block w-[2px] bg-slate-600 self-stretch"></div>

        {/* Lado direito */}
        <div className="flex flex-col gap-6 p-5 items-center  w-full md:w-1/2">
          {/* Foto de perfil */}
          <div className="">
            <img
              className="rounded-full"
              src="https://i.pravatar.cc/150"
              alt="Avatar"
            />
          </div>

          {/* Nome */}
          <h2 className="text-white text-3xl font-medium">Usuario</h2>

          {/* Editar info */}
          <button className="rounded-md px-2 py-2 text-black bg-cyan-400 mt hover:bg-cyan-300 transition">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AreaUsuarioC;
