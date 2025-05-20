import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu';
import MenuShare from '../../Shared/MenuShare.jsx/MenuShare';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';
const Menu = () => {
    const { menu } = MenuShare()
    console.log(menu)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 p-20">
                {
                    menu.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>
            <Cover img={img} title="Our Menu"></Cover>
            <div className="grid md:grid-cols-2 gap-10 p-20">
                {
                    menu.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>
            <Cover img={img} title="Our Menu"></Cover>
            <div className="grid md:grid-cols-2 gap-10 p-20">
                {
                    menu.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>


        </div>
    );
};

export default Menu;