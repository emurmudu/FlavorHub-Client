import { useEffect, useState } from "react";
import AllFoodCard from "./AllFoodCard";

const AllFood = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    return (
        <div>
            <h1>All Foods : {foods.length}</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    foods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;