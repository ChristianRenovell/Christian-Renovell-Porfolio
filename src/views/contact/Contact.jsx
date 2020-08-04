import React from 'react';

const Contact = () => {
  return (
    <div id="fullpage">
      <div className="section">
        <div className="fullpage2">
          <div className="content">
            <h1>CONTACTO</h1>
            <div className="content--inner">
              <div className="container">
                <section class="mb-4">
                  <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
                  <div class="row">
                    <div class="col-md-12 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="md-form mb-0">
                              <input type="text" id="name" name="name" class="form-control bg-transparent" />
                              <label for="name" class="">Nombre</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="md-form mb-0">
                              <input type="text" id="email" name="email" class="form-control bg-transparent" />
                              <label for="email" class="">Email</label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="md-form mb-0">
                              <input type="text" id="subject" name="subject" class="form-control bg-transparent" />
                              <label for="subject" class="">Asunto</label>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-12">
                            <div class="md-form">
                              <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea bg-transparent"></textarea>
                              <label for="message">Mensaje</label>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="text-center text-md-center">
                        <a class="btn btn-light" onclick="document.getElementById('contact-form').submit();">Enviar</a>
                      </div>
                    </div>
                  </div>
                  <div className="content--inner2">
                  <div class="col-md-12 text-center mt-4">
                    <ul class="list-unstyled mb-0">
                      <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>San Francisco, CA 94126, USA</p>
                      </li>
                      <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>+ 01 234 567 89</p>
                      </li>
                      <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
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
  );
};
export default Contact;