import axios from "../../libs/axios";


export const loginUser = async (email: string, password: string) => {
   const { data } =  await axios.post('/api/user/login', {
        email: email,
        password: password
   })

   return data.response;
};