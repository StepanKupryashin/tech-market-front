import { createBrowserRouter } from "react-router-dom";
// import Unauthorized from "../layouts/Unauthorized";
import Default from "../layouts/Default";
// import App from "../App";
import Home from "../pages/Home";


// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
 {
    element: (
        <Default/>
    ),
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/test",
            element: (
                <h1>test</h1>
            )
        }
    ]
 }
]);