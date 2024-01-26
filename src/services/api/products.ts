import axiosInstance from "../../libs/axios"



export const getProducts = async () => {
    const { data } = await axiosInstance.get('/api/products');

    return data.response;
}

export const getBasket = async (products: Array<number>) => { 
    const { data } = await axiosInstance.get(`/api/user/basket/?products=${JSON.stringify(products)}`);

    return data.response;
}


export const createOrder = async (products: Array<number>) => {
    const { data } = await axiosInstance.post('/api/orders', {
        products: products
    });

    return data.response;
}


export const getHistoryOrders = async () => {
    const { data } = await axiosInstance.get('/api/orders');
    return data.response;
}


export const checkWarranty = async (orderId: string) => { 
    const { data } = await axiosInstance.get(`/api/orders/${orderId}/warranty`);

    return data.response;
}