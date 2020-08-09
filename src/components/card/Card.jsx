import React from 'react';
import './card.scss';
import Background from '../../assets/static/christian-darck.png';

var sectionStyle = {
    
    backgroundImage: `url(${Background})`
  };

const Card = (props) => {

    return (
        <div className="conatainer cont">
            <div class="containerCard" style={ sectionStyle }>
                <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                        <p>Flower Embroidery Hoop Art</p>
                    </div>
                    <div class="items price">
                        <p class="old">$699</p>
                        <p class="new">$345</p>
                    </div>
                    <div class="items cart">
                        <i class="fa fa-shopping-cart"></i>
                        <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;