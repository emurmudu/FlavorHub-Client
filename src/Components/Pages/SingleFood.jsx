import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const allFoods = useLoaderData();
    const { _id, food_name, image_url, category, quantity, price, food_origin, short_description } = allFoods;

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="rounded overflow-hidden border border-yellow-600 shadow-lg max-w-screen-md w-full">
                <div className="md:flex">
                    <div className="md:w-2/3">
                        <img className="w-full h-full object-cover" src={image_url} alt={food_name} />
                    </div>
                    <div className="md:w-1/2 px-6 py-4 md:space-y-4">
                        <div className="font-bold lg:text-5xl md:text-3xl text-xl mb-2">{food_name}</div>
                        <p className="text-sm mb-2 lg:text-xl">
                            Category: {category} | Quantity: {quantity}
                        </p>
                        <p className="text-sm mb-2 lg:text-xl">Price: ${price}</p>
                        <p className="text-sm lg:text-xl">Origin: {food_origin}</p>
                        <p className="text-base mb-2 lg:text-xl">{short_description}</p>
                        <div className="lg:text-xl">

                            <Link to={`/foodPurchase/${_id}`}>
                                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;