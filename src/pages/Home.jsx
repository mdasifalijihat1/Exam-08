import React from 'react';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> gadget | Home</title>
            </Helmet>
            <Banner></Banner>            
           <Products></Products>
        </div>
    );
};

export default Home;