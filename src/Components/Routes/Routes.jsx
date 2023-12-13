import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../HomePage/Home";
import Register from "../Users/Register";
import Login from "../Users/Login";
import AddFoodItem from "../Pages/AddFoodItem";
import Blog from "../Pages/Blog";
import AllFood from "../Pages/AllFood";
import MyAddedFood from "../Pages/MyAddedFood";
import MyOrderedFood from "../Pages/MyOrderedFood";
import Navbar from "../Shared/Navbar";
import SingleFood from "../Pages/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase";
import Users from "../Users/Users";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/UpdateFood";
import TopFoods from "../Pages/TopFoods";
import TopFoodCard from "../Pages/TopFoodCard";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/topFoods',
                element: <TopFoods></TopFoods>,
                loader: () => fetch('http://localhost:5000/topFoods')
            },
            {
                path: '/topFoodCard',
                element: <TopFoodCard></TopFoodCard>
            },
            {
                path: '/allFoods',
                element: <AllFood></AllFood>
            },
            {
                path: '/singleFood/:id',
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/allFoods/${params.id}`)
            },
            {
                path: 'foodPurchase/:id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allFoods/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myAddedFoods',
                element: <MyAddedFood></MyAddedFood>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/updateFood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/uploadedFoods/${params.id}`)
            },
            {
                path: '/addFoodItem',
                element: <AddFoodItem></AddFoodItem>
            },
            {
                path: '/myOrders',
                element: <PrivateRoute><MyOrderedFood></MyOrderedFood></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/user')
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
]);

export default router;