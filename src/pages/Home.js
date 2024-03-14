// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Earth.jpg';
import Mobile from '../images/Mobile1.png';
const SliderContainer = () => {
  return (
    <div className="sliderContainers">
        <img
          src={Earth}
          alt="Earth"
          className="sliderImage" />
        <span className='content'>
        Building an Innovative Future
        </span>
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
            <h3 className="eventTitle">Mobile App Development By Flutter </h3>
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
          <img src={Earth} alt="Earth" className="careerImage" />
        </div>
        <div className="descriptionBox">
          <h2>Careers</h2>
          <p>
            Here you can describe your career opportunities or any other related information.
          </p>
          <button>Read More</button>
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
        <Provide />
        <Featured />
        <Careers />
      </div>
    );
  }
}

export default Home;
