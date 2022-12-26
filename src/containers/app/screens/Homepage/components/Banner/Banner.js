import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import TQA06851 from '~/assets/images/wedding/TQA06851.jpg';
import TQA06853 from '~/assets/images/wedding/TQA06853.jpg';
import TQA06863 from '~/assets/images/wedding/TQA06863.jpg';
import HeartIcon from '~/assets/images/header/heart.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.sass';
import useIsInViewport from '~/hooks/useIsInViewPort';

function Banner({ name }) {
    const bannerRef = useRef(null);
    const isInViewPort = useIsInViewport(bannerRef, true);
    return (
        <div name={name} className="banner flex-center">
            <div ref={bannerRef}></div>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className="banner__image flex-center">
                    <img src={TQA06851} />
                </div>
                <div className="banner__image flex-center">
                    <img src={TQA06853} />
                </div>
                <div className="banner__image flex-center">
                    <img src={TQA06863} />
                </div>
            </Carousel>
            <div className={`banner__intro flex-center ${isInViewPort && 'active'}`}>
                <div className="banner__box flex-center">
                    <div
                        className="banner__name boy"
                        style={{
                            '--delay': '0s',
                        }}
                    >
                        Hoàng Việt
                    </div>
                    <img src={HeartIcon} className="banner__heart"></img>
                    <div
                        className="banner__name girl"
                        style={{
                            '--delay': '1s',
                        }}
                    >
                        Linh Trà
                    </div>
                </div>
                <div
                    className="banner__date"
                    style={{
                        '--delay': '2s',
                    }}
                >
                    18/02/2023
                </div>
            </div>
        </div>
    );
}

export default Banner;
