import React from "react";
import "../styles/components/SocialMediaCard.css";

type SocialProps = {
    id:string;
    icon:React.ReactNode;
    url:string;
}


function SocialMediaCard({icon,url,id}:SocialProps){
    return(
        <a href={url} target=" _blank" rel="noopener noreferrer" className="social-card" id={id}>
            {icon}
        </a>
    );
}

export default SocialMediaCard;