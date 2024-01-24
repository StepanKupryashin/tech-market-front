/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Обработка отправки формы
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="login" className="block text-gray-700 font-bold mb-2">
          Логин:
        </label>
        <input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="Введите логин"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Введите email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Введите пароль"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;