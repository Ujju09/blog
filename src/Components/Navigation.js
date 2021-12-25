import * as React from "react"
import Tile from "./Tiles"


const list  = ["Books","Stories","Products","Blogs"];

export default function Navigation(){
    return (
        <div className="bg-blue-900 h-10 w-flex flex flex-row p-2 justify-between">
        {list.map((li)=><Tile key = {li.id} name = {li}/>)}
        </div>
    );
}