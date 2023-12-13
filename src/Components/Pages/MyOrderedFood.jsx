import Swal from 'sweetalert2'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyOrderBody from "./MyOrderBody";
import { toast } from 'react-toastify';

const MyOrderedFood = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `https://assignment-11-server-eight-woad.vercel.app/addedFoods?email=${user?.email}`;

    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    // const handleDelete = id => {
    //     const proceed = confirm('Are you sure you want to delete?');
    //     if (proceed) {
    //         fetch(`https://assignment-11-server-eight-woad.vercel.app/addedFoods/${id}`, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log((data));
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully')
    //                     const remaining = orders.filter(order => order._id !== id);
    //                     setOrders(remaining);
    //                 }
    //             })
    //     }
    // }


    const handleDelete = async (id) => {
        const proceed = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (proceed.isConfirmed) {
            try {
                const response = await fetch(`https://assignment-11-server-eight-woad.vercel.app/addedFoods/${id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                console.log(data);

                if (data.deletedCount > 0) {
                    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    const remaining = orders.filter((order) => order._id !== id);
                    setOrders(remaining);
                }
            } catch (error) {
                console.error('Error deleting item:', error);
                Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
            }
        }
    };

    return (
        <div className="overflow-x-auto mt-8 md:mt-12 ">
            <div className=" text-center space-y-3 mb-4 md:mb-8">
                <h1 className=" text-2xl md:text-3xl">My Ordered Food Information</h1>
                <h1>Total Orders : {orders.length}</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Food Image</th>
                        <th>Food Name</th>
                        <th>Food Price</th>
                        <th>Added Date</th>
                        <th>Food Owner</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <MyOrderBody
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}

                        ></MyOrderBody>)
                    }
                </tbody>



            </table>
        </div>
    );
};

export default MyOrderedFood;