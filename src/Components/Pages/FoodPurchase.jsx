import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const FoodPurchase = () => {

    const allFoods = useLoaderData();
    // const { title, _id, price, img } = allFoods;
    const { food_name, _id, price, quantity, image_url, category, food_origin, short_description } = allFoods;
    const { user } = useContext(AuthContext);

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const name = form.elements['name'].value;
        // const name = user?.name;
        const email = user?.email;
        // const date = form.date.value;
        const date = form.elements['date'].value;

        const order = {
            displayName: name,
            email,
            date,
            food_name,
            image_url,
            food_id: _id,
            price,
            quantity,
            category,
            food_origin,
            short_description
        }

        console.log(order)

        fetch('http://localhost:5000/addedFoods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Food added successfully')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleOrder} className="card-body">
                <h1 className=" text-center text-3xl font-bold">Food Name : {food_name}</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={'$' + quantity} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className=" btn bg-yellow-600 hover:bg-yellow-700 btn-block" type="submit" value='Purchase Now' />
                </div>
            </form>
        </div>
    );
};

export default FoodPurchase;