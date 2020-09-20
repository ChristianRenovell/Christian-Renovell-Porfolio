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
        <div id="fullpage" className="transitionComponent">
            <div className="section">
                <div className="contentComponent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 content mt-4 mb-4">
                                <h1>Conocimientos</h1>
                                <div className="lineTitle" style={{ backgroundColor: color }} />
                            </div>
                        </div>
                        <div className="content--inner">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/git-${props.mode}.png`} id="facebook" data-toggle="tooltip" data-placement="top" title="Javascript" /></a>
                                    {}
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/css-${props.mode}.png`} id="instagram" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/javascript-${props.mode}.png`} id="linkedin" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-sm-2 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/boostrap-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row mt-5 content--inner2">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/react-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/php-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/node-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/mongodb-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className="row content--inner3">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/java-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/mysql-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/vue-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/graphQL-${props.mode}.png`} id="git" /></a>
                                </div>
                            </div>
                            <div className=" row content--inner4">
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/stripe-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/firebase-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/supersaas-${props.mode}.png`} id="git" /></a>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4">
                                    <a href=""><img width="90px" src={`https://christian-renovell-porfolio.netlify.app/amazon-${props.mode}.png`} id="git" /></a>
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