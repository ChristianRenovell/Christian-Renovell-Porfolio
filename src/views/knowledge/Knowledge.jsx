import React from 'react';
import './knowledge.scss';

const Knowledge = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>Tecnologias.</h1>
                        </div>
                    </div>
                    <div className="content--inner2">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/html-${props.mode}.png`} id="facebook" data-toggle="tooltip" data-placement="top" title="Javascript" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/css-${props.mode}.png`} id="instagram" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/javascript-${props.mode}.png`} id="linkedin" /></a>
                            </div>
                            <div className="col-sm-6 col-sm-2 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/boostrap-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/react-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/php-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/node-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/mongodb-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/java-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/mysql-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/vue-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/graphQL-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 content--inner3">
                        <div className="col-md-12 ">
                            <h1>API</h1>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/stripe-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/firebase-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/supersaas-${props.mode}.png`} id="git" /></a>
                            </div>
                            <div className="col-sm-6 col-md-3 mt-4">
                                <a href=""><img width="90px" src={`../images/amazon-${props.mode}.png`} id="git" /></a>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Knowledge;