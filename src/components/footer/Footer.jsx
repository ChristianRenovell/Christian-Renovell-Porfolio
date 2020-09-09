import React from 'react';
import './footer.scss';

function Name(props) {

    return (
        <div className="footContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <p>Sobre mi.</p>
                        <p className="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className="col-md-2 links">
                        <p>Links interes</p>
                        <div>
                            <a href=""><p>Sapau.com</p></a>
                            <a href=""><p>Be Bangarang</p></a>
                            <a href=""><p>Show your company</p></a>
                            <a href=""><p>Joaquin Ferreira</p></a>
                        </div>
                    </div>
                    <div className="col-md-4 logo">
                        <img src="./images/miLogo-light.png" alt="" width="300px" />
                    </div>
                    <div className="col-md-4">
                        <ul class="list-unstyled mb-0">
                          <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Candelaria, Santa cruz de Tenerife, España</p>
                          </li>
                          <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p>+34 679985955</p>
                          </li>
                          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>christianrenovell83@gmail.com</p>
                          </li>
                        </ul>
                        <div className="row">
                          <div className="col-md-3">
                            <img src={`../images/instagram-light-footer.png`} width="35px"></img>
                          </div>
                          <div className="col-md-3">
                            <img src={`../images/facebook-light-footer.png`} width="35px"></img>
                          </div>
                          <div className="col-md-3">
                            <img src={`../images/git-light-footer.png`} width="35px"></img>
                          </div>
                          <div className="col-md-3">
                            <img src={`../images/linkedin-light-footer.png`} width="35px"></img>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Name;