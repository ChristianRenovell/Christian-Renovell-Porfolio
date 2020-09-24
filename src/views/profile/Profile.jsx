import React from 'react'

import './profile.scss'
import './skills.scss'

const Profile = (props) => {

    let color;

    if (props.mode === "light") {
        color = "#555";
    }
    if (props.mode === "darck") {
        color = "#d87093";
    }

    return (
        <div id="fullpage" className="transitionComponent">
            <div className="section">
                <div className="contentComponent">
                    <div className="content pl-5 pr-5">
                        <div className="container profileContent">
                            <h1 className="title mt-3 mb-3">¿Quién soy?</h1>
                            <div className="lineTitle" style={{ backgroundColor: color }} />
                        </div>
                        <div className="p1 mt-3">
                            Soy un programador y desarrollador Web con conocimientos tanto en <span className="textRelt">front-end</span> como en <span className="textRelt">back-end.</span>
                        </div>
                        <div className="p3 mt-2">
                            <span className="textRelt3">Capacidad de adaptación</span> en un mercado online que evoluciona constantemente.
                        </div>
                        <div className="p2 mt-2">
                            Apasionado de las tecnologías como <span className="textRelt2">React.js y Node.js</span> , listo para enfrentarme a <span className="textRelt2">nuevos retos.</span>
                        </div>
                        <div className="p3 mt-2">
                            <span className="textRelt3"></span>Buenas <span className="textRelt3">habilidades comunicativas</span> para el trabajo en equipo.
                        </div>
                        <div className="p4 mt-2">
                            Me considero una persona <span className="textRelt">resolutiva</span> y autónoma con buenas aptitudes de <span className="textRelt">autoaprendizaje.</span>
                        </div>
                        <div className="container mt-3 content--inner4">
                            <div className="skills container">
                                <div className="section-title mt-5 mb-3">
                                    <h1>Skills</h1>
                                    <div className="lineTitle mb-4" style={{ backgroundColor: color }} />
                                </div>
                                <div className="row skills-content">
                                    <div className="col-lg-6">
                                        <div className="progress">
                                            <span className="skill">HTML <i className="val">100%</i></span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar html" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <span className="skill">CSS <i className="val">90%</i></span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar css" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <span className="skill">JavaScript <i class="val">75%</i></span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar javascript" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="progress">
                                            <span className="skill">PHP <i className="val">65%</i></span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar php" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <span className="skill">React.js <i class="val">75%</i></span>
                                            <div class="progress-bar-wrap">
                                                <div className="progress-bar react" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <span className="skill">Node.js <i class="val">65%</i></span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar node" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: color }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;