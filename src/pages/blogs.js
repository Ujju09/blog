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
            
        </main>
    );
}