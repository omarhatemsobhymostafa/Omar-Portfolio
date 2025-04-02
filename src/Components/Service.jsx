import React from 'react'

export default function Service() {
  return (
    <div className='all' id='service'>
      <h2 className="header">Service</h2>
      <div className="container">
        <div className="card">
          <i class="fa-solid fa-laptop-code"></i>
          <h2>Front-end</h2>
          <p>
            A Front-end Developer builds user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.

          </p>
        </div>

        <div className="card">
          <i class="fa-solid fa-video"></i>
          <h2>Content Creation</h2>
          <p>I create programming-related content on Facebook, focusing on HTML tutorials and tips. Now, I want to expand to YouTube</p>
        </div>

        <div className="card">
          <i class="fa-solid fa-pen-nib"></i>
          <h2>Graphic Designer</h2>
          <p>I have experience in Photoshop and Canva, which helps me create high-quality designs and visuals for my content</p>
        </div>
        
      </div>
    </div>
  )
}
