import "./Footer.css"
import FooterRedes from './MenuFooterRedes/FooterRedes'
import FooterNav from './MenuFooterNavegação/FooterNav'
import FooterSobre from './MenuFooterSobre/FooterSobre'
import Divider from './Divider/Divider'

function Footer() {
    return (
        <>
            <footer className="bg-slate-950 text-gray-400 py-8">
                <div
                    className="w-full max-w-7xl py-4 px-11 xl:px-16 mx-auto grid sm:grid-cols-3 md:grid-cols-3 gap-10"
                >
                    <FooterRedes />

                    {/* <!-- Menu Navegação --> */}

                    <FooterNav />

                    {/* <!-- Menu 2 --> */}

                    <FooterSobre />
                </div>

                {/* <!-- Divider --> */}

                <Divider />

            </footer>
        </>
    )
}

export default Footer;