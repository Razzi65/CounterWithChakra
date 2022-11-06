import { useState } from "react"

const Button2 = () => {
    const [counter,setcounter] = useState(0)
    return (
        <div>

        <button onClick={()=>setcounter(counter+1)}> Plus Counter </button><br/>

        {counter} <br/>

        <button onClick={()=>setcounter(counter-1)}> Minus Counter </button> <br/>

        {counter>=10? "Great":"Not Great"}
        </div>
    )
}

export default Button2