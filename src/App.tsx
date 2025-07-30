import React from 'react'
import '@/styles/index.css'
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import Services from './components/Services';


function App(){
    return (
        <div>
            <Services/>
            <Projects/>
            <ContactUs/>
        </div>
    )
}

export default App;
