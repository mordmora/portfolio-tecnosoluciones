import React from "react";
import ProjectCards from "./ProjectCards";
import { projectsData } from "../dataProjectCards";
import "../styles/components/Projects.css";

function Projects(){
    return(
        <div className="projects-container">
            <div className="projects-header">
                <h2 className="projects-title">Nuestros Proyectos</h2>
                <p className="projects-subtitle"> Explore algunos de nuestros proyectos recientes que demuestran nuestro compromiso con
                    la innovación y el desarrollo digital.
                </p>
            </div>

            <div> <ProjectCards cards={projectsData}/></div>
            <button className="seemore-button"> Ver mas </button>
        </div>
    )
}

export default Projects;
