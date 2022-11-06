import { Button, flexbox } from "@chakra-ui/react"


const Studentlist = () => {



    return (
        
        <div>
           
           <input type="text" placeholder="write name"></input> 
           <br/>
           <input type="email" placeholder="write email"></input>
        <br/>
        <br/>
            <Button color={"teal"} > Add Student</Button>
        </div> 
    )
}

export default Studentlist