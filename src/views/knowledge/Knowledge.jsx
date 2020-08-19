import React from 'react';
import './knowledge.scss';

const Knowledge = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>Tecnologias principales.</h1>
                        </div>
                        <div className="col-md-12 mt-3 content--inner">
                            <p text-aling="center" className="kmpw-p">
                                Estas son unas de las principales tecnologias en la que trabajado.
                            </p>
                        </div>
                    </div>
                    <div className="content--inner2">
                        <div className="row">
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/html-${props.mode}.png`} id="facebook" data-toggle="tooltip" data-placement="top" title="Javascript" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/css-${props.mode}.png`} id="instagram" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/javascript-${props.mode}.png`} id="linkedin" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/boostrap-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/react-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/php-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/node-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/mongodb-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Knowledge;