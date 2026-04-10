import axios from 'axios'

const Base_API = axios.create({
    baseURL:'https://bigbasket-backend-1-8wdj.onrender.com',
});

export const getData = async(path)=>{
    try{
        const res = await Base_API.get(`${path}`);
        const data = await res.data ;
        return data ;
    }catch (error){
        console.log(error);
        throw error;
    }
}