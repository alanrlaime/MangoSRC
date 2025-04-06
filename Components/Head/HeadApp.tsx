import './HeadStyle.css'
import { NavLink, Link } from "react-router";

function Head() {
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
    </nav>
      <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/art">Articulos</Link></li>
            <li><Link to="/noticias">Noticias y Foros</Link></li> 
            <li><Link to="/iniciarsesion">Registro</Link></li>
        </ul>
      </nav>
     <header>
        <h1>Titulo de la pagina</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta, asperiores earum corporis iure eveniet voluptas itaque animi dolores molestias?</p>
     </header>
    </>
  )
}

export default Head