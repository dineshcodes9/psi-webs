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
          Text on Image
        </span>
    </div>
  );
};
  const Provide = () => {
    return(
        
        <div className='provide'>
            <h1 className='provide_h'>What we Provide?</h1>
    
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
class Home extends Component {
  render() {
    return (
      <div className='home'>
         <SliderContainer />
        <NavBar />
        <Provide />
        <Featured />
      </div>
    );
  }
}

export default Home;
