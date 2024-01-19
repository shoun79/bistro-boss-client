import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="py-8">
            {title && <Cover img={img} title={title}> </Cover>}

            <div className="grid md:grid-cols-2 gap-6 px-2 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <Link to={`/order/${title ? title : 'salad'}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-2">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;