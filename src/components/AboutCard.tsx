import '../styles/components/AboutCard.css';

interface AboutCardProps {
    icon: string;
    title: string;
    description: string;
}

function AboutCard({ icon, title, description }: AboutCardProps) {
    return (
        <div className="about-card">
            <div className="about-card-icon">
                {icon}
            </div>
            <div className="about-card-content">
                <h4 className="about-title">{title}</h4>
                <p className="about-card-description">{description}</p>
            </div>
        </div>
    );
}

export default AboutCard;
