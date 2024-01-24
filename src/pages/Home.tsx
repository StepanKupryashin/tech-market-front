/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api/products";
import useUserStore from "../stores/user";

const Home = () => {
  const { data: productsData } = useQuery({
    queryKey: ["getProfileInfo"],
    queryFn: getProducts,
  });

  const userStore = useUserStore();

  const addProduct = (productId: number) => {
        userStore.addToBasket(productId);

        console.log(userStore.getBasket());
  }

  return (
    <div>
      <h2>Домашняя страница</h2>

      <div className="grid gap-4 grid-rows-4 grid-flow-col w-full p-4">
        {productsData?.map((i: any) => {
          return (
            <div className="p-4" onClick={() => {
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
              <button className="text-white bg-blue-700 p-2" onClick={() => addProduct(i.id)}>В корзину</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
