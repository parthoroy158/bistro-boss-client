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
]);

export default router