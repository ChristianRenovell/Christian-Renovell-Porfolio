import React from 'react';
import './contact.scss';

const Contact = (props) => {

  let color;

  if (props.mode === "light") {
      color = "#555";
  }
  if (props.mode === "darck") {
      color = "#d87093";
  }
  return (
    <div id="fullpage">
      <div className="section">
        <div className="contentComponent">
          <div className="fullpage2 mt-4">
            <div className="content">
              <h1>Contacto</h1>
              <div className="lineTitle" style={{ backgroundColor: color }}/>
              <div className="content--inner infoContact">
                <div className="container">
                  <section class="pb-5 mt-4">
                    <div class="row">
                      <div class="col-md-12 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="md-form mb-4">
                                <label for="name" className="">Nombre</label>
                                <input type="text" id="name" name="name" class="form-control bg-transparent" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="md-form mb-4">
                                <label for="email" class="">Email</label>
                                <input type="text" id="email" name="email" class="form-control bg-transparent" />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="md-form mb-0">
                                <label for="subject" class="">Asunto</label>
                                <input type="text" id="subject" name="subject" class="form-control bg-transparent" />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-4">
                            <div class="col-md-12">
                              <div class="md-form">
                                <label for="message">Mensaje</label>
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea bg-transparent"></textarea>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="text-center text-md-center">
                          <div className={`btn-profile-${props.mode}`} id="btn-contact" onclick="document.getElementById('contact-form').submit();">Enviar</div>
                        </div>
                      </div>
                    </div>
                    <div className="content--inner2 mb-5">
                      <div class="col-md-12 text-center mt-4">
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
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;