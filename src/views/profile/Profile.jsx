import React from 'react';
import './profile.scss';

const Profile = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="content--inner">
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="col-md-5">
                                <img src={`../images/christian-${props.match.params.mode}.png`} alt="..." width="400px" className={`circle-profile-${props.match.params.mode}`} id="photo-circle" />
                            </div>
                            <div className="col-md-5 content--inner2">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                            </div>
                            <div className="col-md-5 mt-5 content--inner3">
                                <div className={`btn-profile-${props.match.params.mode}`} id="btn-contact">Contacta conmigo</div>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;