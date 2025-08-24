import PartnerCard from "./PartnerCard";
import "../styles/components/PartnerCards.css";
import keyleIcon from "../assets/img/keyle.svg";
import tumercadoIcon from "../assets/img/tumercadoLogo.svg";
import salespointIcon from "../assets/img/salespointLogo.svg";

const dataCards = [
    {
        id: "1",
        icon: <img src={keyleIcon} alt="keyle' Store" />,
        label: "keyle' Store",
    },
    {
        id: "2",
        icon: <img src={tumercadoIcon} alt="TuMercado" />,
        label: "TuMercado",
    },
    {
        id: "3",
        icon: <img src={salespointIcon} alt="SalesPoint" />,
        label: "SalesPoint",
    },
];

function PartnerCards(){
    return(
        <div className="partner-cards">
            {
                dataCards.map(card => (
                    <PartnerCard
                        key={card.id}
                        id={card.id}
                        icon={card.icon}
                        label={card.label}
                    />
                ))
            }
        </div>
    );
}

export default PartnerCards;
