import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const AddFoodItem = () => {
    // const service = useLoaderData();
    // const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleAddFoods = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const image_url = form.image_url.value;
        const food_origin = form.food_origin.value;
        const short_description = form.short_description.value;
        const email = user?.email;

        const addedItems = {
            displayName: name,
            food_name,
            category,
            email,
            quantity,
            price,
            image_url,
            food_origin,
            short_description

        }

        console.log(addedItems)

        fetch('https://assignment-11-server-steel.vercel.app/myFoods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedItems)
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
            <form onSubmit={handleAddFoods} className="card-body">
                <h1 className=" text-center text-3xl font-bold">Add Your Food Item </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="name" name="food_name" placeholder="Food Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <select
                            name="category"
                            className="select select-bordered"
                            required
                        >
                            {/* <option value="" disabled selected>
                                Select Food Category
                            </option> */}
                            <option value="Pasta Dishes">Pasta Dishes</option>
                            <option value="Bakery Items">Bakery Items</option>
                            <option value="Sushi and Sashimi">Sushi and Sashimi</option>
                            <option value="Street Food">Street Food</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Curries">Curries</option>
                            <option value="Sandwiches">Sandwiches</option>
                            <option value="Dumplings">Dumplings</option>
                            <option value="Salads">Salads</option>
                            <option value="Rice Dishes">Rice Dishes</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="image_url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Origin</span>
                        </label>
                        <input type="text" name="food_origin" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea className="input input-bordered h-24" name="short_description" id="" cols="20" rows="4" placeholder="write short description here...."></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Added By</span>
                    </label>
                    <div className=" flex flex-col gap-2 md:gap-5 md:flex-row ">
                        <input type="text" name="name" defaultValue={user?.displayName} className="md:w-1/2 input input-bordered" required />
                        <input type="text" name="email" defaultValue={user?.email} className="md:w-1/2 input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className=" btn bg-yellow-600 hover:bg-yellow-700 btn-block" type="submit" value='Add Food' />
                </div>
            </form>
        </div>
    );
};

export default AddFoodItem;