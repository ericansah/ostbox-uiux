import React from 'react';
import Img from '../components/images/OstBoxP1.png';
import './OurWork.css';


const OurWork = () => {

    return(
       <>
     <section className="our-work-section">
      <div className="container">

          <h1>Our Work</h1>
          <img src= {Img} alt="pic" className="our-work-img"/>

        </div>
    </section>
    </>
    );
  }
  
export default OurWork;