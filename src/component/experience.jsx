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
            <h1 className="content-list__title">Full Stack MERN Developer</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.marketinc.net/" className="content-list__name-link">MarketInc</a>
              - Internship
            </h5>
            <div className="content-list__about">
              Worked on their ERP system and implemented 3 major statistical dashboards for admin, sales and purchase.
              Implemented charts using apexcharts and other profile related tables and components along with other assigned work.
              Documented the project about setup and use, frontend and backend files containing folder structure and API guides.
            </div>
            <div className="content-list__date">June 2022 - August 2022</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">Web Development</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.viratpack.com/" className="content-list__name-link">ViratPack</a>
              - Freelancing
            </h5>
            <div className="content-list__about">
              I designed and developed a website for Virat Packaging, a Printing and Packaging company. I created UI design in AdobeXD and received feedback regarding it, then I developed the website using React.js.
            </div>
            <div className="content-list__date">June 2022 - August 2022</div>
          </div>
          
          <div className="content-list">
            <h1 className="content-list__title">Full Stack Web Developer</h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://www.myways.in/" className="content-list__name-link">MyWays</a>
              - Internship
            </h5>
            <div className="content-list__about">
              I worked as a Full Stack Developer in MERN Stack with MyWays. I
              managed both frontend and backend part of the codebase along with
              deployment, testing related work and documentation as well. I had
              also managed the whole team for some time there.
            </div>
            <div className="content-list__date">July 2020 - October 2020</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
              Script Winter of Code, Participant
            </h1>
            <h5 className="content-list__name">
              <a target="blank" href="http://swoc.tech/" className="content-list__name-link">SWOC</a>
              - Open Source Program
            </h5>
            <div className="content-list__about">
              I have contributed to various open source projects under Script
              Winter of Code and it&#39;s an amazing experience and I got to learn
              many things on the way along with contributions.
            </div>
            <div className="content-list__date">December 2020 - February 2021</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
              NJACK Winter of Code, Participant
            </h1>
            <h5 className="content-list__name">
              <a target="blank" href="https://njackwinterofcode.github.io/" className="content-list__name-link">NWOC</a>
              - Open Source Program
            </h5>
            <div className="content-list__about">
              It was really a great experience with NJACK Winter of Code in
              which I participated as a student. I got to know about open source
              and contributed to various amazing projects and learned a lot. It
              was really fun contributing to those projects. I got #13 rank out
              of more than 1.2k participants.
            </div>
            <div className="content-list__date">December 2020 - January 2021</div>
          </div>
        </section>
        </div>

  )
}

export default Experience