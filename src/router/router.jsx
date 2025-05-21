import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Order/Order/Order/OrderFood";
import LogIn from "../Pages/Log in/LogIn";

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
                path:'/logIn',
                element:<LogIn></LogIn>
            }
        ]
    },
]);

export default router