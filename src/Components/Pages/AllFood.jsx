import { useEffect, useState } from "react";
import AllFoodCard from "./AllFoodCard";
import { Helmet } from "react-helmet";

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`https://assignment-11-server-steel.vercel.app/allFoods?page=${currentPage}&search=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                setTotalPages(data.totalPages);
                setFoods(data.data);
            });
    }, [currentPage, searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset current page when starting a new search
    };

    return (
        <div>
            <Helmet>
                <title>FlavorHub | All Foods</title>
            </Helmet>
            <div className="mb-4 mt-8 pr-8 text-right">
                <input
                    type="text"
                    placeholder="Search by food name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2 border rounded"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {foods.map(food => (
                    <AllFoodCard key={food._id} food={food}></AllFoodCard>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <kbd
                    className={`kbd px-4 py-2 mr-2 btn btn-outline rounded ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ◀︎
                </kbd>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 mr-2 btn btn-outline btn-warning text-white rounded ${currentPage === index + 1 ? 'bg-green-500' : ''
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <kbd
                    className={`kbd px-4 py-2 ml-2 btn btn-outline rounded ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ▶︎
                </kbd>
            </div>
        </div>
    );
};

export default AllFood;
