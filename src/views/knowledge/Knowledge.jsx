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
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Git"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="}
                                />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/css-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="CSS"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/javascript-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Javascript"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/boostrap-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Boostrap"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="}
                                />
                            </div>
                        </div>
                        <div className="row content--inner2">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/react-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="React"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-react-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/php-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="PHP"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/node-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Node"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/mongodb-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Mongodb"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                        </div>
                        <div className="row content--inner3">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/java-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Java"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/mysql-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Mysql"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/vue-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Vue"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/graphQL-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="GraphQL"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/diploma-git-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                        </div>
                        <div className=" row content--inner4 mb-5">
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/stripe-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Stripe"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/stripe-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/firebase-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Firebase"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/firebase-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/supersaas-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Supersaas"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/supersaas-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 mt-4 ico">
                                <Icons src={`https://christian-renovell-porfolio.netlify.app/amazon-${props.mode}.png`}
                                    modalcolor={modalColor}
                                    color={color}
                                    title="Amazon"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
                                    diplomaTitle="OpenWebinars"
                                    diplomaSrc={`https://christian-renovell-porfolio.netlify.app/amazon-${props.mode}.png`}
                                    diplomaLink={"https://openwebinars.net/certificacion/YxEj4Gdo?type=pdf&r=818e03d96}&t="} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Knowledge;