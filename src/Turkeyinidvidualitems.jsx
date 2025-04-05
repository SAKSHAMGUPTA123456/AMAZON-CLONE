import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { Turkeybreast } from "./turkeybreatsapi";
import { color } from "framer-motion";
import StarRatings from 'react-star-ratings'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./Store";
import { motion ,AnimatePresence} from "framer-motion";
export const Displays=()=>{
  const rts=useParams()
  const [newpop,oldpop]=useState(true)
  const store=useSelector((state)=>state.task.task)
const Dispatch=useDispatch()
    const { data, isLoading, isError } = useQuery({
        queryKey: ["turkey"],
        queryFn: Turkeybreast, // Fetch full product list once
        staleTime: Infinity, // Data stays cached indefinitely
      });
      const rt=data?.filter((product)=>product.id==rts.id)
      const handling = (curr) => {
        oldpop(false); // Show the popup
        const gy = {
          image: curr.image,
          price: curr.price,
          quantity: 1,
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
     {rt?.map((curr)=>{
        return(
            <>
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
        <div><button style={{backgroundColor:"orange",borderRadius:"30px",height:"70px"}} onClick={()=>handling(curr)} class="w-full">Add to cart</button></div>
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