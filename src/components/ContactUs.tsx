import React from "react";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import "../styles/components/ContactUs.css";
import SocialMediaCards from "./SocialMediaCards";

function ContactUs(){
    return(
        <section className="contact-section">
            <div className="contact-header">
                <h2>Contáctanos</h2>
                <p>¿Listo para comenzar tu próximo proyecto? Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.</p>
            </div>
           
            
            <div className="contact-content">
                <div className="contact-left">
                    <ContactInfo/>
                    <SocialMediaCards/>
                </div>

                <div className="contact-right">
                    <Form/>
                </div>
            </div>

        </section>
    );
}

export default ContactUs;