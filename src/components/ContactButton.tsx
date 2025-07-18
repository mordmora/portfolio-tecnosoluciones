
import "@/styles/components/ContactButton.css"

interface Args {
    title: String;
}

function ContactButton({title}: Args){
    return <button className="contact-button">
        {title}
    </button>

}


export default ContactButton;
