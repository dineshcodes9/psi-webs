// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import "../Styles/Blog.css"
import coverq from '../images/Blog1/cover.png';
import sunrise from "../images/Blog1/first.png"
import tourist from "../images/Blog1/second.png"
import desert from "../images/Blog1/last.png"


const SliderContainer = () => {
  return (
    <div className="sliderContainers">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={coverq} style={{height:"100vh"}} alt="First slide"/>
                <div className='sliderContent'>
                  <p>
                  From Graduation to Innovation:    
                  </p>
                  <p>
                  Fresher Opportunities Await
                  </p>
                  <button><strong>Apply Now </strong></button>
                </div>
            </div>
        </div>
            
    </div>
  );
};


const LeftContainer = () => {
    return (
<div className="careersSection">
    <div className='rightpart'>
        <img className='img1' src={sunrise}/>
    </div>
    <div className='leftpart'>
        <p className='heading'><span>Opportunities  </span> </p>
        <p className='heading' style={{marginTop:"-4%"}}>Across <span>Disciplines </span> </p><br/>
        <p className='subheading'>We offer opportunities for fresh graduates from various disciplines, including engineering, computer science, mathematics, physics, graphic design, marketing, and more. Whether you're passionate about technology, creativity, or problem-solving, there may be a role for you at Dr. Pallem Setti Innovations.</p>

    </div>
   </div>

    );
  };
  
  const RightContainer = () => {
    return (
        <div className="secondPart">
          <div className='leftpart2'>
          <p className='heading'>Career Path and <span></span></p>
          <p className='heading' style={{marginTop:"-4%"}}><span> Growth </span>Opportunities</p><br/>
            <p className='subheading'>We believe in nurturing talent and providing opportunities for career advancement within the organization. As a fresher at Dr. Pallem Setti Innovations, you'll have the chance to work on challenging projects, gain valuable experience, and grow professionally as you take on new responsibilities and roles.</p>
            {/* <button>Join us --></button> */}
          </div>
          <div className='rightpart'>
            <img className='img1' src={tourist}/>
          </div>
        </div>
    );
  };

  const CenterContainer = () => {
    return (
      <div className="sliderContainers1">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img className="d-block w-100" src={desert} style={{height:"105vh"}} alt="First slide"/>
                  <div className='sliderContent1'>
                    <p className='heading2'>How to
                     <span> Apply:</span>
                    </p>
                    <p className='subheading rightpart2'>
                    Interested candidates can apply for fresher positions through our website or by contacting our HR department for more information. We typically post job openings on our careers page and actively recruit from universities and colleges.
                    </p>
                   
                  </div>
                  <button className='buttonlast'>Contact Us ---</button>
              </div>
          </div>
              
      </div>
    );
  };

//   const LeftContainer2 = () => {
//     return (
// <div className="careersSection">
//     <div className='rightpart'>
//         <img className='img1' src={casualmeet}/>
//     </div>
//     <div className='leftpart'>
//       <br/>
//     <p className='heading'><span>Networking </span>And </p>
//     {/* <p className='heading'><span>Collaboration: </span> </p> */}
//         <p className='heading' style={{marginTop:"-4%"}}><span>Collaboration: </span> </p><br/>
//         <p className='subheading'>Interns have the chance to network and collaborate with professionals from various departments, building valuable connections and expanding their professional network. Our collaborative work environment encourages teamwork, creativity, and innovation.</p>

//     </div>
//    </div>

//     );
//   };
  
//   const RightContainer2 = () => {
//     return (
//         <div className="secondPart" style={{marginTop:"-60vh"}}>
//           <div className='leftpart2'>
//           <p className='heading'><span>Mentorship</span> And</p>
//           <p className='heading' style={{marginTop:"-4%"}}><span> Support </span></p><br/>
//             <p className='subheading'>We provide mentorship and support to help interns maximize their learning and development during their internship. Our experienced team members are committed to providing guidance, feedback, and opportunities for growth throughout the internship period.</p>
//             {/* <button>Join us --></button> */}
//           </div>
//           <div className='rightpart'>
//             <img className='img1' src={Person2}/>
//           </div>
//         </div>
//     );
//   };

//   const CenterContainer1 = () => {
//     return (
//       <div className="sliderContainers1" style={{position:"relative", top:"145vh"}}>
//           <div className="carousel-inner">
//               <div className="carousel-item active" style={{marginBottom:"-90vh"}}>
//                   <img className="d-block w-100" src={last} style={{height:"105vh"}} alt="First slide"/>
//                   <div className='sliderContent1' style={{marginLeft:"-40vw"}}>
//                     <p className='heading2'>
//                      <span> Duration</span> And
//                     </p>
//                     <p className='heading2' style={{marginTop:"-2.5%"}}>
//                      <span> Application Process</span>
//                     </p>
//                     <p className='subheading rightpart2'>
//                     Interns at Dr. Pallem Setti Innovations have the opportunity to gain valuable hands-on experience working on real-world projects alongside experienced professionals. From conducting research and analysis to contributing to innovative solutions, interns play an integral role in our team.
//                     </p>
//                     {/* <button><strong>Apply Now ---></strong></button> */}
//                     <div className='card'>
//                       <form>
//                         <label for="fname">First name:</label><br/>
//                         <input type="text" id="fname" name="fname"/><br/>
//                         <label for="lname">Last name:</label><br/>
//                         <input type="text" id="lname" name="lname"/>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//           </div>             
//       </div>
//     );
//   };

class Blog extends Component {
  render() {
    return (
      <div >
        <SliderContainer />
        <NavBar />
        <LeftContainer />
        <RightContainer />
        <CenterContainer />
        {/* <RightContainer2 />
        <LeftContainer2 />
        <CenterContainer1 /> */}

      </div>
    );
  }
}

export default Blog;
