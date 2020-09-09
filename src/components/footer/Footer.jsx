import React from 'react';
import './footer.scss';

function Name(props) {

  return (
    <div className="footContent">
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
            </div>
          </div>
          <div className=" col-sm-6 col-md-4 logo">
            <img src="./images/miLogo-light.png" alt="logo" className="logoFooter" />
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
            <div className="row mt=2">            
                  <div className="col-md-3">
                    <img src={`../images/instagram-light-footer.png`} width="35px"></img>
                  </div>
                  <div className="col-md-3">
                    <img src={`../images/linkedin-light-footer.png`} width="35px"></img>
                  </div>
                  <div className="col-md-3">
                    <img src={`../images/facebook-light-footer.png`} width="35px"></img>
                  </div>
                  <div className="col-md-3">
                    <img src={`../images/git-light-footer.png`} width="35px"></img>
                  </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Name;