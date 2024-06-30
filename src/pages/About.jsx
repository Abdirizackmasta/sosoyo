import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/about.css';
import Accordion from "../components/Accordion";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" content='At SOSOYO Foundation, we are committed to creating positive change and uplifting communities across the nation. Our relentless dedication drives us to provide vital support and opportunities to those in need, empowering them to realize their full potential.'/>
            <div className="about-container">
                <h1>About Solution to the Society Youth Organization <span style={{ color: '#FDBE33' }}>(SOSOYO)</span></h1>
                <p>Solution to the Society Youth Organization (SOSOYO) was conceived with the vision of empowering 
                the youth to become proactive leaders in their communities. Founded in 2018 and becoming operational 
                in 2019, SOSOYO was established in response to the growing need for a platform that addresses civic 
                engagement, climate and environmental issues, health, and skills development among the youth. 
                Recognizing the potential and energy of young people, SOSOYO aims to harness this demographic's 
                strengths to foster sustainable development and community resilience.
                The existence of SOSOYO is crucial because it fills the gap in youth engagement and empowerment. By 
                providing resources, training, and opportunities, SOSOYO ensures that young individuals are not only 
                aware of societal issues but are also equipped to tackle them effectively. 
                The organization serves as a bridge, connecting the youth with the necessary tools and networks to drive 
                positive change within their communities.
                </p>
            </div>
            <div className="aim">
                <h1>Aim</h1>
                <p><b>SOSOYO</b> aims to empower its members and volunteers by equipping them with the necessary skills and knowledge to make a meaningful impact in their communities.</p>
                <p>The organization focuses on:</p>
                <p><b> Personal and Professional Development: </b>: By providing training and development opportunities, SOSOYO helps young professionals enhance their skills, making them more competitive in the job market and better equipped to contribute to societal progress.</p>
                <p><b> Community Impact: </b>: SOSOYO’s initiatives are designed to have a ripple effect, where equipped members and volunteers positively influence their communities, creating a cycle of empowerment and development.</p>
            </div>
            <div className="vission-mission">
                <div>
                    <h1>Vission</h1>
                    <p>To be a leading organization that empowers youth to create sustainable and impactful solutions for societal challenges, fostering a generation of proactive and responsible leaders.</p>
                </div>
                <div>
                    <h1>Mission</h1>
                    <p>To engage, educate, and empower young individuals through innovative programs and initiatives that address civic, climate, environmental, health, and skills development issues, thereby contributing to the overall well-being and progress of the community.</p>
                </div>
            </div>
            <Accordion />
            <Footer />
            <BackToTop />
        </>
    );
}