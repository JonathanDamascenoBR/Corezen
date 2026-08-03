import MenuItem from "./MenuItem";
import FooterNavData from '../../../Data/FooterNav.json';

function FooterNav() {
    return (
        <>
            {/* <!-- Menu 1 --> */}
            <div className="w-fit md:mx-auto text-left text-xl md:translate-x-12">
                <h3 className="text-white font-semibold mb-4">Navegação</h3>
                <ul className="space-y-2">
                    {FooterNavData.map((item, index) => (
                        <MenuItem key={index} url={item.url} label={item.label} customClass={item.customClass} />

                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default FooterNav

