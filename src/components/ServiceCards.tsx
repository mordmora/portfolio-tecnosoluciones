import React from "react"
import ServiceCard from "./ServiceCard"
import { type ListOfServiceCard } from "../typesService"
import "../styles/components/ServiceCards.css";

type Props = {
    cards: ListOfServiceCard
}

function ServiceCards({cards}:Props){
    return(  
            <div className="cards-container">
                {
                    cards.map(card => (
                        <ServiceCard
                            key={card.id}
                            id = {card.id}
                            icon = {card.icon}
                            title = {card.title}
                            description={card.description}
                        />
                    ))
                }
            </div>     
    )
}

export default ServiceCards;