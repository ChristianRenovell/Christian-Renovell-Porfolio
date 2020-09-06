import React from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
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
              <Card
                imgUrl="../images/sapau-p.png"
                color={color}
                colorBorder={colorBorder}
                title="Comercial Sapau.es"
                description="Comercio de Marcas inportantes de Jardineria y camping."
                linkView="https://sapau.000webhostapp.com/" />
              <Card
                imgUrl="../images/be.png"
                color={color}
                colorBorder={colorBorder}
                title="Be Bangarang"
                description="Colaborador para agencia deigital en varios proyectos."
                linkView="https://bebangarang.es/" />
              <Card
                imgUrl="../images/syc.png"
                color={color}
                colorBorder={colorBorder}
                title="Show Your Company"
                description="Empresa de publicidad y marquetin digital en dispositivos moviles."
                linkView="https://www.showyourcompany.com/" />
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="content--inner3">
                  <Link href=""><h2>Este es mi Porfolio<img className="ml-3" width="50px" src={`../images/git-${props.mode}.png`} id="git" /></h2></Link>
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