import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"Popular Items"}
                subHeading={"FROM OUR MENU"}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 px-2">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline border-0 border-b-4 mt-2">
                    <Link to='/menu'>View Full Menu</Link>
                </button>
            </div>
        </section >
    );
};

export default PopularMenu;