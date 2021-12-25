import * as React from "react"
import Header from "../Components/Header";
import Navigation from "../Components/Navigation.js";
import BlogPostLayout from "../Components/BlogPost.js";



export default function Blogs(){
    return (
        <main>
            <Header/>
            <Navigation/>
            <BlogPostLayout title = "Test Title" date = "16 December 2021" tags="tagA, tagB" article = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sit varius nulla velit praesent diam. Justo, diam enim, viverra praesent ornare ipsum. Cursus vitae facilisis lacus volutpat arcu quam non fusce semper. Hendrerit tincidunt quisque est nunc, diam lobortis iaculis ut arcu."
          />
            {/* <div className="mt-4 px-4 ">
                <h1 className="font-bold text-3xl">Test Title</h1>
                <ul className="list-disc px-4 mt-2 ">
                    <li className="text-xs text-gray-500"><em>Posted on 16 December 2021</em></li>
                    <li className="text-xs text-gray-500"><em>Tags: TagA, TagB</em></li>    
                </ul>
                

                <article className="mt-2" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Egestas sit varius nulla velit praesent diam. 
                Justo, diam enim, viverra praesent ornare ipsum. 
                Cursus vitae facilisis lacus volutpat arcu quam non fusce semper. 
                Hendrerit tincidunt quisque est nunc, diam lobortis iaculis ut arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Egestas sit varius nulla velit praesent diam. 
                Justo, diam enim, viverra praesent ornare ipsum. 
                Cursus vitae facilisis lacus volutpat arcu quam non fusce semper. 
                Hendrerit tincidunt quisque est nunc, diam lobortis iaculis ut arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Egestas sit varius nulla velit praesent diam. 
                Justo, diam enim, viverra praesent ornare ipsum. 
                Cursus vitae facilisis lacus volutpat arcu quam non fusce semper. 
                Hendrerit tincidunt quisque est nunc, diam lobortis iaculis ut arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Egestas sit varius nulla velit praesent diam. 
                Justo, diam enim, viverra praesent ornare ipsum. 
                Cursus vitae facilisis lacus volutpat arcu quam non fusce semper. 
                Hendrerit tincidunt quisque est nunc, diam lobortis iaculis ut arcu.
                </article>
               
                <div className="bg-gray-400 h-[2px] w-screen mt-4 "></div>
            </div> */}
            
        </main>
    );
}