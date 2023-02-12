import Image from 'next/image'
import React from 'react'
import crowdy from '../../public/img/crowdy.png'
const Project = () => {
    return (
        <div class="projects" id="projects">
            <div class="title">
                <h1 class="heading-1 heading-1--light heading-1--m">Projects</h1>
                <div class="underline title__underline">
                    <div class="underline--1"></div>
                    <div class="underline--2"></div>
                </div>
            </div>

            <div class='core-skills core-skills--project' >
                <div class="core-skills-item core-skills-item--col light-shadow">
                    <div class="core-skills-item--image core-skills-item--image--col">
                        <Image class="core-skills-item--image-img" src={crowdy} alt="Image" />
                    </div>
                    <div class="core-skills-item--content">
                        <h2 class="core-skills-item-title">Crowdy dApp</h2>
                        <p class="core-skills-item-about">
                            Crowdy is a platform where you can create your own crowdfunding campaign and raise funds for your project. Powered by blockchain technology that brings transparency and accountability along with security.
                        </p>

                        <div class="project-tags">
                            <div class="tagbutton">
                                <span>React.js</span>
                            </div>
                            <div class="tagbutton">
                                <span>SCSS</span>
                            </div>
                            <div class="tagbutton">
                                <span>Solidity</span>
                            </div>
                            <div class="tagbutton">
                                <span>Web3</span>
                            </div>
                        </div>

                        <div class="project-links">
                            <ul class="menu-content">
                                <li>
                                    <a target="_blank" href="https://github.com/Chaitanya31612/crowdy-dapp" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project