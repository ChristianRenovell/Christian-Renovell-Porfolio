import { urlToRequest } from 'loader-utils';
import React from 'react';
import './footer.scss';

function Name(props) {

  let color;
  let textColor;


  if (props.mode === "light") {
    textColor = "#f1ede3"
    color = "#555";
  }
  if (props.mode === "darck") {
    textColor = "#080d17";
    color = "#d87093";
  }

  return (
    <div className="footContent" style={{ backgroundColor: color, color: textColor }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 links">
            <div>
              <ul>
                <li>
                  <h4>Sobre mi</h4>
                </li>
                <p id="aboutFooter">
                Soy un programador y desarrollador Web con conocimientos tanto en front-end como en back-end. Apasionado de las tecnologías.
                </p>
              </ul>
              <div className="col-md-12">
                <img src={`${props.url}/assets/es-${props.mode}.png`} className={`cursor-${props.mode}`} width="35px"></img> 
                <img src={`${props.url}/assets/eng-${props.mode}.png`} className={`cursor-${props.mode} ml-2`} width="35px"></img>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-md-4 logo">
            <img src={`${props.url}/assets/miLogo-${props.mode}-footer.png`} alt="logo" className="logoFooter" />
          </div>
          <div className="col-sm-12 col-md-4">
            <ul className="list-unstyled mb-0">
              <li>
                <h4>Contacto</h4>
              </li>
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p><a target="_blank" href="https://goo.gl/maps/vwfawwRL83fcsg1t5" style={{ color: textColor }} className={`cursor-${props.mode}`}>Candelaria, Santa cruz de Tenerife, España</a></p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p><a target="_blank" href="tel: +34679985955" style={{ color: textColor }} className={`cursor-${props.mode}`}>+34 679985955</a></p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
               <p><a target="_blank" href="mailto: christianrenovell83@gmail.com" style={{ color: textColor }} className={`cursor-${props.mode}`}>christianrenovell83@gmail.com</a></p>
              </li>
            </ul>
            <div className="row mt=2 mb-5">
              <div className="col-3 col-md-3">
                <a target="_blank" href="https://www.instagram.com/christian_renovell/" className={`cursor-${props.mode}`}><img src={`${props.url}/assets/telegram-${props.mode}-footer.png`} width="35px"></img></a>
              </div>
              <div className="col-3 col-md-3">
                <a target="_blank" href="https://www.linkedin.com/in/christian-renovell-miralles-896738196/" className={`cursor-${props.mode}`}><img src={`${props.url}/assets/linkedin-${props.mode}-footer.png`} width="35px"></img></a>
              </div>
              <div className="col-3 col-md-3">
                <a target="_blank" href="https://www.facebook.com/christian.renovell" className={`cursor-${props.mode}`}><img src={`${props.url}/assets/twitter-${props.mode}-footer.png`} width="35px"></img></a>
              </div>
              <div className="col-3 col-md-3">
                <a target="_blank" href="https://github.com/ChristianRenovell" className={`cursor-${props.mode}`}><img src={`${props.url}/assets/git-${props.mode}-footer.png`} width="35px"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Name;