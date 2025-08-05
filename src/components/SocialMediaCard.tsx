import React from "react";
import "../styles/components/SocialMediaCard.css";

export type SocialProps = {
    id:string;
    icon?:React.ReactNode;
    image?:string;
    url?:string;
    label?:string;
}


function SocialMediaCard({icon,url,id}:SocialProps){
    return(
        <a href={url} target=" _blank" rel="noopener noreferrer" className="social-card" id={id}>
            {icon}
        </a>
    );
}

export default SocialMediaCard;