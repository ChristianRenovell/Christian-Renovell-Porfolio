import React from 'react';
import './profile.scss';

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
                            <h1 className="title mt-5 mb-3">¿Quién soy?</h1>
                            <div className="lineTitle" style={{ backgroundColor: color }}/>
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
                            <div className="row mt-5 pb-5">
                                <div className="col-6 col-md-3 mt-4">
                                    <a href="" className="iconProfile1"><img width="50px" src={`https://christian-renovell-porfolio.netlify.app/facebook-${props.mode}.png`} id="facebook" /></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a href="" className="iconProfile2"><img width="50px" src={`https://christian-renovell-porfolio.netlify.app/instagram-${props.mode}.png`} id="instagram" /></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a href="" className="iconProfile3"><img width="50px" src={`https://christian-renovell-porfolio.netlify.app/linkedin-${props.mode}.png`} id="linkedin" /></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a href="" className="iconProfile4"><img width="50px" src={`https://christian-renovell-porfolio.netlify.app/git-${props.mode}.png`} id="git" /></a>
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