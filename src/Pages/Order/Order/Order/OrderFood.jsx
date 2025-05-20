import React, { useState } from 'react';
import cover from '../../../../assets/home/featured.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuShare from '../../../Shared/MenuShare.jsx/MenuShare';
import ChefRecommends from '../../../Home/Chef Recommends/ChefRecommends';
import CardShare from '../../../Shared/CardShare/CardShare';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = MenuShare()
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")

    return (
        <div >
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
                    <CardShare item={pizza}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={drinks}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={dessert}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={salad}></CardShare>
                </TabPanel>
                <TabPanel>
                    <CardShare item={pizza}></CardShare>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;