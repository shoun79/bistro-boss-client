import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
import FeaturedImg from './../../../assets/home/featured.jpg'
const Featured = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return (
        <section className='featured-bg bg-fixed text-white pt-8 my-16' >
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 lg:px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10 mt-4">
                    <p>{`${date}/${month}/${year}`}</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-2">Read More</button>

                </div>
            </div>
        </section >
    );
};

export default Featured;