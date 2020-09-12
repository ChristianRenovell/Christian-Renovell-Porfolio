import React from 'react';
import './home.scss';


const Home = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="content">
                        <div className={`circle-${props.mode} mt-5`} id="photo-circle"></div>
                    </div>
                    <div className="content--inner nameHome">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>CHRISTIAN</h1>
                            </div>
                            <div className="col-md-6">
                                <h1>RENOVELL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;