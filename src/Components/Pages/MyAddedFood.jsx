import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import MyFoodBody from "./MyFoodBody";


const MyAddedFood = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `https://assignment-11-server-steel.vercel.app/uploadedFoods?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    // const handleUpdate = async (id) => {
    //     const proceed = await Swal.fire({
    //         title: 'Are you sure?',
    //         text: 'You won\'t be able to revert this!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     });

    //     if (proceed.isConfirmed) {
    //         try {
    //             const response = await fetch(`https://assignment-11-server-steel.vercel.app/addedFoods/${id}`, {
    //                 method: 'DELETE'
    //             });

    //             const data = await response.json();
    //             console.log(data);

    //             if (data.deletedCount > 0) {
    //                 Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    //                 const remaining = orders.filter((order) => order._id !== id);
    //                 setOrders(remaining);
    //             }
    //         } catch (error) {
    //             console.error('Error deleting item:', error);
    //             Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
    //         }
    //     }
    // };

    return (
        <div className="overflow-x-auto mt-8 md:mt-12 ">
            <div className=" text-center space-y-3 mb-4 md:mb-8">
                <h1 className=" text-2xl md:text-3xl">My Added Food Information</h1>
                <h1>Total Foods : {orders.length}</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Food Image</th>
                        <th>Food Name</th>
                        <th>Food Price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <MyFoodBody
                            key={order._id}
                            order={order}
                        // handleUpdate={handleUpdate}

                        ></MyFoodBody>)
                    }
                </tbody>



            </table>
        </div>
    );
};


export default MyAddedFood;