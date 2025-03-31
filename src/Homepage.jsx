import first from './assest/firstimage.jpg'
import second from  "./assest/secondimage.jpg"
import third from './assest/third.jpg'
import fourth from './assest/fourth.jpg'
import fifth from './assest/fifth.jpg'
import { useState,useEffect ,useRef} from "react"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
export const Home=()=>{
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
      const containerWidth = containerRef.current.offsetWidth; // Visible area
      const sliderWidth = sliderRef.current.scrollWidth; // Total width of all images

      setMaxDrag(containerWidth - sliderWidth); // Ensure it stops at the last image
    }
  }, []);
    return(
        <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex space-x-4"
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }} // Stop at the last image
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
      </div>


    )
}