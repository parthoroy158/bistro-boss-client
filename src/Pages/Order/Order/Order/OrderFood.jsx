import React, { useState } from 'react';
import cover from '../../../../assets/home/featured.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuShare from '../../../Shared/MenuShare.jsx/MenuShare';
import ChefRecommends from '../../../Home/Chef Recommends/ChefRecommends';
import CardShare from '../../../Shared/CardShare/CardShare';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const OrderFood = () => {
    const categories = ['Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = MenuShare()



    console.log(category)
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")

    return (
        <div >
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover img={cover} title='ordered food' details='would you like to try our dishes'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-5 mb-5'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel >
                    <CardShare item={salad}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={pizza}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={soup}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={dessert}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={drinks}></CardShare>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;