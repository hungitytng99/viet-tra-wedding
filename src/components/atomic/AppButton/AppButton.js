import React from 'react';
import { confirmJoinSvg } from '~/assets/images/svg';
import HeartIcon from '~/assets/images/header/heart.png';
import './AppButton.sass';

function AppButton({ title = 'Xác nhận tham dự', onClick = () => {}, ...rest }) {
    return (
        <button className="app-button flex-center" onClick={onClick}>
            {confirmJoinSvg}
            <span>{title}</span>
            <img src={HeartIcon} className="app-heart"></img>
        </button>
    );
}

export default AppButton;
