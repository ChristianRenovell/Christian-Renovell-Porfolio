import React from 'react';
import Name from '../../components/name/Name';

const Home = (props) => {

    return (
        <div id="fullpage">
            <div className="section">
                <div className="content">
                <img src={`../images/christian-${props.mode}.png`} alt="..." width="300px" className={`circle-profile-${props.mode}`} id="photo-circle" />
                </div>
                <div className="content--inner">
                    <Name />
                </div>
            </div>
        </div>
    );
};

export default Home;