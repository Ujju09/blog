import * as React from "react"


export default function BlogPostLayout(props){
    return (
        <div className="mt-4 px-4 ">
        <h1 className="font-bold text-3xl">{props.title}</h1>
        <ul className="list-disc px-4 mt-2 ">
            <li className="text-xs text-gray-500"><em>Posted on {props.date}</em></li>
            <li className="text-xs text-gray-500"><em>Tags: {props.tags}</em></li>    
        </ul>
        

        <article className="mt-2" >
            {props.article}
        </article>
       
        <div className="bg-gray-400 h-[2px] w-screen mt-4 "></div>
    </div>
    );
}