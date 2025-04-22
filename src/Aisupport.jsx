import { useState } from "react"

export const Ai = () => {
    const fg=window.innerWidth-50
  
    const color=["orange","red","yellow","pink"]
    const [newfirst,old]=useState("")
    setTimeout(() => {
        let rt=parseInt(Math.random()*4)
console.log(rt)
        old(color[rt])

    }, 2000);
    return (

       <div class=" z-[1100] " style={{position:"fixed",top:"95px",left:`${fg}px`}}> 
        <button style={{width:"40px",backgroundColor:`${newfirst}`}}>
          WANT ANSWERS FROM AI
        </button>
        </div>

    );
  };
  