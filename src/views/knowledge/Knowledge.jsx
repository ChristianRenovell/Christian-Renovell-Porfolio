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
                                    <a href="" className="icon1"><img width="90px" src={`${process.env.REACT_APP_API}/git-${props.mode}.png`} id="facebook" data-toggle="tooltip" data-placement="top" title="Javascript" /></a>
                                    {}
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon2"><img width="90px" src={`${process.env.REACT_APP_API}/css-${props.mode}.png`} id="instagram" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon3"><img width="90px" src={`${process.env.REACT_APP_API}/javascript-${props.mode}.png`} id="linkedin" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-sm-2 col-md-3 mt-4">
                                    <a href="" className="icon4"><img width="90px" src={`${process.env.REACT_APP_API}/boostrap-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon5"><img width="90px" src={`${process.env.REACT_APP_API}/react-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon6"><img width="90px" src={`${process.env.REACT_APP_API}/php-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon7"><img width="90px" src={`${process.env.REACT_APP_API}/node-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon8"><img width="90px" src={`${process.env.REACT_APP_API}/mongodb-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon9"><img width="90px" src={`${process.env.REACT_APP_API}/java-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon10"><img width="90px" src={`${process.env.REACT_APP_API}/mysql-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon11"><img width="90px" src={`${process.env.REACT_APP_API}/vue-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon12"><img width="90px" src={`${process.env.REACT_APP_API}/graphQL-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon13"><img width="90px" src={`${process.env.REACT_APP_API}/stripe-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon14"><img width="90px" src={`${process.env.REACT_APP_API}/firebase-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon15"><img width="90px" src={`${process.env.REACT_APP_API}/supersaas-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href="" className="icon16"><img width="90px" src={`${process.env.REACT_APP_API}/amazon-${props.mode}.png`} id="git" /></a>
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