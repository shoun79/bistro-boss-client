import chefService from './../../../assets/home/chef-service.jpg'
const BistroBoss = () => {
    return (
        <div className="hero min-h-[500px] bg-fixed" style={{ backgroundImage: `url(${chefService})` }}>

            <div className="hero-content text-center text-neutral-content bg-white py-10 md:mx-20">
                <div className=" text-black">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;