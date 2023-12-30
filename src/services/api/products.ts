import axiosInstance from "../../libs/axios"



export const getProducts = async () => {
    const { data } = await axiosInstance.get('/api/products');

    return data.response;
}