import React from "react";
import "@/styles/components/Navigation.css"
//import ContactButton from "@/components/ContactButton";
import ContactButton from "./ContactButton";



function Navigation() {
    return <header className="header">
        <div className="header-container">
            <div className="div-logo">
                Logo:p
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-start-element">
                        Inicio
                    </li>
                    <li>
                        Acerca de
                    </li>
                    <li>
                        Servicios
                    </li>
                    <li>
                        Proyectos
                    </li>
                    <li>
                        <ContactButton title="Contacto"></ContactButton>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}


export default Navigation;
