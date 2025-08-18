import '../styles/components/AboutCard.css';
import React from 'react';

interface AboutCardProps {
    icon: string;
    title: string;
    description: string;
}

function AboutCard({ icon, title, description }: AboutCardProps) {
    return (
        <div className="about-card">
            <div className="about-card-icon">
                <img src={icon} alt="icon" width="32" height="32"/>
            </div>
            <div className="about-card-content">
                <h4 className="about-title">{title}</h4>
                <p className="about-card-description">{description}</p>
            </div>
        </div>
    );
}

export default AboutCard;
