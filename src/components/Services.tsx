import React from "react";
import ServiceCards from "./ServiceCards";
import { dataServiceCard } from "../dataServiceCard";

function Services(){
    return(
        <div className="services-section"> 
            <h1 className="services-title"> Nuestros Servicios</h1>
            <p className="services-description"> Ofrecemos servicios integrales de desarrollo de software adaptados a las necesidades
                de su negocio para aportar valor y mejorar los procesos.</p>
            <ServiceCards cards={dataServiceCard}/>
        </div>
    )    
}

export default Services;