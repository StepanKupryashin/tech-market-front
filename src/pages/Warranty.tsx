/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { checkWarranty } from "../services/api/products";

const Warranty = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

     const res = await checkWarranty(order);
    alert(res);
  };
  const [order, setOrder] = useState("");
  return (
    <div>
      <h1 className="mb-4">Проверить гарантию</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="login"
            type="text"
            placeholder="Введите свой номер заказа"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Проверить статус гарантии
          </button>
        </div>
      </form>
    </div>
  );
};

export default Warranty;
