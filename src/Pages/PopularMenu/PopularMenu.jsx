import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                console.log(popularItems)
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mt-15 mb-10">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-3 mt-5">
                {
                    menu.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;