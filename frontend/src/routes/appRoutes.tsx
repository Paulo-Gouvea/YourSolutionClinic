import { 
    createBrowserRouter,
} from "react-router-dom";

import { Home, DoctorSelection } from "../pages";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "doctor_selection",
        element: <DoctorSelection />
    },
]);