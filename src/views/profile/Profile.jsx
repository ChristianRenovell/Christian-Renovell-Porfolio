import React from 'react';
import './profile.scss';

const Profile = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="content">

                        <div className="container-fluid">
                            <h1 className="title mt-5">¿Quién soy?</h1>
                        </div>
                        <div className="p1 mt-5">
                            Soy un <span className="textRelt">programador</span> y <span className="textRelt">desarollador Web</span> con conocimientos tanto en front-end como en back-end.
                        </div>
                        <div className="p2 mt-2">
                            Apasionado de las tecnologías como <span className="textRelt2">React.js y Node.js</span> , me encanta enfrentarme a <span className="textRelt2">nuevos y desafiantes retos.</span>
                        </div>
                        <div className="p3 mt-2">
                        <span className="textRelt3">Capacidad de adaptación</span> en un mercado online que evoluciona constantemente. Buenas <span className="textRelt3">habilidades comunicativas</span> para trabajo en equipo.
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 mt-5 habilitys">
                                <h2>HABILIDADES</h2>
                                <div className="line"/>
                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;