import React from "react";
import "./Navbar.css";
import img from "../src/images/images7.jpg";
import Common from "./Common";

function About() {
    return ( 
        <Common name='Welcome to About page' imgsrc={img} visit='/Service'btnname='Services now'/>
    );
}

export default About;
