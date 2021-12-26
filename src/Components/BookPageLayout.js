import * as React from "react";
import {  StaticImage } from "gatsby-plugin-image";



export default function BookPageLayout(props){
    return (
        <>
        <div className="mt-4 px-4 flex flex-row gap-8"> 
            <StaticImage  src= "https://picsum.photos/200/300" alt= ''  placeholder = 'dominantcolor'  className="display:block rounded-md shadow-md" aspectRatio={9/10}/>
            <div>
                <h3 className="text-xl font-semibold">{props.bookTitle}</h3>
                <h4 className="font-medium">{props.author}</h4>
            </div>
            
            </div>
            <div className="bg-gray-400 h-[1px] w-screen mt-2 mx-4 "></div>
        </>
    );
}

//