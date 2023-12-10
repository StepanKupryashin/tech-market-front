import { Link, Outlet } from "react-router-dom"
import DetailButton from '../assets/icons/DetailButton.png';
import { useState } from "react";
const Default = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="w-full items-center h-full text-center flex flex-col justify-evently">
            <header className="w-full flex items-center p-4">
                {/* logo */}
                TechMarket
                <nav className="flex w-full items-center justify-center">
                    <ol className="flex w-full justify-evenly ">
                        <li className="text-white">
                            <Link to={'/'}>Главная</Link>
                        </li>
                        <li>
                            <Link to={'/products'}>Товары</Link> 
                        </li>
                        <li>
                          <Link to={'/account'}>Аккаунт</Link>
                        </li>
                    </ol>
                </nav>
                <div>
                <img src={DetailButton} className="pointer z-20" onClick={() => setOpenModal(!openModal)}/>
                {openModal && (
                <div className="bg-indigo-800 fixed top-3 right-2 z-[-2] rounded-xl p-4 w-[23.5%] h-[180px] flex justify-center items-center">
                <ol className="text-white">
                    <li>Вход</li>
                    <li>Регистрация</li>
                </ol>
            </div>
                )}

                </div>
            </header>
            <Outlet/>
        </div>
    )
}

export default Default;