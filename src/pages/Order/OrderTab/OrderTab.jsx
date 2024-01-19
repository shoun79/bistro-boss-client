import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6 my-10'>
                {
                    currentItems.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
            {/* Render page numbers for navigation */}
            <ul className="flex justify-center">
                {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
                    <li key={index}>

                        <button className="join-item btn btn-square me-2 mb-4" onClick={() => paginate(index + 1)}>{index + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderTab;