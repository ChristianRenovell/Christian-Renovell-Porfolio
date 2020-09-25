import React from 'react';
import emailjs from 'emailjs-com';

import './contact.scss';

const Contact = (props) => {

  let color;

  if (props.mode === "light") {
    color = "#555";
  }
  if (props.mode === "darck") {
    color = "#d87093";
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ikb6q8a', e.target, 'user_LEK70rFXXjXuDvy77FcGY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }



  return (
    <div id="fullpage">
      <div className="section">
        <div className="contentComponent">
          <div className="fullpage2 mt-4">
            <div className="content">
              <h1>Contacto</h1>
              <div className="lineTitle" style={{ backgroundColor: color }} />
              <div className="content--inner infoContact">
                <div className="container">
                  <section class="pb-5 mt-4">
                    <div class="row">
                      <div class="col-md-12 mb-md-0 mb-5">

                        <form onSubmit={sendEmail}>
                          <input type="hidden" name="contact_number" />
                          <div className="row">
                            <div className="col-md-6">
                              <div className="md-form mb-4">
                                <label>Nombre</label>
                                <input type="text" name="name" className="form-control bg-transparent" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="md-form mb-4">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control bg-transparent" />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="md-form mb-0">
                                <label>Asunto</label>
                                <input type="text" name="subject" class="form-control bg-transparent" />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-4">
                            <div className="col-md-12">
                              <label>Mensaje</label>
                              <textarea name="message" className="form-control md-textarea bg-transparent"/>
                            </div>
                          </div>
                         <input type="submit" value="Enviar" className={`btn-profile-${props.mode}`}/>
                        </form>
                      </div>
                    </div>
                    <div className="content--inner2 mb-2">
                      <div class="col-md-12 text-center mt-4">
                        <ul class="list-unstyled mb-0">
                          <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p><a target="_blank" href="https://goo.gl/maps/vwfawwRL83fcsg1t5">Candelaria, Santa cruz de Tenerife, España</a></p>
                          </li>
                          <li><i class="fas fa-phone mt-4 fa-2x"></i>
                          <p><a target="_blank" href="tel: +34679985955">+34 679985955</a></p>
                          </li>
                          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                          <p><a target="_blank" href="mailto: christianrenovell83@gmail.com">christianrenovell83@gmail.com</a></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="container content--inner">
                            <div className="row mt-3 ">
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.facebook.com/christian.renovell" className="iconSocialNet1"><img width="50px" src={`${process.env.REACT_APP_URL}/assets/facebook-${props.mode}.png`} id="facebook" /></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.instagram.com/christian_renovell/" className="iconSocialNet2"><img width="50px" src={`${process.env.REACT_APP_URL}/assets/instagram-${props.mode}.png`} id="instagram"/></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.linkedin.com/in/christian-renovell-miralles-896738196/" className="iconSocialNet3"><img width="50px" src={`${process.env.REACT_APP_URL}/assets/linkedin-${props.mode}.png`} id="linkedin"/></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4 mb-5">
                                    <a target="_blank" href="https://github.com/ChristianRenovell" className="iconSocialNet4"><img width="50px" src={`${process.env.REACT_APP_URL}/assets/git-${props.mode}.png`} id="git"/></a>
                                </div>
                            </div>
                        </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Contact;