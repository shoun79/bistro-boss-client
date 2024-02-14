import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const hendleAddToCart = item => {
        if (user && user.email) {
            const cartItem = { foodItemId: _id, image, name, price, email: user.email };

            fetch('https://bistro-boss-server-nine-sigma.vercel.app/carts', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the cart 
                        Swal.fire({
                            title: "Food added on the cart",

                            icon: "success"
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login to Order the food?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }


        console.log(item);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl relative">
            <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="bg-[#111827] text-white p-2 absolute top-4 right-8">${price}</p>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => hendleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-orange-400 uppercase ">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;