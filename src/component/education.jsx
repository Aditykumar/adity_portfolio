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
            Masters in Computer Applications
            </h1>
            <h5 className="content-list__name">
            ISBM University, Chhattisgarh
            </h5>
            <h5 className="content-list__name">Computer Science </h5>
            <div className="content-list__date">2019 - 2022</div>
          </div>
          <div className="content-list">
            <h1 className="content-list__title">
              Bachelor&#39;s Degree in  Science
            </h1>
            <h5 className="content-list__name">
            Chhatrapati Shahu Ji Maharaj University, Kanpur
            </h5>
            <h5 className="content-list__name">Mathematics</h5>
            <div className="content-list__date">2015 - 2018</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
            Uttar Pradesh State Board of High School and Intermediate Education
            </h1>
            <h5 className="content-list__name">
            PCM (Non-Medical) with Informatics Practices
            </h5>
            <div className="content-list__date">2015</div>
          </div>

          <div className="content-list">
            <h1 className="content-list__title">
            Uttar Pradesh State Board of High School and Intermediate Education
            </h1>
            <h5 className="content-list__name">Science</h5>
            <div className="content-list__date">2013</div>
          </div>
        </section>
      </div>
  )
}

export default Education