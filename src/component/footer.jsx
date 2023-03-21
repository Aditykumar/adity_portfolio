import React from 'react'

const Footer = () => {
  return (
    <div className="contact" id="contact">
    <div className="title">
      <h1 className="heading-1 heading-1--light heading-1--contact">
        Contact
      </h1>
      <hr/>
    </div>

    <div className="contact-container inverted">
      <p className="contact-container__text inverted">
        <span className="contact-container__text--1">Let&#39;s Connect</span>
        <span className="contact-container__text--2">Digitally</span>
      </p>

      <div className="contact-container__links inverted">
        <a target="blank" href="mailto:adityakushwah29@gmail.com" className="contact-container__links-item">Email</a>
        <a target="blank" href="https://github.com/Aditykumar" className="contact-container__links-item">GitHub</a>
        <a target="blank" href="https://www.linkedin.com/in/adity-kumar-302a22214/" className="contact-container__links-item">LinkedIn</a>
        <a target="blank" href="https://instagram.com/mr.adityakushwah?igshid=MTA2NDdkNWE=" className="contact-container__links-item">Instagram</a>
        <a target="blank" href="tel:+917037449337" className="contact-container__links-item">Mobile</a>
      </div>
    </div>
  </div>
  )
}

export default Footer