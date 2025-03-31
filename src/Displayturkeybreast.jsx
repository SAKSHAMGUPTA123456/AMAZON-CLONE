import { useLoaderData } from "react-router-dom"

export const Turkey=()=>{
    const fg=useLoaderData()
    console.log(fg)
    return(
        <h1>HELLO</h1>
    )
}