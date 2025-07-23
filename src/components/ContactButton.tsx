import React from "react";
import "@/styles/components/ContactButton.css"

interface Args {
    title: string;
}

function ContactButton({title}: Args){
    return <button className="contact-button">
        {title}
    </button>

}


export default ContactButton;
