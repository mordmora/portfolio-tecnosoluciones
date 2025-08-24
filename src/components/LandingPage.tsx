import React from 'react';
import AboutSection from './AboutSection.tsx';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import Projects from './Projects.tsx';
import Partners from './Partners.tsx';
import Feedback from './Feedback.tsx';
import ContactUs from './ContactUs.tsx';
import Footer from './Footer.tsx';

function LandingPage() {
    return <div className='landing-page'>
        <Hero/>
        <AboutSection/>
        <Services/>
        <Projects/>
        <Partners/>
        <Feedback/>
        <ContactUs/>
        <Footer/>
    </div>
}

export default LandingPage;
