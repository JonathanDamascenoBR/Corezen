import { useState } from "react";
import { CircleChevronDown } from "lucide-react";

function PecasItem({ titulosjp, produtosjp, onSelect }) {
    const [produtojp, setProdutojp] = useState("");
    const [listjp, setListjp] = useState(false);

    return (
        <div className="relative p-10 ">
            <h2 className="text-cyan-400 text-2xl text-center">{titulosjp}</h2>
            <p
                onClick={() => setListjp(!listjp)}
                className="text-lg text-center flex justify-center mt-5 cursor-pointer hover:text-cyan-200 items-center"
            >
                <span>{produtojp ? produtojp : ""}</span>
                <CircleChevronDown
                    className={`text-center ml-3 transition-transform duration-200 ${listjp ? "rotate-180" : "rotate-0"} `}
                />
            </p>
            <ul
                className={`  transition-all duration-200 ${listjp ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none  absolute "}`}
            >
                {produtosjp.map((produto, index) => (
                    <li
                        className="px-4 py-2 cursor-pointer hover:bg-blue-400"
                        key={index}
                        onClick={() => {
                            (setProdutojp(produto.marca ? `${produto.marca}${produto.modelo} ` : `${produto.modelo}`),
                                setListjp(false));
                                onSelect(produto);
                        }}
                    >
                        {
                            // produto.classificao === "hardware" ?
                            produto.marca ?
                                `${produto.marca} ${produto.modelo}` :
                                `${produto.modelo}`
                            // :
                            // produto.marca ?
                            //     `${produto.marca} ${produto.modelo}` :
                            //     `${produto.modelo}`
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PecasItem;
