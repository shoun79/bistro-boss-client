
const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl relative">
            <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="bg-[#111827] text-white p-2 absolute top-4 right-8">${price}</p>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-orange-400 uppercase ">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;