import React from 'react';
import { Link } from 'react-router-dom';

const AllFoodCard = ({ food }) => {
    const { _id, food_name, image_url, category, quantity, price, food_origin, short_description } = food;
    return (
        <div className="max-w-sm rounded overflow-hidden border border-yellow-600 shadow-lg">
            <img className="w-full h-48 object-cover" src={image_url} alt={food_name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{food_name}</div>
                {/* <p className=" text-base mb-2">{short_description}</p> */}
                <p className=" text-sm mb-2">
                    Category: {category} | Quantity: {quantity}
                </p>
                <p className=" text-sm mb-2">Price: ${price}</p>
                <p className=" text-sm">Origin: {food_origin}</p>
            </div>
            <div className="px-6 py-4">
                <Link to={`/singleFood/${_id}`}>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllFoodCard;