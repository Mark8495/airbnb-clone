import React from "react";
import cardimage from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src= {`../images/{prop.img}`} className="card-image"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">{props.reviewCount}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}