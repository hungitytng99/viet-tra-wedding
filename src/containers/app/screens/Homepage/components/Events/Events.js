import { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useIsInViewport from '~/hooks/useIsInViewPort';
import TQA06881 from '~/assets/images/wedding/TQA06881.jpg';
import TQA06736 from '~/assets/images/wedding/TQA06736.jpg';
import TQA06583 from '~/assets/images/wedding/TQA06583.jpg';
import './Events.sass';

function Events({ name }) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name={name} className={`events ${isInViewPort && 'active'}`}>
            <div className="events__cover">
                <img className="events__cover-img" src={TQA06881} />
            </div>
            <div className="events__content">
                <div className="events__content-title">Sự Kiện Cưới</div>
                <div className="events__content-desc">
                    ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...
                </div>
            </div>

            <div className="events__content-box flex-center">
                <div
                    className="events__content-item left"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <div className="events__content-item-title">Lễ cưới nhà nữ</div>
                    <div className="events__content-item-box">
                        <img className="events__content-item-img" src={TQA06736} alt="" />
                    </div>
                    <div className="events__content-item-date">09:30 AM 18/02/2023</div>
                    <div className="events__content-item-addr">
                        Xóm 10, thông Phương Khê, xã Phú Phương, huyện Ba Vì, TP Hà Nội
                    </div>
                </div>
                <div ref={viewRef}></div>
                <div
                    className="events__content-item"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <div className="events__content-item-title">Lễ cưới nhà nam</div>
                    <div className="events__content-item-box">
                        <img className="events__content-item-img" src={TQA06583} alt="" />
                    </div>
                    <div className="events__content-item-date">11:00 AM 18/02/2023</div>
                    <div className="events__content-item-addr">
                        Thôn Đông Đoài, xã phú đông, huyện Ba Vì, TP Hà Nội (cạnh Ủy Ban xã Phú Đông)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
