import { Outlet } from "react-router-dom"

const Default = () => {
    return (
        <div>
            <h1>Пользователь авторизован</h1>
            <Outlet/>
        </div>
    )
}

export default Default;