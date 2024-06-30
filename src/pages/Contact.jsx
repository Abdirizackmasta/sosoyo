import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";

export default function Contact() {
    return (
        <>
            <Navbar />
            <PageHeader title="Contact Us" path="contact" name="Contact" content='Get In Touch, we love to hear from you,we are here to help and answer any question you might have' />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}