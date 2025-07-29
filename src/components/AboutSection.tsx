import '../styles/components/AboutSection.css'
import AboutCard from './AboutCard';

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
                <img src="../assets/about.png" alt="Por que elegirnos?"/>
            </div>
            <div className="text-section">
                <div className='why-text'> ¿Por qué elegirnos? </div>
                <ul>
                    <li>
                        <AboutCard icon="icon" title="Equipo multidisciplinar" description="Nuestros miembros aportan conocimiento en diversas tecnologías y áreas del desarrollo."/>
                    </li>
                    <li>
                        <AboutCard icon="icon" title="Metodología ágil" description="Utilizamos prácticas ágiles comprobadas para garantizar una entrega oportuna y una mejora continua."/>
                    </li>
                    <li>
                        <AboutCard icon="icon" title="Atención y soporte 24/7" description="Nuestro compromiso no termina con la implementación. Ofrecemos soporte y mantenimiento continuos."/>
                    </li>
                </ul>



            </div>

        </div>


    </div>


}

export default AboutSection;
