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
