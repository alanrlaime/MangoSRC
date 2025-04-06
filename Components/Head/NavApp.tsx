import './HeadStyle.css'
import { NavLink, Link } from "react-router";

function NavApp() {
    return (
        <>
            <nav>
                {/* NavLink makes it easy to show active states */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                </NavLink>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/art">Articulos</Link></li>
                    <li><Link to="/noticias">Noticias y Foros</Link></li>
                    <li><Link to="/iniciarsesion">Registro</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavApp;