import React from "react";
import { type ProjecTypes } from "../typesService";
import "../styles/components/ProjectCard.css";

type Props = ProjecTypes;

function ProjectCard({id,img,title,description,url}:Props){
    const hadleClick = ()=>{
        window.open(url, "_blank");
    };

    return(
        <section onClick={hadleClick} className="project-card">
            <div className="project-card__image">
                <img src={img} alt={title}/>
                <div className="image-overlay"></div>
             </div>
            <div className="project-card__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span  className="project-card__link" id={id}>Leer mas</span>
            </div> 
        </section>
    )
}

export default ProjectCard;