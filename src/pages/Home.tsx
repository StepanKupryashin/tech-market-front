import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api/products";


const Home = () => {

    const {
        data: productsData,
      } = useQuery({
        queryKey: ["getProfileInfo"],
        queryFn: getProducts,
      });


    return (
        <div>
            <h2>Домашняя страница</h2>

            <div className="grid gap-4 grid-rows-4 grid-flow-col w-full p-4">
            {productsData?.map( (i: any) => {
                return (
                <div className="p-4">
                    <div className="w-full h-[40%] flex items-center justify-center">
                    {i.image && (
                        <img className="h-full" src={"http://localhost:8000/uploads/" + i.image} alt="lol"  />
                    )}
                    </div>
                    <div>
                    {i.name}
                    </div>
                </div>
                )
                
            })}
            </div>
        </div>
    )
}

export default Home;