import axios from "axios"
export const Saverapi=async()=>{
  try{
const df=await axios.get("https://api.escuelajs.co/api/v1/products")
return df.data
  }catch(error){
    console.log(error)
  }
}