import { createBrowserRouter } from "react-router-dom";
import DestinationLayout from "../Layouts/DestinationLayout";

export const destinationRouter = createBrowserRouter([{
    path: "/",
    element: <DestinationLayout />
}])