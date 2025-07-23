import React from "react";
import { type ServiceProps as Props } from "../typesService";
import "../styles/components/ServiceCard.css";



function ServiceCard({id,icon,title,description}:Props){
    return(
        <div className="card"> 
            <div className= "card-content" id={id}>
                <div className="card-icon">{icon}</div>
                <h1 className="card-title"> {title}</h1>
                <p className="card-description"> {description}</p>
            </div>
        </div>
          
        
    )
}

export default ServiceCard;