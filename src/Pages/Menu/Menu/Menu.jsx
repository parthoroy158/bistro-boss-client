import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import MenuShare from '../../Shared/MenuShare.jsx/MenuShare';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [ menu ] = MenuShare()
    const pizza = menu.filter(item => item.category === "pizza")
    const popular = menu.filter(item => item.category === "popular")
    const dessert = menu.filter(item => item.category === "dessert")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            {/* our menu */}
            <Cover img={img} title="Our Menu" details='Would you like to try our dish'></Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory items={popular}></MenuCategory>

            {/* Dessert */}
            <Cover img={img2} title="Dessert" details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory items={dessert}></MenuCategory>
            {/* Pizza */}
            <Cover img={img3} title="Pizza" details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></Cover>
            <MenuCategory items={pizza}></MenuCategory>

        </div>
    );
};

export default Menu;