import Image from 'next/image'
import React from 'react'
import imgBanner from '../../public/img/mern-header.webp'
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className='opacityBg'>
           <div className="typewriter">I&#39;m Adity Kumar</div>
           <h2 className="mernText" data-text=" a MERN Stack Developer"> a MERN Stack Developer</h2>

          <Image className="imgBanner" src={imgBanner} width={500}  height={400} alt="banner"  />
        </div>
      </div>
    </>
  )
}

export default Home