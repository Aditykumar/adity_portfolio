import Image from 'next/image'
import React from 'react'
import collegedekho from '../../public/img/collegedekho.png'
import getmyuni from '../../public/img/getmyuni.png'
import lms from '../../public/img/lms.png'
import prepbytes from '../../public/img/prepBytes.png'
const Project = () => {
    return (
        <div className="projects" id="projects">
            <div className="title">
                <h1 className="heading-1 heading-1--light heading-1--m">Projects</h1>
                <div className="underline title__underline">
                    <div className="underline--1"></div>
                    <div className="underline--2"></div>
                </div>
            </div>

            <div className="core-skills core-skills--project" >
                <div className="core-skills-item core-skills-item--col light-shadow">
                    <div className="core-skills-item--image core-skills-item--image--col">
                        <Image className="core-skills-item--image-img" src={collegedekho} alt="Image" />
                    </div>
                    <div className="core-skills-item--content">
                        <h2 className="core-skills-item-title">Collegedekho</h2>
                        <p className="core-skills-item-about">
                        CollegeDekho.com is an extensive online platform that provides detailed and comprehensive information on college admissions. It serves as a one-stop destination for students seeking information about exams, courses, fees, cutoff scores, placements, and the latest news related to colleges and universities.
                         </p>

                        <div className="project-tags">
                            <div className="tagbutton">
                                <span>Next.js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Css</span>
                            </div>
                            <div className="tagbutton">
                                <span>Js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Bootstrap</span>
                            </div>
                        </div>

                        {/* <div className="project-links">
                            <ul className="menu-content">
                                <li>
                                    <a target="blank" href="#" className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                
            </div>
            <div className="core-skills core-skills--project" >
                <div className="core-skills-item core-skills-item--col light-shadow">
                    <div className="core-skills-item--image core-skills-item--image--col">
                        <Image className="core-skills-item--image-img" src={getmyuni} alt="Image" />
                    </div>
                    <div className="core-skills-item--content">
                        <h2 className="core-skills-item-title">Getmyuni</h2>
                        <p className="core-skills-item-about">
                        GetMyUni is an all-in-one online platform that caters to the needs of students, schools, and educational institutions. It offers a range of features and services to facilitate student interaction, provide educational guidance, and assist schools with recruitment, marketing, and communication efforts.
                          </p>

                        <div className="project-tags">
                            <div className="tagbutton">
                                <span>Next.js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Css</span>
                            </div>
                            <div className="tagbutton">
                                <span>Js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="core-skills core-skills--project" >
                <div className="core-skills-item core-skills-item--col light-shadow">
                    <div className="core-skills-item--image core-skills-item--image--col">
                        <Image className="core-skills-item--image-img" src={lms} alt="Image" />
                    </div>
                    <div className="core-skills-item--content">
                        <h2 className="core-skills-item-title">Lead Management System </h2>
                        <p className="core-skills-item-about">
                        A lead management CRM system is a software tool designed to help businesses effectively manage their leads and automate their marketing efforts. It provides a centralized platform where employees can track and nurture leads throughout the sales cycle.
                          </p>

                        <div className="project-tags">
                            <div className="tagbutton">
                                <span>React.js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Sass</span>
                            </div>
                            <div className="tagbutton">
                                <span>MUI</span>
                            </div>
                        </div>

                        {/* <div className="project-links">
                            <ul className="menu-content">
                                <li>
                                    <a target="blank" href="#" className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                
            </div>
            <div className="core-skills core-skills--project" >
                <div className="core-skills-item core-skills-item--col light-shadow">
                    <div className="core-skills-item--image core-skills-item--image--col">
                        <Image className="core-skills-item--image-img" src={prepbytes} alt="Image" />
                    </div>
                    <div className="core-skills-item--content">
                        <h2 className="core-skills-item-title">PrepBytes</h2>
                        <p className="core-skills-item-about">
                        PrepBytes is an initiative to help students in their placement preparations targeting Software development/engineering, Analyst and Product based roles in top Companies.
                        </p>
                        <div className="project-tags">
                            <div className="tagbutton">
                                <span>React.js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Next.js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Js</span>
                            </div>
                            <div className="tagbutton">
                                <span>Css</span>
                            </div>
                            <div className="tagbutton">
                                <span>Sass</span>
                            </div>
                            <div className="tagbutton">
                                <span>Node.js</span>
                            </div>
                        </div>

                        {/* <div className="project-links">
                            <ul className="menu-content">
                                <li>
                                    <a target="blank" href="#" className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project