import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../css/navbar.css';
import logo from '../assets/logo.jpeg';


export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const path = useLocation().pathname;

    useEffect(() => {
     
      
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Get the top bar element
        const topBar = document.querySelector('.top-bar');
        // Get the navbar element
        const navbar = document.querySelector('.navbar');
        function toggleStickyNavbar() {
            if (window.scrollY > topBar.offsetHeight) {
                navbar.classList.add('nav-sticky');
                topBar.classList.add('hide-top-bar'); // Add class to hide top bar
            } else {
                navbar.classList.remove('nav-sticky');
                topBar.classList.remove('hide-top-bar'); // Remove class to show top bar
            }
        }
        window.addEventListener('scroll', toggleStickyNavbar);
    }, [])


    return (
        <>
            {/* <!-- Top Bar Start --> */}
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+254712345678"><p>+254712345678</p></a>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:sosoyo22@gmail.com"><p>sosoyo22@gmail.com</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Bar End --> */}

            {/* <!-- Nav Bar Start --> */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={logo} alt="logo" /></Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                            <Link to="/about" className={`nav-item nav-link ${path === '/about' ? "active" : ""}`}>About</Link>
                            <Link to="/contact" className={`nav-item nav-link ${path === '/contact' ? "active" : ""}`}>Contact</Link>
                            <div className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                                <div className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
                                    <Link to="/" className="dropdown-item">Detail Page</Link>
                                    <Link to="/about" className="dropdown-item">What We Do</Link>
                                    <Link to="/event" className="dropdown-item">Meet The Team</Link>
                                    <Link to="/contact" className="dropdown-item">Become A Volunteer</Link>
                                    <hr className='dropdown-divider' />
                                    <Link to="/donate" className="dropdown-item">Donate Now</Link>
                                </div>
                            </div>
                            <Link to="/event" className={`nav-item nav-link ${path === '/event' ? "active" : ""}`}>Events</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}
        </>
    );
}