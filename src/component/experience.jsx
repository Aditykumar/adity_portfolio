import React from "react";

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
            <a
              target="blank"
              href="https://www.collegedekho.com/"
              className="content-list__name-link"
            >
              CollegeDekho
            </a>
            - Full-time
          </h5>
          <div className="content-list__about">
            I developed several websites using Next.JS, a powerful framework
            built on top of React that can provide a solid foundation for
            building advanced web applications. Managing both the frontend and
            backend (Express.JS, Mongodb) parts of the codebase gives you better
            control and flexibility over the entire development process.{" "}
          </div>
          <div className="content-list__date">Mar 2022 - Present</div>
        </div>

        <div className="content-list">
          <h1 className="content-list__title">MERN Stack Developer (Mentor)</h1>
          <h5 className="content-list__name">
            <a
              target="blank"
              href="https://www.the10xacademy.com/"
              className="content-list__name-link"
            >
              10x Academy
            </a>
            - Part-time
          </h5>
          <div className="content-list__about">
            At 10x Academy, mentoring students on building and managing a site
            on the MERN stack (MongoDB, Express.js, React, Node.js) , I
            encouraged them to approach the development process in a different
            way.
          </div>
          <div className="content-list__date">Nov 2022 - Feb 2023</div>
        </div>

        <div className="content-list">
          <h1 className="content-list__title">MERN Stack Developer</h1>
          <h5 className="content-list__name">
            <a
              target="blank"
              href="https://www.prepbytes.com/"
              className="content-list__name-link"
            >
              PrepBytes
            </a>
            - Internship
          </h5>
          <div className="content-list__about">
            I have worked as a MERN stack developer and learned how to work
            effectively with a team. Collaborating with a team is an important
            aspect of software development, and it is essential to establish
            effective communication, coordination, and collaboration practices.
          </div>
          <div className="content-list__date">Sep 2021 - Mar 2022</div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
