import React from 'react';
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify'; 
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; 

import './contact.scss';

toast.configure() 

const Contact = (props) => {

    const notify = ()=>{  
      toast.error('Error al enviar el correo.', {
        className: `style-toast-error-${props.mode}`,
        position: "top-center",
        autoClose: 5000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        }); 
      }

      const notifyOK = ()=>{  
        toast.success('Mensaje enviado.', {
          className: `style-toast-ok-${props.mode}`,
          position: "top-center",
          autoClose: 5000,
          transition: Zoom,
          hideProgressBar: true,
          closeOnClick: true,
          closeButton: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          });
        }

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
        notifyOK();
        console.log(result.text);

      }, (error) => {
        notify();
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
                                <input type="text" name="name" className={`inForm-${props.mode}`} required/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="md-form mb-4">
                                <label>Email</label>
                                <input type="email" name="email" className={`inForm-${props.mode}`} required/>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 mb-4">
                              <div class="md-form mb-0">
                                <label>Asunto</label>
                                <input type="text" name="subject" className={`inForm-${props.mode}`} required/>
                              </div>
                            </div>
                          </div>
                          <div class="row mb-4">
                            <div className="col-md-12">
                              <label>Mensaje</label>
                              <textarea name="message"  className={`inForm-${props.mode} texA md-textarea`} required/>
                            </div>
                          </div>
                         <input type="submit" value="Enviar" className={`btn-profile-${props.mode} cursor-${props.mode}`}/>
                        </form>
                      </div>
                    </div>
                    <div className="content--inner2 mb-2">
                      <div class="col-md-12 text-center mt-4">
                        <ul class="list-unstyled mb-0">
                          <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p><a target="_blank" href="https://goo.gl/maps/vwfawwRL83fcsg1t5" className={`cursor-${props.mode}`}>Candelaria, Santa cruz de Tenerife, España</a></p>
                          </li>
                          <li><i class="fas fa-phone mt-4 fa-2x"></i>
                          <p><a target="_blank" href="tel: +34679985955" className={`cursor-${props.mode}`}>+34 679985955</a></p>
                          </li>
                          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                          <p><a target="_blank" href="mailto: christianrenovell83@gmail.com" className={`cursor-${props.mode}`}>christianrenovell83@gmail.com</a></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="container content--inner">
                            <div className="row mt-3 ">
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.facebook.com/christian.renovell" className={`iconSocialNet1 cursor-${props.mode}`}><img width="50px" src={`${props.url}/assets/facebook-${props.mode}.png`} id="facebook" /></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.instagram.com/christian_renovell/" className={`iconSocialNet2 cursor-${props.mode}`}><img width="50px" src={`${props.url}/assets/instagram-${props.mode}.png`} id="instagram"/></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4">
                                    <a target="_blank" href="https://www.linkedin.com/in/christian-renovell-miralles-896738196/" className={`iconSocialNet3 cursor-${props.mode}`}><img width="50px" src={`${props.url}/assets/linkedin-${props.mode}.png`} id="linkedin"/></a>
                                </div>
                                <div className="col-6 col-md-3 mt-4 mb-5">
                                    <a target="_blank" href="https://github.com/ChristianRenovell" className={`iconSocialNet4 cursor-${props.mode}`}><img width="50px" src={`${props.url}/assets/git-${props.mode}.png`} id="git"/></a>
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