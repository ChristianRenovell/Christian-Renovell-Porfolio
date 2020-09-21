import React from 'react';
import './home.scss';


const Home = (props) => {

    return (
        <div>
            <div className="section">
                <div className="contentComponent">
                   
                        <div className="content">
                            <div className={`circle-${props.mode} mt-1`} id="photo-circle"></div>
                        </div>
                        <div className="content--inner nameHome mb-5">
                                <div className="nameHome">
                                    <h1>CHRISTIAN RENOVELL</h1>
                                </div>                           
                        </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;