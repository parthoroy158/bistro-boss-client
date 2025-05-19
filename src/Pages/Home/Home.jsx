import React from 'react';
import Banner from './Banner/Banner';
import Category from './Caregory/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import FromOurMenu from '../FromOurMenu/FromOurMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FromOurMenu></FromOurMenu>
        </div>
    );
};

export default Home;