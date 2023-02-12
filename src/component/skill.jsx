import React from 'react'

const Skill = () => {
  return (
    <div className="skills inverted" id="skills">
    <div className="title">
      <h1 className="heading-1 heading-1--dark">Skills</h1>
      <div className="underline title__underline">
        <div className="underline--1"></div>
        <div className="underline--2"></div>
      </div>
    </div>

    <div className="skills-container">
      <div className="core-skills">
        <div className="core-skills-item light-shadow">
          <h2 className="core-skills-item-title">Web Design</h2>
          <p className="core-skills-item-about">
            I love designs and it&#39;s the first step before creating any
            website as I can give layout to my imagination.
          </p>
        </div>

        <div className="core-skills-item core-skills-item--imp">
          <h2 className="core-skills-item-title">Web Development</h2>
          <p className="core-skills-item-about">
            I am a Full Stack Web Developer (MERN) and have quite some
            experience in it as well.
          </p>
        </div>

        <div className="core-skills-item light-shadow">
          <h2 className="core-skills-item-title">Problem Solving</h2>
          <p className="core-skills-item-about">
            I love solving problems whether programming problems or real
            life problems.
          </p>
        </div>
      </div>

      <center>
        <div className="heading-3">Tech I&#39;m familiar with</div>
        <hr className="shortHr"/>
      </center>

      <div className="skills__list">
        <div>HTML5</div>
        <div>CSS3</div>
        <div>SASS</div>
        <div>Bootstrap</div>
        <div>Javascript</div>
        <div>jQuery</div>
        <div>React.js</div>
        <div>Redux</div>
        <div>Jest</div>
        <div>Webpack</div>
        <div>Node.js</div>
        <div>Express.js</div>
        <div>MongoDB</div>
        <div>Firebase</div>
        <div>Java</div>
        <div>C</div>
        <div>Python</div>
        <div>Git</div>
        <div>MySQL</div>
        <div>Adobe XD</div>
      </div>
    </div>
  </div>
  )
}

export default Skill