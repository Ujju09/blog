import * as React from "react"
import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";

export default function Index(){

 

  return (
    <main  className="bg-gray-100">
      <Header/>
      <Navigation/>
      <Footer/>
    </main>
  );
}
