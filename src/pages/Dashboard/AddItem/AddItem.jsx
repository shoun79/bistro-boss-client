import { useForm } from "react-hook-form";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const newItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: imgURL
                    }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Menu Added",
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                            }
                        })

                }
            })
    };
    return (
        <div className="w-[95%] mx-auto">
            <PageTitle pageName={'Add Item'}></PageTitle>
            <SectionTitle
                subHeading={"What's new?"}
                heading={"ADD AN ITEM"}
            ></SectionTitle>
            <div className="bg-[#F3F3F3] p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe name<span className="text-red-600">*</span></span>
                        </div>
                        <input className="input input-bordered w-full rounded" type="text" placeholder="Recipe name" {...register("name", { required: true, maxLength: 80 })} />
                    </div>

                    <div className=" lg:flex justify-between">
                        <div className="w-full lg:w-[48%]">
                            <div className="label">
                                <span className="label-text">Category<span className="text-red-600">*</span></span>
                            </div>
                            <select defaultValue="Category" className="select select-bordered w-full  rounded" {...register("category", { required: true })}>
                                <option disabled>Category</option>
                                <option value="pizza">pizza</option>
                                <option value="salad">salad</option>
                                <option value="dessert">dessert</option>
                                <option value="soup">soup</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-[48%]">
                            <div className="label">
                                <span className="label-text">Price<span className="text-red-600">*</span></span>
                            </div>
                            <input className="input input-bordered w-full  rounded" type="tel" placeholder="price" {...register("price", { required: true, maxLength: 80 })} />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details<span className="text-red-600">*</span></span>
                        </div>
                        <textarea className="textarea textarea-bordered textarea-lg w-full rounded" type="text" placeholder="Recipe Details" {...register("recipe", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="mt-3">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" required />
                    </div>
                    {/* <input className="btn btn-warning bg-[#835D23] text-white rounded mt-4" type="submit" /> */}
                    <button type="submit" className="btn btn-warning bg-[#835D23] text-white rounded mt-4">Add Item <ImSpoonKnife /></button>

                </form>
            </div>
        </div>
    );
};

export default AddItem;