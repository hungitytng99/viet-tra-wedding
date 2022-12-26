import React from 'react';
import FooterCouple from '~/assets/images/bg/footer-couple.png';
import './Thankyou.sass';

function Thankyou(props) {
    return (
        <div className="thankyou flex-center">
            <img src={FooterCouple} alt="" className="thankyou__frame" />
            <span>Thank you!</span>
        </div>
    );
}

export default Thankyou;
