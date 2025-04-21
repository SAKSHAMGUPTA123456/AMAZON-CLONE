import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { addTask } from "./Store"
export const Thirdindi=()=>{
    const rtt=useParams()
    let navigate=useNavigate()
    const fg=useLoaderData()
    const rts=fg.filter((curr)=>curr.id==rtt.id)
    const [newpop,oldpop]=useState(true)
    const [selectold,selectnew]=useState(1)
const dis=useDispatch()
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
    const handling=(curr)=>{
    oldpop(false)
    const w = {
      image: curr.image,
      actualprice: curr.price,
      price:curr.price*selectold,
      quantity: selectold,
      id: curr.id,
      details:curr.description,

    };
    dis(addTask(w))
setTimeout(() => {
  oldpop(true)
},2000);
    }
    const handlingt=(e)=>{
      console.log(e.target.value.slice(9,15))
      const rf=e.target.value.slice(9,15)
      const fg=parseInt(rf)
      console.log(typeof(fg))
      selectnew(fg)
    }
    return(
 <>
 {rts?.map((data)=>{
  return(
    <div>
        <div><br></br></div>
                 <div><button style={{color:"white",backgroundColor:"orange",borderRadius:"20px"}} onClick={()=>navigate(-1)}>Go to previous page</button></div>

   <h2 style={{color:"white"}} class="mt-4">{data.description}</h2>
        <div class="flex justify-center mt-5"><img src={data.image} style={{width:"350px"}}></img></div>
        <div style={{color:"white",fontSize:"40px"}} class="ml-5">${data.price}</div>
        <h1 style={{color:"white"}} class="ml-5">EMI FROM $79.No Cost EMI available.</h1>
        <h1 style={{color:"white"}} class="ml-5">Inclusive of all taxes</h1>
        <div>

<select class="w-[400px] bg-gray-600 ml-2" style={{color:"white",borderRadius:"20px"}} onChange={(e)=>handlingt(e)}>
 {arrt.map((curr)=>{
  return(
    <option style={{color:"white"}}>Quantity:{curr}</option>
  )
 })}

</select>
</div>
   <div class="mt-3"><button style={{backgroundColor:"orange",borderRadius:"30px",height:"70px"}} onClick={()=>handling(data)} class="w-full">Add to cart</button></div>
          <div class="mt-6 bg-gray-700" style={{height:"150px"}}>
           <div style={{color:"white",fontStyle:"italic",fontSize:"20px"}}>Shop with Confidence</div>
           <div style={{color:" #87CEEB"}} class="grid grid-cols-2">
           <div class="mt-5">10 days Return & Exchange</div>
           <div class="mt-5"> Free Delivery</div>
           <div class="mt-10">Amazon Delivered</div>
           <div class="mt-10">Secure transaction</div>
           </div>
</div>
</div>
  )})}


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