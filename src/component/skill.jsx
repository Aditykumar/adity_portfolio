import React from "react";

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
          <div className="core-skills-item core-skills-item--imp">
            <h2 className="core-skills-item-title">Web Development</h2>
            <p className="core-skills-item-about">
              I am a Mern Stack Developer and have quite some
              experience in it as well.
            </p>
          </div>

          <div className="core-skills-item light-shadow">
            <h2 className="core-skills-item-title">Time Management</h2>
            <p className="core-skills-item-about">
            I have good time management skills which is a valuable asset in any professional role.
            </p>
          </div>

          <div className="core-skills-item light-shadow">
            <h2 className="core-skills-item-title">Problem Solving</h2>
            <p className="core-skills-item-about">
            I possess problem-solving skills that enhance your capabilities as a developer and empower you to tackle technical and real-life challenges.            </p>
          </div>
        </div>

        <center>
          <div className="heading-3">Tech I&#39;m familiar with</div>
          <hr className="shortHr" />
        </center>

        <div className="skills__list">
          <div>Next.js</div>
          <div>React.js</div>
          <div>SASS</div>
          <div>Javascript</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>MongoDB</div>
          <div>MUI</div>
          <div>Bootstrap</div>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Git</div>
          <div>Vercel</div>
          <div>Netlify</div>
          <div>Heroku</div>
          <div>Jenkins</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
