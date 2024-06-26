import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/about.css';

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" />
            <div className="about-container">
                <h1>About Solution to the Society Youth Organization <span style={{color: 'orangered'}}>(SOSOYO)</span></h1>
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
            <Footer />
            <BackToTop />
        </>
    );
}