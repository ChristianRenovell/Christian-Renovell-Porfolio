import React from 'react';
import './proyects.scss';

const Proyects = (props) => {

  let color;
  let colorBorder;

  if(props.mode==="light"){
    color = "#f1ede3";
    colorBorder = "#555";
  }
  if(props.mode==="darck"){
    color = "#080d17";
    colorBorder = "#d87093";
  }

  return (
    <div id="fullpage">
      <div className="section">
        <div className="content--inner mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h1>Trabajos recientes</h1>
                </div>
              </div>
            </div>
            <div className="row mt-5 content--inner2">
              {/*sapau*/}
              <div className="col-md-4 ">
                <div className="containerCard" style={{ backgroundImage: "url(../images/sapau-p.png)", boxShadow: "0 0 5px"+colorBorder+""  }}>
                  <div className="overlay" style={{ backgroundColor: color }}>
                    <div className="items"></div>
                    <div className="items head">
                      <p>Comercial Sapau.es</p>
                      <hr></hr>
                    </div>
                    <div className="items description">
                      <p className="new">Comercio de Marcas inportantes de Jardineria y camping.</p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>VISITA LA WEB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="containerCard" style={{ backgroundImage: "url(../images/be.png)", boxShadow: "0 0 5px"+colorBorder+"" }}>
                  <div className="overlay" style={{ backgroundColor: color }}>
                    <div className="items"></div>
                    <div className="items head">
                      <p>Be Bangarang</p>
                      <hr></hr>
                    </div>
                    <div className="items description">
                     
                      <p className="new">Colaborador para agencia deigital en varios proyectos. </p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>SAVER MAS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="containerCard" style={{ backgroundImage: "url(../images/syc.png)", boxShadow: "0 0 5px"+colorBorder+""  }}>
                  <div className="overlay" style={{ backgroundColor: color }}>
                    <div className="items"></div>
                    <div className="items head">
                      <p>Show Your Company</p>
                      <hr></hr>
                    </div>
                    <div className="items description">
                    
                      <p className="new">Empresa de publicidad y marquetin digital en dispositivos moviles.</p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>VISITAR WEB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="content--inner3">
                  <a href=""><div><h2>Porfolio</h2></div><div><img width="50px" src={`../images/git-${props.mode}.png`} id="git" /></div></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Proyects;