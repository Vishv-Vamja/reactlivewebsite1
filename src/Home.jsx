import React from "react";
import "./Navbar.css";
import img from "../src/images/images6.png";
import Common from "./Common";

function Home() {
    return ( 
        <Common name='Grow Your business with' imgsrc={img} visit='/service'btnname='Get Started'/>
    ); 
}

export default Home;
