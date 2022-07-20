import React from "react";

export default function Card(props){
    
    return(
        <div className="card-container">
            <img className="card-img" src={props.imageUrl}/>
            <div className="info-container">
            <div className="location-container">
                <i className="fa-solid fa-location-dot location"></i>
                <p className="card-location">{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h5 >{props.startDate} - {props.endDate}</h5>
            <p className="card-description">{props.description}</p>
            <hr/>
            </div>
        </div>
    )
}