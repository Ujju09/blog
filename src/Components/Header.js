import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


export default function Header(){
    return(
        <div className="flex flex-row justify-between px-4 py-2">

            <Link to = "/">
                <StaticImage  src= '../images/kalamo.png' alt= 'Logo of Gatsby'  placeholder = 'dominantcolor'  className="w-10 h-10 display:block"/>
            </Link>
        <p className="font-bold my-auto">Ujjwal Jayswal</p>
      </div>
    );
}