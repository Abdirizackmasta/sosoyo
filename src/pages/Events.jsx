import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";

export default function Events() {
    return (
        <>
            <Navbar />
            <PageHeader title="Flagship Events" path="/event" name="Events" />
            <Footer />
            <BackToTop />
        </>
    );
}