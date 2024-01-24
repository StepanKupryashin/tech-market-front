import { Outlet } from "react-router-dom";

const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
        <Outlet/>
        </div>
    )
}

export default Unauthorized;