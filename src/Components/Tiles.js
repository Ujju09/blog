import * as React from "react"
import { Link } from "gatsby";



export default function Tile(props){

    return (


<Link to = {"/"+props.name.toLowerCase()} 
activeStyle={{background:"#6182B2"}}
className="bg-pink-600 rounded-xl text-white font-regular px-4 active:bg-blue-400  focus:bg-blue-500 hover:bg-pink-700 " >
    {props.name}
</Link>
    

   
    
 
        
        
    );
}