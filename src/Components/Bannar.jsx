import React from 'react';
import Img from './../Assets/Profile.webp'
export default function Bannar() {


  return (
    <div className="bannar" id='bannar'>
      
      <div className="section1">
      <h4>Hello, I’m</h4>
      <h1>
        Omar Hatem
      </h1>
      <h3>Front-end Developer</h3>
      <a href='#contact' className='hire'>Hire Me</a>


      </div>
    <div className="section2">
 
      <img src={Img} alt="" />

    </div>
    </div>
    
  );
}
