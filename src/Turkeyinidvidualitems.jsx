import { useEffect, useState } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { Turkeybreast } from "./turkeybreatsapi";
import { color } from "framer-motion";
import StarRatings from 'react-star-ratings'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./Store";
import { motion ,AnimatePresence} from "framer-motion";
export const Displays=()=>{
  const rts=useParams()
  let navigate=useNavigate();
  const arrt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    const [selectold,selectnew]=useState(1)
  const [newpop,oldpop]=useState(true)
  const store=useSelector((state)=>state.task.task)
const Dispatch=useDispatch()
    const { data, isLoading, isError } = useQuery({
        queryKey: ["turkey"],
        queryFn: Turkeybreast, // Fetch full product list once
        staleTime: Infinity, // Data stays cached indefinitely
      });
      const handleqw=(event)=>{
console.log(event.target.value.slice(9,14)) 
selectnew(parseInt(event.target.value.slice(9,14)))
}
      const rt=data?.filter((product)=>product.id==rts.id)
      const handling = (curr) => {
        oldpop(false); // Show the popup
        const gy = {
          image: curr.image,
          actualprice: curr.price,
          price:curr.price*selectold,
          quantity: selectold,
          id: curr.id,
          details:curr.description,

        };
    
     
       
        Dispatch(addTask(gy));
      
        // Hide the popup after 2 seconds
        setTimeout(() => oldpop(true), 2000);
      };
console.log(store)
    return(
     <>
     <div><br></br></div>
     {rt?.map((curr)=>{
        return(
            <>
            <div><button style={{color:"white",backgroundColor:"orange",borderRadius:"20px"}} onClick={()=>navigate(-1)}>Go to previous page</button></div>
            <div class="flex justify-between">
       <div> <h1 style={{color:"#1877F2"}}>Brand:{curr.title.slice(0,10)}</h1></div>
    <div>    <StarRatings
          rating={curr.rating.rate}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
           starDimension="10px"
        starSpacing="5px"
        /></div>
        </div>
        <h2 style={{color:"white"}} class="mt-4">{curr.description}</h2>
        <div class="flex justify-center mt-5"><img src={curr.image} style={{width:"350px"}}></img></div>
        <div style={{color:"white",fontSize:"40px"}} class="ml-5">${curr.price}</div>
        <h1 style={{color:"white"}} class="ml-5">EMI FROM $79.No Cost EMI available.</h1>
        <h1 style={{color:"white"}} class="ml-5">Inclusive of all taxes</h1>
        <div>

          <select class="w-[400px] bg-gray-600 ml-2" style={{color:"white",borderRadius:"20px"}} onChange={(e)=>handleqw(e)}>
           {arrt.map((curr)=>{
            return(
              <option style={{color:"white"}}>Quantity:{curr}</option>
            )
           })}
          
          </select>
        </div>
        
                <div class="mt-3"><button style={{backgroundColor:"orange",borderRadius:"30px",height:"70px"}} onClick={()=>handling(curr)} class="w-full">Add to cart</button></div>
       <div class="mt-6 bg-gray-700" style={{height:"150px"}}>
        <div style={{color:"white",fontStyle:"italic",fontSize:"20px"}}>Shop with Confidence</div>
        <div style={{color:" #87CEEB"}} class="grid grid-cols-2">
        <div class="mt-5">10 days Return & Exchange</div>
        <div class="mt-5"> Free Delivery</div>
        <div class="mt-10">Amazon Delivered</div>
        <div class="mt-10">Secure transaction</div>
        </div>
       </div>

        </>
        )
     })}
<AnimatePresence>
  {!newpop && (
    <motion.div
      key="popup"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-b-xl shadow-lg z-[9999]"
    >
      🛒 Item added to cart!
    </motion.div>
  )}
</AnimatePresence>
     </>
    )
}