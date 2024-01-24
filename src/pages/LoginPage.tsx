import { useState } from "react";
import { loginUser } from "../services/api/auth";
import useUserStore from "../stores/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useUserStore();
  const [responseError, setResponseError] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(`Login: ${email}, Password: ${password}`);
    const response = await loginUser(email, password).catch(() => {
      setResponseError("Произошла ошибка при  авторизации");
    });
    console.log(response);
    if (response.token) {
      setResponseError("");
      userStore.setToken(response.token);
      navigate("/")
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="login">
          E-mail
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="login"
          type="email"
          placeholder="Введите свой e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Введите свой пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Войти
        </button>
      </div>
      {responseError && (
      <div>{responseError}</div>

      )}
    </form>
  );
};

export default LoginPage;
