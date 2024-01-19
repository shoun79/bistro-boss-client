import { Helmet } from "react-helmet-async";

import menuImg from './../../../assets/menu/banner3.jpg'
import dessertImg from './../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from './../../../assets/menu/pizza-bg.jpg'
import soupImg from './../../../assets/menu/soup-bg.jpg'
import saladImg from './../../../assets/menu/salad-bg.jpg'

import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"> </Cover>
            {/* main cover */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            >
            </SectionTitle>
            {/* offer items*/}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserts items*/}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>
            {/* Pizza items*/}
            <MenuCategory items={pizzas} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* salads items*/}
            <MenuCategory items={salads} title={"salad"} img={saladImg}></MenuCategory>
            {/* soups items*/}
            <MenuCategory items={soups} title={"soup"} img={soupImg}></MenuCategory>





        </div>
    );
};

export default Menu;