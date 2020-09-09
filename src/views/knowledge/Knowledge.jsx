import React from 'react';
import './knowledge.scss';

const Knowledge = (props) => {

    let color;

    if (props.mode === "light") {
        color = "#555";
    }
    if (props.mode === "darck") {
        color = "#d87093";
    }

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 content mt-4 mb-4">
                                <h1>Conocimientos</h1>
                                <div className="lineTitle" style={{ backgroundColor: color }}/>
                            </div>
                        </div>
                        <div className="content--inner2">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon1"><img width="90px" src={`../images/html-${props.mode}.png`} id="facebook" data-toggle="tooltip" data-placement="top" title="Javascript" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon2"><img width="90px" src={`../images/css-${props.mode}.png`} id="instagram" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon3"><img width="90px" src={`../images/javascript-${props.mode}.png`} id="linkedin" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-sm-2 col-md-3 mt-4">
                                    <a href="" className="icon4"><img width="90px" src={`../images/boostrap-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon5"><img width="90px" src={`../images/react-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon6"><img width="90px" src={`../images/php-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon7"><img width="90px" src={`../images/node-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon8"><img width="90px" src={`../images/mongodb-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon9"><img width="90px" src={`../images/java-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon10"><img width="90px" src={`../images/mysql-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon11"><img width="90px" src={`../images/vue-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon12"><img width="90px" src={`../images/graphQL-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon13"><img width="90px" src={`../images/stripe-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon14"><img width="90px" src={`../images/firebase-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon15"><img width="90px" src={`../images/supersaas-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon16"><img width="90px" src={`../images/amazon-${props.mode}.png`} id="git" /></a>
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