import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = (props) => {
    return (
        <footer className="container-fluid text-bg-dark mt-5 py-5">
            <div id="footer-container" className="text-center">
                <p className="fs-s crayons-footer__description">
                    <a className="link-primary fw-medium" aria-label="ugist, tech writes" href="/">Ugist</a> — A constructive and inclusive social network for software developers.
                </p>

                <ul className="nav justify-content-center my-0 py-0">
                    <li className="nav-item">
                        <Link className='nav-link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/listings">
                            Listings
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/pod">
                            Podcasts
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/tags">
                            Tags
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>

                    <li className="nav-item">
                        <Link className='nav-link' to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-link px-0">
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/guides">
                            Guides
                        </Link>
                    </li>
                </ul>

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className='nav-link' to="/code-of-conduct">
                            Code of Conduct
                        </Link>
                    </li>
                    <li className='nav-link px-0'>
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/privacy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className='nav-link px-0'>
                        <span className="bi bi-dot" />
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/terms">
                            Terms of use
                        </Link>
                    </li>
                </ul>

                <div className="fs-s">
                    <p>Ugist <span title="copyright">©</span> 2023 - 2023.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
