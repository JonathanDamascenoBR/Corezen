import Logo from '../../../assets/imgs/nome.png'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function FooterRedes() {
    return (
        <>
            {/* <!-- Logo + descrição --> */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                    <img
                        src={Logo}
                        className="h-auto w-58"
                        alt=""
                    />
                </h2>
                <p className="text-w mb-6">Hardware - Benchmarks - Reviews</p>

                {/* <!-- Redes sociais --> */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        className="hover:text-blue-800 text-white transition flex items-center justify-center"
                    >
                        {/* <!-- Facebook --> */}
                        <i className="text-4xl"><FaFacebook /></i>
                    </a>

                    <a
                        href="https://x.com/"
                        className="hover:text-cyan-400 text-white transition flex items-center justify-center"
                    >
                        {/* <!-- Twitter/X --> */}
                        <i className="text-4xl"><BsTwitterX /></i>
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        className="hover:text-pink-500 text-white transition flex items-center justify-center"
                    >
                        {/* <!-- Instagram --> */}
                        <i className="text-4xl"><FaInstagram /></i>
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        className="hover:text-red-500 text-white transition flex items-center justify-center"
                    >
                        {/* <!-- Youtube --> */}
                        <i className="text-4xl"><FaYoutube /></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FooterRedes