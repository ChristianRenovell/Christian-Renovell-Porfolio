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
                            Apasionado de las tecnologías como <span className="textRelt2">React.js y Node.js</span> , listo para enfrentarme <span className="textRelt2">nuevos retos.</span>
                        </div>
                        <div className="p3 mt-2">
                            <span className="textRelt3"></span>Buenas <span className="textRelt3">habilidades comunicativas</span> para el trabajo en equipo.
                        </div>

                        <div className="row mt-5 habilitys">
                            <div className="col-md-12">
                                <table>
                                    <tr>
                                        <td align="right" className="hability1">Metódico: </td><div className="line1 ml-1"/>
                                    </tr>
                                    <tr>
                                        <td align="right" className="hability2">Resolutivo:</td><div className="line2 ml-1"/>
                                    </tr>
                                    <tr>
                                        <td align="right" className="hability3">Autónomo:</td><div className="line3 ml-1"/>
                                    </tr>
                                    <tr>
                                        <td align="right" className="hability4">Comunicativo:</td><div className="line4 ml-1"/>
                                    </tr>
                                    <tr>
                                        <td align="right" className="hability5">Creativo:</td><div className="line5 ml-1"/>
                                    </tr>
                                    <tr>
                                        <td align="right" className="hability6">Friki:</td><div className="line6 ml-1"/>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;