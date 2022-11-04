import { useState } from "react"
import Buttons from "./buttons"

const Counter = () => {
    const [valu,caller] = useState(0)
  
    const plusCounter = () => {
          caller(valu+1)

    }
    const minusCounter = () => {
          caller(valu-1)

    }
    return (
        <div>

            <Buttons name="Plus Counter" aftrclick={()=>plusCounter()}/>
            {valu}
            <Buttons name="Minus Counter" aftrclick={()=>minusCounter()}/>
        </div>
    )
}

export default Counter