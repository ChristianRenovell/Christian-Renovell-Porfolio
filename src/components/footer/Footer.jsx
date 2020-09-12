import { urlToRequest } from 'loader-utils';
import React from 'react';
import './footer.scss';



function Name(props) {

  let color;
  let textColor;
  let url = process.env.REACT_APP_URL;

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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p>
              </ul>
              <div className="col-md-12">
                <img src={`${url}/es-${props.mode}.png`}  width="35px"></img> 
                <img src={`${url}/eng-${props.mode}.png`} className="ml-2" width="35px"></img>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-md-4 logo">
            <img src={`${url}/miLogo-${props.mode}-footer.png`} alt="logo" className="logoFooter" />
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
                <img src={`${url}/instagram-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`${url}/linkedin-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`${url}/facebook-${props.mode}-footer.png`} width="35px"></img>
              </div>
              <div className="col-3 col-md-3">
                <img src={`${url}/git-${props.mode}-footer.png`} width="35px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Name;