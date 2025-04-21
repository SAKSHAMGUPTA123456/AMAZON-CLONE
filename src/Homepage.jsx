import first from './assest/images (1).jpg'
import second from  "./assest/secondimage.jpg"
import third from './assest/third.jpg'
import fourth from './assest/fourth.jpg'
import fifth from './assest/fifth.jpg'
import { useState,useEffect ,useRef} from "react"
import { motion } from "framer-motion"
import { NavLink, useSearchParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { addTask } from './Store'
import { useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { HomeItems } from './HomeProductsapi'
import Search from "./assest/search icon.png";
export const Home=()=>{
  
const {data,isLoading}=useQuery({
  queryKey:["Homeitems"],
  queryFn:HomeItems,
  staleTime:Infinity
}) 
const [newload,oldload]=useState(true)
const [newmap,oldmap]=useState([])
useEffect(()=>{
  setTimeout(() => {
    oldload(false)
  }, 2000);
oldmap(data)
},[])
  const [newsearch,oldsearch]=useState("")
 const image=[
    {src:first,path:"turkeybreast"},
    {src:second,path:"gh"},
    {src:third,path:"nn"},
    {src:fourth,path:"aa"},
    {src:fifth,path:"xx"}
 ]



    const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth; 
      const sliderWidth = sliderRef.current.scrollWidth;

      setMaxDrag(containerWidth - sliderWidth); 
    }
  }, []);
  const word=(e)=>{
    console.log(e.target.value)
    oldsearch(e.target.value)
    const rh=data.filter((curr)=>curr.title.toLowerCase().includes(e.target.value.toLowerCase()))
    oldmap(rh)
  }
  const handlingsearch=()=>{
oldsearch("")
  }
  const handlingfil=(e)=>{
   const g=data.filter((curr)=>curr.category.toLowerCase().includes(e.target.value.toLowerCase()))
   oldmap(g)
  }

    return(
      <>
          <div className="flex items-center h-14">
                <input
                  type="text"
                  placeholder="Search Amazon.in"
                  className="w-80 h-10 rounded-md px-3"
                  value={newsearch}
                  onChange={(e)=>word(e)}
                />
                <img src={Search} className="w-10 h-10 ml-2 cursor-pointer" alt="Search"  onClick={handlingsearch}/>
              </div>
    
        <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex space-x-4"
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }} 
        >
          {image.map((item, index) => (
            <NavLink to={`${item.path}`}  className=" flex-shrink-0">
            <motion.img
            key={index}
              src={item.src}
              style={{ width: "600px" }}
              className="h-56 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
             </NavLink>
          ))}
       
        </motion.div>

<div class="flex justify-center overflow-visible">
<select onChange={(e)=>handlingfil(e)} style={{backgroundColor:"black",color:"white",border:"2px solid white"}}>

  <option></option>
  <option style={{color:"white"}}>ELECTRONICS</option>
  <option style={{color:"white"}}>MOBILE</option>
  <option style={{color:"white"}}>GAMING</option>
  <option style={{color:"white"}}>AUDIO</option>
  <option style={{color:"white"}}>TV</option>

</select>
</div>
{!newload?<div class="mt-5">
     <div class="grid grid-cols-2 ">
      {newmap?.map((product)=>{
        return(
          <div key={product.id} style={{width:"190px",borderRadius:"20px"}} class="ml-2">
         <NavLink to={`display/${product.id}`}> <div style={{border:"2px solid white",backgroundColor:"white"}} class="flex justify-center">          <img src={product.image} alt={product.title} style={{width:"100px",height:"150px"}} /></div></NavLink>
          <div style={{width:"250px"}}><h2 style={{color:"white"}}>{product.title.slice(0,25)}</h2></div>
          <p style={{color:"white"}}>Price: ${product.price}</p>
          
        </div>
        )
      })}
     </div>
     </div>:""}



      </div>
</>

    )
}