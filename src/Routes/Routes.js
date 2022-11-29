import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductPage from "../Pages/Product/ProductPage";
import Blog from "../Pages/Shared/Blog/Blog";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products/:id',
                element: <ProductPage></ProductPage>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
        ]
    }
])

export default router;