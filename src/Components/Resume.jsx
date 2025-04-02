import React from 'react'

export default function Resume() {
  return (
    <div className="all" id='resume'>
      
      <div className="header">Resume</div>
      <div className="container resume-container">
        <div className="section1">
          <i class="fa-solid fa-briefcase"></i><span style={{fontSize:"2.2rem"}}>Experince</span>
          <div className="ex-card">
            <h2>Graphic Designer (Photoshop) </h2>
            <p  class="date">Jan 2022 - present</p>
            <p  className='cate'>Personal Projects</p>
            <p class="desc">
              Designed logos, social media posts, and UI elements using Adobe Photoshop.

              Created custom icons and assets for web projects and game development.

              Edited and enhanced images to improve quality and visual appeal.

              Developed mockups and prototypes for web designs before implementation.

            </p>

          </div>

          <div className="ex-card">
            <h2>Front-End Developer</h2>
            <p class="date">Mar 2022 - present</p>
            <p className='cate'>Self-Employed</p>
            <p class="desc">
              Developed interactive web interfaces using HTML, CSS, JavaScript, and React.js.

              Built multiple personal projects, including a Chrome extension with advanced developer tools.

              Improved website performance and user experience by optimizing code and using modern frameworks.



            </p>

          </div>

        </div> 
        <div className="section1">
          <i class="fa-solid fa-graduation-cap"></i><span style={{fontSize:"2.2rem"}}>Education</span>
          <div className="ex-card">
            <h2>Primary School Student</h2>
            <p class="date">Sibrbay Primary School, Egypt | 20XX - Present</p>
            <p  class="desc">Studying core subjects including Mathematics, Computer Science, and English.

              Passionate about programming, web development, and graphic design.

              Ranked among the top 10 in "The State Prize for Young Creators" .</p>
          </div>
        </div>
      </div>
    </div>
  )
}
