import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Crew from "../Pages/Crew/Crew";
import Destination from "../Pages/Destination/Destination";
import Home from "../Pages/Home/Home";
import Technology from "../Pages/Technology/Technology";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/destination",
            element: <Destination />
        },
        {
            path: "/crew",
            element: <Crew />
        },
        {
            path: "/technology",
            element: <Technology />
        }
    ]
}])