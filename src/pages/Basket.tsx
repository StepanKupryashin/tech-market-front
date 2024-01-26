/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { createOrder, getBasket } from "../services/api/products";
import useUserStore from "../stores/user";

const Basket = () => {
  const userStore = useUserStore();

  const scopeBasket = async () => {
    return await getBasket(userStore.getBasket());
  };

  const { data: basket } = useQuery({
    queryKey: ["getBasket", userStore.getBasket()],
    queryFn: scopeBasket,
  });

  const orderCreate = async () => {
    const res = await createOrder(userStore.getBasket());
    console.log(res);
    alert("Заказа успешно создан! Информацию можете найти в профиле");
  }
  return (
    <div>
      <h1>Корзина</h1>
      <div>{basket && <h3>Кол-во товаров в корзине: {basket?.count}</h3>}</div>
      <button className="bg-blue-700 text-white" onClick={() => userStore.setBasket([])}>Очистить корзину</button>
      <div className="mt-5 flex flex-col w-full">
        {basket &&
          basket.basket.map((i: any) => {
            return (
              <div
                className="p-4 cursor-pointer bg-slate-500 m-2 rounded-lg"
                onClick={() => {
                  alert(`${i.id}`);
                }}
              >
                <div className="w-full h-[40%] flex items-center justify-center">
                  {i.image ? (
                    <img
                      className=" object-contain h-full w-[15rem]"
                      src={"http://localhost:8000/uploads/" + i.image}
                      alt="lol"
                    />
                  ) : (
                    <span>нет изображения</span>
                  )}
                </div>
                <div>
                  {i.name} / {i.price}Р
                </div>
              </div>
            );
          })}
      </div>
      <button className="text-white bg-blue-800" onClick={orderCreate}>
        Заказать
      </button>
    </div>
  );
};

export default Basket;
