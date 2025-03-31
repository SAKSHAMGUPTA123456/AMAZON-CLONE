import axios from 'axios'
export const Turkeybreast=async()=>{
try{
const res=await axios.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=turkey+breast&search_simple=1&json=1")
return res.data.products
}catch(error){
    console.log(error)
}
}