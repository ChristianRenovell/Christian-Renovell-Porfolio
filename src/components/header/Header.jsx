import React, { Component } from 'react';
import './header.scss';
import burger from '../../assets/static/burger.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = (props) => {

    
    return (
        <div id="intro-text">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <img src={burger} width="50px" />
                    </span>
                </button>
               
                <div className="collapse navbar-collapse textcolor" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                           <Link to={"/"} className="navbar-brand lin">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/${props.mode}`} className="navbar-brand lin">sobre mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/proyects/${props.mode}`} className="navbar-brand lin">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/Knowledge/${props.mode}`} className="navbar-brand lin">Conocimientos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/contact/${props.mode}`} className="navbar-brand lin">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;