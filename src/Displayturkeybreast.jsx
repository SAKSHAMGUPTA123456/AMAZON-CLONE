import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Turkeybreast } from "./turkeybreatsapi"; // API function
import Location from './assest/download (1).png'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
export const Turkey = () => {
  const navigate=useNavigate()
  const [page, setPage] = useState(0);
const [newlocation,oldlocation]=useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show at a time

  const handleNext = () => {
    if(startIndex<=15){
    setStartIndex((prev) => prev + itemsPerPage);
    }
  };
const handleprev=()=>{
  if(startIndex>=3){
  setStartIndex((prev)=>prev-itemsPerPage)
  }
}

  const { data, isLoading, isError } = useQuery({
    queryKey: ["turkey"],
    queryFn: Turkeybreast, // Fetch full product list once
    staleTime: Infinity, // Data stays cached indefinitely
  });

  if (isLoading) return <h1 style={{color:"white"}}>Loading...</h1>;
  if (isError) return <h1>Error fetching data</h1>;



  return (
    <>
  <div style={{backgroundColor:"#232f3e"}} class="flex mt-4" onClick={()=>oldlocation(!newlocation)}>
  <img src={Location} style={{width:"30px"}}></img>
  <h2 style={{color:"white"}}>Delivering to Kozhikode 673004-Update location^</h2>
    </div>
    <div class="mt-5"><button style={{color:"white",backgroundColor:"orange",borderRadius:"20px"}} onClick={()=>navigate(-1)}>Go to previous page</button></div>

     <div className= {!newlocation?"opacity-50 pointer-events-none grid grid-cols-2 mt-20":"grid grid-cols-2 mt-16"} style={{height:"450px"}}>   {data.slice(startIndex, startIndex + itemsPerPage).map((product) => (
        <div key={product.id} style={{width:"190px",borderRadius:"20px"}} class="ml-2">
          <NavLink to={`Display/${product.id}`}><div style={{border:"2px solid white",backgroundColor:"white"}} class="flex justify-center">          <img src={product.image} alt={product.title} style={{width:"100px",height:"150px"}} /></div></NavLink>
          <div style={{width:"250px"}}><h2 style={{color:"white"}}>{product.title.slice(0,25)}</h2></div>
          <p style={{color:"white"}}>Price: ${product.price}</p>
          
        </div>
      ))}
</div>
<div style={{backgroundColor:"white"}} class="flex justify-center">
      <div ><button onClick={()=>handleprev()} style={{borderRadius:"10px",backgroundColor:"orange"}}>
        Previous
      </button></div>
      <div class="ml-2"><button onClick={() =>handleNext()} style={{borderRadius:"10px",backgroundColor:"orange",width:"50px"}}>
        Next
      </button></div>
      </div>
   
{/* 
   <div class={newlocation?"hidden":"block"}  style={{backgroundColor:"#131921"}}>
    <h1 style={{color:"white",fontSize:"20px"}}>Choose your location</h1>
    <h4 style={{color:"white"}}>Select a delivery location to see product availabilty and delivery option</h4>
    <button style={{backgroundColor:"burlywood",width:"450px",borderRadius:"20px"}}>Sign in to see your addresses</button>
   </div> */}
     <motion.div
      initial={{ y: "100%" ,width: "100%"}} // Start from bottom
      animate={{ y: newlocation ? "100%" : "10%" }} // Move to half of screen
      exit={{ y: "100%" }} // Move back down when removed
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 w-full bg-[#131921] p-6 rounded-t-2xl shadow-lg"
    >
      <h1 className="text-white text-xl">Choose your location</h1>
      <h4 className="text-white">
        Select a delivery location to see product availability and delivery options.
      </h4>
      <button className="bg-burlywood w-full py-2 mt-4 rounded-lg text-black" style={{backgroundColor:"brown"}}>
        Sign in to see your addresses
      </button>
    </motion.div>
    </>
  );
};
