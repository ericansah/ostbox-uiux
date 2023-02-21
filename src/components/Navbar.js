import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import Img from './images/ostbox-black-logo.png'


const Navbar = () => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  

  return (

    <>

      <div className='navbar'>
        <div className='container'>


            <Link to="/" className="logo" id="navbar__logo" onClick={closeMobileMenu}><img src={Img} alt="pic"/></Link>
           

          <div className='mobile-menu' id="mobile-cta" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            
        <nav className={click ? 'menu-list active' : 'menu-list'}>

          <ul className="primary-nav-menu">

            <li className="navbar__item">
              <Link to="/" className="navbar__links current" id="home-page" onClick={closeMobileMenu}>Home</Link>
            </li>
 
            <li className="navbar__item">
              <Link to="/about" className="navbar__links" id="about-page" onClick={closeMobileMenu}>About Us</Link>
            </li>

            <li className="navbar__item">
              <Link to="/our-work" className="navbar__links" id="our-work-page" onClick={closeMobileMenu}>Our Work</Link>
            </li> 

          </ul>


       
          <ul className="secondary-nav-menu">

           
            <li className="navbar__item">
              <Link to="/contact" className="navbar__links" id="contact-page" onClick={closeMobileMenu}>Contact</Link>
            </li>


            <li className="get-quote-cta navbar__item">
              <Link to="/go-premium" className=" navbar__links" id="standard-page" onClick={closeMobileMenu}>Get Quote</Link>
            </li> 

            
          </ul>
        </nav>


          </div> 
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;