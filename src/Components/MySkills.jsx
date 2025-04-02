import React from 'react'

export default function MySkills() {
  return (
    <div>
      <div className="all" id='my-skills'>
        <h2 className="header">My Skills</h2>
        <div className="container sills-words">
          <div className="section1">
            <h2>All the skills that I have in that field of work are mentioned</h2>
            <p>Omar Hatem is a skilled front-end developer in HTML, CSS, JavaScript, and React.js, and he is starting to dive into back-end development using Node.js and Express.js. He has experience in game development with Godot and is currently learning the MERN Stack, along with developing an advanced Chrome extension</p>
          </div>


          <div className="skills">
            <div className="skill">
              <div className="info">
                <h3>HTML</h3> <span>98%</span>
              </div>
              <div className="full-mark"><div className="HTML mark"></div></div>
            </div>
            <div className="skill">
            <div className="info">
                <h3>CSS</h3> <span>97%</span>
              </div>

              <div className="full-mark"><div className="CSS mark"></div></div>
            </div>

            <div className="skill">
            <div className="info">
                <h3>Javascript</h3> <span>94%</span>
              </div>

              <div className="full-mark"><div className="Javascript mark"></div></div>
            </div>
            <div className="skill">
            <div className="info">
                <h3>ReactJs</h3> <span>92%</span>
              </div>

              <div className="full-mark"><div className="Reactjs mark"></div></div>
            </div>

            <div className="skill">
            <div className="info">
                <h3>Photoshop</h3> <span>85%</span>
              </div>

              <div className="full-mark"><div className="photoshop mark"></div></div>
            </div>


            <div className="skill">
            <div className="info">
                <h3>Content Creation</h3> <span>85%</span>
              </div>

              <div className="full-mark"><div className="Content-creation mark"></div></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
