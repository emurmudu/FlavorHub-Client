import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    const [topSellingFoods, setTopSellingFoods] = useState([]);

    useEffect(() => {
        const fetchTopSellingFoods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/top-selling-foods');
                setTopSellingFoods(response.data.topSellingFoods);
            } catch (error) {
                console.error('Error fetching top-selling foods:', error.message);
            }
        };

        fetchTopSellingFoods();
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl md:text-4xl text-yellow-600 font-bold text-center mb-8 md:mb-12">Top Selling Foods</h2>
            {topSellingFoods.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topSellingFoods.map((food, index) => (
                        <li key={index} className="rounded-lg overflow-hidden shadow-md">
                            <div>
                                <img
                                    src={food.image_url}
                                    alt={food.food_name}
                                    className="max-w-full h-auto rounded-md"
                                    style={{ width: '300px', height: '200px' }} // Specify your fixed size here
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{food.food_name}</h3>
                                <p className="">Category: {food.category}</p>
                                <p className="">Price: ${food.price}</p>
                                <Link to="/allFoods">
                                    <button className="bg-yellow-600 text-white px-4 py-2 mt-2 inline-block rounded">Details</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading top-selling foods...</p>
            )}
            <div className='text-center text-2xl md:text-3xl p-6'>
                <Link to='/allFoods'>
                    <button className='btn btn-block hover:bg-yellow-700'>All Foods</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;
