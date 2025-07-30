
import SocialMediaCard from "./SocialMediaCard";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import React from "react";
import "../styles/components/SocialMediaCards.css";

const mediaLinks = [
    {
        id:"1",
        icon:<FaWhatsapp/>,
        url:"https://facebook.com"
    },
    {
        id:"2",
        icon:<FaFacebookF/>,
        url:"https://facebook.com"
    },
      {
        id:"3",
        icon:<FaInstagram/>,
        url:"https://facebook.com"
    },
      {
        id:"4",
        icon:<FaTwitter/>,
        url:"https://facebook.com"
    },
      {
        id:"5",
        icon:<FaYoutube/>,
        url:"https://facebook.com"
    },
      {
        id:"6",
        icon:<FaGithub/>,
        url:"https://facebook.com"
    },
]

function SocialMediaCards(){
    return(
        <div>
            <h3>Síguenos</h3>
            <div className="social-container">
                {
                    mediaLinks.map((card) =>(
                        <SocialMediaCard 
                            key={card.id}
                            id={card.id}
                            icon={card.icon}
                            url={card.url}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SocialMediaCards;