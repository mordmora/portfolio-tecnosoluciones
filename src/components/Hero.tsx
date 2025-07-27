import NameAndSlogan from "./NameAndSlogan";
import Navigation from "./Navigation";
import '../styles/components/Hero.css'
function Hero(){
    return <div className="hero-container">
        <Navigation/>
        <div className="hero-content">
            <NameAndSlogan/>
        </div>
    </div>
}

export default Hero;
