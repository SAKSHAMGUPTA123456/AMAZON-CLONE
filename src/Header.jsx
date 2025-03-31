import { NavLink } from "react-router-dom"
import k from './assest/download.png'
import icon from './assest/download (2).png'
import { useState } from "react"
import { motion } from "framer-motion"
import admin from './assest/admin.jpg'
import Grocery from './assest/grocery.png'
import Search from './assest/search icon.png'
import first from './assest/firstimage.jpg'
import second from  "./assest/secondimage.jpg"
import third from './assest/third.jpg'
import fourth from './assest/fourth.jpg'
import fifth from './assest/fifth.jpg'
export const Header=()=>{
    const [iconclick,newiconclick]=useState(false)
    const handleclick=()=>{
        newiconclick(!iconclick)
    }
    const image=[first,second,third,fourth,fifth]
    return(
      <>
  <motion.div
      initial={{ x: -350 }}
      animate={{ x: iconclick ? 0 : -350 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 h-full w-[350px] shadow-lg"
    >
    
      <div style={{ backgroundColor: "#232f3e", border: "2px solid white", padding: "10px" }}>
        <div style={{ color: "white" }}>Browse</div>
        <div style={{ fontSize: "20px", color: "white" }}>Amazon</div>
</div>
<div class="flex justify-between">
<div class="bg-black">
      <div style={{ color: "white", fontSize: "30px", padding: "10px" }}>Amazon Home</div>
      {[
        "Trending",
        "Bestsellers",
        "New Releases",
        "Movers and Shakers",
        "Mobiles",
        "Computers",
        "Books",
        "Amazon Fashion",
      ].map((item) => (
        <div key={item} style={{ color: "white", height: "40px", padding: "10px" }}>{item}</div>
      ))}
   </div>
    <div onClick={()=>handleclick()}>
        <h1 style={{border:"2px solid blue",fontSize:"40px"}}>X</h1>
      </div>
      </div>
      </motion.div>
      <div style={{backgroundColor:"#232f3e"}}>
      <div class="flex justify-between">
        <div class="flex">
       <div onClick={()=>handleclick()}><img src={icon} style={{width:"30px"}} class="mt-3" ></img></div>
       <div class="mt-3 ml-2"><img  src={k} style={{width:"120px"}} class=""></img></div>
       </div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div class="flex mt-4">    
       <div style={{color:"white"}}>Sign in</div>
        <div><img src={admin} style={{width:"30px"}} class="ml-2"></img></div>
       </div>
       <div>
        <div class="ml-3"><h3 style={{color:"orange"}}>0</h3></div>
        <div class="mb-5"><img src={Grocery} style={{width:"30px"}}></img></div>
       </div>
      </div>


      <div class="flex">
        <div class="ml-4"><input type="text" placeholder="Search Amazon.in" style={{width:"350px",height:"50px",borderRadius:"7px"}}></input></div>
      <div class="mr-3"><img src={Search} style={{width:"40px",height:"50px"}}></img></div>
      </div>
      </div>
  
<br></br>

<div className="w-full overflow-hidden">
      <motion.div
        className="flex space-x-4"
        drag="x"
        dragConstraints={{ left: -650 * (image.length - 1), right: 0 }}
      >
        {image.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            style={{ width: "650px" }}
            className="h-48 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
    


      </>
    )
}