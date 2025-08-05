import React from "react";
import "../styles/components/ContactItem.css"

type ItemProps = {
    icon:string;
    title: string;
    text:string;
}

function ContactItem({icon,title,text}:ItemProps){
    return(
        <div className="contact-item">
            <div className="icon-container">
                <span className="material-symbols-outlined">{icon}</span>
            </div>

            <div className="contact-text">
                <p className="contact-title">{title}</p>
                <p className="contact-stext">{text}</p>
            </div>
        </div>
    );
}
      
export default ContactItem;