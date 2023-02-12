import Image from 'next/image'
import React from 'react'
import imgBanner from '../../public/img/mern-header.webp'
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className='opacityBg'>
          {/* <div className="home__top m-b-m">
            <h1 className="heading-1 heading-1--light">Welcome</h1>
          </div> */}
           <div className="typewriter">I'm Adity Kumar</div>

           <h2 className='mernText' data-text=" a MERN Developer"> a MERN Developer</h2>

            {/* <p>I</p>
            <p>am</p>
            <p>Adity Kumar</p> */}
            {/* <div className="underline title__underline">
          <div className="underline--1"></div>
          <div className="underline--2"></div>
        </div> */}
            {/* <h4>A MERN STACK DEVELOPER</h4> */}
          <Image className='imgBanner' src={imgBanner} width={500}  height={400} alt="banner"  />
        </div>
      </div>
    </>
  )
}

export default Home