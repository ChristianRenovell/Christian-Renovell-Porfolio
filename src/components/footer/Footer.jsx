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
                <p>
                Soy un programador y desarrollador Web con conocimientos tanto en front-end como en back-end. Apasionado de las tecnologías.
                </p>
              </ul>
              <div className="col-md-12">
                <img src={`https://christian-renovell-porfolio.netlify.app/es-${props.mode}.png`}  width="35px"></img> 
                <img src={`https://christian-renovell-porfolio.netlify.app/eng-${props.mode}.png`} className="ml-2" width="35px"></img>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-md-4 logo">
            <img src={`https://christian-renovell-porfolio.netlify.app/miLogo-${props.mode}-footer.png`} alt="logo" className="logoFooter" />
          </div>
          <div className="col-sm-12 col-md-4">
            <ul class="list-unstyled mb-0">
              <li>
                <h4>Contacto</h4>
              </li>
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Candelaria, Santa cruz de Tenerife, España</p>
              </li>
              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+34 679985955</p>
              </li>
              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>christianrenovell83@gmail.com</p>
              </li>
            </ul>
            <div className="row mt=2 mb-5">
              <div className="col-3 col-md-3">
                <img src={`https://christian-renovell-porfolio.netlify.app/instagram-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`https://christian-renovell-porfolio.netlify.app/linkedin-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`https://christian-renovell-porfolio.netlify.app/facebook-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`https://christian-renovell-porfolio.netlify.app/git-${props.mode}-footer.png`} width="35px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Name;