import { useQuery } from "@tanstack/react-query"
import { Saverapi } from "./Amazonsaverapi"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Saver=()=>{
    const navigate=useNavigate()
    const {data}=useQuery({
        queryKey:"saver",
        queryFn:Saverapi
    })

    console.log(data)

    return(
        <>
        <div><br></br></div>
        <div><br></br></div>
        <div><button style={{color:"white",backgroundColor:"orange",borderRadius:"20px"}} onClick={()=>navigate(-1)}>Go to previous page</button></div>
        <div className="grid grid-cols-2 gap-4">
      {data?.map((product) => (
        <div key={product.id} style={{ width: "190px", borderRadius: "20px" }} className="ml-2">
      
            <div style={{ border: "2px solid white", backgroundColor: "white" }} className="flex justify-center">
              <NavLink to={`${product.id}`}><img src={product.image} alt={product.title} style={{ width: "100px", height: "150px" }} /></NavLink>
            </div>
      
          <div style={{ width: "250px" }}>
            <h2 style={{ color: "white" }}>{product.title.slice(0, 25)}</h2>
          </div>
          <p style={{ color: "white" }}>Price: ${product.price}</p>
        </div>
      ))}
    </div>

    </>
    )
}