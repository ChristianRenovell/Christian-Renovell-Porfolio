import React, { Component } from 'react';
import './header.scss';
import avatar from '../../assets/static/myAvatar.png';
import avatarNigth from '../../assets/static/myAvatarNigth.png';
import mode from './index.js';
import burger from '../../assets/static/burger.png';

const Header = () => {
    return (
        <div id="intro-text">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                       <img src={burger} width="50px"/>
                    </span>
                </button>
                <div className="collapse navbar-collapse textcolor" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#" onclick="myFunction()">CHRISTIAN RENOVELL</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conocimientos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <div>
                            <div >
                                <div className="time-circle">
                                    <div className="sun">
                                        <img className="avatarDay" src={avatar} />
                                    </div>
                                    <div className="sunClose">
                                        <img className="avatarNight" src={avatarNigth} />
                                    </div>
                                    <div className="water"></div>
                                </div>
                                <div id="switch" onClick={mode}>
                                    <div id="circle" ></div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;