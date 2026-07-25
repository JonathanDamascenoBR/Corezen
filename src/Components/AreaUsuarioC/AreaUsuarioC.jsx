import React from "react";
import { FaCamera } from "react-icons/fa";

function AreaUsuarioC() {
  return (
    <div className="w-full mx-auto flex items-center justify-center px-4 md:py-6 py-18 md:p-6">
      {/* Container principal */}

      {/* Container interno */}
      <div className="bg-slate-900 w-full max-w-7xl mx-auto p-8 md:p-20 rounded-3xl gap-8 md:gap-[70px] flex flex-col md:flex-row justify-center items-center border border-slate-700">
        {/* Lado esquerdo */}
        <div className="flex flex-col gap-6 p-5 items-center w-full md:w-1/2">
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

        <div className="w-3/4 h-[2px] md:w-[2px] md:h-auto bg-slate-600 md:self-stretch my-2 md:my-0 rounded-full"></div>

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
