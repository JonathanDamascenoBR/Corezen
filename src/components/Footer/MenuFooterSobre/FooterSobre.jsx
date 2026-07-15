import MenuItem from "./MenuItem";
import FooterSobreData from '../../../data/FooterSobre.json';

function FooterSobre() {
    return (
        <>
            {/* <!-- Menu 2 --> */}
            <div className="w-fit md:ml-auto text-left text-xl">
                <h3 className="text-white font-semibold mb-4">Sobre Nós</h3>
                <ul className="space-y-2">
                    {FooterSobreData.map((item, index) => (
                        <MenuItem key={index} url={item.url} label={item.label} customClass={item.customClass} />

                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default FooterSobre

