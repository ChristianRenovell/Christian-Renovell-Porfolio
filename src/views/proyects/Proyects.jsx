import React from 'react';
import Card from '../../components/card/Card';
import CardProyect from '../../components/cardProyect/CardProyect';
//import Background from '../../assets/static/sapau.png';

const Proyects = (props) => {

  return (
    <div id="fullpage">
      <div className="section">
        <div className="content">
          <h1>Mis trabajos recientes</h1>
        </div>
        <div className="content--inner mt-5">
          <div className="container">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4 mb-5">
                <CardProyect
                  background={`../images/sapau-${props.mode}.png`}
                  title="Comercial Sapau.es"
                  description="Web informativa de comercio de distribucion de importantes marcas de camping, jardineria y ferreteria."
                  link=""
                  iconMode={props.mode}
                />
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <CardProyect
                  background={`../images/sapau-${props.mode}.png`}
                  title="Techneros Del Mundo"
                  description="red social enfocada a la musica electronica y de club."
                  link=""
                  iconMode={props.mode}
                />
              </div>
              <div class="col-md-6 col-lg-4 mb-5">
                <CardProyect
                  background={`../images/sapau-${props.mode}.png`}
                  title="Comercial Sapau.es"
                  description="Web informativa de comercio de distribucion de importantes marcas de camping, jardineria y ferreteria."
                  link=""
                  iconMode={props.mode}
                />
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyects;