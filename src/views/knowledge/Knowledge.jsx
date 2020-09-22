import React from 'react';
import Icons from '../../components/icons/Icons';
import './knowledge.scss';

const Knowledge = (props) => {

    let color;
    let modalColor;

    if (props.mode === "light") {
        modalColor = "#f1ede3";
        color = "#555";
    }
    if (props.mode === "darck") {
        modalColor = "#080d17";
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
                        <div className="row mt-5 content--inner">                          
                                <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                    <Icons src={`https://christian-renovell-porfolio.netlify.app/git-${props.mode}.png`}
                                        modalcolor = {modalColor}
                                        color = {color}
                                        title="Git"
                                        description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                        diplomaTitle = "OpenWebinars"
                                        diplomaSrc = {`./images/diploma-git-${props.mode}.png`}
                                    />
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                    <Icons src={`https://christian-renovell-porfolio.netlify.app/css-${props.mode}.png`} />
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                    <Icons src={`https://christian-renovell-porfolio.netlify.app/javascript-${props.mode}.png`} />
                                </div>
                                <div className="col-6 col-sm-6 col-sm-2 col-md-3 mt-4 ico">
                                    <Icons src={`https://christian-renovell-porfolio.netlify.app/boostrap-${props.mode}.png`} />
                                </div>
                        </div>
                        <div className="row mt-5 content--inner2">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/react-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/php-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/node-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/mongodb-${props.mode}.png`} />
                            </div>
                        </div>
                        <div className="row content--inner3">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/java-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/mysql-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/vue-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/graphQL-${props.mode}.png`} />
                            </div>
                        </div>
                        <div className=" row content--inner4">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/stripe-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/firebase-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/supersaas-${props.mode}.png`} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/amazon-${props.mode}.png`} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Knowledge;