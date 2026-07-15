import { Link } from "react-router-dom";

function MenuItem({ url, label, customClass }) {
    return (
            <Link to={url} className= {`${customClass} hover:text-white text-sky-300 transition flex flex-row`}>{label}</Link>
    )
}

export default MenuItem