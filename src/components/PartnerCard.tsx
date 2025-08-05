import React from "react";
import { type SocialProps as PartnerProps } from "./SocialMediaCard";
import "../styles/components/ParnetCard.css";

function PartnerCard({id,image,label}:PartnerProps){
    return(
        <div id={id} className="partner-card">
            <div className="icon-container">{image && <img src={image} alt={label} />}</div>
            <h2>{label}</h2>
        </div>
    );
}

export default PartnerCard;