import React from 'react';
import './card.scss';

const Card = (props) => {

    return (
        <div className={`col-md-4`}>
            <a href={props.linkView} target="_blank">
                <div className="containerCard" style={{ backgroundImage: `url(${props.imgUrl})`, boxShadow: "0 0 5px" + props.colorBorder + "" }}>
                    <div className={`overlay cursor-${props.mode}`} style={{ backgroundColor: props.color }}>
                        <div className="items"></div>
                        <div className="items head">
                            <p>{props.title}</p>
                        </div>
                        <div className="items description">
                            <p classNa me="new">{props.description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Card;