import React from "react";
import {Link } from 'react-router-dom';
import "./style.css";

export default function Burger(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  let burger;


  if (props.mode === "light") {
    burger = "burger";

  }
  if (props.mode === "darck") {
    burger = "burger2";

  }
  function handleOpenMenu() {

    setMenuOpen(!menuOpen);
 
  }
  return (
    <div className="burg" >
      <div
        className={`menu-btn ${menuOpen ? "open" : "closed"}`}
        onClick={handleOpenMenu}
      >
        <div className={burger} />
        <div 
          className={`${menuOpen ? "showMenu" : "navmenu"}`}
        >
         <div className=" navbar-collapse textcolor" id="navbarTogglerDemo01">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <Link to={"/home"} id="l1" className="navbar-brand lin ">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/profile/`} className="navbar-brand lin">sobre mí</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/proyects/`} className="navbar-brand lin">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/Knowledge/`} className="navbar-brand lin">Conocimientos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/contact/`} className="navbar-brand lin">Contacto</Link>
                    </li>
                  </ul>
                </div>
        </div>
      </div>
    </div>
  );
}
