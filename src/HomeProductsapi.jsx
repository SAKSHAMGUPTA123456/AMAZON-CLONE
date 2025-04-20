import axios from "axios";
export const HomeItems=async()=>{
    try{
        const res=await axios.get("https://fakestoreapi.in/api/products")
        return res.data.products
    }
    catch(error){
        console.log(error)
    }
}