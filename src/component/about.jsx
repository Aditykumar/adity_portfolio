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
          My name is Adity Kumar, I am a Full Stack Web Developer and Web Designer. An Open
          Source enthusiast and a Computer Science student from India.
          <br/><br/>
          I love working on new and exciting technologies emerging nowadays. I
          have good work experience as a MERN Stack Developer in startup(s) and UI/UX Designer
          where I was core member of the development team and done quite some
          contribution to open source as well.
        </p>

        <div className="about__buttons">
          <a href="#skills" className="btn-primary about__buttons-item">
            Skills
          </a>
          <a target="_blank" href="/resume.pdf" className="btn-primary about__buttons-item">
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