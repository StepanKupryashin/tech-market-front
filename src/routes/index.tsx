import { createBrowserRouter } from "react-router-dom";
import Unauthorized from "../layouts/Unauthorized";
import App from "../App";



// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
 {
    element: (
        <Unauthorized/>
    ),
    children: [
        {
            path: "/",
            element: <App/>
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