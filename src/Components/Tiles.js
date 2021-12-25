import * as React from "react"
import { Link } from "gatsby";



export default function Tile(props){

    return (



    
    <button className="bg-pink-600 rounded-xl text-white px-4 active:bg-blue-400 visited:bg-indigo-400 focus:bg-blue-500 focus-visible:bg-blue-500 hover:bg-pink-700 f">
{props.name}
<Link to = {"/"+props.name.toLowerCase()}></Link>
    
    </button>
   
    
 
        
        
    );
}