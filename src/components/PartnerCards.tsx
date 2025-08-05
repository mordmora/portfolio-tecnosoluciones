
import PartnerCard from "./PartnerCard";
import React from "react";
import "../styles/components/PartnerCards.css";

const dataCards = [
    {
        id:"1",
        image:"src/assets/iconAnime.jpg",
        label:"Horizon"
    },
     {
        id:"2",
        image:"src/assets/keylesLogo.jpg",
        label:"Horizon"
    },
     {
        id:"3",
        image:"src/assets/keylesLogo.jpg",
        label:"Horizon"
    }, 
    {
        id:"4",
        image:"src/assets/keylesLogo.jpg",
        label:"Horizon"
    },
     {
        id:"5",
        image:"src/assets/keylesLogo.jpg",
        label:"Horizon"
    },

]

function PartnerCards(){
    return(
        <div className="partner-cards">
            {
                dataCards.map(card=>(
                    <PartnerCard
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        label={card.label}
                    />
                ))
            }
        </div>
    );
}

export default PartnerCards;