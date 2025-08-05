import React from "react";
import PartnerCards from "./PartnerCards";
import "../styles/components/Partners.css";


function Partners() {
  return (
    <section className="partners">
      <h2 className="partners-title">Quienes han confiado</h2>
      <p className="partners-subtitle">
        Estamos orgullosos de trabajar con personas innovadoras y que apuntan hacia el futuro.
      </p>

      <div className="partners-list">
        <PartnerCards/>
      </div>

      <button className="partners-button">Ver opiniones</button>
    </section>
  );
}

export default Partners;
