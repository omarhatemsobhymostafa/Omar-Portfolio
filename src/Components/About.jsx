import React from 'react'
import Img from './../Assets/About.webp'
import cv from './../Assets/About.webp'
export default function About() {
  return (

    <div className='all-about all' id='about'>
      <h2 className='header'>About Me

      </h2>


      <div className='about-container container'>



        <div className="about-img ">
          <img src={Img} alt="" />
        </div>
        <div className="about">
          <h2>Hi There! I'm Omar Hatem</h2>
          <h3>Front-end Developer</h3>
          <p>

            I'm Omar Hatem, a passionate Front-End Developer diving deep into the MERN Stack. My coding journey started with Code.org and Scratch, then I transitioned into building interactive web applications using HTML, CSS, JavaScript, and React.js.

            I love solving coding challenges and developing tools that make life easier for developers. Some of my recent projects include an advanced Chrome extension and a Shooter game built with Godot. Right now, I’m working on expanding my skills in Node.js, Express.js, and MongoDB to become a Full-Stack Developer.



          </p>
          <ul> <li>Birthday: May 22, 2013</li>
            <li>Phone: +20 010 989 64678</li>
            <li>Email: omar.hatem.okasha@gmail.com</li>
            <li>From: Kafr Esam , Tanta , Gharbia , Egypt</li>
            <li>Language: Arabic , English</li>
            <li>Freelance: Available</li></ul>
          <a href={cv} className='hire' download>Download CV</a>

        </div>

      </div>

    </div>


  )
}
