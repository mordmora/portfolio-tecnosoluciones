
import ServiceCards from "./ServiceCards";
import { dataServiceCard } from "../dataServiceCard";
import "../styles/components/ServiceSection.css"
function Services(){
    return(
        <div className="services-section">
            <h3 className="services-title"> Nuestros Servicios</h3>
            <p className="services-description"> Ofrecemos servicios integrales de desarrollo de software adaptados a las necesidades
                de su negocio para aportar valor y mejorar los procesos.</p>
            <ServiceCards cards={dataServiceCard}/>
        </div>
    )
}

export default Services;
