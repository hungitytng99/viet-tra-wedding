import { useRef } from 'react';
import useIsInViewport from '~/hooks/useIsInViewPort';
import SecTitleFlower from '~/assets/images/bg/sec-title-flower.png';
import TQA06850 from '~/assets/images/wedding/TQA06550.jpg';
import TQA06963 from '~/assets/images/wedding/TQA06963.jpg';
import './BrideGroom.sass';

function BrideGroom({ name }) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name={name} className={`bridegroom flex-center ${isInViewPort && 'active'}`}>
            <img src={SecTitleFlower}></img>
            <div className="bridegroom__title">Cô dâu & Chú rể</div>
            <div className="bridegroom__desc">
                Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn.
            </div>
            <div ref={viewRef}></div>
            <div className="bridegroom__box">
                <div
                    className="bridegroom__item"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <img src={TQA06850} className="bridegroom__item-img"></img>
                </div>
                <div
                    className="bridegroom__item text"
                    style={{
                        '--delay': '0.8s',
                    }}
                >
                    <div className="bridegroom__bridge">Cô dâu</div>
                    <div className="bridegroom__bridge-name">Nguyễn Thị Linh Trà</div>
                    <div className="bridegroom__bridge-born">17/11/1999</div>
                </div>
                <div
                    className="bridegroom__item text"
                    style={{
                        '--delay': '1.6s',
                    }}
                >
                    <div className="bridegroom__bridge">Chú rể</div>
                    <div className="bridegroom__bridge-name">Chu Hoàng Việt</div>
                    <div className="bridegroom__bridge-born">05/11/1999</div>
                </div>
                <div
                    className="bridegroom__item"
                    style={{
                        '--delay': '2.4s',
                    }}
                >
                    <img src={TQA06963} className="bridegroom__item-img"></img>
                </div>
            </div>
        </div>
    );
}

export default BrideGroom;
