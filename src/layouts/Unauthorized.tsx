import { Outlet } from "react-router-dom";

const Unauthorized = () => {
    return (
        <div>
            <h1>Пользователь не авторизован</h1>
        <Outlet/>
        </div>
    )
}

export default Unauthorized;