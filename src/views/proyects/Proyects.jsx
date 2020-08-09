import React from 'react';
import Card from '../../components/card/Card';


const Proyects = (props) => {
  return (
    <div id="fullpage">
      <div className="section">
        <div className="content">
          <h1>Mis trabajos recientes</h1>
        </div>
        <div className="content--inner mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <Card />
              </div>
              <div className="col-md-4">
                <Card />
              </div>
              <div className="col-md-4">
                <Card />
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};
export default Proyects;