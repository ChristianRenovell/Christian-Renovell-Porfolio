import React from 'react';
import './proyects.scss';




const Proyects = (props) => {

  let url = `../images/christian-${props.mode}.png`;

  return (
    <div id="fullpage">
      <div className="section">
        <div className="content--inner mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h1>Mis trabajos recientes</h1>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {/*sapau*/}
              <div className="col-md-4">
                <div className="containerCard" style={{ backgroundImage: "url(" + url + ")" }}>
                  <div className="overlay" style={{ backgroundColor: "red" }}>
                    <div className="items"></div>
                    <div className="items head">
                      <p>Flower Embroidery Hoop Art</p>
                      <hr></hr>
                    </div>
                    <div className="items price">
                      <p className="old">$699</p>
                      <p className="new">$345</p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>ADD TO CART</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="containerCard" style={{ backgroundImage: "url(" + url + ")" }}>
                  <div className="overlay">
                    <div className="items"></div>
                    <div className="items head">
                      <p>Flower Embroidery Hoop Art</p>
                      <hr></hr>
                    </div>
                    <div className="items price">
                      <p className="old">$699</p>
                      <p className="new">$345</p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>ADD TO CART</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="containerCard" style={{ backgroundImage: "url(" + url + ")" }}>
                  <div className="overlay">
                    <div className="items"></div>
                    <div className="items head">
                      <p>Flower Embroidery Hoop Art</p>
                      <hr></hr>
                    </div>
                    <div className="items price">
                      <p className="old">$699</p>
                      <p className="new">$345</p>
                    </div>
                    <div className="items cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>ADD TO CART</span>
                    </div>
                  </div>
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