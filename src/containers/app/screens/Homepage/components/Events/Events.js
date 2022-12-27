import { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TQA06583 from '~/assets/images/wedding/TQA06583.jpg';
import TQA06736 from '~/assets/images/wedding/TQA06736.jpg';
import TQA06881 from '~/assets/images/wedding/TQA06881.jpg';
import AppButton from '~/components/atomic/AppButton';
import useIsInViewport from '~/hooks/useIsInViewPort';
import './Events.sass';
const render = (status) => {
    return <h1>{status}</h1>;
};
function Events({ name }) {
    const groomMap = useRef(null);
    const bridgeMap = useRef(null);
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
                        Xóm 10, thôn Phương Khê, xã Phú Phương, huyện Ba Vì, TP Hà Nội
                    </div>
                    <a
                        ref={bridgeMap}
                        style={{ display: 'none' }}
                        href="https://maps.app.goo.gl/fALFcM9eobMNHVTZ8"
                        target={'_blank'}
                    ></a>
                    <div
                        className="flex-center"
                        style={{
                            marginTop: '35px',
                        }}
                    >
                        <AppButton
                            title="Xem trên bản đồ"
                            onClick={() => {
                                bridgeMap.current.click();
                            }}
                        ></AppButton>
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
                        Thôn Đông Đoài, xã Phú Đông, huyện Ba Vì, TP Hà Nội (cạnh Ủy Ban xã Phú Đông)
                    </div>
                    <a
                        ref={groomMap}
                        style={{ display: 'none' }}
                        href="https://maps.app.goo.gl/Swt1sH19qkaSPNMg8"
                        target={'_blank'}
                    ></a>
                    <div
                        className="flex-center"
                        style={{
                            marginTop: '10px',
                        }}
                    >
                        <AppButton
                            title="Xem trên bản đồ"
                            onClick={() => {
                                groomMap.current.click();
                            }}
                        ></AppButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
