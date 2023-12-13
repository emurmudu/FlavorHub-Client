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

    fetch('https://assignment-11-server-eight-woad.vercel.app/myFoods', {
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












////////////////////////////deliveryMan assign backend

// const express = require('express');
// const router = express.Router();
// const { ObjectId } = require('mongodb');

// // Assume you have a middleware for authentication to get the delivery man's ID
// // const authenticateDeliveryMan = require('../middlewares/authenticateDeliveryMan');

// router.get('/my-deliveries', authenticateDeliveryMan, async (req, res) => {
//   const deliveryManId = req.user.id; // Assuming you have the user object in the request

//   try {
//     const bookedParcels = await bookedParcelCollection.find({ deliveryMenId: ObjectId(deliveryManId) }).toArray();
//     res.json(bookedParcels);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;




// ////////////////////////deliveryMan assign frontend

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyDeliveryList = () => {
//   const [bookedParcels, setBookedParcels] = useState([]);

//   useEffect(() => {
//     const fetchBookedParcels = async () => {
//       try {
//         const response = await axios.get('/api/my-deliveries'); // Adjust the URL based on your server setup
//         setBookedParcels(response.data);
//       } catch (error) {
//         console.error('Error fetching booked parcels:', error);
//       }
//     };

//     fetchBookedParcels();
//   }, []);

//   return (
//     <div>
//       <h2>My Delivery List</h2>
//       <table>
//         {/* Render booked parcels data in a table */}
//       </table>
//     </div>
//   );
// };

// export default MyDeliveryList;












////////////////////////////////////

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const MyDelivList = () => {

//   const axiosSecure = useAxiosSecure();
//   const [currentPage, setCurrentPage] = useState(1);
//   const { user } = useContext(AuthContext);
//   const pageSize = 5;


//   const { data: parcels = [] } = useQuery({
//     queryKey: ['bookedParcels', user?.deliveries, currentPage],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/bookedParcels/${user?.deliveries}?page=${currentPage}`);
//       return res.data;
//     }
//   })


//   return (
//     <div>
//       <div className=" flex justify-evenly mb-6">
//         <h1 className="text-3xl">My Delivery Information </h1>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           {/* head */}
//           <thead className=" bg-red-200 shadow-sm">
//             <tr className=" text-neutral-950">
//               <th>Sl</th>
//               <th>Booked User's</th>
//               <th>Receiver</th>
//               <th>User's Phone</th>
//               <th>Requested Delivery Date</th>
//               <th>Aproximate Delivery Date</th>
//               <th>Receiver's Phone</th>
//               <th>Receiver's Address</th>
//               <th>Cancel</th>
//               <th>Deliver</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               parcels.map((parcel, index) => <tr key={parcel._id}>
//                 <th>{(currentPage - 1) * pageSize + index + 1}</th>
//                 <td>{parcel.name}</td>
//                 <td>{parcel.receiver_name}</td>
//                 <td>{parcel.users_phone}</td>{/* Approximate Delivery Date will be generated by clicking assign button on all parcels page manage modal */}
//                 <td>{parcel.requested_delivery_date}</td>
//                 <td>{parcel.approximateDeliveryDate}</td>{/* ID will be generated by clicking assign button on all parcels page manage modal */}
//                 <td>{parcel.receiver_phone}</td>
//                 <th>
//                   {<button onClick={() => handleManage(parcel)} className="btn hover:bg-orange-600 bg-orange-400 btn-sm">
//                     View Location
//                   </button>}
//                 </th>
//                 <th>
//                   {<button onClick={() => handleManage(parcel)} className="btn hover:bg-orange-600 bg-orange-400 btn-sm">
//                     Cancel
//                   </button>}
//                 </th>
//                 <th>
//                   {<button onClick={() => handleManage(parcel)} className="btn hover:bg-orange-600 bg-orange-400 btn-sm">
//                     Deliver
//                   </button>}
//                 </th>
//               </tr>)
//             }
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-center my-4">
//         <button
//           onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
//           disabled={currentPage === 1}
//           className="btn mx-2"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage(prevPage => prevPage + 1)}
//           disabled={parcels.length < pageSize}
//           className="btn mx-2"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyDelivList;









//////////////////////////////////////MyDevList/chat

// ... existing imports

// const MyDelivList = () => {
//   const axiosSecure = useAxiosSecure();
//   const [currentPage, setCurrentPage] = useState(1);
//   const { user } = useContext(AuthContext);
//   const pageSize = 5;

//   const { data: parcels = [] } = useQuery({
//     queryKey: ['deliveries', user?.deliveryMenId, currentPage],
//     queryFn: async () => {
//       try {
//         const res = await axiosSecure.get(`/deliveries/${user?.deliveryMenId}?page=${currentPage}`);
//         return res.data;
//       } catch (error) {
//         console.error('Error fetching parcels:', error);
//         throw new Error('Error fetching parcels');
//       }
//     },
//   });

//   const handleCancel = async (bookingId) => {
//     // Implement cancel logic here (show alert, send backend request)
//     // Example:
//     const confirmed = window.confirm('Are you sure you want to cancel this delivery?');
//     if (confirmed) {
//       try {
//         // Make backend request to update status to 'Cancelled'
//         await axiosSecure.put(`/cancel-delivery/${bookingId}`);
//         // Refetch data or update the state
//         // refetch();
//       } catch (error) {
//         console.error('Error canceling delivery:', error);
//       }
//     }
//   };

//   const handleDeliver = async (bookingId) => {
//     // Implement deliver logic here (show alert, send backend request)
//     // Example:
//     const confirmed = window.confirm('Are you sure you want to mark this delivery as Delivered?');
//     if (confirmed) {
//       try {
//         // Make backend request to update status to 'Delivered'
//         await axiosSecure.put(`/deliver/${bookingId}`);
//         // Refetch data or update the state
//         // refetch();
//       } catch (error) {
//         console.error('Error marking delivery as Delivered:', error);
//       }
//     }
//   };

//   // Modify the modal and map functionality accordingly

//   return (
//     <div>
//       {/* ... existing JSX */}

//       <tbody>
//         {parcels.map(parcel => (
//           <tr key={parcel._id}>
//             {/* ... existing table cells */}
//             <td><button onClick={() => handleCancel(parcel._id)}>Cancel</button></td>
//             <td><button onClick={() => handleDeliver(parcel._id)}>Deliver</button></td>
//             <td><button onClick={() => handleViewLocation(parcel)}>View Location</button></td>
//           </tr>
//         ))}
//       </tbody>
//     </div>
//   );
// };

// export default MyDelivList;







// ////////////////////////////MyDevList back/chat

// app.get('/deliveries/:deliveryMenId', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = 5;

//   try {
//     // Use deliveryMenId from request params
//     const deliveryMenId = req.params.deliveryMenId;

//     // Filter parcels based on deliveryMenId
//     const result = await bookedParcelCollection.find({ deliveryMenId })
//       .skip((page - 1) * pageSize)
//       .limit(pageSize)
//       .toArray();

//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


