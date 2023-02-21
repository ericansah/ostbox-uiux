import { Outlet, Link } from "react-router-dom";
import Img from '../components/images/user-x.png';
import OurWorkImg from '../components/images/OstBoxP1.png';
import StackImg from '../components/images/stack-image.png';
import PersonImg1 from '../components/images/person-1.png';
import PersonImg2 from '../components/images/person-2.png';
import PersonImg3 from '../components/images/person-3.png';
import './Home.css';


const Home = () => {
  return(

    <>

  <section className="hero">
      <div className="container">

          <div className="left-col">

              {/*<h1>Let's work together to conceptualise and create</h1>*/}
              <p className="subhead">Attractive UX &amp; UI design</p>
              <h1>that solve your business digital problem, deliver above your customers expectations and add value to your business.</h1>
            
               {/*<div className="hero-cta">
                  <Link to="/" className="primary-cta">Try for free</Link>
                  <Link to="/" className="watch-video-cta"><i class="fas fa-video"></i>Watch Video</Link>
                </div>*/}

          </div>

          <img src={Img} alt="pic" className="hero-img"/>

      </div>
  </section>


  <section className="features-section">
      <div className="container">
      <h1>Front-end &amp; UI/UX Design Stack</h1>

      <ul className="features-list">
      <li>Figma</li>
      <li>React JS</li>
      <li>Bootstrap</li>
      <li>JavaScript</li>
      <li>CSS (SCSS)</li>
      <li>HTML 5</li>
      </ul>


      <img src={StackImg} alt="pic" width="200" height="auto" className="stack-img"/>

      </div>
  </section>


  <section className="feature-work-section">
      <div className="container">
          <h1>Feature Work</h1>
          <img src= {OurWorkImg} alt="pic" className="feature-work-img"/>


          <div className="hero-cta">
                  <Link to="/our-work" className="primary-cta">View More</Link>
                </div>
        </div>
    </section>


  <section className="testimonials-section">
      <div className="container">

          
      <ul>

      <li>
      <img src={PersonImg1} alt="pic" width="400" height="auto" className="testmonials-person"/>  
      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </blockquote>
      <cite>-Gida Gora</cite>
      </li>

      <li>
      <img src={PersonImg2} alt="pic" width="400" height="auto" className="testmonials-peron"/>  
      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </blockquote>
      <cite>-Baya Boga</cite>
      </li>


      <li>
      <img src={PersonImg3} alt="pic" width="400" height="auto" className="testmonials-person"/>  
      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </blockquote>
      <cite>-Spio Sjay</cite>
      </li> 

      </ul>

      </div>
  </section>


  <section className="contact-section">
      <div className="container">
          <div className="contact-left">

            <h2>Contact</h2>

             <form action="">
                <label for="name">Name</label>
                <input type="text" id="name" name="name"/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email"/>


                <label for="message">Mesagge</label>
                <textarea type="message" id="message" col="30" rows="10"></textarea>

                <input type="submit" className="send-message-cta" value="Send Message"/>

             </form>
          </div>

          <div className="contact-right">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39371.526985512035!2d-0.4773523640624955!3d51.92081148496838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1653876752601!5m2!1sen!2suk" 
                 style={{ border: "0" }}
                 allowfullscreen=""
                 loading="lazy"
         
          ></iframe>

        </div>

      </div>
  </section>



  <Outlet />
  </>
  );
}

export default Home;