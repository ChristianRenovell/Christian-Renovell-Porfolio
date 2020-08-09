import React from 'react';
import './card.scss';

const Card = (props) => {

    return (
        <div className="conatainer cont">
            <div className="row">
                <div id="box-6" class="box">
                    <img id="image-6" src="../images/christian-darck.png" width="250px"/>
                    <span class="caption scale-caption">
                        <h3>Scale Caption</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
			                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;