import React from 'react';
import Name from '../../components/name/Name';
import './home.scss';

const Home = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="contentComponent">
                    <div className="content">
                        <img src={`../images/christian-${props.mode}.png`} alt="..." width="300px" className={`circle-profile-${props.mode} mt-5`} id="photo-circle" />
                    </div>
                    <div className="content--inner">
                        <Name />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;