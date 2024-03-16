// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Earth.jpg';
import Mobile from '../images/Mobile1.png';
import Career from '../images/career.png';
import Contacting from '../images/contacting.png';
const SliderContainer = () => {
  return (
    <div className="sliderContainers">
        <img
          src={Earth}
          alt="Earth"
          className="sliderImage" />
        <span className='content'>
        Building an Innovative Future
     
        <p> We're all about the latest in research and development, focusing on new ideas and helping the next generation of leaders. Our passion lies in advancing science and technology while supporting students in their studies and careers.</p>
        <button className='contentbutton'>
          Discover PSI
        <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div>
        </button>
        </span>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contactSection">
      <div className="contactCard">
        <div className="contactCardContent">
          <h3 className="contactTitle">Guarding the Gateway to Your Digital World.</h3>
          <p className="contactDescription">Competitive coding refers to the practice of solving algorithmic and coding problems within a specified time limit, often in a competitive environment such as coding contests or online platforms. The primary goal is to write efficient and correct code to solve a given problem statement.</p>
          <button className='contactbutton'> Contact PSI
  <div class="arrow-wrapper">
      <div class="arrow"></div>
      </div>
      </button>
        </div>
        <img className="contactImage" src={Contacting} alt="contact Image" />
      </div>
    </div>
  );

};

  const Provide = () => {
    return(
        
        <div className='provide'>
            <h1 className='provide_h'>Services</h1>
    
        </div>
      

    );

  };
  const Featured = () => {
    return (
      <div className="eventsSection">
        <div className="eventCard">
          <div className="eventCardContent">
            <p className='eventtype'>#spotlight</p>
            <h3 className="eventTitle">Competitive Coding </h3>
            <p className="eventDescription">Competitive coding refers to the practice of solving algorithmic and coding problems within a specified time limit, often in a competitive environment such as coding contests or online platforms. The primary goal is to write efficient and correct code to solve a given problem statement.</p>
            <button className='eventbutton'>Read More
    <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div>
        </button>
          </div>
          <img className="eventImage" src={Mobile} alt="Event Image" />
        </div>
      </div>
    );
  
  };
  const Careers = () => {
   return(

    <div className="careersSection">
        <h2 className="careersHeading">Careers</h2>
        <div className="imageContainer">
          <img src={Career} alt="Earth" className="careerImage" />
        </div>
        <div className="descriptionBox">
          <h2>Careers</h2>
          <p>
          One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information. One of the most widely known and implemented standards is the Payment Card Industry Data Security Standard (PCI DSS), which focuses on securing credit card information. 
          </p>
          <button className='cbutton'>Careers
          <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div></button>
          
        </div>
    </div>
  );
};
const Discover = () => {


}
class Home extends Component {
  render() {
    return (
      <div className='home'>
         <SliderContainer />
        <NavBar />
        <Contact />
        <Provide />
        <Featured />
        <Careers />
      </div>
    );
  }
}

export default Home;
