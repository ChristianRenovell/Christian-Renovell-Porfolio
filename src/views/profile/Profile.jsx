import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Profile = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5 mt-5">
                                    <img src={`../images/christian-${props.mode}.png`} alt="..." width="400px" className={`circle-profile-${props.mode}`} id="photo-circle" />
                                </div>
                                <div className="col-md-5 content--inner mt-5">
                                    <p className="about-p" text-aling="left">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                </div>
                                <div className="col-md-5 mt-5 content--inner2">
                                    <Link to={`/contact/`} className="navbar-brand"><div className={`btn-profile-${props.mode}`} id="btn-about">Contacta conmigo</div></Link>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;