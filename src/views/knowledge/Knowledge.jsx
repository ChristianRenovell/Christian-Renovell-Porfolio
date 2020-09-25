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
                            <div className="col-md-12 content ">
                                <h1>Conocimientos</h1>
                                <div className="lineTitle" style={{ backgroundColor: color }} />
                            </div>
                        </div>
                        <div className="row mt-5 content--inner">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/git-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Git"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="}
                                />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/css-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="CSS"
                                    diplomaSrc={`${props.url}/assets/css-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/javascript-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Javascript"
                                    diplomaTitle="Platzi"                                   
                                    diplomaSrc={`${props.url}/assets/diploma-javascript-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificado/0vRQneQV?t=1598524817&type=pdf"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/boostrap-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Boostrap"
                                    diplomaSrc={`${props.url}/assets/boostrap-${props.mode}.png`}
                                    diplomaLink={"#"}
                                />
                            </div>
                        </div>
                        <div className="row content--inner2">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/react-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="React"  
                                    diplomaTitle="Platzi"
                                    diplomaSrc={`${props.url}/assets/diploma-react-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/php-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="PHP"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/diploma-php-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificado/bx9LwLNv?t=1598524817&type=pdf"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/node-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Node"
                                    diplomaTitle=""
                                    diplomaSrc={`${props.url}/assets/node-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/mongodb-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Mongodb"
                                    diplomaTitle=""
                                    diplomaSrc={`${props.url}/assets/mongodb-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                        </div>
                        <div className="row content--inner3">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/java-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Java"
                                    diplomaTitle=""
                                    diplomaSrc={`${props.url}/assets/java-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/mysql-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Mysql"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/mysql-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/vue-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Vue"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/vue-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/graphQL-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="GraphQL"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/graphQL-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                        </div>
                        <div className=" row content--inner4 mb-5">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/stripe-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Stripe"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/stripe-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/firebase-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Firebase"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/firebase-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/supersaas-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Supersaas"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/supersaas-${props.mode}.png`}
                                    diplomaLink={"#"} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`${props.url}/assets/amazon-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Amazon"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`${props.url}/assets/amazon-${props.mode}.png`}
                                    diplomaLink={"#"}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Knowledge;