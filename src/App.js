import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import GoPremium from "./pages/GoPremium";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="contact" element={<Contact />} />
        <Route path="go-premium" element={<GoPremium />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>




  </>
  
 
  );
}

export default App;
