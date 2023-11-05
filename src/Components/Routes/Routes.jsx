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
                path: '/allFoods',
                element: <AllFood></AllFood>
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
                path: '/addFoodItem',
                element: <AddFoodItem></AddFoodItem>
            },
            {
                path: '/myOrders',
                element: <MyOrderedFood></MyOrderedFood>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },



            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
]);

export default router;