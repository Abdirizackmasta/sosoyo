import Navbar from "../components/Navbar";
import hero from '../assets/hero.jpeg';
import '../css/home.css';
import Whatwedo from '../../src/components/whatwedo/Whatwedo'
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="HERO-container">
                        <img src={hero} alt="hero" />
                <div  className="hero-details">
                     <div>
                        <h1>WELCOME to Solution to the Society Youth Organization <span style={{color: 'orange'}}>(SOSOYO)</span></h1>
                        <p>shaping a better future by empowering the youth of today.</p>
                   </div>
                    <div className="hero-details-right">
                    </div>
                </div>
                <div className="typewriter">
                    <h2>ENGAGE, EDUCATE, AND EMPOWER... </h2>
                </div>
            </div>
            <Landing />
            <Whatwedo />
            <Footer />
            <BackToTop />
        </>
    );
}