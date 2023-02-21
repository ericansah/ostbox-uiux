import { Outlet, Link } from "react-router-dom";
import './Footer.css';
import Img from './images/ostbox-white-logo.png';


const Footer = () => {
  return (
     <>
      <footer className="footer-section">
      <div className="container">
          <div class="footer__links">
  
              <div class="footer__link--wrapper">
                  <div class="footer__link--items">
                      <h2>Site</h2>
                      <a href="http://localhost:3000">Home</a>
                      <a href="http://localhost:3000/about">About</a>
                      <a href="http://localhost:3000/standard">Standard</a>
                      <a href="http://localhost:3000/contact">Contact</a>
                  </div>
              </div>
              

              <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>Legal</h2>
                    <a href="http://localhost:3000/terms">Term & Condition</a>
                    <a href="http://localhost:3000/privacy">Privacy Policy</a>
                    <a href="http://localhost:3000/disclaimer">Disclaimer</a>
                </div>
              </div> 
                
              
            {/*<div class="footer__link--wrapper">
                  <div class="footer__link--items">
                      <h2>Social Media</h2>
                      <a href="sign-up">Facebook</a>
                      <a href="sign-up">Twitter</a>
                      <a href="sign-up">Instagram</a>
                      <a href="sign-up">Linkedin</a>   
                  </div>
              </div>*/}
  
            </div>
  
          <section class="social__media">
              <div class="social__media--wrap">
                  <div class="footer__logo"> 
            <a href="#" id="navbar__logo"><img src={Img} alt="pic" width="300" height="auto"/></a>
                  </div>
  
  
                  <p class="website__rights">&copy; Ostbox Design 2022. All rights reserved</p>
  
                  {/*<div class="social__icons">
                      <a href="/" class="social__icon--link"><i class="fab fa-facebook"></i></a>
                      <a href="/" class="social__icon--link"><i class="fab fa-twitter"></i></a>
                      <a href="/" class="social__icon--link"><i class="fab fa-instagram"></i></a>
                      <a href="/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
                  </div>*/}
              </div>
          </section>
      </div>
      </footer>

     
      <Outlet/>
  </>
  
  );
}

export default Footer;