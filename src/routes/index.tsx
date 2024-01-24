import { createBrowserRouter } from "react-router-dom";
// import Unauthorized from "../layouts/Unauthorized";
import Default from "../layouts/Default";
// import App from "../App";
import Home from "../pages/Home";
import Unauthorized from "../layouts/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import Logout from "../pages/Logout";
import RegistrationForm from "../pages/RegisterForm";
import Profile from "../pages/Profile";
import Warranty from "../pages/Warranty";
import Basket from "../pages/Basket";



// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
 {
    element: (
        <ProtectedRoute>
        <Default/>
        </ProtectedRoute>
    ),
    children: [

        {
            path: "/test",
            element: (
                <h1>test</h1>
            )
        },
        {
            path: "/logout",
            element: <Logout></Logout>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/warranty",
            element: <Warranty></Warranty>
        },
        {
            path: "/basket",
            element: <Basket/>
        }
    ]
 },
 {
    element: (
        <Default/>
    ), 
    children: [
        {
            path: "/",
            element: <Home/>
        },
    ]
 }, 
{
    element: (
        <Unauthorized></Unauthorized>
    ),
    children: [
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "/register",
            element: <RegistrationForm/>
        },

    ]
}
]);