import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../layouts/Dashboard";
import Shop from "../Pages/Shop/Shop";
import CartPage from "../Pages/CartPage/CartPage";
import SingleDetailedCard from "../Pages/Shop/SingleDetailedCard";
import CheckOut from "../Pages/CheckOut/CheckOut";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUS/ContactUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/product",
                element: <SingleDetailedCard />
            },
            {
                path: "/checkout",
                element: <CheckOut />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "admin",
                element: <h2>home</h2>
            }
        ]
    }
])