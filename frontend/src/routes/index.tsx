import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./appRoutes";

export function Routes(){
    return (
        <RouterProvider router={appRoutes} />
    );
}