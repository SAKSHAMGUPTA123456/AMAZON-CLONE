import k from './assest/images.png'
import { NavLink } from 'react-router-dom'

import fg from './assest/images.jpg'
import {motion} from 'framer-motion'
import fgg from './assest/download.jpg'
export const First=()=>{
    return(
        <>
      
<div class="flex justify-between">
<div class="w-[400px] h-[900px] sm:w-[500px] md:w-[700px]">
    <img src={fg} class="w-full h-full object-cover"></img>
</div>
   <motion.div
      initial={{ x: "-100%", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className="mt-56"
    >
      <img src={k} alt="My Image" className=" h-auto" />
      <div class="flex justify-center mt-10"><NavLink to="/main"><button class="bg-yellow-400 text-orange-700 font-bold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500">MOVE TO NEXT PAGE</button></NavLink></div>
    </motion.div>
    <div class="w-[400px] h-[900px] sm:w-[500px] md:w-[700px]">
    <img src={fgg} class="w-full h-full object-cover"></img>
</div>
     </div> 
      
        
        </>
    )
}

