import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Order/Order/Order/OrderFood";
import LogIn from "../Pages/Log in/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AllUsers from "../layout/Dashboard/All Users/AllUsers";
import AddItem from "../Pages/Add Item/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/ManageItem/ManageItem";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/ourMenu',
                element: <Menu></Menu>
            },
            {
                path: '/ourShope/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard/home',
                element: <UserHome></UserHome>
            },
            // admin routs
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: '/dashboard/manageItem',
                element:<ManageItem></ManageItem>
            }
        ]
    }
]);

export default router