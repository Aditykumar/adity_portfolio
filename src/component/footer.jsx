import React from 'react'

const Footer = () => {
  return (
    <div class="contact" id="contact">
    <div class="title">
      <h1 class="heading-1 heading-1--light heading-1--contact">
        Contact
      </h1>
      <hr/>
    </div>

    <div class="contact-container inverted">
      <p class="contact-container__text inverted">
        <span class="contact-container__text--1">Let&#39;s Connect</span>
        <span class="contact-container__text--2">Digitally</span>
      </p>

      <div class="contact-container__links inverted">
        <a target="blank" href="mailto:justcode31@gmail.com" class="contact-container__links-item">Email</a>
        <a target="blank" href="https://github.com/Chaitanya31612" class="contact-container__links-item">GitHub</a>
        <a target="blank" href="https://www.linkedin.com/in/guptachaitanya/" class="contact-container__links-item">LinkedIn</a>
        <a target="blank" href="https://medium.com/@guptachaitanya31" class="contact-container__links-item">Medium</a>
        <a target="blank" href="https://twitter.com/Chaitan33456747" class="contact-container__links-item">Twitter</a>
      </div>
    </div>
  </div>
  )
}

export default Footer