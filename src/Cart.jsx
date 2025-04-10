import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { addTask } from "./Store"
import { decreaseTask } from "./Store"
import { deleteitem } from "./Store"
import { useState } from "react"
export const Cart=()=>{
    const fg=useSelector((prev)=>prev.task.task)||JSON.parse(localStorage.getItem('cart'))
   
    const Dispatch=useDispatch()
    const incre=(curr)=>{
      const er={
        actualprice:curr.actualprice,
        details:curr.details,
id:curr.id,
image:curr.image,
price:curr.actualprice+curr.price,
quantity:curr.quantity+1
      }
      console.log(er)
      Dispatch(addTask(er))
    }
    const dec=(curr)=>{
      if(curr.quantity>=2){
      const er={
        actualprice:curr.actualprice,
        details:curr.details,
id:curr.id,
image:curr.image,
price:curr.price-curr.actualprice,
quantity:curr.quantity-1
      }
Dispatch(decreaseTask(er))
    }
    if(curr.quantity==1){
      const er={
        id:curr.id
      }
      Dispatch(deleteitem(er))
    }
    }
    const handledel=(curr)=>{
Dispatch(deleteitem(curr))
    }
    return(
      <>

      <div class="flex justify-center"><h1 style={{color:"orange",fontSize:"30px"}}>YOUR CART HAS {fg.length} ITEMS</h1></div>
      {fg?.map((curr)=>{
        return(
<>
           <NavLink to="/main/turkeybreast"> <div class="flex justify-between mt-5 ml-3">
              <div><img src={curr.image} style={{width:"160px",height:"130px", boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)"}}></img></div>  
                <div>
                <div style={{color:"white",width:"250px",wordBreak:"break-word",fontStyle:"italic"}}>
  {curr.details.slice(0,65)}.....
</div>
<div style={{color:"white",fontSize:"30px"}}>${curr.price}</div>
<div style={{color:"lightgreen"}}>In Stock</div>
</div>
</div></NavLink>
<div class="flex">
<button class="flex justify-between mt-3 " style={{border:"4px solid orange",width:"150px",borderRadius:"20px", backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
    <div style={{color:"black",fontSize:"25px"}} class="ml-3" onClick={()=>dec(curr)}>-</div>     
    <div style={{color:"white"}} class="mt-2">{curr.quantity}</div>
    <div style={{color:"black",fontSize:"25px"}} onClick={()=>incre(curr)}>+</div>
</button>
<button class="flex justify-center mt-3 ml-3" style={{border:"4px solid orange",width:"150px",borderRadius:"20px", backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)',color:"white"}} onClick={()=>handledel(curr)}>
<div class="mt-2">DELETE</div>
</button>
</div>
</>

        )})}
        </>)}
     