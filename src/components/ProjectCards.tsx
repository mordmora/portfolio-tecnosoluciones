import React from "react";
import { type ListOfProjects } from "../typesService";
import ProjectCard from "./ProjectCard";
import "../styles/components/ProjectCards.css";


type Props = {
    cards:ListOfProjects;
}

function ProjectCards({cards}:Props){
    return(
        <section className="project-section">
            <div className="project-grid">
                {
                    cards.map(card =>(
                        <ProjectCard
                            key={card.id}
                            id = {card.id}
                            img = {card.img}
                            title= {card.title}
                            description={card.description}
                            url={card.url}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectCards;