import React from 'react'

const Experience = () => {
  return (
    <div className="experience inverted" id="experience">
        <div className="title">
          <h1 className="heading-1 heading-1--dark heading-1--m">Experience</h1>
          <div className="underline title__underline">
            <div className="underline--1"></div>
            <div className="underline--2"></div>
          </div>
        </div>
    <section className="content-container">
          <div className="content-list">
            <h1 className="content-list__title">MERN Stack Developer</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.collegedekho.com/" className="content-list__name-link">CollegeDekho</a>
              - Full-time
            </h5>
            <div className="content-list__about">
            In CollegeDekho, I have developed new site based on very advanced framework (Next.js) of React.I managed both frontend and backend part of the codebase.
            </div>
            <div className="content-list__date">Mar 2022 - Present</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">MERN Stack Developer (Mentor)</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.the10xacademy.com/" className="content-list__name-link">10x Academy</a>
              - Part-time
            </h5>
            <div className="content-list__about">

            At 10x Academy, I was mentoring student on how to build and manage a site on MERN.
            </div>
            <div className="content-list__date">Nov 2022 - Feb 2023</div>
          </div>
          
          <div className="content-list">
            <h1 className="content-list__title">MERN Stack Developer</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.prepbytes.com/" className="content-list__name-link">PrepBytes</a>
              - Internship
            </h5>
            <div className="content-list__about">
              I worked as a Full Stack Developer in MERN Stack with PrepBytes. I
              managed both frontend and backend part of the codebase along with
              deployment, testing related work and documentation as well. I had
              also managed the whole team for some time there.
            </div>
            <div className="content-list__date">Sep 2021 - Mar 2022</div>
          </div>

        </section>
        </div>

  )
}

export default Experience