import React from 'react';
import { useHistory } from "react-router-dom";
import './intro.scss';

var Router = require('react-router');

const Intro = (props) => {

    let history = useHistory();

    setTimeout(function(){ 
        history.push('/home')  
    }, 3000);

    return (
        <div className="divIntro">
            <div className="logoIntro">
                <img className="logoimg" src="https://christian-renovell-porfolio.netlify.app/logo.png" alt="logo" />
                <img className="logoimg2" src="https://christian-renovell-porfolio.netlify.app/logo.png" alt="logo" />          
            </div>
            
        </div>
    );
};

export default Intro;