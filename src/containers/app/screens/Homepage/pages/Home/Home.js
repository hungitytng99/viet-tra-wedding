import React, { useEffect, useState } from 'react';
import FullPageLoading from '~/components/Loading/FullPageLoading';
import Albums from '../../components/Albums';
import Banner from '../../components/Banner';
import BrideGroom from '../../components/BrideGroom';
import Events from '../../components/Events';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Thankyou from '../../components/Thankyou';
import Wishes from '../../components/Wishes';
import './Home.sass';

function Home(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <FullPageLoading />
            ) : (
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.8058516078361!2d105.83862093002108!3d20.9969007552467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1672109706841!5m2!1svi!2s"
                        width="600"
                        height="450"
                        style={{
                            border: 0,
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <Intro></Intro>
                    <Header></Header>
                    <Banner name="banner"></Banner>
                    <Wishes></Wishes>
                    <BrideGroom name="brightgroom"></BrideGroom>
                    <div className="space"></div>
                    <Events name="events"></Events>
                    <div className="bg-color"></div>
                    <Albums name="album" />
                    <Thankyou />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Home;
