import * as React from "react"
import Header from "../Components/Header";
import Navigation from "../Components/Navigation.js";
import BookPageLayout from "../Components/BookPageLayout.js";



export default function Books(){
    return (
        <main>
            <Header/>
            <Navigation/>
            <BookPageLayout  bookTitle= "Title of the book" author="Author" />
        </main>
    );
}