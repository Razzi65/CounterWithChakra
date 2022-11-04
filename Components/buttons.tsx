import { Button, ButtonGroup } from '@chakra-ui/react'

type typeOfButton = {
  name:string,
  aftrclick:()=>void

}

const Buttons = (prop:typeOfButton) => {

  
  return (

        <Button margin={5} colorScheme='teal' size='md' onClick={prop.aftrclick} >

    {prop.name}

  </Button>
   
   )
}



export default Buttons