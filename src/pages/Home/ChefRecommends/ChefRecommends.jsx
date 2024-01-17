import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImg1 from './../../../assets/home/slide1.jpg'
const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="w-full h-72" src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-warning border-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="w-full h-72" src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-warning border-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="w-full h-72" src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-warning border-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;