import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'
import img5 from '../../../assets/menu/salad-bg.jpg'
import MenuShare from '../../Shared/MenuShare.jsx/MenuShare';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = MenuShare()
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const popular = menu.filter(item => item.category === "popular")
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
            <MenuCategory items={popular} title="Our Menu"></MenuCategory>
            {/* salad*/}
            <Cover img={img5} title="Salad" details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></Cover>
            <MenuCategory items={salad} title="Salad" ></MenuCategory>
            {/* pizza */}
            <Cover img={img3} title="Pizza" details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></Cover>
            <MenuCategory items={pizza} title="Pizza" ></MenuCategory>
            {/* soup */}
            <Cover img={img4} title="soup" details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></Cover>
            <MenuCategory items={soup} title="Soup" ></MenuCategory>
            {/* Dessert */}
            <Cover img={img2} title="Dessert" details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory items={dessert} title="Dessert" ></MenuCategory>
            {/* drinks*/}
            <Cover img={img4} title="drinks" details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></Cover>
            <MenuCategory items={drinks} title="Drinks" ></MenuCategory>


        </div>
    );
};

export default Menu;