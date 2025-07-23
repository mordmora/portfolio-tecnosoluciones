import React from "react";
import ProjectCards from "./ProjectCards";
import { projectsData } from "../dataProjectCards";
import "../styles/components/Projects.css";

function Projects(){
    return(
        <section>
            <div className="projects-header">
                <h2>Nuestros Proyectos</h2>
                <p> Explore algunos de nuestros proyectos recientes que demuestran nuestro compromiso con 
                    la innovación y el desarrollo digital.
                </p>
            </div>
            
            <div> <ProjectCards cards={projectsData}/></div>
        </section>
    )
}

export default Projects;