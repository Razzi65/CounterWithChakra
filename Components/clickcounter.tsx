import { useState } from "react"
import Buttons from "./buttons"


const Clickcounter = () => {
    const [count,setcount] = useState(0)

    const clicks = () => {
        setcount(count+1)
    }

    const resetmethod = () => {
        setcount(count*0)
    }    
    
    
    return (
        <div>
        <Buttons name="Click Here " aftrclick={()=>clicks()}/> 
        You clicked {count} times.

        <Buttons name="Reset" aftrclick={()=>resetmethod()}/> 
        </div>
        
    )

    
    

    



}




export default Clickcounter