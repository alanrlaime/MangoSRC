import { useEffect } from 'react';
import './HeadStyle.css'
import { NavLink, Link } from "react-router";

function NavApp() {
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('nave') as HTMLElement;
            const pos = window.scrollY;

            if (pos < 50) {
                element.style.backgroundColor = "transparent";
            } else {
                element.style.backgroundColor = "black";
            }
        };

        // Agregar el evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <>
            <nav id='nave'>
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
                    <li><Link to="/articulos">Articulos</Link></li>
                    <li><Link to="/noticias">Noticias y Foros</Link></li>
                    <li><Link to="/iniciarsesion">Registro</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavApp;