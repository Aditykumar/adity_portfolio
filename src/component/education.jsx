import React from 'react'

const Education = () => {
  return (
    <div className="education" id="education">
        <div className="title">
          <h1 className="heading-1 heading-1--light heading-1--m">Education</h1>
          <div className="underline title__underline">
            <div className="underline--1"></div>
            <div className="underline--2"></div>
          </div>
        </div>

        <section className="content-container">
          <div className="content-list">
            <h1 className="content-list__title">
              Bachelor's Degree in Computer Science &amp; Engineering
            </h1>
            <h5 className="content-list__name">
              Deenbandhu Chhotu Ram University Of Science And Technology
            </h5>
            <h5 className="content-list__name">Hons. - Blockchain</h5>
            <div className="content-list__date">2019 - 2023</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
              High School, Central Board of Secondary Education
            </h1>
            <h5 className="content-list__name">
              Scored 95.6% in PCM (Non-Medical) with Informatics Practices
            </h5>
            <div className="content-list__date">2019</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
              Secondary School, Central Board of Secondary Education
            </h1>
            <h5 className="content-list__name">Scored 10 CGPA</h5>
            <div className="content-list__date">2017</div>
          </div>
        </section>
      </div>
  )
}

export default Education