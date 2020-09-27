import React from 'react';
import Card from '../../components/card/Card';

import './proyects.scss';

const Proyects = (props) => {

  let color;
  let colorBorder;

  if (props.mode === "light") {
    color = "#f1ede3";
    colorBorder = "#555";
  }
  if (props.mode === "darck") {
    color = "#080d17";
    colorBorder = "#d87093";
  }
  return (
    
    <div id="fullpage" className="transitionComponent">
      <div className="section">
        <div className="contentComponent">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-5">
                <div className="content">
                  <h1>Trabajos recientes</h1>
                  <div className="lineTitle" style={{ backgroundColor: colorBorder }} />
                </div>
              </div>
            </div>
            <div className="row mt-5 content--inner">
              <div className="col-12 col-sm-12 col-md-4">
                <Card
                  imgUrl={`${props.url}/assets//sapau-${props.mode}.png`}
                  color={color}
                  colorBorder={colorBorder}
                  title="Comercial Sapau.es"
                  description="Comercio de Marcas inportantes de Jardineria y camping."
                  linkView="https://sapau.000webhostapp.com/" />
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                <Card
                  imgUrl={`${props.url}/assets/bebangarang-${props.mode}.png`}
                  color={color}
                  colorBorder={colorBorder}
                  title="Be Bangarang"
                  description="Colaborador para agencia deigital en varios proyectos."
                  linkView="https://bebangarang.es/" />
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                <Card
                  imgUrl={`${props.url}/assets/syc-${props.mode}.png`}
                  color={color}
                  colorBorder={colorBorder}
                  title="Show Your Company"
                  description="Empresa de publicidad y marquetin digital en dispositivos moviles."
                  linkView="https://www.showyourcompany.com/" />
              </div>
            </div>
            <div className="row mt-5 pb-5">
              <div className="col-md-12 mb-5">
                <div className="content--inner2">
                  <a target="_blank" href="https://github.com/ChristianRenovell/Christian-Renovell-Porfolio"  className="titlePorfolio"><h2>Este es mi Portfolio<img className="ml-3 iconPorfolio" width="50px" src={`${props.url}/assets/git-${props.mode}.png`} id="git"/></h2></a>
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