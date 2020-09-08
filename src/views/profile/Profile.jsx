import React from 'react';
import './profile.scss';

const Profile = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="content pl-5 pr-5">
                        <div className="container">
                            <h1 className="title mt-5 mb-3">¿Quién soy?</h1>
                            <div className="lineTitle" />
                        </div>
                        <div className="p1 mt-3">
                            Soy un programador y desarollador Web con conocimientos tanto en <span className="textRelt">front-end</span> como en <span className="textRelt">back-end.</span>
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
                            Me considero una persona <span className="textRelt">resolutiva</span> y autonoma con buenas aptitudes de <span className="textRelt">autoaprendizaje.</span>
                        </div>
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-md-3 mt-4">
                                    <a href="" className="iconProfile1"><img width="50px" src={`../images/facebook-${props.mode}.png`} id="facebook" /></a>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <a href="" className="iconProfile2"><img width="50px" src={`../images/instagram-${props.mode}.png`} id="instagram" /></a>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <a href="" className="iconProfile3"><img width="50px" src={`../images/linkedin-${props.mode}.png`} id="linkedin" /></a>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <a href="" className="iconProfile4"><img width="50px" src={`../images/git-${props.mode}.png`} id="git" /></a>
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