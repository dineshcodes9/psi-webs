// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Earth.jpg';
import Mobile from '../images/Mobile1.png';
const SliderContainer = () => {  
    return (
      <div className="sliderContainers">
        <img src={Earth} alt="Earth" className='sliderImage' />
      </div>
    );
  };
  const Provide = () => {
    return(
        <div className='provide_sec'>
        <div className='provide'>
            <h1 className='provide_h'>Services</h1>
    
        </div>
        </div>

    );

  };
  const Featured = () => {
    return (
      <div className="eventsSection">
        <div className="eventCard">
          <div className="eventCardContent">
            <h3 className="eventTitle">Mobile App Development By Flutter </h3>
            <p className="eventDescription">Event description goes here.</p>
            <button>Read More  </button>
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
