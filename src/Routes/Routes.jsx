import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../layouts/Dashboard";
import Shop from "../Pages/Shop/Shop";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "admin",
                element: <h2>home</h2>
            }
        ]
    }
])