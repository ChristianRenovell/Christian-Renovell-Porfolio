import React, { Component } from 'react';
import './intro.scss';

class Intro extends Component {

    componentDidMount(){
        const { history } = this.props;
        setTimeout(function(){ 
            history.push('/home')
        }, 3000);
    }
        render() {
            return (
                <div className="divIntro">
                   <div className="logoIntro">
                        <img className="logoimg" src={`${process.env.REACT_APP_URL}/assets/logo.png`}alt="logo" />
                        <img className="logoimg2" src={`${process.env.REACT_APP_URL}/assets/logo.png`} alt="logo" />          
                    </div>
                </div>
            );
        }
    }

export default Intro;