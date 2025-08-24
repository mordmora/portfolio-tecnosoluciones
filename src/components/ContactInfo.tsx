import React from "react";
import ContactItem from "./ContactItem";
import "../styles/components/ContactItem.css"

function ContactInfo(){
    return(
        <div>
            <div className="contact-info-title">Información de contacto</div>

            <ContactItem
                icon="mail"
                title="Correo electrónico"
                text="tecnoglobalambiental@gmai.com"
            />

              <ContactItem
                icon="call"
                title="Télefono"
                text="+57 301 571 5506"
            />

              <ContactItem
                icon="location_on"
                title="Dirección"
                text="Empresa digital en internet"
            />

        </div>
    )
}

export default ContactInfo;
