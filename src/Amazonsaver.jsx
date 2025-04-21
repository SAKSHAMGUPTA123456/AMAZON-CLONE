import { useQuery } from "@tanstack/react-query"
import { Saverapi } from "./Amazonsaverapi"
export const Saver=()=>{
    const {data}=useQuery({
        queryKey:"saver",
        queryFn:Saverapi
    })
    console.log(data)
    return(
        <>
        <h1 style={{color:"white"}}>dd</h1>

    </>
    )
}