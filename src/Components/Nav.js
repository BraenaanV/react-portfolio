import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li>
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Portfolio</Link>
            </li>
            <li>
                <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
            </li>
            <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact Me!</Link>
            </li>
        </ul>
    )
}

export default Nav;