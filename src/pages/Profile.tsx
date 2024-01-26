/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getHistoryOrders } from "../services/api/products";

const Profile = () => {

    const { data: orders } = useQuery({
        queryKey: ["getOrders"],
        queryFn: getHistoryOrders,
      });
  return (
    <div>
      <h1 className="mb-2">Профиль</h1>
    <div className="flex flex-col">
        {orders && orders.map((i : any) => {
            return (
                <div className="flex flex-col  py-4 m-2 rounded-lg ">
                    <span>Заказ от: {i.created_at}</span>
                    <span>Номер заказа: {i.id}</span>
                    <span>Кол-во товаров: {i.products.length}</span>
                    <details>
                        <summary>Посмотреть список заказанных товаров</summary>
                        {i.products.map((p : any) => {
                            return (
                                <div className="p-4">
                                  <div className="w-full h-[40%] flex items-center justify-center">
                                    {p.image ? (
                                      <img
                                        className=" object-contain h-full w-[15rem]"
                                        src={"http://localhost:8000/uploads/" + p.image}
                                        alt="lol"
                                      />
                                    ) : (
                                      <span>нет изображения</span>
                                    )}
                                  </div>
                                  <div>{p.name} / {p.price}Р</div>
                                </div>
                            )
       
                        })}
                    </details>
                    <span>Итоговая сумма заказа: {i.price}</span>
                </div>
            );
        })}
    </div>
    </div>
  );
};

export default Profile;
