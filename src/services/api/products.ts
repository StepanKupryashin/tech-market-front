import axiosInstance from "../../libs/axios"



export const getProducts = async () => {
    const { data } = await axiosInstance.get('/api/products');

    return data.response;
}

export const getBasket = async (products: Array<number>) => { 
    const { data } = await axiosInstance.get(`/api/user/basket/?products=${JSON.stringify(products)}`);

    return data.response;
}
