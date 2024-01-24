/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Outlet } from "react-router-dom";
import DetailButton from "../assets/icons/DetailButton.png";
import { useState } from "react";
import useUserStore from "../stores/user";
const Default = () => {
  const [openModal, setOpenModal] = useState(false);
  const isSignedIn = useUserStore((state: any) => state.isSignedIn());
  console.log(isSignedIn);
  
  return (
    <div className="w-full items-center h-full text-center flex flex-col justify-evently">
      <header className="w-full flex items-center p-4">
        {/* logo */}
        TechMarket
        <nav className="flex w-full items-center justify-center">
          <ol className="flex w-full justify-evenly ">
            <li className="text-white">
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/warranty"}>Проверить Гарантию</Link>
            </li>
            <li>
              <Link to={"/profile"}>Профиль</Link>
            </li>
          </ol>
        </nav>
        <div>
          <img
            src={DetailButton}
            className="pointer z-20 fixed right-5 top-5"
            onClick={() => setOpenModal(!openModal)}
          />
          {openModal && !isSignedIn && (
            <div className="bg-indigo-800 fixed top-3 right-2  rounded-xl p-4 w-[23.5%] h-[180px] flex justify-center items-center">
              <ol className="text-white">
                <li>
                  <Link to={"/login"} className="text-white">
                    Вход
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} className="text-white">
                    Регистрация
                  </Link>
                </li>
              </ol>
            </div>
          )}
          {openModal && isSignedIn && (
            <div className="bg-indigo-800 fixed top-3 right-2  rounded-xl p-4 w-[23.5%] h-[180px] flex justify-center items-center flex-col">
              <ol className="text-white flex flex-col">
                <li>
                <Link to={"/basket"} className="text-white">
                    Корзина
                  </Link>
                </li>
                <li>
                  <Link to={"/logout"} className="text-white">
                    Выход
                  </Link>
                </li>
              </ol>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Default;
