import React from 'react'

const Achievements = () => {
    return (
        <div className="experience inverted" id="achievements">
            <div className="title">
                <h1 className="heading-1 heading-1--dark heading-1--m">ACHIEVEMENTS</h1>
                <div className="underline title__underline">
                    <div className="underline--1"></div>
                    <div className="underline--2"></div>
                </div>
            </div>
            <section className="content-container">
                <div className="content-list">
                    <h1 className="content-list__title">LIMITLESS PERFORMER Award</h1>
                    <h5 className="content-list__name">
                        <a target="blank" href="https://www.collegedekho.com/" className="content-list__name-link">CollegeDekho</a>
                        - 2022
                    </h5>
                    <div className="content-list__about">In CollegeDekho, I am doing my work very well and also completing my work with very less time limit. And I also got the Employee Of The Month Award.
                    </div>
                    {/* <div className="content-list__date">June 2022 - August 2022</div> */}
                </div>

            </section>
        </div>

    )
}

export default Achievements