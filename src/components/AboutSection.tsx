import '../styles/components/AboutSection.css'
import AboutCard from './AboutCard';
import mailIcon from "../assets/svg/mail-icon.svg"
import personIcon from "../assets/svg/person-icon.svg"
import checkIcon from "../assets/svg/check-icon.svg"
import aboutImg from "../assets/img/about.png"
import React from 'react';

function AboutSection(){

    return <div className="about-container">
        <div className="about-text"> <b> Acerca de nosotros </b> </div>
        <div className="about-description">
            Fundada con la visión de revolucionar el panorama digital,
            <b> TecnoSoluciones JI </b> combina la excelencia técnica con
            el pensamiento innovador para ofrecer soluciones de software
            que transforman los procesos y mejoran la experiencia con
            servicios de calidad.
        </div>

        <div className="why-choose-us">

            <div className="image-section">
                <img src={aboutImg} alt="Por que elegirnos?" width="720" height="570"/>
            </div>
            <div className="text-section">
                <div className='why-text'> ¿Por qué elegirnos? </div>
                <ul>
                    <li>
                        <AboutCard icon={personIcon} title="Equipo multidisciplinar" description="Nuestros miembros aportan conocimiento en diversas tecnologías y áreas del desarrollo."/>
                    </li>
                    <li>
                        <AboutCard icon={checkIcon} title="Metodología ágil" description="Utilizamos prácticas ágiles comprobadas para garantizar una entrega oportuna y una mejora continua."/>
                    </li>
                    <li>
                        <AboutCard icon={mailIcon} title="Atención y soporte 24/7" description="Nuestro compromiso no termina con la implementación. Ofrecemos soporte y mantenimiento continuos."/>
                    </li>
                </ul>



            </div>

        </div>


    </div>


}

export default AboutSection;
