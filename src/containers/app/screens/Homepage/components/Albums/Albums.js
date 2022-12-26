import SecTitleFlower from '~/assets/images/bg/sec-title-flower.png';
import Gallery from 'react-photo-gallery';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Albums.sass';
import { shuffleArray } from '~/helpers/array';
import { galleryPhoto } from './Gallery';
import { useCallback, useEffect, useState } from 'react';
import AppButton from '~/components/atomic/AppButton';
import Carousel, { Modal, ModalGateway } from 'react-images';

function Albums({ name }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const [gallery, setGallery] = useState(shuffleArray(galleryPhoto).splice(0, 12));
    function refreshGallery() {
        const newGallery = [...galleryPhoto];
        setGallery(shuffleArray(newGallery).splice(0, 12));
    }
    return (
        <div name={name} className="albums flex-center">
            <img src={SecTitleFlower}></img>
            <div className="albums__title">Album Hình Cưới</div>
            <div className="albums__desc">
                Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
            </div>
            <div className="albums__refresh">
                <AppButton title="Xem thêm ảnh của chúng mình" onClick={refreshGallery}></AppButton>
            </div>
            <div className="gallery">
                <Gallery photos={gallery} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={gallery.map((x) => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    );
}

export default Albums;
