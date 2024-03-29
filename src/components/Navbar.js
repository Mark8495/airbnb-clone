import React from "react";
import airbnblogo from "../images/airbnb.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airbnblogo} className="nav--img"/>
        </nav>
    )
}