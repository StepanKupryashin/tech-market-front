/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { getBasket } from "../services/api/products";
import useUserStore from "../stores/user";

const Basket = () => {


  const userStore = useUserStore();


const scopeBasket = async () => {
    return await getBasket(userStore.getBasket());
}

  const {data :  basket} = useQuery({
    queryKey: ['getBasket', userStore.getBasket()],
    queryFn: scopeBasket,
  });
  return (
    <div>
      <h1>Корзина</h1>
      <div>
        {basket && <h3>Кол-во товаров в корзине: {basket?.count}</h3>}
      </div>
      <div className="mt-5 flex flex-col w-full">
        {basket.basket.map((i: any) => {
            return (
                <div className="p-4 cursor-pointer bg-slate-500 m-2 rounded-lg" onClick={() => {
                    alert(`${i.id}`);
                }}>
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
                  <div>{i.name} / {i.price}Р</div>
                </div>
            )
        })}
      </div>
      <button className="text-white bg-blue-800">Заказать</button>
    </div>
  );
};

export default Basket;
