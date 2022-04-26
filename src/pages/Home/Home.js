import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destination/Destinations';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destinations></Destinations>
            <Footer></Footer>

        </div>
    );
};

export default Home;