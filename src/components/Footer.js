import { Outlet, Link } from "react-router-dom";
import './Footer.css';
import Img from './images/ostbox-white-logo.png';


const Footer = () => {
  return (
     <>
      <footer className="footer">
            <div className="container">

                <div className="row">
                  <div class="footer-logo"> 
                        <Link to="/" id="navbar__logo"><img src={Img} alt="pic" width="300" height="auto"/></Link>
                  </div>
                </div>

                <div className="row">

                        <div className="footer-col">
                            <h4 className="footer-link-title">Site</h4>
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/our-work">Our Work</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/go-premium">Go Premium</Link></li>

                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-link-title">Legal</h4>
                            <ul>
                            <li><Link to="/">Term & Condition</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Disclaimer</Link></li>

                            </ul>
                        </div> 

                        <div className="footer-col">
                            <h4 className="footer-link-title">Get Help</h4>
                            <ul>
                                <li><Link to="/">Customer Service</Link></li>
                                <li><Link to="/">Get A Quote</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                            </ul>
                        </div> 

                        <div className="footer-col">
                               <h4>Follow Us</h4>
                                <div className="social-links">
                                <a href="https://www.facebook.com/" target="_blank" class="social__icon--link"><i class="fab fa-facebook"></i></a>
                                <a href="https://twitter.com/" target="_blank" class="social__icon--link"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" class="social__icon--link"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
                               </div>
                        </div> 
                </div> 

                <div className="row">
                       <div className="copy-rights">
                          <p>&copy; Ostbox Design 2022. All rights reserved</p>
                       </div>
                </div>

            </div>
      </footer>

     
      <Outlet />
  </>
  
  );
}

export default Footer;