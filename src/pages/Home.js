// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Earth.jpg';
const SliderContainer = () => {  
    return (
      <div className="sliderContainers">
        <img src={Earth} alt="Earth" className='sliderImage' />
      </div>
    );
  };
class Home extends Component {
  render() {
    return (
      <div className='home'>
         <SliderContainer />
        <NavBar />
      </div>
    );
  }
}

export default Home;
