import Image from 'next/image'
import React from 'react'
import myPic from '../../public/img/myPic.jpg'
const About = () => {
  return (
    <div className="about" id="about">
    <div className="title">
      <h1 className="heading-1 heading-1--light">About</h1>
      <div className="underline title__underline">
        <div className="underline--1"></div>
        <div className="underline--2"></div>
      </div>
    </div>

    <div className="about__container">
      <div className="about__content">
        <p className="about__text">
          My name is Adity Kumar, 
I have experience as a MERN stack developer! With my experience, I have a solid understanding of MongoDB, Express.js, React, and Node.js technologies and how they work together to build web applications. Your expertise in the MERN stack positions you well to develop robust and scalable full-stack applications.
          <br/><br/>
          I love working on new and exciting emerging technologies these days. I have good work experience as MERN stack developer.

        </p>

        <div className="about__buttons">
          <a href="#skills" className="btn-primary about__buttons-item">
            Skills
          </a>
          <a target="_blank" href="/assets/adity-mern-stack-developer.pdf" className="btn-primary about__buttons-item">
            Resume
          </a>
        </div>
      </div>
      <Image  src={myPic} alt="my image" className="about__image" />
    
    </div>

  </div>
  )
}

export default About