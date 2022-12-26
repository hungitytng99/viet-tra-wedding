import React from 'react';
import './Header.sass';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Header(props) {
    return (
        <div className="header flex-center">
            <Link
                activeClass="active"
                className="header__item"
                to="banner"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
            >
                Giới thiệu
            </Link>
            <Link activeClass="active" className="header__item" to="wishes" spy={true} smooth={true} duration={500} offset={-70}>
                Lời chúc
            </Link>
            <Link activeClass="active" className="header__item" to="brightgroom" spy={true} smooth={true} duration={500} offset={-70}>
                Cặp đôi
            </Link>
            <Link activeClass="active" className="header__item" to="events" spy={true} smooth={true} duration={500} offset={-70}>
                Sự kiện
            </Link>
            <Link activeClass="active" className="header__item" to="album" spy={true} smooth={true} duration={500} offset={-70}>
                Album cưới
            </Link>
        </div>
    );
}

export default Header;
