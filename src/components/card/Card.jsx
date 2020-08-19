import React from 'react';
import './card.scss';

const Card = (props) => {

    var sectionStyle = {

        backgroundImage: `url(${props.background})`
    };

    return (
        <div className="conatainercont">
            <div class="containerCard" style={sectionStyle}>
                <div class="overlay section">
                    <div class="items head about-p">
                        <p>{props.title} </p>
                    </div>
                        <p class="description">{props.description}</p>
                    <div class="items cart">
                        <img className="mr-2" src=""/>
                        <a href={props.link}>Visita la web</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;