import React from 'react';
import './work.scss';

const Work = (props) => {

  return (
    <div id="fullpage">
      <div className="section">
        <div className="content mt-5">
          <h1>Mis trabajos recientes</h1>
        </div>
        <div className="content--inner mt-5">
          <div className="container-fluid">
            <div className="row">
              <div id="line" className="mt-2"></div>
              <div className="col-md-2 ml-3">
                <div><strong><h2>PublicidadLife</h2></strong></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div><a href="">Empresa: Be Bangarang</a></div>
                <div><a href="https://github.com/ChristianRenovell/CanariasLife_Publicidad">Repositorio de GITHUB</a></div>
                
              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;