import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle.jsx/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import ChefRecommends from "../Home/Chef Recommends/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";


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
            <div className="text-center mt-10">
                <button className='text-center btn btn-ghost border-b-3 border-b-black mr-20 w-[236px] h-[36px]text-[20px] uppercase'>View Full  Menu</button>
            </div>
            <div className="h-[250px] text-white bg-black mt-15">
                <h2 className="text-center p-20 text-[50px]">Call Us: +88 0192345678910</h2>
            </div>
            <div className="mt-10">
                <SectionTitle
                    subHeading={'---Should Try---'}
                    heading={'CHEF RECOMMENDS'}
                >
                </SectionTitle>
            </div>
            <div className="grid md:grid-cols-4 gap-10 p-20">
                {
                    menu.map(item => <ChefRecommends item={item}></ChefRecommends>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;